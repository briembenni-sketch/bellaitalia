// Allt efni síðunnar á einum stað — byggt á bellaitalia.is (upprunalega Wix-síðan).

export const site = {
  name: "Bella Italia",
  legalName: "Bella Italia slf.",
  tagline: "Villur á Ítalíu · Róm & aðrar borgir",
  description:
    "BellaItalia.is – Villur & hús með sundlaug um alla Ítalíu, viðbótarþjónusta í villuna og aðstoð við skoðunarferðir í Róm, Flórens, Napoli, Amalfi, Pompei og Feneyjum. Persónuleg þjónusta fyrir einstaklinga og hópa.",
  owner: "Hildur Jónsdóttir",
  email: "hildur.bellaitalia@gmail.com",
  phoneIS: "+354 869 4556",
  phoneIT: "+39 338 698 5868",
  whatsapp: "https://wa.me/393386985868",
  instagram: "https://www.instagram.com/bellaitaliarome/",
  instagramHandle: "@bellaitaliarome",
  facebook: "https://www.facebook.com/profile.php?id=100090874590139",
  villaCatalog:
    "https://www.exclusiveitalianvillas.com/en/search/a96e66ba-040a-4232-9710-2d5f7334557a",
};

export type Tour = {
  id: string;
  title: string;
  shortTitle: string;
  tag: string;
  image: string;
  imageAlt: string;
  summary: string;
  highlights: string[];
  priceLabel: string;
  prices?: { label: string; value: string }[];
  details: {
    intro: string[];
    schedule?: string[];
    duration?: string;
    included?: string[];
    note?: string;
    stops?: string[];
  };
};

