import agro from "../assets/cover_images/cover_agro.jpg";
import askana from "../assets/cover_images/cover_askana.jpg";
import benjy from "../assets/cover_images/cover_benjy.jpg";
import champy from "../assets/cover_images/cover_champy.jpg";
import dizen from "../assets/cover_images/cover_dizen.jpg";
import fastlane from "../assets/cover_images/cover_fastlane.jpg";
import horizon from "../assets/cover_images/cover_horizon.jpg";
import logomarks from "../assets/cover_images/cover_logomarks.jpg";
import orka from "../assets/cover_images/cover_orka.jpg";
import prodact from "../assets/cover_images/cover_prodact.png";
import selected from "../assets/cover_images/cover_selected.jpg";
import owens from "../assets/cover_images/cover_owens.png";
import tbilisi from "../assets/cover_images/cover_tbilisi.jpg";
import thermorum from "../assets/cover_images/cover_thermorum.png";
import touch from "../assets/cover_images/cover_touch.jpg";
import winnerprints from "../assets/cover_images/cover_winnerprints.jpg";
import zentivents from "../assets/cover_images/cover_zentivents.jpg";
import agrohub from "../assets/cover_images/cover_agrohub.jpg";
import chiri from "../assets/cover_images/cover_chiri.jpg";
import dara from "../assets/cover_images/cover_dara.jpg";
import orni from "../assets/cover_images/cover_orni.jpg";
import lost from "../assets/cover_images/cover_lost.jpg";
import viva from "../assets/cover_images/cover_viva.jpg";
import rose from "../assets/cover_images/cover_wineRose.jpg";
import georgia from "../assets/cover_images/cover_georgia.jpg";

import {
  agrohubImages,
  horizonImages,
  orkaImages,
  benjysImages,
  champyImages,
  dizenImages,
  soowensImages,
  logosmarksImages,
  askanaImages,
  prodactImages,
  selectedLogosImages,
  fastlaneImages,
  tbilisiLibImages,
  thermorumImages,
  touchImages,
  zentiventsImages,
  agroImages,
  chiriImages,
  daraImages,
  lostImages,
  orniImages,
  vivaImages,
  winnerprintsImages,
  wineRoseImages,
  georgiaImages,
} from "./imagesData/exportImages";

