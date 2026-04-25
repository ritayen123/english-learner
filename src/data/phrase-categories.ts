export interface PhraseCategory {
  id: string;
  label: string;
  icon: string;
  phraseIds: string[];
}

export const phraseCategories: PhraseCategory[] = [
  {
    id: "airport",
    label: "機場",
    icon: "✈️",
    phraseIds: [
      "t301","t302","t303","t304","t332","t333","t334","t335","t336",
      "t378","t385","t386","t393","t394","t399",
    ],
  },
  {
    id: "hotel",
    label: "住宿",
    icon: "🏨",
    phraseIds: [
      "t306","t307","t339","t340","t342","t343","t344","t345",
      "t365","t373","t383","t387","t388","t389","t390","t395",
    ],
  },
  {
    id: "restaurant",
    label: "餐廳",
    icon: "🍽️",
    phraseIds: [
      "t308","t309","t310","t311","t312","t356","t357","t367",
      "t370","t384","t392",
    ],
  },
  {
    id: "transport",
    label: "交通",
    icon: "🚇",
    phraseIds: [
      "t305","t313","t314","t315","t316","t322","t323","t324",
      "t325","t329","t330","t331","t341","t343","t352","t360",
      "t362","t368","t379","t397","t398",
    ],
  },
  {
    id: "shopping",
    label: "購物",
    icon: "🛍️",
    phraseIds: [
      "t317","t318","t319","t353","t361","t375","t376","t377","t396",
    ],
  },
  {
    id: "emergency",
    label: "緊急",
    icon: "🆘",
    phraseIds: [
      "t320","t321","t346","t354","t369","t371","t374","t380",
    ],
  },
];
