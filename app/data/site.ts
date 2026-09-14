// Allt efni síðunnar á einum stað — byggt á bellaitalia.is (upprunalega Wix-síðan).

export const site = {
  name: "Bella Italia",
  legalName: "Bella Italia slf.",
  tagline: "Róm & Villur á Ítalíu",
  description:
    "BellaItalia.is - Villur & hús um alla Ítalíu. Persónuleg þjónusta og öðruvísi ferðir um Róm og nágrenni. Þjónusta fyrir einstaklinga og hópa stóra sem smáa.",
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
    image: "/images/rom-vatikan.jpg",
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
    image: "/images/rom-vespa.jpg",
    imageAlt: "Vespuferð um götur Rómar",
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
    image: "/images/rom-flugvollur.jpg",
    imageAlt: "Einkabílstjóri með bíl við flugvöll",
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
    image: "/images/rom-amalfi.webp",
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
    image: "/images/rom-golfbill.jpg",
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
    image: "/images/rom-colosseum.jpg",
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
    image: "/images/rom-sidecar.jpg",
    imageAlt: "Vespa með hliðarvagni í Róm",
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
    image: "/images/rom-ganga.jpg",
    imageAlt: "Gönguferð um miðbæ Rómar",
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
    image: "/images/rom-matreidsla.jpg",
    imageAlt: "Kokkur býr til ferskt pasta",
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
    text: "Áttum alveg frábæra ferð 6 fullorðnir og 2 börn til Ítalíu. Dvöldum 12 daga þar af 10 í villu í Tuscany og 2 í Róm. Hildur var alltaf til staðar og með ráðleggingar upp á 10 bæði fyrir ferðina og á meðan henni stóð. Mæli hiklaust með að skipuleggja ferðalagið með Hildi, margborgar sig.",
  },
  {
    name: "Sólrún Sverrisdóttir",
    text: "Mæli 100% með ykkar þjónustu. Okkar ferð og sú þjónusta sem þið útveguðuð stóðst allar væntingar og rúmlega það. Takk fyrir okkur, áttum dásamlega dvöl í Casa Melograno í Marche héraði.",
  },
  {
    name: "Tryggvi Pálsson",
    text: "Hildur Jónsdóttir skipulagði fyrir okkur fjölskylduferð til Toscana. Við dvöldum stórkostlega viku á Villa Tramonto og allt stóðst. Fengum ljósmyndara og frábæran kokk fyrir hátíðarkvöldverðinn. Hildur og hennar Bella Italia fá okkar bestu meðmæli.",
  },
  {
    name: "Harpa Þórsdóttir",
    text: "Mæli með – fórum í sidecar-vespuferð 3 klst, æðisleg upplifun og frábærir guide-ar, stoppuðum á nokkrum vel völdum stöðum, Trevi, Vatican, Colosseum m.a. og fengum okkur kaffi og croissant. Mælum 110% með.",
  },
  {
    name: "Anna Toher",
    text: "Stutt stopp í Róm nýttist vel með skjótri og góðri þjónustu Hildar hjá Bella Italia. Hótel, akstursþjónusta á flugvöll, gönguferð um Gyðingahverfið og Trastevere með frábærum leiðsögumanni, Riccardo, og önnur samskipti voru til fyrirmyndar. Allt stenst eins og stafur á bók. Mæli með Bella Italia til að fá sem mest út úr ferð til Ítalíu.",
  },
  {
    name: "Ásbjörg Morthens",
    text: "Þetta var bara frábært allt og hrikalega gott að fá svona góða punkta og þjónustu hjá Bella Italia. Farið til og frá flugvellinum munar öllu. Vespuferðin var alveg svakalega skemmtileg og virkilega gaman að skoða borgina svoleiðis. Hann Luca leiðsögumaðurinn mjög skemmtilegur og sagði skemmtilega frá, mæli klárlega með vespuferð. Veitingastaðurinn AD Hoc var líka frábær. Ekkert smá flottur, þjónustan og maturinn/vínin upp á 10. Mæli klárlega með að hafa samband við Hildi sem setur saman Rómar heimsókn upp á 10.",
  },
];

export const gallery = [
  { src: "/images/gallery-01.jpg", alt: "Trevi gosbrunnurinn í Róm" },
  { src: "/images/gallery-02.jpg", alt: "Pantheon í Róm við sólarupprás" },
  { src: "/images/gallery-03.jpg", alt: "Kirkjuhvelfingar við Piazza Venezia í Róm" },
  { src: "/images/gallery-04.webp", alt: "Positano við Amalfi ströndina" },
  { src: "/images/gallery-05.jpg", alt: "Ponte Vecchio í Flórens" },
  { src: "/images/gallery-06.jpg", alt: "Veitingastaður með útsýni yfir hafið á Capri" },
  { src: "/images/gallery-07.jpg", alt: "Villa með sundlaug í Toskana" },
  { src: "/images/gallery-08.jpg", alt: "Kvöldverður á verönd í Toskana" },
  { src: "/images/gallery-09.jpg", alt: "Sýprusviðir og sveitavegur í Toskana" },
];

export const villaPricing = [
  { size: "1–4 herbergja villa", eur: "frá €1.500 vikan", isk: "um 230.000 kr." },
  { size: "4–5 herbergja villa", eur: "frá €2.500 vikan", isk: "um 370.000 kr." },
  { size: "6–7 herbergja villa", eur: "frá €4.000 vikan", isk: "um 600.000 kr." },
  { size: "8–9 herbergja villa", eur: "frá €5.000 vikan", isk: "um 750.000 kr." },
  { size: "10+ herbergja villa", eur: "frá €7.000 vikan", isk: "um 1.000.000 kr." },
];

export const villaRegions = ["Toscana", "Umbria", "Norður Ítalía", "Suður Ítalía", "Annað"];

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
