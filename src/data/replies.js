const BASE = import.meta.env.BASE_URL;

const replies = {
  friends: {
    step: 1,
    title: "صحابي مش طالعين",

    meme1: `${BASE}memes/friends/meme1.png`,

    reply: "هو ده الهدف من المؤتمر أصلاً 😂 تعالى اعمل صحاب جداد.",

    meme2: `${BASE}memes/friends/meme2.png`,

    next: "/tired",
  },

  tired: {
    step: 2,
    title: "بفرهد بسرعة",

    meme1: `${BASE}memes/tired/meme1.png`,

    reply: "عندنا سناكس تخليك طاقة 24 ساعة 🔥",

    meme2: `${BASE}memes/tired/meme2.png`,

    next: "/boring",
  },

  boring: {
    step: 3,
    title: "المؤتمر ممل",

    meme1: `${BASE}memes/boring/meme1.png`,

    reply: "فيه مسابقات وفقـرات كتير...\nولو مليت ابقى خد فلوسك 😂",

    meme2: `${BASE}memes/boring/meme2.png`,

    next: "/busy",
  },

  busy: {
    step: 4,
    title: "عندي حاجات في نفس الوقت",

    meme1: `${BASE}memes/busy/meme1.png`,

    reply: "الغيها 😎\nالمؤتمر مش بيتعوض.",

    meme2: `${BASE}memes/busy/meme2.png`,

    next: "/sleep",
  },

  sleep: {
    step: 5,
    title: "مش بحب أصحى بدري",

    meme1: `${BASE}memes/sleep/meme1.png`,

    reply: "عندنا طرق تخليك تصحى...\nولو منفعش مش هنخليك تنام أصلاً 😂",

    meme2: `${BASE}memes/sleep/meme2.png`,

    next: "/finish",
  },
};

export default replies;