export const tours: Tour[] = [
  {
    id: "vatikan",
    title: "Vatíkan ferð með leiðsögn",
    shortTitle: "Vatíkan ferð",
    tag: "Skoðunarferð",
    image: "/images/rom-vatikan-2.jpg",
    imageAlt: "Péturstorgið og Péturskirkjan í Vatíkaninu",
    summary: "Ferð í Vatíkanið með leiðsögn á ensku.",
    highlights: ["Vatíkansafnið", "Sixtínska Kapellan", "Péturskirkjan"],
    priceLabel: "€150 á mann",
    prices: [{ label: "Verð á mann með miða & guide", value: "€150" }],
    details: {
      intro: [
        "Ferðin hefst í Vatíkansafninu þar sem við skoðum stórkostleg listaverk, forn og ný og endum í Sixtínsku kapellunni sem er skreytt hinum frægu málverkum Michelangelos. Eftir safnið er gengið yfir í Péturskirkjuna og hún skoðuð.",
      ],
      schedule: ["Farið alla daga kl. 8:45 & 13:45", "Miðvikudaga kl. 10:00 & 13:45"],
      duration: "3,5 klukkustundir",
      included: [
        "Aðgangsmiði og guide á ensku",
        "Litlir hópar, max 10 manns",
      ],
    },
  },
  {
    id: "vespa",
    title: "Vespuferð með bílstjóra",
    shortTitle: "Vespuferð",
    tag: "Upplifun",
    image: "/images/rom-vespa-2.jpg",
    imageAlt: "Rauð vespa á steinlagðri götu í Róm",
    summary: "Láttu keyra þig um þröngar götur Rómar á vespu.",
    highlights: ["Vespa með einkabílstjóra", "Sótt upp á hótel", "Tilvalið sem afmælisgjöf"],
    priceLabel: "frá €150 á mann",
    prices: [
      { label: "2 klst · verð á mann", value: "€150" },
      { label: "3 klst · verð á mann", value: "€180" },
      { label: "4 klst · verð á mann", value: "€200" },
    ],
    details: {
      intro: [
        "Upplifðu Róm á annan hátt, við sækjum ykkur upp á hótel (eða hvar sem er í Róm) og er hver á sinni vespu með eigin bílstjóra.",
        "Öðruvísi upplifun og tilvalið fyrir stóra sem litla hópa eða sérstakt tilefni og við getum útbúið ferðina allt eftir óskum. Tilvalið sem afmælisgjöf!",
        "Ef einhver óskar eftir því að keyra vespuna sjálfur er það líka möguleiki og getur ferðast með hópnum.",
      ],
      duration: "2 – 3 klukkustundir",
      included: ["Vespa með einkabílstjóra", "Hjálmar & tryggingar"],
    },
  },
  {
    id: "flugvollur",
    title: "Flugvallarakstur",
    shortTitle: "Flugvallarakstur",
    tag: "Bílstjóri",
    image: "/images/rom-flugvollur-2.jpg",
    imageAlt: "Svartur skutlubíll í götu í Róm að kvöldi",
    summary: "Bílstjóri bíður ykkar á FCO og keyrir beint upp á hótel.",
    highlights: ["Bíll (1–3 manns)", "Skutla (4–6 manns)", "Stór skutla (6–8 manns)"],
    priceLabel: "Verð eftir fyrirspurn",
    prices: [
      { label: "Bíll (1–3 manns)", value: "Fyrirspurn" },
      { label: "Skutla / Van (4–6 manns)", value: "Fyrirspurn" },
      { label: "Stór skutla (6–8 manns)", value: "Fyrirspurn" },
    ],
    details: {
      intro: [
        "Ekki eyða tíma og bíða eftir leigubíl upp á flugvelli, bílstjórinn okkar bíður ykkar um leið og þið komið út með töskurnar og tekur ykkur beint upp á hótel/íbúð í Róm.",
        "Verð miðast við bíl hvora leið.",
        "Við getum líka pantað bíla hvar sem er á Ítalíu fyrir einstaklinga sem og hópa.",
      ],
    },
  },
  {
    id: "amalfi",
    title: "Napoli · Amalfi · Capri",
    shortTitle: "Napoli · Amalfi · Capri",
    tag: "Dagsferð",
    image: "/images/dest-amalfi.jpg",
    imageAlt: "Positano við Amalfi ströndina",
    summary: "Amalfi, Capri, Pompeii og Napoli – dagsferð frá Róm eða lengri ferð.",
    highlights: ["Dagsferðir eða lengri ferðir", "Leiðsögumenn", "Bílstjórar", "Bátsferðir", "Miðakaup"],
    priceLabel: "Verð eftir fyrirspurn",
    details: {
      intro: [
        "Við erum með frábært teymi og búum til ferðir um Napoli, Sorrento, Amalfi skagann og Capri bæði fyrir hópa, einstaklinga og fjölskyldur.",
        "Hafðu samband ef þú ert á leið til Campania héraðsins og vantar aðstoð við að plana áhyggjulausa ferð!",
        "Leiðsögumenn, bílstjórar, bátar – við plönum allt eftir ykkar óskum!",
      ],
      stops: ["Napoli", "Pompeii", "Capri", "Amalfi ströndin"],
    },
  },
  {
    id: "golfbill",
    title: "Golfbílaferð með leiðsögn",
    shortTitle: "Golfbílaferð",
    tag: "Skoðunarferð",
    image: "/images/rom-golfbill-2.jpg",
    imageAlt: "Golfbíll í skoðunarferð um Róm",
    summary: "Sem mest af Róm á stuttum tíma – með einkaleiðsögn.",
    highlights: ["Góð leið til að sjá sem mest af Róm", "Tilvalið fyrir þá sem ferðast með börn eða eldra fólk"],
    priceLabel: "Verð eftir fjölda",
    details: {
      intro: [
        "Þægilegur ferðamáti með einkaleiðsögn á ensku. Þið verðið sótt þar sem þið óskið eftir, keyrð um borgina með leiðsögn. Hægt að búa til ferðina eftir óskum annars mun leiðsögumaðurinn sjá um að þið missið ekki af neinu og farið verður á staði sem margir hefðu eflaust misst af!",
      ],
      duration: "3 klukkustundir",
      included: ["Einkaleiðsögn og golfbíll", "Sótt og keyrð upp á hótel"],
      note: "Verð fer eftir fjölda þátttakenda – endilega sendið okkur fyrirspurn og við gefum ykkur tilboð.",
    },
  },
  {
    id: "colosseum",
    title: "Colosseum ferð með leiðsögn",
    shortTitle: "Colosseum ferð",
    tag: "Skoðunarferð",
    image: "/images/rom-colosseum-2.jpg",
    imageAlt: "Colosseum í Róm",
    summary: "Ferð í Colosseum með leiðsögn á ensku.",
    highlights: ["Aðgangur í Colosseum", "Roman Forum (Rómversku torgin)"],
    priceLabel: "€150 á mann",
    prices: [{ label: "Verð á mann með miða & guide", value: "€150" }],
    details: {
      intro: [
        "Ferðin hefst í Colosseum þar sem leiðsögumaðurinn mun fræða gesti um þetta ótrúlega mannvirki sem var í senn leikhús og aftökustaður.",
        "Að því loknu verður gengið að sigurboga Konstantínusar mikla og áfram yfir á gömlu keisaratorgin (Roman Forum).",
      ],
      schedule: ["Farið alla daga kl. 08:15"],
      duration: "3 klukkustundir",
      included: [
        "Aðgangsmiði og guide á ensku",
        "Litlir hópar, max 10 manns",
      ],
    },
  },
  {
    id: "sidecar",
    title: "Vespu sidecar ferð",
    shortTitle: "Vespu sidecar",
    tag: "Upplifun",
    image: "/images/rom-sidecar-2.jpg",
    imageAlt: "Fjölskylda á rauðum vespum með hliðarvagni",
    summary: "Róm í hliðarvagni – skoðunarferð fyrir alla fjölskylduna.",
    highlights: ["Leiðsögumaður sér um aksturinn", "12 skemmtileg stopp um alla Róm", "Lágmarksaldur 5 ára"],
    priceLabel: "€135 á mann",
    prices: [
      { label: "Verð á mann", value: "€135" },
      { label: "Kvöldferð með pizzu · verð á mann", value: "€150" },
    ],
    details: {
      intro: [
        "Bílstjórinn og leiðsögumaðurinn keyrir ykkur ásamt hópnum í vespu, einn situr í hliðarvagni og annar aftaná. Tilvalið fyrir alla. (Lágmarksaldur 5 ára)",
      ],
      schedule: ["Farið alla daga nema sunnudaga kl. 09:00, 14:30 og 19:00"],
      duration: "3,5 klukkustundir",
      included: ["Vespa með bílstjóra", "Hjálmar & tryggingar"],
      stops: [
        "Piazza della Repubblica",
        "Quirinale höllin",
        "Trevi gosbrunnurinn",
        "Spænsku tröppurnar",
        "Piazza del Popolo",
        "Péturstorgið",
        "Gianicolo hæðin",
        "Trastevere og Gyðingahverfið",
        "Pantheon hofið",
        "Piazza Venezia",
        "Colosseum",
        "Santa Maria Maggiore kirkjan",
      ],
    },
  },
  {
    id: "ganga",
    title: "Gönguferð með leiðsögumanni",
    shortTitle: "Gönguferð",
    tag: "Skoðunarferð",
    image: "/images/rom-ganga-2.jpg",
    imageAlt: "Trevi gosbrunnurinn í Róm",
    summary: "Róm með Rómverjum – einkaleiðsögn um borgina eilífu.",
    highlights: ["Besta af Róm", "Hjarta Rómar", "Gyðingahverfið & Trastevere", "Matar- & vínferðir"],
    priceLabel: "Verð eftir fjölda",
    details: {
      intro: [
        "Gönguferðir um Róm með Rómverjum, einkaleiðsögn á ensku frá okkar faglærðu leiðsögumönnum. Allar helstu perlur Rómar heimsóttar með leiðsögn: Navona torgið, Spænsku tröppurnar, Trevi brunnurinn, Gyðingahverfið, Trastevere og aðrar perlur miðbæjarins.",
        "Hægt að útfæra sérferð í samræmi við óskir hvers og eins. Einnig í boði einkaferðir bæði í Vatíkanið og Colosseum með eigin leiðsögn.",
        "Tilvalið fyrir einstaklinga og hópa af öllum stærðum.",
      ],
      note: "Verð fer eftir fjölda þátttakenda – endilega sendið okkur fyrirspurn og við gefum ykkur tilboð.",
    },
  },
  {
    id: "gisting",
    title: "Gisting í Róm",
    shortTitle: "Gisting í Róm",
    tag: "Gisting",
    image: "/images/rom-gisting.jpg",
    imageAlt: "Hótel við Spænsku tröppurnar í Róm",
    summary: "Við finnum réttu gistinguna, í öllum verðflokkum.",
    highlights: ["Hótel", "Íbúðir", "Flott B&B"],
    priceLabel: "Allir verðflokkar",
    details: {
      intro: [
        "Við aðstoðum við að panta bæði hótel, B&B og íbúðir í Róm fyrir einstaklinga og hópa á leið til Rómar.",
      ],
      note: "Hafðu samband og við finnum gistingu sem hentar.",
    },
  },
  {
    id: "matreidsla",
    title: "Matreiðslunámskeið",
    shortTitle: "Matreiðslunámskeið",
    tag: "Matur",
    image: "/images/rom-matreidsla-2.jpg",
    imageAlt: "Hendur fletja út pizzudeig",
    summary: "Lærðu að gera alvöru pizzu eða pasta – fyrir alla fjölskylduna.",
    highlights: ["Pasta & Gelato", "Pizza & Gelato", "Ítalskur aperitivo"],
    priceLabel: "€150 á mann",
    prices: [{ label: "Verð á mann", value: "€150" }],
    details: {
      intro: ["Veldu á milli: Pasta & Gelato eða Pizza & Gelato."],
      duration: "2,5 – 3 klukkustundir",
      included: [
        "Matreiðslunámskeið og hráefni",
        "Ítalskur aperitivo",
        "Drykkir (vín, bjór og gosdrykkir)",
        "Auðvitað verður svo maturinn borðaður í lok námskeiðs.",
      ],
    },
  },
];

