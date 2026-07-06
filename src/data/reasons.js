const BASE = import.meta.env.BASE_URL;

const reasons = [
  {
    id: 1,
    title: "صحابي مش طالعين",
    image: `${BASE}memes/friends.png`,
    path: "/friends",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 2,
    title: "بفرهد بسرعة",
    image: `${BASE}memes/tired.png`,
    path: "/tired",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 3,
    title: "المؤتمر ممل",
    image: `${BASE}memes/boring.png`,
    path: "/boring",
    color: "from-pink-500 to-red-500",
  },
  {
    id: 4,
    title: "عندي حاجات",
    image: `${BASE}memes/busy.png`,
    path: "/busy",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 5,
    title: "مش بحب أصحى بدري",
    image: `${BASE}memes/sleep.png`,
    path: "/sleep",
    color: "from-green-500 to-emerald-500",
  },
];

export default reasons;