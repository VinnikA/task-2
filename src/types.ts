import { table } from "console";
import { type } from "os";

export type NameProps = {
  name: string | number | boolean
};

export type NameAndActionProps = {
  name: string,
  action?: () => void
};

export type BtnBlockProps = {
  namesAndActions: NameAndActionProps[],
};

export type noteType = {
  id: number,
  category: string,
  name: string,
  content: string,
  created: string,
  dates: string[],
  archived: boolean
};

export type summryType = {
  name: string,
  active: number,
  archived: number
}

export type TableBodyType = {
  position: string,
  notes: noteType[] | summryType[],
  archived: boolean
};

export type TableRowType = {
  position: string,
  note: noteType | summryType,
  archived?: boolean
}

export type TableItemType = {
  content: number | string | string[] | boolean,
  category?: string | number | boolean,
  icon?: boolean
};