export const testimonials = [
  {
    name: "Elka Ósk Hrólfsdóttir",
    trip: "Villa í Toskana og dagar í Róm",
    text: "Áttum alveg frábæra ferð 6 fullorðnir og 2 börn til Ítalíu. Hildur var alltaf til staðar og með ráðleggingar upp á 10 bæði fyrir ferðina og á meðan henni stóð. Mæli hiklaust með að skipuleggja ferðalagið með Hildi, margborgar sig.",
  },
  {
    name: "Sólrún Sverrisdóttir",
    trip: "Casa Melograno í Marche",
    text: "Mæli 100% með ykkar þjónustu. Okkar ferð og sú þjónusta sem þið útveguðuð stóðst allar væntingar og rúmlega það. Takk fyrir okkur, áttum dásamlega dvöl í Casa Melograno í Marche héraði.",
  },
  {
    name: "Tryggvi Pálsson",
    trip: "Villa Tramonto í Toskana",
    text: "Hildur Jónsdóttir skipulagði fyrir okkur fjölskylduferð til Toscana. Við dvöldum stórkostlega viku á Villa Tramonto og allt stóðst. Fengum ljósmyndara og frábæran kokk fyrir hátíðarkvöldverðinn. Hildur og hennar Bella Italia fá okkar bestu meðmæli.",
  },
  {
    name: "Harpa Þórsdóttir",
    trip: "Sidecar-vespuferð um Róm",
    text: "Mæli með – fórum í sidecar-vespuferð 3 klst, æðisleg upplifun og frábærir guide-ar, stoppuðum á nokkrum vel völdum stöðum, Trevi, Vatican, Colosseum m.a. og fengum okkur kaffi og croissant. Mælum 110% með.",
  },
  {
    name: "Anna Toher",
    trip: "Stutt stopp í Róm",
    text: "Stutt stopp í Róm nýttist vel með skjótri og góðri þjónustu Hildar hjá Bella Italia. Allt stenst eins og stafur á bók. Mæli með Bella Italia til að fá sem mest út úr ferð til Ítalíu.",
  },
  {
    name: "Ásbjörg Morthens",
    trip: "Rómarheimsókn með vespuferð",
    text: "Þetta var bara frábært allt og hrikalega gott að fá svona góða punkta og þjónustu hjá Bella Italia. Vespuferðin var alveg svakalega skemmtileg og virkilega gaman að skoða borgina svoleiðis. Mæli klárlega með að hafa samband við Hildi sem setur saman Rómar heimsókn upp á 10.",
  },
];

