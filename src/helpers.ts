import { categories } from "./constants";

export function getFiltredByCategory(notes: any[], key: string, keyValue: string) {
  return notes.filter(el => {
    (key as (keyof typeof el))
    return el[(key as (keyof typeof el))] === keyValue
  });
};

export function getActive(notes: any[], key: string, keyValue: boolean) {
  return notes.filter(el => {
    (key as (keyof typeof el))
    return el[(key as (keyof typeof el))] === keyValue
  });
};

export function getSummary(notes: any[]) {
  const result = [];
  for (const keyValue of categories) {
    const allByCategory = getFiltredByCategory(notes, 'category', keyValue);
    const activeItems = getActive(allByCategory, 'archived', false);
    result.push({
      name: keyValue, 
      active: activeItems.length,
      archived: allByCategory.length - activeItems.length
    })
  }
  return result;
}