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
};

export const timeMark = () => {
  const time = new Date().toString().split(' ');
  return `${time[1]} ${time[2]}, ${time[3]}`;
};

const deleteZerro = (str: string) => str.replace(/^0+/, '');

export function getDates(start: string, end: string) {
  const s = start.split('-').map(el => deleteZerro(el)).reverse().join('/');
  const e = end.split('-').map(el => deleteZerro(el)).reverse().join('/');
  return [s, e];
};

const addZerro = (str: string) => str.length === 1 ? '0' + str : str;

export function getDate(strDate: string | undefined) {
  if(strDate) {
    return strDate.split('/').map(el => addZerro(el)).reverse().join('-');
  }
};

export const getString = (content: string | number | boolean | string[]) => {
  if(Array.isArray(content)) {
    return content[0].length && content[1].length ? content.join(' - ') : content.join('');
  } else {
    return content;
  }
};