export const gallery = [
  { src: "/images/gallery-01.jpg", alt: "Trevi gosbrunnurinn í Róm" },
  { src: "/images/rome-pantheon.jpg", alt: "Pantheon í Róm við sólarupprás" },
  { src: "/images/rome-rooftops.jpg", alt: "Kirkjuhvelfingar við Piazza Venezia í Róm" },
  { src: "/images/gallery-04.webp", alt: "Positano við Amalfi ströndina" },
  { src: "/images/florens-ponte-vecchio.jpg", alt: "Ponte Vecchio í Flórens" },
  { src: "/images/gallery-06.jpg", alt: "Veitingastaður með útsýni yfir hafið á Capri" },
  { src: "/images/villa-marche-2.jpg", alt: "Villa með sundlaug í Toskana" },
  { src: "/images/dinner-terrace.jpg", alt: "Kvöldverður á verönd í Toskana" },
  { src: "/images/toskana-hills.jpg", alt: "Sýprusviðir og sveitavegur í Toskana" },
];

export const villaPricing = [
  { size: "1–4 herbergja villa", eur: "frá €1.500 vikan", isk: "um 230.000 kr." },
  { size: "4–5 herbergja villa", eur: "frá €2.500 vikan", isk: "um 370.000 kr." },
  { size: "6–7 herbergja villa", eur: "frá €4.000 vikan", isk: "um 600.000 kr." },
  { size: "8–9 herbergja villa", eur: "frá €5.000 vikan", isk: "um 750.000 kr." },
  { size: "10+ herbergja villa", eur: "frá €7.000 vikan", isk: "um 1.000.000 kr." },
];

