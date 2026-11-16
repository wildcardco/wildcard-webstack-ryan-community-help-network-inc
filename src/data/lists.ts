export type CheckItem = {
  id: string;
  label: string;
};

export type CheckGroup = {
  id: string;
  label: string;
  items: CheckItem[];
};

/** Homepage suggested food donations, split into tickable items under the published categories. */
export const foodGroups: CheckGroup[] = [
  {
    id: "staples",
    label: "Pantry staples",
    items: [
      { id: "pasta", label: "Pasta" },
      { id: "rice", label: "Rice" },
      { id: "beans", label: "Beans" },
      { id: "pasta-sauce", label: "Pasta sauce" },
      { id: "peanut-butter", label: "Peanut butter" },
      { id: "jelly", label: "Jelly" },
      { id: "flour", label: "Flour" },
      { id: "sugar", label: "Sugar" },
      { id: "spices", label: "Spices" },
    ],
  },
  {
    id: "breakfast",
    label: "Breakfast / baking",
    items: [
      { id: "cold-cereal", label: "Cold cereal" },
      { id: "cake-mixes", label: "Cake mixes" },
      { id: "muffin-mixes", label: "Muffin mixes" },
      { id: "pancake-mix", label: "Pancake mix" },
      { id: "syrup", label: "Syrup" },
    ],
  },
  {
    id: "helpers",
    label: "Meal helpers",
    items: [
      { id: "hamburger-helper", label: "Hamburger Helper" },
      { id: "side-dishes", label: "Side dishes" },
      { id: "soup-mixes", label: "Soup mixes" },
    ],
  },
  {
    id: "snacks",
    label: "Snacks",
    items: [
      { id: "crackers", label: "Crackers" },
      { id: "cookies", label: "Cookies" },
      { id: "microwave-popcorn", label: "Microwave popcorn" },
      { id: "granola-bars", label: "Granola bars" },
    ],
  },
  {
    id: "canned",
    label: "Canned goods",
    items: [
      { id: "canned-fruit", label: "Fruit" },
      { id: "canned-vegetables", label: "Vegetables" },
      { id: "canned-beef", label: "Beef" },
      { id: "canned-chicken", label: "Chicken" },
      { id: "canned-ham", label: "Ham" },
    ],
  },
  {
    id: "condiments",
    label: "Condiments",
    items: [
      { id: "ketchup", label: "Ketchup" },
      { id: "mustard", label: "Mustard" },
      { id: "mayo", label: "Mayo" },
    ],
  },
];

/** Household Pantry items as listed on the current pantry page. */
export const pantryItems: CheckItem[] = [
  { id: "all-purpose-cleaner", label: "All Purpose Cleaner" },
  { id: "dryer-softener-sheets", label: "Dryer Softener Sheets" },
  { id: "dish-soap", label: "Dish Soap" },
  { id: "kleenex", label: "Kleenex" },
  { id: "paper-towels", label: "Paper Towels" },
  { id: "feminine-supplies", label: "Feminine Supplies" },
  { id: "diapers", label: "Diapers/ Pull Ups" },
  { id: "baby-wipes", label: "Baby Wipes" },
  { id: "razors", label: "Razors" },
  { id: "toilet-paper", label: "Toilet Paper" },
  { id: "deodorant", label: "Deodorant" },
  { id: "laundry", label: "Laundry Detergent/ Pods" },
  { id: "toothpaste", label: "Toothpaste" },
  { id: "toothbrushes", label: "Toothbrushes" },
  { id: "bar-soap", label: "Bar Soap" },
  { id: "shampoo", label: "Shampoo" },
];
