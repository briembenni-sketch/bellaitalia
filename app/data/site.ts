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
        "Farið er í litlum hópum, max 10 manns, með leiðsögn svo hópurinn er mjög lítill sem gerir upplifunina betri.",
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
    summary:
      "Vertu eins og innfæddur og láttu keyra þig um Róm á vespu! Rómversku vespu strákarnir sækja ykkur upp á hótel og keyra ykkur um þröngar götur Rómar.",
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
    summary:
      "Við erum með bíla í öllum stærðum og gerðum og sjáum um að koma þér til og frá FCO flugvellinum á einfaldan og öruggan máta.",
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
    summary:
      "Dreymir þig um að sjá Amalfi ströndina, sigla til Capri, sjá Pompeii eða skoða Napolí hvort sem er í dagsferð frá Róm eða lengri ferð.",
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
    summary:
      "Viltu ferðast á þægilegan hátt um borgina og ná að komast yfir sem mest á stuttum tíma með leiðsögumanni.",
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
        "Farið er í litlum hópum, max 10 manns, með leiðsögn svo hópurinn er mjög lítill sem gerir upplifunina betri.",
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
    summary:
      "Komdu og uppgötvaðu Róm á öðruvísi og skemmtilegri hátt á vespu í hliðarvagni. Skemmtileg skoðunarferð sem hentar allri fjölskyldunni.",
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
    summary:
      "Róm með Rómverjum! Gönguferð með innfæddum um borgina eilífu sem vita allt og meira til um sögu Rómaveldis.",
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
    summary:
      "Við getum aðstoðað við að finna réttu gistinguna í Róm. Erum með úrval af gistingum í öllum verðflokkum.",
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
    summary:
      "Viltu læra að elda pizzu eða gera alvöru pasta og gelato í Róm! Áhersla er lögð á ferskt árstíðabundið hráefni hverju sinni. Skemmtileg upplifun fyrir alla fjölskylduna.",
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
    text: "Áttum alveg frábæra ferð 6 fullorðnir og 2 börn til Ítalíu. Dvöldum 12 daga þar af 10 í villu í Tuscany og 2 í Róm. Hildur var alltaf til staðar og með ráðleggingar upp á 10 bæði fyrir ferðina og á meðan henni stóð. Mæli hiklaust með að skipuleggja ferðalagið með Hildi, margborgar sig.",
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
    text: "Stutt stopp í Róm nýttist vel með skjótri og góðri þjónustu Hildar hjá Bella Italia. Hótel, akstursþjónusta á flugvöll, gönguferð um Gyðingahverfið og Trastevere með frábærum leiðsögumanni, Riccardo, og önnur samskipti voru til fyrirmyndar. Allt stenst eins og stafur á bók. Mæli með Bella Italia til að fá sem mest út úr ferð til Ítalíu.",
  },
  {
    name: "Ásbjörg Morthens",
    trip: "Rómarheimsókn með vespuferð",
    text: "Þetta var bara frábært allt og hrikalega gott að fá svona góða punkta og þjónustu hjá Bella Italia. Farið til og frá flugvellinum munar öllu. Vespuferðin var alveg svakalega skemmtileg og virkilega gaman að skoða borgina svoleiðis. Hann Luca leiðsögumaðurinn mjög skemmtilegur og sagði skemmtilega frá, mæli klárlega með vespuferð. Veitingastaðurinn AD Hoc var líka frábær. Ekkert smá flottur, þjónustan og maturinn/vínin upp á 10. Mæli klárlega með að hafa samband við Hildi sem setur saman Rómar heimsókn upp á 10.",
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
  intro: [
    "Það getur oft verið vandasamt að velja réttu eignina eða leiguaðila þegar kemur að því að leigja hús á Ítalíu, enda mikið í boði.",
    "Við erum með fjöldann allan af villum í boði um alla Ítalíu og í öllum verðflokkum, og útbúum tilboð fyrir hverja og eina fjölskyldu allt eftir óskum hvers og eins.",
    "Vinsælasta héraðið er án efa Toskana, en ekki má gleyma að önnur svæði hafa líka sinn sérstaka sjarma, líkt og Umbria, Le Marche, að ógleymdu Puglia og stórkostlegu Sikiley.",
  ],
  practical: [
    "Öll húsin eru með sundlaug og staðsett uppi í sveit í rólegheitum en þó í grennd við markverða staði. Oftast er 2–5 km fjarlægð frá næsta þorpi/þjónustu og því nauðsynlegt að leigja bíl á meðan dvöl stendur.",
    "Flestar villur á Ítalíu eru leigðar út frá laugardegi til laugardags en við takmörkum okkur ekki við þá reglu og er hægt að leigja húsin hvaða daga vikunnar í eins marga daga og óskað er, að frátöldu tímabilinu frá júlí til ágúst þar sem vikudvöl frá laugardegi er krafist.",
  ],
  service: [
    "Bella Italia – Róm & Villur á Ítalíu sérhæfir sig í að finna réttu eignina fyrir hvern og einn hóp. Við vinnum með örfáum traustum útvöldum samstarfsaðilum og að panta í gegnum okkur tryggir þér gjaldfrjálst alla okkar þjónustu og milligöngu við þá aðila, bæði við bókun á húsi og ekki síður við öll plön sem viðkoma ferðinni, hvort sem það eru bílaleigubílar, kokkar, ljósmyndarar, vínferðir eða hvað annað sem fjölskyldan hefur áhuga á að gera á meðan dvöl stendur.",
    "Það kostar ekkert að fá tilboð, endilega hafðu samband og sjáðu hvort við finnum ekki réttu eignina fyrir ykkur!",
  ],
  pricingNote:
    "Hér er viðmiðun á meðalverði fyrir villur eftir stærð (ekki algilt, enda fer verðið eftir árstíma, fjölda herbergja og hvar á Ítalíu húsið er staðsett).",
  bookingBenefit:
    "Að bóka í gegnum okkur gefur þér aðgang að allri þjónustu gjaldfrjálst sem viðkemur heildarskipulagi á ferðinni, hvort sem það er aðstoð með bílaleigur, hótelpantanir, veitingastaði eða kokk upp í hús. Við erum til staðar 24/7 meðan á dvölinni stendur.",
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
    text: "Klassísk toskönsk villa úr steini með stórri sundlaug, ólífutrjám og útsýni yfir vínekrur. Rólegt sveitaumhverfi en stutt í þorp, veitingastaði og vínbændur.",
    features: ["Sundlaug", "Útsýni yfir vínekrur", "Stutt í þorp"],
  },
  {
    id: "umbria",
    name: "Sveitahús í Umbríu",
    region: "Umbria",
    image: "/images/villa-umbria.jpg",
    imageAlt: "Sundlaug í grænum hæðum Umbríu",
    text: "Græna hjarta Ítalíu. Endurgerð sveitahús í fallegri náttúru, oft með stórum garði og sundlaug, og miðaldabæir eins og Assisi, Orvieto og Spello í nágrenninu.",
    features: ["Sundlaug", "Friðsælt", "Miðaldabæir í nánd"],
  },
  {
    id: "marche",
    name: "Villa í Le Marche",
    region: "Le Marche",
    image: "/images/villa-marche-2.jpg",
    imageAlt: "Villa með sundlaug milli vínekra og hæða með þorpi í baksýn",
    text: "Le Marche við Adríahafið er minna þekkt en Toskana en hefur sama sjarma – hæðir, kastalar og strendur í grennd. Frábært verð fyrir fjölskyldur og vinahópa.",
    features: ["Sundlaug", "Strönd í nánd", "Gott verð"],
  },
  {
    id: "puglia",
    name: "Trullo í Puglia",
    region: "Puglia",
    image: "/images/villa-puglia.jpg",
    imageAlt: "Hvít trullo-hús með keilulöguðu þaki í Puglia",
    text: "Suður-Ítalía á sínu besta. Hvítkölkuð trullo- og masseria-hús með sundlaug, ólífulundir svo langt sem augað eygir og strendur Adríahafsins skammt undan.",
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
    text: "Kokkur kemur heim í villuna, eldar hátíðarkvöldverð úr hráefni úr héraðinu og gengur frá. Eða lærið að gera pasta, pizzu og gelato saman í eldhúsinu.",
  },
  {
    id: "ljosmyndari",
    title: "Ljósmyndari",
    image: "/images/service-ljosmyndari.jpg",
    imageAlt: "Ljósmyndari tekur myndir af pari í ítölskum garði",
    text: "Fagljósmyndari kemur í villuna eða á fallegan stað í nágrenninu og fangar fjölskylduna, vinahópinn eða tilefnið á ítölsku sumarkvöldi.",
  },
  {
    id: "vin",
    title: "Vínsmökkun",
    image: "/images/service-vinsmokkun.jpg",
    imageAlt: "Vínsmökkun með rauðvínsglösum og ítölskum smáréttum",
    text: "Heimsókn til vínbónda í héraðinu með smökkun og léttum hádegisverði, eða vínsmökkun með sommelier heima í villunni.",
  },
  {
    id: "akstur",
    title: "Akstur & transfer",
    image: "/images/service-bilstjori.jpg",
    imageAlt: "Klassískur bíll á sýprusviðargötu í Toskana",
    text: "Bílstjóri sækir ykkur á flugvöll eða lestarstöð og keyrir beint í villuna. Einnig dagsferðir með bílstjóra svo enginn þurfi að keyra heim eftir vínsmökkunina.",
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
  services: { title: string; text: string }[];
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
    lead: "Vatíkanið og Colosseum með leiðsögn, gönguferðir með Rómverjum, golfbíla- og vespuferðir, matarferðir, matreiðslunámskeið, flugvallarakstur og gisting.",
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
    lead: "Vagga endurreisnarinnar. Gönguferðir með leiðsögumanni, miðakaup í Accademia og Duomo og aðstoð við að skipuleggja heimsóknir og dagskrá.",
    image: "/images/dest-florens.jpg",
    imageAlt: "Dómkirkjan í Flórens séð yfir þökin",
    cardImage: "/images/dest-florens.jpg",
    intro: [
      "Flórens er borg sem best er að upplifa fótgangandi með einhverjum sem þekkir hana. Við aðstoðum við að skipuleggja daginn – hvað á að sjá, í hvaða röð og hvernig maður sleppur við biðraðirnar.",
      "Flórens er líka fullkominn viðkomustaður fyrir þá sem dvelja í villu í Toskana og vilja skreppa í borgina í dagsferð.",
    ],
    services: [
      { title: "Gönguferðir með leiðsögumanni", text: "Einkaleiðsögn á ensku um miðbæinn: Duomo, Piazza della Signoria, Ponte Vecchio, Uffizi-torgið og Oltrarno." },
      { title: "Leiðsögn um borgina", text: "Sérsniðin leiðsögn eftir áhuga – list, saga, matur eða handverk – fyrir einstaklinga og hópa." },
      { title: "Miðakaup í Accademia", text: "Við sjáum um miða á Davíð Michelangelos í Accademia-safninu og leiðsögn ef óskað er." },
      { title: "Duomo og Cupola", text: "Miðar og tímabókun í dómkirkjuna, hvelfingu Brunelleschis, klukkuturninn og skírnarkapelluna." },
      { title: "Skipulagning heimsókna og dagskrár", text: "Við setjum saman dagskrá fyrir dvölina: söfn, veitingastaðir, vínsmökkun í Chianti og dagsferðir til Siena, San Gimignano eða Pisa." },
    ],
    planning: "Segðu okkur hvenær þið eruð í Flórens, hve mörg og hvað ykkur langar að sjá – við setjum saman dagskrá og sjáum um miða og leiðsögn.",
  },
  {
    slug: "napoli-amalfi-pompei",
    name: "Napoli, Amalfi og Pompei",
    navLabel: "Napoli · Amalfi · Pompei",
    eyebrow: "Campania",
    title: "Napoli, Amalfi & Pompei",
    lead: "Dagsferðir frá Róm með einkabíl og leiðsögn, Pompeii, Napoli og Amalfi-ströndin – eða lengri dvöl við ströndina.",
    image: "/images/dest-amalfi.jpg",
    imageAlt: "Positano við Amalfi ströndina",
    cardImage: "/images/dest-amalfi.jpg",
    intro: [
      "Dreymir þig um að sjá Amalfi-ströndina, sigla til Capri, skoða Pompeii eða borða bestu pizzuna í heimi í Napoli? Við erum með frábært teymi í Campania og búum til ferðir fyrir hópa, einstaklinga og fjölskyldur.",
      "Leiðsögumenn, bílstjórar, bátar – við plönum allt eftir ykkar óskum, hvort sem er í dagsferð frá Róm eða lengri ferð.",
    ],
    services: [
      { title: "Dagsferðir frá Róm", text: "Sótt á hótel í Róm að morgni með einkabíl og bílstjóra, farið til Pompeii, Napoli eða Amalfi-strandarinnar og komið til baka að kvöldi." },
      { title: "Einkabíll og leiðsögn", text: "Bílstjóri og leiðsögumaður allan daginn – engar biðraðir, engin rúta, dagskráin eftir ykkar höfði." },
      { title: "Pompeii", text: "Leiðsögn um fornu borgina sem grófst undir ösku Vesúvíusar árið 79. Hægt að bæta við Herculaneum eða göngu upp á Vesúvíus." },
      { title: "Napoli", text: "Gönguferð um miðbæinn, Spaccanapoli og pizzan sem borgin er fræg fyrir. Miðakaup á söfn og fornminjar." },
      { title: "Amalfi-ströndin", text: "Positano, Amalfi og Ravello með bílstjóra eða á bát. Bátsferðir til Capri, sund og hádegisverður við sjóinn." },
    ],
    planning: "Hafðu samband ef þú ert á leið til Campania héraðsins og vantar aðstoð við að plana áhyggjulausa ferð – dagsferð eða lengri dvöl.",
  },
  {
    slug: "feneyjar",
    name: "Feneyjar",
    navLabel: "Feneyjar",
    eyebrow: "Veneto",
    title: "Feneyjar",
    lead: "Heildarþjónusta fyrir þá sem heimsækja borgina: gondólaferðir, gönguferðir með leiðsögumanni, matarferðir, Murano, Palazzo Ducale, miðakaup og transfer.",
    image: "/images/dest-feneyjar.jpg",
    imageAlt: "Kirkjan Santa Maria della Salute við Canal Grande í Feneyjum",
    cardImage: "/images/dest-feneyjar-2.jpg",
    intro: [
      "Feneyjar eru ólíkar öllum öðrum borgum og það skiptir öllu að skipuleggja dvölina vel – hvar á að gista, hvernig kemst maður frá flugvellinum og hvernig sleppur maður við mestu mannþröngina.",
      "Við bjóðum heildarþjónustu fyrir þá sem heimsækja Feneyjar og aðstoðum við að skipuleggja dvölina og allt sem til þarf.",
    ],
    services: [
      { title: "Gondólaferðir", text: "Einkagondóla um þröngu síkin – tilvalið í sólsetrinu eða sem sérstakt tilefni." },
      { title: "Gönguferðir með leiðsögumanni", text: "Markúsartorgið, Rialto, Dorsoduro og leyndu hverfin sem ferðamenn finna sjaldan sjálfir." },
      { title: "Matarferðir", text: "Cicchetti og vín á bacari-börum með innfæddum leiðsögumanni." },
      { title: "Murano", text: "Bátsferð til Murano og Burano – glerblástur, litrík hús og hádegisverður á eyjunum." },
      { title: "Palazzo Ducale", text: "Miðar og leiðsögn um Hertogahöllina, Markúsarkirkjuna og Andvarpsbrúna." },
      { title: "Miðakaup & transfer", text: "Miðar á söfn og viðburði, vatnataxi frá Marco Polo flugvelli og aðstoð við gistingu." },
    ],
    planning: "Sendu okkur dagsetningar og fjölda – við setjum saman dvölina í Feneyjum frá flugvelli til gondólu.",
  },
];