// Svæði sem hægt er að haka við í villu-fyrirspurn
export const villaRegions = ["Toskana", "Umbria", "Le Marche", "Puglia", "Sikiley", "Norður-Ítalía", "Annað / óákveðið"];

export const villaText = {
  intro: ["Fjöldi villa um alla Ítalíu, í öllum verðflokkum – við útbúum tilboð eftir óskum hvers hóps."],
  practical: [
    "Öll húsin eru með sundlaug, í rólegri sveit",
    "2–5 km í næsta þorp – bílaleigubíll er nauðsynlegur",
    "Leiga hvaða daga sem er – nema í júlí og ágúst: laugardagur til laugardags",
    "Við erum til staðar 24/7 á meðan dvöl stendur",
  ],
  service: ["Það kostar ekkert að fá tilboð – þjónusta okkar og milliganga er gjaldfrjáls."],
  pricingNote: "Meðalverð eftir stærð – fer eftir árstíma og staðsetningu.",
  bookingBenefit: "Allt bókað í gegnum okkur – gjaldfrjálst.",
  extras: ["Bílaleigubílar", "Kokkur upp í hús", "Ljósmyndari", "Vínferðir", "Hótelpantanir", "Veitingastaðir"],
};

/* ---------------------------- VILLUR – DÆMI ---------------------------- */

export type Villa = {
  id: string;
  name: string;
  region: string;
  image: string;
  imageAlt: string;
  text: string;
  features: string[];
};

