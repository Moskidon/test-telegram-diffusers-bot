const images = [
    {
        title: 'SD XL TURBO',
        description: "SDXL Turbo is an adversarial time-distilled Stable Diffusion XL (SDXL) model capable of running inference in as little as 1 step",
        configurableParams: {
            "Images Count": {value: 8, step: 4, min: 4, max: 32},
            "Inference Steps": {value: 1, step: 1, min: 1, max: 8},
        },
        samples: ["https://image.civitai.tech/xG1nkqKTMzGDvpLrqFT7WA/d3f4288b-9442-42a6-abf6-d97f8ebe013e/width=450/00588-2023-11-28-2676931633.jpeg",
            "https://image.civitai.tech/xG1nkqKTMzGDvpLrqFT7WA/ee8a2876-3be4-4571-8af8-1464869d43bb/width=450/00931-2023-11-28-4073367246.jpeg",
            "https://image.civitai.tech/xG1nkqKTMzGDvpLrqFT7WA/486083dd-1cf4-44fb-a210-68f6fb393a21/width=450/00565-2023-11-28-323378653.jpeg",
            "https://image.civitai.tech/xG1nkqKTMzGDvpLrqFT7WA/b37e7577-c620-4ac4-a3b7-b30d8eaff933/width=450/00316-2023-11-28-377579987.jpeg",
            "https://image.civitai.tech/xG1nkqKTMzGDvpLrqFT7WA/95f6733a-890a-42b1-8caf-827d743f637f/width=450/00725-2023-11-28-649799505.jpeg",
        ]
    },
    {
        title: 'SD 1.5',
        description: "The Stable-Diffusion-v1-5 checkpoint was initialized with the weights of the Stable-Diffusion-v1-2 checkpoint and subsequently fine-tuned on 595k steps at resolution 512x512 on \"laion-aesthetics v2 5+\" and 10% dropping of the text-conditioning to improve classifier-free guidance sampling",
        configurableParams: {
            "Images Count": {value: 4, step: 4, min: 4, max: 16},
            "Inference Steps": {value: 25, step: 1, min: 1, max: 50},
            "Guidance Scale": {value: 7.5, step: 0.5, min: 0, max: 20}
        },
        samples: [
            "https://image.stablediffusionapi.com/?quality=45&Image=https://cdn2.stablediffusionapi.com/generations/bf32734b-d693-489d-a426-9414606c14e5-0.png",
            "https://image.civitai.tech/xG1nkqKTMzGDvpLrqFT7WA/43da183b-381f-411f-9835-af58e7fe8a4e/width=450/B8C310F960B1ACFE59D056414011F7986747393D531E3E1DA0745F325E71FEB1.jpeg",
            "https://image.civitai.tech/xG1nkqKTMzGDvpLrqFT7WA/9073b7c9-5d80-4dbc-b97f-d254e48ca725/width=450/79043ACF6FD18607BC6B6AFD48D2FA178FB0D86C7B150DB7893ECA82406090C9.jpeg",
        ]
    },
    {
        title: 'Juggernaut XL',
        description: "",
        configurableParams: {
            "Images Count": {value: 4, step: 4, min: 4, max: 16},
            "Inference Steps": {value: 25, step: 1, min: 1, max: 50},
            "Guidance Scale": {value: 7.5, step: 0.5, min: 0, max: 20}
        },
        samples: ["https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/6235f47d-e3f2-4c55-9448-1fee162894fe/width=450/00131-cinematic%20photo%20photograph,%20Kodak%20portra%20800,%2025%20y.o%20afro%20american%20man,%20.%2035mm%20photograph,%20film,%20bokeh,%20professional,%204k,%20highly.jpeg",
            "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/8db1507b-1bc4-4bd1-83a8-7d00b6ee931d/width=450/00182-abstract%20beauty,%20centered,%20looking%20at%20the%20camera,%20approaching%20perfection,%20dynamic,%20moonlight,%20highly%20detailed,%20digital%20painting,.jpeg",
            "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/15d52d5d-8887-4dd5-b8c3-8ade5c657d7d/width=450/00001-beautiful%20lady,%20(freckles),%20big%20smile,%20blue%20eyes,%20buzzcut%20hair,%20dark%20makeup,%20hyperdetailed%20photography,%20soft%20light,%20head%20and%20sho.jpeg",
            "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/29634cfe-a886-4a34-a2ec-ba27f5eb9fe9/width=450/00384-Bosch-style,%20a%20translucent%20cube%20traps%20eerie%20clouds,%20the%20starsscape%20warps,%20time%20distorts,%20surrealism%20reigns,%20stars,%20Glowing,%20spar.jpeg",
            "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/e570222d-4641-4047-9e5f-18f551753b37/width=450/00260-a%20set%20of%20magical%20potions%20with%20magical%20properties%20that%20can%20be%20used%20to%20heal%20someone.jpeg"
        ]
    },
    {
        title: 'RealCartoon3D',
        description: "",
        configurableParams: {
            "Images Count": {value: 4, step: 4, min: 4, max: 16},
            "Inference Steps": {value: 25, step: 1, min: 1, max: 50},
            "Guidance Scale": {value: 7.5, step: 0.5, min: 0, max: 20}
        },
        samples: ["https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/3f09d6c5-13a6-46fa-9e9f-93c89650ce76/width=450/00008-530175313.jpeg",
            "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/572e8627-92f6-49d8-848e-34f6d6eb585c/width=450/00009-2183776599.jpeg",
            "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/d7bd505e-0efa-4204-bfe6-f84730f0ab28/width=450/00010-1621411500.jpeg",
            "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/ee16eb4d-dac3-4150-9b62-a8a638b2b516/width=450/00009-557762194.jpeg",
        ]
    },
    {
        title: 'DreamShaper XL',
        description: "",
        configurableParams: {
            "Images Count": {value: 4, step: 4, min: 4, max: 16},
            "Inference Steps": {value: 25, step: 1, min: 1, max: 50},
            "Guidance Scale": {value: 7.5, step: 0.5, min: 0, max: 20}
        },
        samples: ["https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/c4dbf85a-c96a-47f3-b98f-9bae25f750d9/width=450/31073260-554464390-In%20Casey%20Baugh's%20evocative%20style,%20art%20of%20a%20beautiful%20young%20girl%20cyborg%20with%20long%20brown%20hair,%20futuristic,%20scifi,%20intricate,%20elega.jpeg",
            "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/51968cbc-6c36-44d9-ac6d-6300521d19f7/width=450/31073278-2039823409429-photo%20of%20the%20warrior%20Aragorn%20from%20Lord%20of%20the%20Rings,%20film%20grain,%208k%20hd.jpeg",
            "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/3867f341-5614-4120-8b19-fbee12b3e7ae/width=450/31075409-2084045068-anime%20girl,%20night,%20blue%20light%20behind%20her,%20%20((Galaxy,%20Lens%20flare)),%20short%20hair,%20flower%20field,%20night%20sky,%20cinematic%20shot.%20Wallpape.jpeg",
            "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/827f39dc-cee8-49a5-8967-2c5ce91c9cba/width=450/31073308-2065889259-Photography,%20full%20body%20of%20real%20life%20pikachu%20portrait,%20symmetrical,%20highly%20detailed,%20smooth,%20sharp%20focus,%20cinematic%20lighting,%20kkw.jpeg",
            "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/d965efdb-30c7-4c01-9fe1-f2de0712fd9d/width=450/31073305-2065889259-macro%20camera,%20illustration%20of%20a%20little%20magical%20cute%20forest%20creature.%20The%20creature%20IS%20holding%20a%20spear.%20fantasy%20art,%20intricate%20det.jpeg"
        ]
    },
    {
        title: 'ZavyChromaXL',
        description: "",
        configurableParams: {
            "Images Count": {value: 4, step: 4, min: 4, max: 16},
            "Inference Steps": {value: 25, step: 1, min: 1, max: 50},
            "Guidance Scale": {value: 7.5, step: 0.5, min: 0, max: 20}
        },
        samples: ["https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/c4c30afb-8d9d-4aa5-a8ba-7f7670e059b2/width=450/ChromaXL_00037.jpeg",
            "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/9dd1ece0-3325-470f-b004-5f611b2b3d3c/width=450/ChromaXL_00076.jpeg",
            "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/8c8f23b8-59a8-4cbb-88b9-6cbecde062b8/width=450/ChromaXL_00054.jpeg",
            "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/72a12032-770e-46ee-ac7b-d408b3c90920/width=450/ChromaXL_00082.jpeg",
            "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/e87f3cae-a882-4891-8b2d-3f642d9e9213/width=450/ChromaXL_00014.jpeg",
        ]
    },
    {
        title: 'TurboVisionXL',
        description: "Super Fast XL based on new SDXL Turbo - 3 - 5 step quality output at high resolutions!",
        configurableParams: {
            "Images Count": {value: 8, step: 4, min: 4, max: 32},
            "Inference Steps": {value: 1, step: 1, min: 1, max: 8},
        },
        samples: ["https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/98c47ca0-b2fc-4861-ae82-b8c63e777b29/width=450/01404-2023-12-08-1291191819.jpeg",
            "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/67f61de0-ac22-4285-8486-3940848b8645/width=450/00463-2023-12-08-182778452.jpeg",
            "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/40d2c72d-b6bf-4d49-baf3-e2872e1ba8ab/width=450/00313-2023-12-08-3957678817.jpeg",
            "https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/ee455afe-14ee-48c3-a4b8-f88caceaea0f/width=450/00295-2023-12-08-2403540858.jpeg",
        ]
    }
];

samplers = [
    "DPM++ 2M Karras",
    "DPM++ 2M SDE",
    "Euler a",
    "Euler",
    "Heun",
    "LMS",
    "DPM2 Karras",
    "DPM2 a Karras",
];