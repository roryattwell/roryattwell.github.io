export const EMAIL = "roryattwell@gmail.com";
export const SHOWREEL_MAILTO =
    "mailto:roryattwell@gmail.com?subject=Showreel%20Request";
export const INSTAGRAM = "https://instagram.com/roryattwell";
export const INSTAGRAM_HANDLE = "@roryattwell";
export const IMDB = "https://www.imdb.com/name/nm9887619/";

const creditImg = (name) => `/images/${name}.jpg`;

export const IMAGES = {
    hero: creditImg("hero"),
    about: creditImg("so-young"),
};

export const FILTERS = [
    "All",
    "Film & TV",
    "Record Production",
    "Sound & Mix",
    "Live & Broadcast",
];

export const CREDITS = [
    {
        id: "skin-will-tell-you",
        title: "The Skin Will Tell You",
        role: "Score, Sound Design & Mix",
        category: "Film & TV",
        desc: "Short film directed by Lucy Brydon. Official selection for SXSW London.",
        badge: "Official Selection — SXSW London 2026",
        img: creditImg("skin-will-tell-you"),
    },
    {
        id: "body-of-water",
        title: "Body of Water",
        role: "Original Film Score",
        category: "Film & TV",
        desc: "Original score composed for the feature film.",
        img: creditImg("body-of-water"),
    },
    {
        id: "how-to-talk-to-girls",
        title: "How to Talk to Girls at Parties",
        role: "Production of the Movie's OST",
        category: "Film & TV",
        desc: "Production of the soundtrack for the feature film.",
        img: creditImg("how-to-talk"),
    },
    {
        id: "end-of-fucking-world",
        title: "The End of the F***ing World",
        role: "Music Composition",
        category: "Film & TV",
        desc: "Music composition for the original Channel 4 pilot.",
        img: creditImg("teotfw"),
    },
    {
        id: "palma-violets-180",
        title: "Palma Violets — '180'",
        role: "Album Production",
        category: "Record Production",
        desc: "Production of the debut LP — number 11 in the UK charts, featuring NME's Track of the Year.",
        badge: "UK #11 Debut LP — NME Track of the Year",
        img: creditImg("palma-violets"),
    },
    {
        id: "bobby-kasanga-nike",
        title: "Bobby Kasanga × Nike",
        role: "Documentary — Full Sound Mix & VO Recording",
        category: "Sound & Mix",
        desc: "Full sound mix & VO recording for the documentary telling the story of Bobby Kasanga & Hackney Wick FC.",
        img: creditImg("nike-bobby"),
    },
    {
        id: "guinness-artists-journey",
        title: "Guinness — 'The Artist's Journey'",
        role: "Soundtrack Production & Mix",
        category: "Sound & Mix",
        desc: "Production of the soundtrack & mix for the advert.",
        img: creditImg("guinness"),
    },
    {
        id: "asos-model-mastermind",
        title: "ASOS Model Mastermind",
        role: "Sound Design & Mix",
        category: "Sound & Mix",
        desc: "Sound design & mix for a series of ASOS advertisements.",
        img: creditImg("asos"),
    },
    {
        id: "matches-fashion-claire-barrow",
        title: "Matches Fashion × Claire Barrow",
        role: "Sound Design — Promo",
        category: "Sound & Mix",
        desc: "Sound design for the Claire Barrow collection promo & production of the accompanying track by Skinny Girl Diet.",
        img: creditImg("matches"),
    },
    {
        id: "tom-vek-sherman",
        title: "Tom Vek — 'Sherman'",
        role: "On-Set Sound Recordist & Sound Design",
        category: "Sound & Mix",
        desc: "On-set sound recordist & sound design for the promo.",
        img: creditImg("tom-vek"),
    },
    {
        id: "so-young-lightship",
        title: "So Young — Lightship Editions",
        role: "Live Engineering / Mix",
        category: "Live & Broadcast",
        desc: "Live engineering & mix for a music TV series.",
        img: creditImg("so-young"),
    },
    {
        id: "redbull-bedroom-jam",
        title: "Red Bull Bedroom Jam",
        role: "Senior Live Broadcast Engineer",
        category: "Live & Broadcast",
        desc: "Senior live broadcast engineer for Red Bull's music TV show.",
        img: creditImg("redbull"),
    },
    {
        id: "brattwell-recordings",
        title: "Brattwell Recordings",
        role: "Production",
        category: "Record Production",
        desc: "Production of 100s of albums, EPs & singles.",
        img: creditImg("brattwell"),
    },
];

export const MARQUEE_ITEMS = [
    "Film Scores",
    "Record Production",
    "Sound Design",
    "Original Composition",
    "Official Selection — SXSW London",
    "Analog Mixing",
];