// Dæmi um gerðir af húsum sem eru í boði – úrvalið er miklu stærra.
export const villas: Villa[] = [
  {
    id: "toskana",
    name: "Sveitasetur í Toskana",
    region: "Toskana",
    image: "/images/villa-toskana-2.jpg",
    imageAlt: "Toskönsk villa með sundlaug, grasflöt og sýprusviðum",
    text: "Klassísk steinvilla innan um ólífutré og sýprusviði.",
    features: ["Sundlaug", "Útsýni yfir vínekrur", "Stutt í þorp"],
  },
  {
    id: "umbria",
    name: "Sveitahús í Umbríu",
    region: "Umbria",
    image: "/images/villa-umbria.jpg",
    imageAlt: "Sundlaug í grænum hæðum Umbríu",
    text: "Endurgerð sveitahús í græna hjarta Ítalíu.",
    features: ["Sundlaug", "Friðsælt", "Miðaldabæir í nánd"],
  },
  {
    id: "marche",
    name: "Villa í Le Marche",
    region: "Le Marche",
    image: "/images/villa-marche-2.jpg",
    imageAlt: "Villa með sundlaug milli vínekra og hæða með þorpi í baksýn",
    text: "Minna þekkt en Toskana, sami sjarmi – hæðir og kastalar við Adríahafið.",
    features: ["Sundlaug", "Strönd í nánd", "Gott verð"],
  },
  {
    id: "puglia",
    name: "Trullo í Puglia",
    region: "Puglia",
    image: "/images/villa-puglia.jpg",
    imageAlt: "Hvít trullo-hús með keilulöguðu þaki í Puglia",
    text: "Hvítkölkuð trullo- og masseria-hús – Suður-Ítalía á sínu besta.",
    features: ["Sundlaug", "Ólífulundir", "Strendur"],
  },
];

/* ------------------- VIÐBÓTARÞJÓNUSTA Í VILLUNA ------------------- */

export type VillaService = {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  text: string;
};

export const villaServices: VillaService[] = [
  {
    id: "kokkur",
    title: "Einkakokkur & matreiðslunámskeið",
    image: "/images/service-pasta.jpg",
    imageAlt: "Hendur móta ferskt heimagert pasta",
    text: "Kokkur eldar hátíðarkvöldverð í villunni – eða þið lærið að gera pasta og gelato.",
  },
  {
    id: "ljosmyndari",
    title: "Ljósmyndari",
    image: "/images/service-ljosmyndari.jpg",
    imageAlt: "Ljósmyndari tekur myndir af pari í ítölskum garði",
    text: "Fagljósmyndari fangar hópinn á ítölsku sumarkvöldi.",
  },
  {
    id: "vin",
    title: "Vínsmökkun",
    image: "/images/service-vinsmokkun.jpg",
    imageAlt: "Vínsmökkun með rauðvínsglösum og ítölskum smáréttum",
    text: "Hjá vínbónda í héraðinu eða með sommelier heima í villunni.",
  },
  {
    id: "akstur",
    title: "Akstur & transfer",
    image: "/images/service-bilstjori.jpg",
    imageAlt: "Klassískur bíll á sýprusviðargötu í Toskana",
    text: "Sótt á flugvöll og keyrt beint í villuna – og dagsferðir með bílstjóra.",
  },
];

/* --------------- RÓM & AÐRAR BORGIR – SKOÐUNARFERÐIR --------------- */

export type Destination = {
  slug: string;
  name: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
  cardImage: string;
  intro: string[];
  services: { title: string; text: string; image?: string; imageAlt?: string }[];
  planning: string;
  /** Róm hefur sína eigin sérsmíðuðu síðu með ferðaspjöldum */
  custom?: boolean;
};

