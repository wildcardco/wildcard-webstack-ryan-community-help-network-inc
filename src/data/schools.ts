export type School = {
  name: string;
  corporation: string;
  giftCard: boolean;
};

/** Corporations in the order written on /buddy-bags1/. */
export const corporations = [
  "Geminus Head Start",
  "Crown Point Community School Corporation",
  "Lake Central School Corporation",
  "Hanover Community School Corporation",
  "Tri-Creek School Corporation",
] as const;

/**
 * School list as written on the Buddy Bags page.
 * Piefer is the spelling on that page and is flagged for the owner.
 * Wheeler, Hanover Central, and Lowell middle schools receive a $25 gift card instead of a bag.
 */
export const schools: School[] = [
  {
    name: "Geminus Head Start",
    corporation: "Geminus Head Start",
    giftCard: false,
  },
  {
    name: "Eisenhower Elementary School",
    corporation: "Crown Point Community School Corporation",
    giftCard: false,
  },
  {
    name: "Lake Street Elementary School",
    corporation: "Crown Point Community School Corporation",
    giftCard: false,
  },
  {
    name: "MacArthur Elementary School",
    corporation: "Crown Point Community School Corporation",
    giftCard: false,
  },
  {
    name: "Solon Robinson Elementary School",
    corporation: "Crown Point Community School Corporation",
    giftCard: false,
  },
  {
    name: "Timothy Ball Elementary School",
    corporation: "Crown Point Community School Corporation",
    giftCard: false,
  },
  {
    name: "Wheeler Middle School",
    corporation: "Crown Point Community School Corporation",
    giftCard: true,
  },
  {
    name: "Bibich Elementary School",
    corporation: "Lake Central School Corporation",
    giftCard: false,
  },
  {
    name: "Homan Elementary School",
    corporation: "Lake Central School Corporation",
    giftCard: false,
  },
  {
    name: "Kolling Elementary School",
    corporation: "Lake Central School Corporation",
    giftCard: false,
  },
  {
    name: "Piefer Elementary School",
    corporation: "Lake Central School Corporation",
    giftCard: false,
  },
  {
    name: "Prostman Elementary School",
    corporation: "Lake Central School Corporation",
    giftCard: false,
  },
  {
    name: "Watson Elementary School",
    corporation: "Lake Central School Corporation",
    giftCard: false,
  },
  {
    name: "Hanover Learning Academy",
    corporation: "Hanover Community School Corporation",
    giftCard: false,
  },
  {
    name: "Jane Ball Elementary School",
    corporation: "Hanover Community School Corporation",
    giftCard: false,
  },
  {
    name: "Red Cedars Elementary School",
    corporation: "Hanover Community School Corporation",
    giftCard: false,
  },
  {
    name: "Lincoln Elementary School",
    corporation: "Hanover Community School Corporation",
    giftCard: false,
  },
  {
    name: "Hanover Central Middle School",
    corporation: "Hanover Community School Corporation",
    giftCard: true,
  },
  {
    name: "Oak Hill Elementary School",
    corporation: "Tri-Creek School Corporation",
    giftCard: false,
  },
  {
    name: "Lake Prairie Elementary School",
    corporation: "Tri-Creek School Corporation",
    giftCard: false,
  },
  {
    name: "Three Creeks Elementary School",
    corporation: "Tri-Creek School Corporation",
    giftCard: false,
  },
  {
    name: "Lowell Middle School",
    corporation: "Tri-Creek School Corporation",
    giftCard: true,
  },
];