const projectsData = [
  {
    id: 0,
    name: "Horizon",
    image: horizon,
    link: "/project-detail/Horizon",
    projectImages: horizonImages,
    about:
      "HORIZON is an architectural company based in Georgia, which values exclusivity and collaborative approach to every customer. This company manages to meet these requirements depicting different and diverse desires of customers in architecture.",
    scope: ["strategy", "logo", "brand identity"],
  },
  {
    id: 1,
    name: "Orka",
    image: orka,
    link: "/project-detail/Orka",
    projectImages: orkaImages,
    about:
      "ORKA is a full-service digital marketing agency from Germany. It provides personalized project management services, from boosting sales to developing campaigns and strategies.",
    scope: ["logotype", "brand identity", "digital marketing", "typography"],
  },
  {
    id: 2,
    name: "Benjy's",
    image: benjy,
    link: "/project-detail/Benjy's",
    projectImages: benjysImages,
    about:
      "Benjy's is Georgian based brand, producing brandy, liquor and chocolate. Benjy's is a character who simultaneously carries antiquity and novelty and is the ambassador of a modern, modernist product based on the traditional knowledge of production in the XXI century.",
    scope: [
      "brand strategy",
      "naming",
      "logotype",
      "packaging",
      "web design",
      "illustration",
    ],
  },
  {
    id: 3,
    name: "Logos & Marks 2022 - 2023",
    image: selected,
    link: "/project-detail/Logos & Marks 2022 - 2023",
    projectImages: selectedLogosImages,
    about:
      "Here's our collection of logos and lettermarks, created between 2022-2023 and Representing variety of industries. Hope you will enjoy it.",
    scope: ["logotype"],
  },

  {
    id: 4,
    name: "Dizen",
    image: dizen,
    link: "/project-detail/Dizen",
    projectImages: dizenImages,
    about:
      "Dizen is a newly established company in Georgia that offers customers the highest quality furniture, accessories and interior materials (eg wallpapers, wallpaper, etc.), all that is needed for home furnishing and decoration.",
    scope: [
      "logotype",
      "brand identity",
      "typography",
      "strategy and communication",
    ],
  },
  {
    id: 5,
    name: "Wine Rose",
    image: rose,
    link: "/project-detail/Wine Rose",
    projectImages: wineRoseImages,
    about:
      "Rose Wine entrusted us to craft a logo and label design that embodies the essence of their Georgian-based wines. Our objective was to convey the tender and feminine qualities of their brand, which resulted in a delicate and elegant design.",
    scope: ["editorial design", "logotype", "packaging"],
  },
  {
    id: 6,
    name: "Prodact Conference",
    image: prodact,
    link: "/project-detail/Prodact Conference",
    projectImages: prodactImages,
    about:
      "Prodact is the First Georgian community uniting digital and tech product creators. Annually Prodact invites professionals from various spheres, so they can share valuable information with public.",
    scope: ["digital marketing", "brand identity"],
  },
  {
    id: 7,
    name: "Fastlane",
    image: fastlane,
    link: "/project-detail/Fastlane",
    projectImages: fastlaneImages,
    about:
      "Fastlane is an event of the Pamo agency, a German-based brand. Pamo focuses on the brokerage of sports and supercars. ",
    scope: ["logotype", "brand identity", "digital marketing", "typography"],
  },
  {
    id: 8,
    name: "Tbilisi library",
    image: tbilisi,
    link: "/project-detail/Tbilisi library",
    projectImages: tbilisiLibImages,
    about:
      "Tbilisi Libraries unites all multifunctional libraries based in Georgia. Teamed libraries support each other in providing accessible resources for their clients. Tbilisi libraries entrusted us with the task of creating new logotype, branding identity and creation of visual content on social media platforms.",
    scope: [
      "logotype",
      "brand identity",
      "visual content",
      "digital marketing",
    ],
  },
  {
    id: 9,
    name: "Zentivents",
    image: zentivents,
    link: "/project-detail/Zentivents",
    projectImages: zentiventsImages,
    about:
      "Switzerland - based brand Zentivents organizes music events, where people enjoy electronic music and good vibes. Zentivents desire was to rebrand its identity and create more vivid brand image.",
    scope: [
      "logotype",
      "brand identity",
      "digital marketing",
      "illustration",
      "typography",
    ],
  },
  {
    id: 10,
    name: "Orni",
    image: orni,
    link: "/project-detail/Orni",
    projectImages: orniImages,
    about:
      "ORNI Typeface is modern Georgian Typography. ORNI is a Georgian word and it means two, which has a two-way load. It symbolizes our earthly and spiritual union and is also a symbol of the united work of me and my father.",
    scope: ["typography"],
  },
  {
    id: 11,
    name: "Chateau askana",
    image: askana,
    link: "/project-detail/Chateau askana",
    projectImages: askanaImages,
    about:
      "Georgia is considered by many to be the '’cradle of wine’’ and its history can be traced back over 8000 years. Company 'Askaneli' was founded in 1998. The name “Askaneli” is associated with the small, magical village of Askana, located in the beautiful region of Guria. ",
    scope: ["logotype", "packaging"],
  },
  {
    id: 12,
    name: "S.owens",
    image: owens,
    link: "/project-detail/S.owens",
    projectImages: soowensImages,
    about:
      "Architectural design firm based in Dallas, TX, which focuses on production housing, community development, and custom homes. Architecture design firm is experienced in land planning and development along with continuous involvement throughout the build process, which provides exceptional architectural designs from a small to a large scale.",
    scope: ["motion design", "brand identity", "typography", "logotype"],
  },

  {
    id: 13,
    name: "Winner prints",
    image: winnerprints,
    link: "/project-detail/Winner prints",
    projectImages: winnerprintsImages,
    about:
      "We summarize the past year and want to show you four featured prints. ",
    scope: ["pring design"],
  },
  {
    id: 14,
    name: "Thermorum",
    image: thermorum,
    link: "/project-detail/Thermorum",
    projectImages: thermorumImages,
    about:
      "Quality is a habit! Thermorum's business is all about temperature regulation. They balance heat with coolness and cold with warmth. That's why we decided brad concept to be based on balance.",
    scope: ["logotype", " brand identity", "digital marketing"],
  },
  {
    id: 15,
    name: "Georgia made by Characters",
    image: georgia,
    link: "/project-detail/georgia_made_by_characters",
    projectImages: georgiaImages,
    about:
      "Georgia, small country from Eastern Europe became the guest of honor at the Frankfurter Buchmesse 2018, the world's largest annual trade fair for publishing, with over 7,150 exhibitors from more than 100 countries.",
    scope: ["editorial design", "logotype", "packaging"],
  },
  {
    id: 16,
    name: "Agrohub winery",
    image: agro,
    link: "/project-detail/Agrohub winery",
    projectImages: agrohubImages,
    about:
      "Agrohub Winery is one of the sub companies of Agrohub, which produces 12 different kinds of wine.  While using modern technology, Agrohub Winery also preserves Georgian traditional winemaking culture.",
    scope: ["logo", "brand identity", "packaging", "illustration"],
  },
  {
    id: 17,
    name: "Lost in the ocean",
    image: lost,
    link: "/project-detail/Lost in the ocean",
    projectImages: lostImages,
    about:
      "About 70% of Earth's surface is covered by oceans—that sure does make for a lot to study! You could easily argue that the planet should be called 'Water' instead of 'Earth'! Ocean sciences covers a huge area. So The posters are inspired by the rich ocean color range.",
    scope: ["pring design"],
  },
  {
    id: 18,
    name: "Viva",
    image: viva,
    link: "/project-detail/Viva",
    projectImages: vivaImages,
    about:
      "VIVA coffee is a blend of coffee varieties of the highest quality from Georgia.there is  4 product with different taste - Americano, Caramel, Cappuccino and Affogato.",
    scope: ["logotype", "brand identity", "packaging", "web design"],
  },
  {
    id: 19,
    name: "ChIRI dried fruits",
    image: chiri,
    link: "/project-detail/ChIRI dried fruits",
    projectImages: chiriImages,
    about:
      "This is new Product from Georgia. It contains the highest quality of organic natural ingredients. At this moment we have only 4 product with different ingredients - apple and pear, 2 types of plums and persimmon. The packages are looking natural and global among other brands.",
    scope: ["logotype", "brand identity", "packaging", "illustration"],
  },
  {
    id: 20,
    name: "Dara 1981",
    image: dara,
    link: "/project-detail/Dara 1981",
    projectImages: daraImages,
    about:
      "Dara1981 is a new Georgian font. The idea of creating it was born in cold and dark Georgia when Georgian was not used and even its scrip was not taken into account. The working on this font ended in 2015. The font is considered for vast size captions and titles such as posters and banners, as well as suspicious texts. It can be used for print.It’s light and thin letters make the font distinctive. Besides that you are capable of making individual changes if necessary.",
    scope: ["type design"],
  },
  {
    id: 21,
    name: "agrohub V13",
    image: agrohub,
    link: "/project-detail/agrohub V13",
    projectImages: agroImages,
    about:
      "Agrohub is a main hypermarket in georgia. The mission of the project was to raise awareness about existing 13 vitamins, emphasize their role and importance for optimal health and promote organic food and healthy lifestyle among population.",
    scope: [
      "brand strategy",
      "brand identity",
      "digital marketing",
      "campaign",
      "illustration",
    ],
  },
  {
    id: 22,
    name: "Logos & marks 2017-2019",
    image: logomarks,
    link: "/project-detail/Logos & marks 2017-2019",
    projectImages: logosmarksImages,
    about:
      "Here's our collection of logos and marks, created between 2017-2019 and Representing variety of industries. Hope you will enjoy it.",
    scope: ["logotype"],
  },
  {
    id: 23,
    name: "Champy",
    image: champy,
    link: "/project-detail/Champy",
    projectImages: champyImages,
    about:
      "we try to understand client’s requirements the best that we can and offer effective ways to solve for their business. we try to understand client’s requirements the best that we can and offer effective ways to solve for their business.",
    scope: [
      "logo design",
      "brand identity",
      "brand collateral",
      "website design",
    ],
  },
  {
    id: 24,
    name: "Touch",
    image: touch,
    link: "/project-detail/Touch",
    projectImages: touchImages,
    about:
      "we try to understand client’s requirements the best that we can and offer effective ways to solve for their business. we try to understand client’s requirements the best that we can and offer effective ways to solve for their business.",
    scope: [
      "logo design",
      "brand identity",
      "brand collateral",
      "website design",
    ],
  },
];

export default projectsData;