export const cityDestinations = destinations.filter((d) => !d.custom);

/* --------------- BRÚÐKAUP & SÉRSTÖK TILEFNI --------------- */

export const wedding = {
  eyebrow: "Brúðkaup & sérstök tilefni",
  title: "Brúðkaup og sérstök tilefni á Ítalíu",
  lead: "Brúðkaup í villu í Toskana, stórafmæli með einkakokk eða bónorð í gondólu í Feneyjum – við hjálpum til við að gera daginn ógleymanlegan.",
  image: "/images/brudkaup-villa.jpg",
  imageAlt: "Ítölsk villa með stórum garði í kvöldsól – umgjörð fyrir brúðkaup",
  image2: "/images/brudkaup-2.jpg",
  image2Alt: "Brúðhjón í gondólu í Feneyjum",
  intro: [
    "Ítalía er einn vinsælasti staðurinn í Evrópu fyrir brúðkaup og sérstök tilefni – og villa með sundlaug, útsýni og stórum garði er fullkominn rammi.",
    "Við erum að byggja upp þennan hluta þjónustunnar og tökum nú við fyrirspurnum. Segðu okkur frá tilefninu og við setjum saman tillögu í samstarfi við okkar fólk á Ítalíu.",
  ],
  ideas: ["Brúðkaup í villu", "Stórafmæli & ættarmót", "Bónorð & brúðkaupsafmæli", "Steggja- og gæsaferðir", "Fyrirtækjaferðir & hvataferðir"],
  extras: ["Villa fyrir allan hópinn", "Einkakokkur & veislumatur", "Ljósmyndari", "Vínsmökkun", "Akstur & transfer", "Blóm, tónlist & skreytingar"],
};
