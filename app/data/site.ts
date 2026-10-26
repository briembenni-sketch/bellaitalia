// Allt efni síðunnar á einum stað — byggt á bellaitalia.is (upprunalega Wix-síðan).

export const site = {
  name: "Bella Italia",
  legalName: "Bella Italia slf.",
  tagline: "Villur á Ítalíu · Róm & aðrar borgir",
  description:
    "BellaItalia.is – Villur & hús með sundlaug um alla Ítalíu, viðbótarþjónusta í villuna og aðstoð við skoðunarferðir í Róm, Flórens, Napoli, Amalfi, Pompei, Feneyjum og á Sikiley. Persónuleg þjónusta fyrir einstaklinga og hópa.",
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

/** Leit hjá samstarfsaðilanum síuð á eitt hérað (heitið eins og það er á ensku þar, t.d. "Tuscany"). */
export const villaCatalogRegion = (county: string) =>
  `${site.villaCatalog}?Text=${encodeURIComponent(county)}&TagType=county&SelectedAccessories=&pageIndex=&Checkin=&Checkout=&Adults=1`;

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
    image: "/images/rom-vespa-3.jpg",
    imageAlt: "Glaðir farþegar á rauðum vespum með íslenska fánann í Róm",
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
    image: "/images/rom-transfer.jpg",
    imageAlt: "Bílstjóri heldur opinni hurð á svörtum fólksbíl",
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
    image: "/images/rom-golfbill-3.jpg",
    imageAlt: "Golfbíll með farþegum fyrir framan Colosseum",
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
    highlights: [
      "Aðgangur í Colosseum",
      "Roman Forum (Rómversku torgin)",
      "Arena þar sem skylmingaþrælar (gladiatorar) börðust til forna",
    ],
    priceLabel: "€150 á mann",
    prices: [{ label: "Verð á mann með miða & guide", value: "€150" }],
    details: {
      intro: [
        "Aðgangur í Colosseum · Roman Forum (Rómversku torgin) · Arena þar sem skylmingaþrælar (gladiatorar) börðust til forna.",
        "Ferðin hefst í Colosseum þar sem leiðsögumaðurinn mun fræða gesti um þetta ótrúlega mannvirki sem var í senn leikhús og aftökustaður.",
        "Að því loknu verður gengið að sigurboga Konstantínusar mikla og áfram yfir á gömlu keisaratorgin (Roman Forum).",
        "* Aðgangur að leikvangsgólfinu felur ekki sjálfkrafa í sér heimsókn niður í neðanjarðargöngin (Underground/Hypogeum).",
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
    image: "/images/rom-sidecar-3.jpg",
    imageAlt: "Rauð vespa með hliðarvagni á götu í Róm",
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
    id: "ganga-perlur",
    title: "Perlur Rómar",
    shortTitle: "Perlur Rómar",
    tag: "Gönguferð",
    image: "/images/rom-ganga-perlur.jpg",
    imageAlt: "Pantheon í Róm við sólarupprás",
    summary: "Gönguferð um sögufræga miðborgina.",
    highlights: ["Spænsku tröppurnar", "Trevi-gosbrunnurinn", "Pantheon", "Navona-torgið"],
    priceLabel: "Verð eftir fjölda",
    details: {
      intro: [
        "Í þessari þriggja klukkustunda gönguferð kynnumst við helstu perlum hinnar eilífu borgar. Við heimsækjum Spænsku tröppurnar, Trevi-gosbrunninn, hið stórbrotna Pantheon og Navona-torgið, eitt fallegasta torg Rómar.",
        "Skemmtileg og fróðleg einkagönguferð um sögufrægar götur og heillandi torg þar sem saga, menning og einstök stemning Rómar mætast.",
      ],
      duration: "3 klukkustundir",
      note: "Verð fer eftir fjölda þátttakenda – endilega sendið okkur fyrirspurn og við gefum ykkur tilboð.",
    },
  },
  {
    id: "ganga-hjarta",
    title: "Hjarta Rómar",
    shortTitle: "Hjarta Rómar",
    tag: "Gönguferð",
    image: "/images/rom-ganga-hjarta.jpg",
    imageAlt: "Kaffihúsið Antico Caffè del Moro á horni í Trastevere",
    summary: "Gönguferð um faldar perlur borgarinnar.",
    highlights: ["Campo de’ Fiori", "Gyðingahverfið", "Tíbereyjan", "Trastevere"],
    priceLabel: "Verð eftir fjölda",
    details: {
      intro: [
        "Upplifðu hina sönnu Róm í heillandi gönguferð um lífleg hverfi og sögufrægar götur, fjarri fjölförnustu ferðamannastöðunum.",
        "Við heimsækjum Campo de’ Fiori, sögufræga gyðingahverfið og Tíbereyjuna áður en við röltum um þröngar steinlagðar götur Trastevere, eins skemmtilegasta og litríkasta hverfis Rómar.",
        "Skemmtileg og fróðleg einkagönguferð þar sem við kynnumst daglegu lífi, hefðum og földum gersemum hinnar eilífu borgar.",
      ],
      note: "Verð fer eftir fjölda þátttakenda – endilega sendið okkur fyrirspurn og við gefum ykkur tilboð.",
    },
  },
  {
    id: "ganga-trastevere",
    title: "Gyðingahverfið & Trastevere",
    shortTitle: "Gyðingahverfið & Trastevere",
    tag: "Gönguferð",
    image: "/images/rom-ganga-gydingahverfid.jpg",
    imageAlt: "Útiveitingastaðir í gyðingahverfinu í Róm",
    summary: "Gönguferð um sögufræga Róm.",
    highlights: ["Janiculum-hæð", "Trastevere", "Gyðingahverfið"],
    priceLabel: "Verð eftir fjölda",
    details: {
      intro: [
        "Uppgötvaðu heillandi hverfi Rómar í skemmtilegri einkagönguferð þar sem saga, menning og hefðir borgarinnar fléttast saman.",
        "Við hefjum ferðina á Janiculum-hæð með stórkostlegu útsýni yfir Róm og höldum þaðan niður í líflegt Trastevere-hverfið með sínum þröngu steinlögðu götum, litríku húsum og notalegu kaffihúsum.",
        "Að lokum heimsækjum við sögufræga gyðingahverfið, þar sem við kynnumst yfir 2.000 ára sögu gyðinga í Róm og skoðum einstaka byggingar og faldar perlur borgarinnar.",
      ],
      note: "Verð fer eftir fjölda þátttakenda – endilega sendið okkur fyrirspurn og við gefum ykkur tilboð.",
    },
  },
  {
    id: "rutur",
    title: "Rútur",
    shortTitle: "Rútur",
    tag: "Akstur",
    image: "/images/rom-rutur.jpg",
    imageAlt: "Hvít rúta ekur undir steinboga í Róm",
    summary: "Rútur með bílstjóra – milli borga, í skoðunarferðir eða frá flugvelli.",
    highlights: ["Rútur af öllum stærðum", "Bílstjóri", "Um alla Ítalíu"],
    priceLabel: "Verð eftir fyrirspurn",
    details: {
      intro: [
        "Við pöntum rútur af öllum stærðum með bílstjóra, hvort sem um er að ræða akstur til og frá flugvelli, á milli borga eða í skoðunarferðir.",
        "Hvert sem leiðin liggur – við komum ykkur á áfangastað.",
      ],
      note: "Segið okkur leiðina, dagsetningu og fjölda og við sendum ykkur tilboð.",
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

export const villaText = {
  intro: ["Fjöldi villa um alla Ítalíu, í öllum verðflokkum – við útbúum tilboð eftir óskum hvers hóps."],
  practical: [
    "Öll húsin eru með sundlaug, í rólegri sveit",
    "Við erum til staðar 24/7 á meðan dvöl stendur",
    "Leigutímabil allt árið um kring, hvaða vikudag sem er",
    "2–5 km í næsta bæ og þjónustu við flest húsin",
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
  /** Slóð á villur í sama héraði hjá samstarfsaðilanum */
  catalogUrl?: string;
};

// „Brot af því úrvali sem við bjóðum uppá“ – öll héruð sem samstarfsaðilinn er með 5+ villur í (okt. 2026),
// raðað eftir fjölda villa; hvert spjald vísar á villurnar í héraðinu.
export const villas: Villa[] = [
  {
    id: "toskana",
    catalogUrl: villaCatalogRegion("Tuscany"),
    name: "Toskana",
    region: "Toskana",
    image: "/images/svaedi-toskana.jpg",
    imageAlt: "Steinvilla með sundlaug og vínekrum í hæðum Toskana",
    text: "",
    features: [],
  },
  {
    id: "umbria",
    catalogUrl: villaCatalogRegion("Umbria"),
    name: "Umbria",
    region: "Umbria",
    image: "/images/svaedi-umbria.jpg",
    imageAlt: "Steinhús með sundlaug og verönd innan um tré í Umbríu",
    text: "",
    features: [],
  },
  {
    id: "sikiley",
    catalogUrl: villaCatalogRegion("Sicily"),
    name: "Sikiley",
    region: "Sikiley",
    image: "/images/svaedi-sikiley.jpg",
    imageAlt: "Villa með upplýstri sundlaug yfir hafinu á Sikiley í ljósaskiptunum",
    text: "",
    features: [],
  },
  {
    id: "marche",
    catalogUrl: villaCatalogRegion("Marche"),
    name: "Le Marche",
    region: "Le Marche",
    image: "/images/villa-marche-2.jpg",
    imageAlt: "Villa með sundlaug milli vínekra og hæða með þorpi í baksýn",
    text: "",
    features: [],
  },
  {
    id: "puglia",
    catalogUrl: villaCatalogRegion("Puglia"),
    name: "Puglia",
    region: "Puglia",
    image: "/images/svaedi-puglia.jpg",
    imageAlt: "Hvít villa með sundlaug í Puglia við sólarlag",
    text: "",
    features: [],
  },
  {
    id: "emilia-romagna",
    catalogUrl: villaCatalogRegion("Emilia Romagna"),
    name: "Emilia-Romagna",
    region: "Emilia-Romagna",
    image: "/images/svaedi-emilia-romagna.jpg",
    imageAlt: "Villa með sundlaug í grænum hæðum Emilia-Romagna",
    text: "",
    features: [],
  },
  {
    id: "lazio",
    catalogUrl: villaCatalogRegion("Lazio"),
    name: "Lazio",
    region: "Lazio",
    image: "/images/svaedi-lazio.jpg",
    imageAlt: "Villa með sundlaug í gróðri í Lazio",
    text: "",
    features: [],
  },
  {
    id: "veneto",
    catalogUrl: villaCatalogRegion("Veneto"),
    name: "Veneto",
    region: "Veneto",
    image: "/images/svaedi-veneto.jpg",
    imageAlt: "Villa með sundlaug og útsýni yfir Garda-vatn",
    text: "",
    features: [],
  },
  {
    id: "sardinia",
    catalogUrl: villaCatalogRegion("Sardinia"),
    name: "Sardinía",
    region: "Sardinía",
    image: "/images/svaedi-sardinia.jpg",
    imageAlt: "Villa með upplýstri sundlaug á Sardiníu",
    text: "",
    features: [],
  },
  {
    id: "liguria",
    catalogUrl: villaCatalogRegion("Liguria"),
    name: "Liguria",
    region: "Liguria",
    image: "/images/svaedi-liguria.jpg",
    imageAlt: "Villa með sundlaug við strönd Liguria",
    text: "",
    features: [],
  },
  {
    id: "piemonte",
    catalogUrl: villaCatalogRegion("Piedmont"),
    name: "Piemonte",
    region: "Piemonte",
    image: "/images/svaedi-piemonte.jpg",
    imageAlt: "Hvít villa með sundlaug í Piemonte",
    text: "",
    features: [],
  },
  {
    id: "lombardia",
    catalogUrl: villaCatalogRegion("Lombardy"),
    name: "Lombardia",
    region: "Lombardia",
    image: "/images/svaedi-nordur-italia.jpg",
    imageAlt: "Villa með sundlaug og útsýni yfir Como-vatn og fjöllin",
    text: "",
    features: [],
  },
  {
    id: "abruzzo",
    catalogUrl: villaCatalogRegion("Abruzzo"),
    name: "Abruzzo",
    region: "Abruzzo",
    image: "/images/svaedi-abruzzo.jpg",
    imageAlt: "Villa með sundlaug í sveitinni í Abruzzo",
    text: "",
    features: [],
  },
  {
    id: "campania",
    catalogUrl: villaCatalogRegion("Campania"),
    name: "Campania",
    region: "Campania",
    image: "/images/svaedi-campania.jpg",
    imageAlt: "Villa með sundlaug og pálmatrjám í Campania",
    text: "",
    features: [],
  },
];

// Sömu svæði og spjöldin á villusíðunni (í sömu röð) + „annað“ – notað í villu-fyrirspurninni
export const villaRegions = [...villas.map((v) => v.region), "Annað / óákveðið"];

/* ------------------- VILLUR EFTIR ÁHUGAMÁLUM ------------------- */

// Villur eftir áhugamálum = síaðar leitir hjá samstarfsaðilanum (aukabúnaður í villunni).
const villaCatalogAccessory = (id: string) =>
  `${site.villaCatalog}?Text=&TagType=&SelectedAccessories=${id}&pageIndex=&Checkin=&Checkout=&Adults=1`;

export type VillaCollection = {
  title: string;
  note: string;
  image: string;
  imageAlt: string;
  href: string;
};

export const villaCollections: VillaCollection[] = [
  { title: "Spa", note: "Villur með heilsulind", image: "/images/villa-spa.jpg", imageAlt: "Steinvilla með upplýstri sundlaug í ljósaskiptunum", href: villaCatalogAccessory("17238a9b-d6e9-4817-a73a-44a8515617a1") },
  { title: "Líkamsræktarsalur", note: "Villur með fitness-aðstöðu", image: "/images/villa-fitness.jpg", imageAlt: "Hvít villa með langri sundlaug og sólstólum", href: villaCatalogAccessory("109dc261-cc8c-4999-ae34-2a1eac95a465") },
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
    image: "/images/service-kokkur-2.jpg",
    imageAlt: "Kokkur heldur á fati með þykkum T-bone steikum",
    text: "Kokkur eldar hátíðarkvöldverð í villunni – eða þið lærið að gera pasta og gelato.",
  },
  {
    id: "ljosmyndari",
    title: "Ljósmyndari",
    image: "/images/service-ljosmyndari-2.jpg",
    imageAlt: "Ljósmyndari tekur myndir af börnum við sundlaug",
    text: "Fagljósmyndari fangar hópinn á ítölsku sumarkvöldi.",
  },
  {
    id: "vin",
    title: "Vínsmökkun",
    image: "/images/service-vinsmokkun-2.jpg",
    imageAlt: "Tvær rauðvínsflöskur í vínekru",
    text: "Hjá vínbónda í héraðinu eða með sommelier heima í villunni.",
  },
  {
    id: "akstur",
    title: "Akstur & transfer",
    image: "/images/service-transfer-2.jpg",
    imageAlt: "Svartur einkabíll fyrir framan villu með sýprusviðum",
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
  /** Fyrirsögn yfir ferðunum – sjálfgefið „Hvað er í boði“ */
  servicesTitle?: string;
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
    image: "/images/rom-hero-petur.jpg",
    imageAlt: "Fólk á útsýnisstað í Róm horfir yfir að hvelfingu Péturskirkjunnar",
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
      { title: "Gönguferð með leiðsögumanni", image: "/images/svc-florens-ganga-2.jpg", imageAlt: "Leiðsögukona segir hópi frá á Piazza della Repubblica í Flórens", text: "Uppgötvið töfra Flórens í einkagönguferð með reyndum, enskumælandi leiðsögumanni sem þekkir borgina út og inn. Kynnist helstu kennileitum, heillandi sögu og földum perlum þessarar fallegu borgar á skemmtilegan og persónulegan hátt." },
      { title: "Miðakaup í Accademia", image: "/images/svc-florens-accademia.jpg", imageAlt: "Davíð eftir Michelangelo í Accademia-safninu", text: "Heimsækið Accademia-listasafnið í Flórens og dáist að hinu heimsfræga meistaraverki Michelangelos, Davíðsstyttunni. Við sjáum um miðapantanir og bjóðum einnig upp á einkaleiðsögn með reyndum, enskumælandi leiðsögumanni sem veitir ykkur skemmtilega innsýn í sögu og listaverk safnsins." },
      { title: "Duomo og Cupola", image: "/images/svc-florens-duomo.jpg", imageAlt: "Hvelfing Brunelleschis yfir þökum Flórens", text: "Heimsækið hina glæsilegu dómkirkju Flórens, Duomo, og upplifið eitt þekktasta kennileiti borgarinnar. Við sjáum um miðapantanir og tímabókanir, þar á meðal uppgöngu í hina stórkostlegu hvelfingu Brunelleschis, þaðan sem þið njótið einstaks útsýnis yfir Flórens. Einnig er hægt að bæta við leiðsögn." },
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
    image: "/images/napoli-hero-2.jpg",
    imageAlt: "Castel dell’Ovo og smábátahöfnin í Napólí í sól með bláum himni",
    cardImage: "/images/napoli-hero-2.jpg",
    intro: ["Leiðsögumenn, bílstjórar og bátar – teymið okkar í Campania plönar allt eftir ykkar óskum."],
    services: [
      { title: "Perlur Napólí – Gönguferð um borgina", image: "/images/svc-napoli-ganga.jpg", imageAlt: "Leiðsögukona í þröngri steinlagðri götu í Napólí", text: "Kynnumst líflegum götum, sögufrægum torgum og einstakri menningu Napólí. Upplifum hina sönnu ítölsku stemningu og frægu matarhefðir borgarinnar." },
      { title: "Pompeii", image: "/images/svc-napoli-pompei.jpg", imageAlt: "Bronsstytta í rústum Pompeii með Vesúvíus í baksýn", text: "Leiðsögn um fornu borgina – Herculaneum eða Vesúvíus ef óskað er." },
      { title: "Amalfi-ströndin – Dagsferð", image: "/images/svc-napoli-amalfi.jpg", imageAlt: "Bærinn Amalfi með dómkirkjuturninum við hafið", text: "Njóttu einnar fegurstu strandlengju Ítalíu með heimsókn til heillandi bæja á borð við Positano, Amalfi og Ravello." },
      { title: "Capri – Perla Napólíflóa", image: "/images/svc-napoli-capri.jpg", imageAlt: "Faraglioni-klettarnir við Capri og sítrónur í forgrunni", text: "Dagsferð til hinnar fögru eyju Capri þar sem kristaltær sjór, glæsilegt útsýni og heillandi bæjarlíf bíða gestanna." },
      { title: "Akstursþjónusta – Flugvellir og Amalfi-ströndin", image: "/images/svc-napoli-akstur.jpg", imageAlt: "Svartur einkabíll á útsýnisstað fyrir ofan Amalfi-ströndina", text: "Við bjóðum upp á þægilega akstursþjónustu með einkabílstjóra, hvort sem um er að ræða akstur til og frá flugvelli, milli borga eða um hina fögru Amalfi-strönd – allt frá bílum upp í rútur." },
      { title: "Vínferðir – Vínekrur Vesúvíusar og Irpinia", image: "/images/svc-napoli-vin.jpg", imageAlt: "Vínsmökkun á verönd í vínekru undir Vesúvíusi", text: "Uppgötvaðu vínmenningu Suður-Ítalíu í heillandi vínferð um vínekrurnar í hlíðum Vesúvíusar eða hið rómaða vínhérað Irpinia. Heimsækið vínbændur, fræðist um vínrækt svæðisins og njótið vínsmökkunar með úrvali af staðbundnum vínum, gjarnan ásamt ljúffengum ítölskum hádegisverði. Einstök upplifun þar sem náttúrufegurð, vínmenning og matargerð Suður-Ítalíu mætast." },
    ],
    planning: "Áhyggjulaus ferð um Campania – dagsferð eða lengri dvöl.",
  },
  {
    slug: "feneyjar",
    name: "Feneyjar",
    navLabel: "Feneyjar",
    eyebrow: "Veneto",
    title: "Feneyjar",
    lead: "Gönguferðir, siglingar á Canal Grande og vínferðir um Veneto.",
    image: "/images/dest-feneyjar.jpg",
    imageAlt: "Kirkjan Santa Maria della Salute við Canal Grande í Feneyjum",
    cardImage: "/images/dest-feneyjar-2.jpg",
    intro: ["Í Feneyjum skiptir öllu að skipuleggja vel – gistingu, transfer og hvernig maður sleppur við mannþröngina."],
    services: [
      { title: "Gönguferð með leiðsögumanni", image: "/images/svc-feneyjar-ganga-2.jpg", imageAlt: "Brosandi kona með rauðvínsglas á vínbar í Feneyjum", text: "Upplifðu töfra Feneyja í skemmtilegri gönguferð með staðkunnugum leiðsögumanni um þröngar götur og söguleg kennileiti borgarinnar. Heimsæktu Rialto-brúna, hús Marco Polo og glæsilegar kirkjur áður en ferðinni lýkur á hinu stórkostlega Markúsartorgi." },
      { title: "Sigling um Canal Grande", image: "/images/svc-feneyjar-sigling.jpg", imageAlt: "Bátar og gondólar á Canal Grande með Santa Maria della Salute í baksýn", text: "Upplifðu Feneyjar frá einstöku sjónarhorni í einkasiglingu um Canal Grande og heillandi síki borgarinnar með staðkunnugum leiðsögumanni. Njóttu útsýnis yfir glæsilegar hallir, sögulegar brýr og fallegar byggingar. Við mælum sérstaklega með siglingu við sólsetur, með möguleika á Prosecco og hefðbundnum feneyskum smáréttum." },
      { title: "Prosecco vínferð", image: "/images/svc-feneyjar-prosecco.jpg", imageAlt: "Freyðivínsglas lyft yfir grænum vínekrum Prosecco-hæðanna", text: "Njóttu dagsferðar um fallegar vínekrur og grænar hæðir Prosecco-héraðsins með einkabílstjóra. Heimsæktu fjölskyldurekin víngerðarhús, smakkaðu frábært Prosecco og njóttu ljúffengs hádegisverðar með hefðbundnum réttum úr héraðinu." },
      { title: "Soave og Valpolicella – Vínleið um Veneto", image: "/images/svc-feneyjar-valpolicella.jpg", imageAlt: "Vínekrur fyrir neðan miðaldakastalann í Soave", text: "Upplifðu tvö af þekktustu vínhéruðum Veneto í fallegri vínferð um Soave og Valpolicella. Heimsæktu tvö víngerðarhús, smakkaðu úrvalsvín á borð við Amarone og Soave og njóttu hefðbundins ítalsks hádegisverðar í stórkostlegu umhverfi vínekra og sögulegra þorpa." },
      { title: "Gondólaferðir í Feneyjum", image: "/images/svc-feneyjar-gondola.jpg", imageAlt: "Gondóla á Canal Grande", text: "Upplifðu rómantíska stemningu Feneyja í einkagondóla um falleg og þröng síki borgarinnar. Sigldu undir sögulegar brýr og fram hjá glæsilegum byggingum – einstök upplifun sem er sérstaklega heillandi við sólsetur." },
      { title: "Matarferðir í Feneyjum", image: "/images/svc-feneyjar-matur-2.jpg", imageAlt: "Glaður hópur við borð á útikaffihúsi í Feneyjum", text: "Kynntu þér einstaka matar- og vínmenningu Feneyja í skemmtilegri gönguferð með staðkunnugum leiðsögumanni. Heimsæktu hefðbundna bacari-vínbari, smakkaðu ljúffenga cicchetti-smárétti og njóttu ítalskra vína í heillandi stemningu borgarinnar." },
      { title: "Murano", image: "/images/svc-feneyjar-murano.jpg", imageAlt: "Litrík hús við síki á Burano", text: "Bátsferð til Murano og Burano – glerblástur og litrík hús." },
      { title: "Palazzo Ducale", image: "/images/borg-feneyjar-palazzo-ducale.jpg", imageAlt: "Hertogahöllin í Feneyjum séð frá Canal Grande", text: "Miðar og leiðsögn um Hertogahöllina og Markúsarkirkjuna." },
      { title: "Miðakaup & transfer", image: "/images/borg-feneyjar-vatnataxi.jpg", imageAlt: "Vatnataxi á Canal Grande í Feneyjum", text: "Miðar á söfn, vatnataxi frá flugvelli og aðstoð við gistingu." },
    ],
    planning: "Sendu okkur dagsetningar og fjölda – við sjáum um rest, frá flugvelli til gondólu.",
  },
  {
    slug: "sikiley",
    name: "Sikiley",
    navLabel: "Sikiley",
    eyebrow: "Eyjan í suðri",
    title: "Sikiley",
    lead: "Taormina, Etna, Palermo og grísku hofin – með bílstjóra og leiðsögn.",
    image: "/images/sikiley-hero.jpg",
    imageAlt: "Gríska leikhúsið í Taormina með Etnu í baksýn",
    cardImage: "/images/sikiley-hero.jpg",
    intro: ["Sikiley er heill heimur út af fyrir sig – best að ferðast um eyjuna með bílstjóra og leiðsögumanni sem þekkja hana."],
    servicesTitle: "Ferðir og upplifanir á Sikiley",
    services: [
      { title: "Taormina – Perla Sikileyjar", image: "/images/svc-sikiley-taormina.jpg", imageAlt: "Útsýni úr gríska leikhúsinu í Taormina yfir ströndina", text: "Gönguferð um einn fallegasta bæ Sikileyjar, með heimsókn í hið forna gríska leikhús og tíma til að njóta heillandi miðbæjarins." },
      { title: "Etna – Ævintýri á eldfjallinu", image: "/images/svc-sikiley-etna.jpg", imageAlt: "Snæviþakið Etna-fjall yfir strönd Sikileyjar", text: "Upplifðu stórbrotna náttúru Etnu með leiðsögumanni. Boðið er upp á fjölbreyttar ferðir, meðal annars jeppaferðir og gönguferðir um eldfjallasvæðið." },
      { title: "Palermo og Monreale – Saga og menning", image: "/images/svc-sikiley-palermo.jpg", imageAlt: "Dómkirkjan í Palermo", text: "Uppgötvaðu líflegar götur Palermo, sögufrægar byggingar, matarmarkaði og stórkostlegu dómkirkjuna í Monreale." },
      { title: "Siracusa og Ortigia – Faldar perlur", image: "/images/svc-sikiley-ortigia.jpg", imageAlt: "Gömul hús á sjávarvegg Ortigia í Siracusa", text: "Gönguferð um heillandi götur Ortigia þar sem saga Grikkja og Rómverja mætir fallegum barokkbyggingum og líflegri stemningu." },
      { title: "Noto og Ragusa – Barokkperlur Sikileyjar", image: "/images/svc-sikiley-noto.jpg", imageAlt: "Barokkdómkirkjan San Nicolò í Noto efst á breiðum tröppum", text: "Ferð um tvo af fallegustu barokkbæjum Sikileyjar þar sem stórkostlegur arkitektúr, þröngar götur og falleg torg heilla gesti." },
      { title: "Agrigento – Dalur hofanna", image: "/images/svc-sikiley-agrigento.jpg", imageAlt: "Concordia-hofið í Dal hofanna í Agrigento", text: "Heimsókn á eitt merkilegasta fornminjasvæði Sikileyjar með glæsilegum grískum hofum og fróðlegri leiðsögn." },
    ],
    planning: "Dagsferðir, hringferð um eyjuna eða villa á Sikiley – við plönum ferðina með ykkur.",
  },
];

export const cityDestinations = destinations.filter((d) => !d.custom);

/* --------------- FERÐALAGIÐ & SÉRSTÖK TILEFNI --------------- */

// Bella Italia er ekki með hópferðaleyfi – því er talað um ferðalagið og sérstök tilefni, ekki hópferðir.
export const wedding = {
  eyebrow: "Ferðalög um Ítalíu",
  title: "Allt fyrir ferðalagið þitt á Ítalíu",
  lead: "Hjá Bella Italia tökum við á móti öllum fyrirspurnum sem tengjast ferðalögum um Ítalíu, hvort sem um er að ræða einstaklinga, pör, fjölskyldur, vinahópa eða stærri hópa.",
  image: "/images/ferdalag-rom-gata.jpg",
  imageAlt: "Litrík gata í Róm með bougainvillea á húsveggjunum",
  image2: "/images/ferdalag-trastevere.jpg",
  image2Alt: "Gamall Fiat 500 í steinlagðri götu í Trastevere í Róm",
  intro: [
    "Við aðstoðum við skipulagningu ferða af öllum stærðum og gerðum, hvort sem það eru rútuferðir, lestarferðir, einkabílar, akstur með bílstjóra, skoðunarferðir eða önnur þjónusta sem tengist ferðalaginu.",
    "Með þekkingu okkar á Ítalíu og öflugu samstarfsneti um allt land hjálpum við ykkur að finna réttu lausnirnar og gera ferðalagið sem ánægjulegast.",
    "Hafið samband við okkur með ykkar hugmyndir og óskir – við aðstoðum ykkur með ánægju!",
  ],
  ideas: [] as string[],
  occasionsTitle: "Við sjáum um skipulagið fyrir ykkur",
  occasionsImage: "/images/tilefni-kertabord.jpg",
  occasionsImageAlt: "Dekkuð borð með kertaljósum á þakverönd í Róm að kvöldi",
  occasions: [
    "Hvort sem þið eruð að skipuleggja lítið fjölskylduafmæli, stórafmæli, ættarmót, vinnuferð eða ráðstefnu á Ítalíu, þá aðstoðum við ykkur við að finna réttu lausnina.",
    "Við tökum að okkur skipulagningu ferða fyrir einstaklinga og hópa af öllum stærðum, allt frá gistingu, ráðstefnusölum og veitingum til rútuferða, akstursþjónustu og skoðunarferða með leiðsögn.",
    "Engin hugmynd er of lítil eða of stór. Segið okkur hvað þið hafið í huga og við hjálpum ykkur að láta það verða að veruleika.",
  ],
  extras: [
    "Fjölskylduafmæli & ættarmót",
    "Brúðkaup",
    "Vinnuferðir & ráðstefnur",
    "Fyrirtækja- & hvataferðir",
    "Rútuferðir",
    "Skoðunarferðir & leiðsögn",
    "Sérsniðin ferðaþjónusta",
  ],
};