export const destinations: Destination[] = [
  {
    slug: "rom",
    name: "Róm",
    navLabel: "Róm",
    eyebrow: "Borgin eilífa",
    title: "Róm",
    lead: "Vatíkanið, Colosseum, vespuferðir, matur og gisting.",
    image: "/images/hero-rome-2.jpg",
    imageAlt: "Gata í Róm með bougainvillea",
    cardImage: "/images/card-rom.jpg",
    intro: [],
    services: [],
    planning: "",
    custom: true,
  },
  {
    slug: "florens",
    name: "Flórens",
    navLabel: "Flórens",
    eyebrow: "Toskana",
    title: "Flórens",
    lead: "Gönguferðir með leiðsögn og miðar í Accademia og Duomo.",
    image: "/images/dest-florens.jpg",
    imageAlt: "Dómkirkjan í Flórens séð yfir þökin",
    cardImage: "/images/dest-florens.jpg",
    intro: ["Best fótgangandi með einhverjum sem þekkir borgina – og fullkomin dagsferð úr villu í Toskana."],
    services: [
      { title: "Gönguferðir með leiðsögumanni", image: "/images/svc-florens-ganga.jpg", imageAlt: "Gata í Flórens með Ponte Vecchio í baksýn", text: "Einkaleiðsögn á ensku um miðbæinn." },
      { title: "Leiðsögn um borgina", image: "/images/svc-florens-leidsogn.jpg", imageAlt: "Stytta og Palazzo Vecchio í kvöldsól", text: "Sérsniðin eftir áhuga – list, saga, matur eða handverk." },
      { title: "Miðakaup í Accademia", image: "/images/svc-florens-accademia.jpg", imageAlt: "Davíð eftir Michelangelo í Accademia-safninu", text: "Miðar á Davíð Michelangelos – leiðsögn ef óskað er." },
      { title: "Duomo og Cupola", image: "/images/svc-florens-duomo.jpg", imageAlt: "Hvelfing Brunelleschis yfir þökum Flórens", text: "Miðar og tímabókun í dómkirkjuna og hvelfingu Brunelleschis." },
      { title: "Skipulagning heimsókna og dagskrár", image: "/images/svc-florens-skipulag.jpg", imageAlt: "Hæðaþorp og vínekrur í Chianti", text: "Söfn, veitingastaðir, vínsmökkun í Chianti og dagsferðir til Siena eða Pisa." },
    ],
    planning: "Segðu okkur hvenær og hve mörg – við sjáum um dagskrá, miða og leiðsögn.",
  },
  {
    slug: "napoli-amalfi-pompei",
    name: "Napoli, Amalfi og Pompei",
    navLabel: "Napoli · Amalfi · Pompei",
    eyebrow: "Campania",
    title: "Napoli, Amalfi & Pompei",
    lead: "Dagsferðir frá Róm með einkabíl – eða lengri dvöl við ströndina.",
    image: "/images/dest-amalfi.jpg",
    imageAlt: "Positano við Amalfi ströndina",
    cardImage: "/images/dest-amalfi.jpg",
    intro: ["Leiðsögumenn, bílstjórar og bátar – teymið okkar í Campania plönar allt eftir ykkar óskum."],
    services: [
      { title: "Dagsferðir frá Róm", image: "/images/svc-napoli-dagsferd.jpg", imageAlt: "Bærinn Amalfi og ströndin", text: "Sótt á hótel að morgni með einkabíl og komið til baka að kvöldi." },
      { title: "Einkabíll og leiðsögn", image: "/images/borg-amalfi-vegur.jpg", imageAlt: "Strandvegurinn við Amalfi-ströndina", text: "Engar biðraðir, engin rúta – dagskráin eftir ykkar höfði." },
      { title: "Pompeii", image: "/images/dest-pompei.jpg", imageAlt: "Rústir Pompeii með Vesúvíus í baksýn", text: "Leiðsögn um fornu borgina – Herculaneum eða Vesúvíus ef óskað er." },
      { title: "Napoli", image: "/images/svc-napoli-pizza.jpg", imageAlt: "Napólísk pizza beint úr ofninum", text: "Gönguferð um Spaccanapoli og pizzan sem borgin er fræg fyrir." },
      { title: "Amalfi-ströndin", image: "/images/borg-ravello-terrace.jpg", imageAlt: "Útsýnisverönd Villa Cimbrone í Ravello yfir Amalfi-ströndina", text: "Positano, Amalfi og Ravello með bílstjóra – eða á bát til Capri." },
    ],
    planning: "Áhyggjulaus ferð um Campania – dagsferð eða lengri dvöl.",
  },
  {
    slug: "feneyjar",
    name: "Feneyjar",
    navLabel: "Feneyjar",
    eyebrow: "Veneto",
    title: "Feneyjar",
    lead: "Gondólar, leiðsögn, Murano, miðar og transfer.",
    image: "/images/dest-feneyjar.jpg",
    imageAlt: "Kirkjan Santa Maria della Salute við Canal Grande í Feneyjum",
    cardImage: "/images/dest-feneyjar-2.jpg",
    intro: ["Í Feneyjum skiptir öllu að skipuleggja vel – gistingu, transfer og hvernig maður sleppur við mannþröngina."],
    services: [
      { title: "Gondólaferðir", image: "/images/svc-feneyjar-gondola.jpg", imageAlt: "Gondóla á Canal Grande", text: "Einkagondóla um þröngu síkin – tilvalið í sólsetrinu." },
      { title: "Gönguferðir með leiðsögumanni", image: "/images/svc-feneyjar-ganga.jpg", imageAlt: "Markúsartorgið og klukkuturninn í Feneyjum", text: "Markúsartorgið, Rialto og leyndu hverfin." },
      { title: "Matarferðir", image: "/images/svc-feneyjar-matur.jpg", imageAlt: "Cicchetti-smáréttir á bacaro-bar", text: "Cicchetti og vín á bacari-börum með innfæddum leiðsögumanni." },
      { title: "Murano", image: "/images/svc-feneyjar-murano.jpg", imageAlt: "Litrík hús við síki á Burano", text: "Bátsferð til Murano og Burano – glerblástur og litrík hús." },
      { title: "Palazzo Ducale", image: "/images/borg-feneyjar-palazzo-ducale.jpg", imageAlt: "Hertogahöllin í Feneyjum séð frá Canal Grande", text: "Miðar og leiðsögn um Hertogahöllina og Markúsarkirkjuna." },
      { title: "Miðakaup & transfer", image: "/images/borg-feneyjar-vatnataxi.jpg", imageAlt: "Vatnataxi á Canal Grande í Feneyjum", text: "Miðar á söfn, vatnataxi frá flugvelli og aðstoð við gistingu." },
    ],
    planning: "Sendu okkur dagsetningar og fjölda – við sjáum um rest, frá flugvelli til gondólu.",
  },
];

