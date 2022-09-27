export type TableHeaderProps = {
  position: string
}

export type NameProps = {
  name: string | number | boolean
};

export type NameAndActionProps = {
  name: string,
  action?: (e: React.SyntheticEvent) => void
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
  position: string
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

export type NoteState = {
  list: noteType[],
  showArchived: boolean,
  editForm: boolean,
  addForm: boolean,
  editetNoteId: number
};

export type FormData = {
  noteCategory: string,
  noteName: string,
  noteContent: string,
  noteStart: string,
  noteEnd: string
};

export type EditNote = {
  category: string,
  name: string,
  content: string,
  dates: string[]
};