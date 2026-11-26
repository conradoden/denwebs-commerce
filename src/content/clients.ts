export type ClientLogo = {
  name: string;
  href: string;
  /** Local logo asset under /public */
  logo: string;
  /** Optional wider mark for marquee sizing */
  wide?: boolean;
};

/** Featured client brands shown on the homepage logo strip. */
export const clientLogos: ClientLogo[] = [
  {
    name: "Tropeaka",
    href: "https://tropeaka.com",
    logo: "/images/clients/tropeaka.png",
  },
  {
    name: "Sixthreezero",
    href: "https://www.sixthreezero.com",
    logo: "/images/clients/sixthreezero.png",
  },
  {
    name: "Wonderful Dental",
    href: "https://wonderfuldental.com",
    logo: "/images/clients/wonderful-dental.svg",
    wide: true,
  },
  {
    name: "Origin Tea",
    href: "https://origintea.com",
    logo: "/images/clients/origin-tea.png",
  },
  {
    name: "TheJewelleryRoom",
    href: "https://thejewelleryroom.com",
    logo: "/images/clients/thejewelleryroom.svg",
    wide: true,
  },
  {
    name: "Marc Robinson Jewelers",
    href: "https://marcrobinsonjewelers.com",
    logo: "/images/clients/marc-robinson.png",
  },
  {
    name: "M Robinson Fine Jewelers",
    href: "https://mrobinsonjewelers.com",
    logo: "/images/clients/m-robinson.png",
  },
  {
    name: "Treasures Jeweler",
    href: "https://treasuresjeweler.com",
    logo: "/images/clients/treasures.png",
  },
  {
    name: "Pryme",
    href: "https://prymesnacks.com.au",
    logo: "/images/clients/pryme.svg",
    wide: true,
  },
  {
    name: "Nice Rice",
    href: "https://nicerice.com.au",
    logo: "/images/clients/nice-rice.svg",
    wide: true,
  },
  {
    name: "Sip Coco",
    href: "https://sipcoco.com.au",
    logo: "/images/clients/sip-coco.svg",
    wide: true,
  },
  {
    name: "Prime Cuts Jerky",
    href: "https://primecutsjerky.com",
    logo: "/images/clients/prime-cuts.svg",
    wide: true,
  },
];
