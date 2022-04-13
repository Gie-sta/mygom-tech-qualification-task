export type Item = number | string | object;
// export type Item = {
//   id: number | string;
//   category?: string;
//   subCategory?: string;
//   name: string;
// };

export interface IList {
  title: String;
  items: Record<string, Item>[];
  // labels: Record<string, string>;
}

type IData = IList;

export const data: IData = {
  title: "Chose items",
  items: [
    {
      id: 1,
      category: "category 1",
      subCategory: "subcategory 1",
      name: "item1",
    },
    {
      id: 2,
      category: "category 1",
      subCategory: "subcategory 2",
      name: "item2",
    },
    {
      id: 3,
      category: "category 1",
      subCategory: "subcategory 2",
      name: "item3",
    },
    {
      id: 4,
      category: "category 2",
      subCategory: "subcategory 1",
      name: "item4",
    },
    {
      id: 5,
      category: "category 2",
      subCategory: "subcategory 2",
      name: "item5",
    },
    {
      id: 6,
      category: "category 1",
      subCategory: "subcategory 1",
      name: "item6",
    },
    {
      id: 7,
      category: "category 1",
      subCategory: "subcategory 2",
      name: "item7",
    },
    {
      id: 8,
      category: "category 2",
      subCategory: "subcategory 1",
      name: "item8",
    },
    {
      id: 9,
      category: "category 2",
      subCategory: "subcategory 2",
      name: "item9",
    },
    {
      id: 10,
      category: "category 2",
      subCategory: "subcategory 1",
      name: "item10",
    },
    {
      id: 11,
      category: "category 1",
      subCategory: "subcategory 1",
      name: "item11",
    },
  ],
};
