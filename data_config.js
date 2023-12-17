const images = [
    {
        src: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/dd4f0141-15d8-4a59-bcc5-69b3be74a769/width=450/00035-3141723614.jpeg',
        url: 'https://civitai.com/images/4436602',
        title: 'SD XL TURBO',
        configurableParams: {
            images_count: { value: 4, step: 4, min: 4, max: 16 },
            steps: { value: 1, step: 1, min: 1, max: 50 },
        },
    },
    {
        src: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/873a6ebc-f780-459d-a8ab-179d3711d110/width=450/D19E95BF394FBD9D9461B14B5A98DF1CD8D1820044106C4E9FC34EBDDA11A74E.jpeg',
        url: 'https://civitai.com/images/4439807',
        title: 'SD 1.5',
        configurableParams: {
            images_count: { value: 4, step: 4, min: 4, max: 16 },
            steps: { value: 25, step: 1, min: 1, max: 50 },
            guidance_scale: { value: 7.5, step: 0.5, min: 0, max: 20 }
        },
    }
];
