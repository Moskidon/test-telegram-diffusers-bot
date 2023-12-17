const images = [
    {
        src: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/dd4f0141-15d8-4a59-bcc5-69b3be74a769/width=450/00035-3141723614.jpeg',
        url: 'https://civitai.com/images/4436602',
        title: 'SD XL TURBO',
        description: "SDXL Turbo is an adversarial time-distilled Stable Diffusion XL (SDXL) model capable of running inference in as little as 1 step",
        configurableParams: {
            images_count: {value: 4, step: 4, min: 4, max: 16},
            steps: {value: 1, step: 1, min: 1, max: 50},
        },
        samples: ["https://image.civitai.tech/xG1nkqKTMzGDvpLrqFT7WA/d3f4288b-9442-42a6-abf6-d97f8ebe013e/width=450/00588-2023-11-28-2676931633.jpeg",
            "https://image.civitai.tech/xG1nkqKTMzGDvpLrqFT7WA/ee8a2876-3be4-4571-8af8-1464869d43bb/width=450/00931-2023-11-28-4073367246.jpeg",
            "https://image.civitai.tech/xG1nkqKTMzGDvpLrqFT7WA/486083dd-1cf4-44fb-a210-68f6fb393a21/width=450/00565-2023-11-28-323378653.jpeg",
            "https://image.civitai.tech/xG1nkqKTMzGDvpLrqFT7WA/b37e7577-c620-4ac4-a3b7-b30d8eaff933/width=450/00316-2023-11-28-377579987.jpeg",
            "https://image.civitai.tech/xG1nkqKTMzGDvpLrqFT7WA/95f6733a-890a-42b1-8caf-827d743f637f/width=450/00725-2023-11-28-649799505.jpeg",
        ]
    },
    {
        src: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/873a6ebc-f780-459d-a8ab-179d3711d110/width=450/D19E95BF394FBD9D9461B14B5A98DF1CD8D1820044106C4E9FC34EBDDA11A74E.jpeg',
        url: 'https://civitai.com/images/4439807',
        title: 'SD 1.5',
        description: "The Stable-Diffusion-v1-5 checkpoint was initialized with the weights of the Stable-Diffusion-v1-2 checkpoint and subsequently fine-tuned on 595k steps at resolution 512x512 on \"laion-aesthetics v2 5+\" and 10% dropping of the text-conditioning to improve classifier-free guidance sampling",
        configurableParams: {
            images_count: {value: 4, step: 4, min: 4, max: 16},
            steps: {value: 25, step: 1, min: 1, max: 50},
            guidance_scale: {value: 7.5, step: 0.5, min: 0, max: 20}
        },
        samples: ["https://image.civitai.tech/xG1nkqKTMzGDvpLrqFT7WA/43da183b-381f-411f-9835-af58e7fe8a4e/width=450/B8C310F960B1ACFE59D056414011F7986747393D531E3E1DA0745F325E71FEB1.jpeg",
            "https://image.civitai.tech/xG1nkqKTMzGDvpLrqFT7WA/9073b7c9-5d80-4dbc-b97f-d254e48ca725/width=450/79043ACF6FD18607BC6B6AFD48D2FA178FB0D86C7B150DB7893ECA82406090C9.jpeg",
        ]
    }
];