export const cityDestinations = destinations.filter((d) => !d.custom);

/* --------------- BRÚÐKAUP & SÉRSTÖK TILEFNI --------------- */

export const wedding = {
  eyebrow: "Brúðkaup & sérstök tilefni",
  title: "Brúðkaup og sérstök tilefni á Ítalíu",
  lead: "Brúðkaup í villu í Toskana, stórafmæli með einkakokk eða bónorð í gondólu.",
  image: "/images/brudkaup-villa.jpg",
  imageAlt: "Ítölsk villa með stórum garði í kvöldsól – umgjörð fyrir brúðkaup",
  image2: "/images/brudkaup-2.jpg",
  image2Alt: "Brúðhjón í gondólu í Feneyjum",
  intro: [
    "Villa með sundlaug, útsýni og stórum garði er fullkominn rammi.",
    "Við erum að byggja upp þessa þjónustu og tökum nú við fyrirspurnum – segðu okkur frá tilefninu.",
  ],
  ideas: ["Brúðkaup í villu", "Stórafmæli & ættarmót", "Bónorð & brúðkaupsafmæli", "Steggja- og gæsaferðir", "Fyrirtækjaferðir & hvataferðir"],
  extras: ["Villa fyrir allan hópinn", "Einkakokkur & veislumatur", "Ljósmyndari", "Vínsmökkun", "Akstur & transfer", "Blóm, tónlist & skreytingar"],
};
