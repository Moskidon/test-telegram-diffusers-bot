import json
import logging
import os
from dotenv import load_dotenv

from telegram import KeyboardButton, ReplyKeyboardMarkup, ReplyKeyboardRemove, Update, WebAppInfo
from telegram.ext import Application, CommandHandler, ContextTypes, MessageHandler, filters
logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s", level=logging.INFO
)
logging.getLogger("httpx").setLevel(logging.WARNING)

logger = logging.getLogger(__name__)

load_dotenv()

TELEGRAM_BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")


async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await update.message.reply_text(
        "Please press the button below to browse available models",
        reply_markup=ReplyKeyboardMarkup.from_button(
            KeyboardButton(
                text="Browse models!",
                web_app=WebAppInfo(url="https://moskidon.github.io/test-telegram-diffusers-bot/"),
            )
        ),
    )


async def web_app_data(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    data = update.effective_message.web_app_data.data
    context.user_data['generation_data'] = data
    await update.message.reply_text(
        f"You have selected the following generation parameters: {data}\nPlease send a prompt now",
        reply_markup=ReplyKeyboardRemove(),
    )


async def handle_text_message(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    user_data = context.user_data
    generation_data = user_data.get('generation_data')

    if generation_data:
        try:
            generation_data_dict = json.loads(generation_data)
        except json.JSONDecodeError:
            await update.message.reply_text("Error in parsing generation data.")
            return

        response_message = f"You have sent a request \n/text2image {update.message.text} "
        response_message += " ".join(f"-{key} {value}" for key, value in generation_data_dict.items())

        await update.message.reply_text(response_message,
                                        reply_markup=ReplyKeyboardMarkup.from_button(
                                            KeyboardButton(
                                                text="Browse models!",
                                                web_app=WebAppInfo(
                                                    url="https://moskidon.github.io/test-telegram-diffusers-bot/"),
                                            )
                                        ), )

    else:
        await update.message.reply_text("You have not selected any model yet.")


def main() -> None:
    application = Application.builder().token(TELEGRAM_BOT_TOKEN).build()

    application.add_handler(CommandHandler("start", start))
    application.add_handler(MessageHandler(filters.StatusUpdate.WEB_APP_DATA, web_app_data))

    application.add_handler(MessageHandler(filters.TEXT, handle_text_message))

    application.run_polling(allowed_updates=Update.ALL_TYPES)


if __name__ == "__main__":
    main()
