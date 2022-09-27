import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NoteState } from "../types";
import { notes } from "../constants";

const initialState: NoteState = {
  list: notes,
  showArchived: false,
  editForm: false,
  addForm: false,
  editetNoteId: 0 
}

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    toggleViev(state) {
      state.showArchived = !state.showArchived
    },
    showAddForm(state) {
      state.addForm = true;
    },
    hideAddForm(state) {
      state.addForm = false;
    },
    addNote(state, action) {
      state.list.push(action.payload);
    },
    showEditForm(state, action: PayloadAction<number>) {
      state.editForm = true;
      state.editetNoteId = action.payload;
      console.log(action.payload);
    },
    hideEditForm(state) {
      state.editetNoteId = 0;
      state.editForm = false;
    },
    editNote(state, action: PayloadAction<[]>) {
      const note = state.list.find(item => item.id === state.editetNoteId);
      if(note) {
        console.log(action.payload);
      }
    },
    archiveNote(state, action: PayloadAction<number>) {
      const note = state.list.find(item => item.id === action.payload);
      if(note) {
        note.archived = !note.archived;
      }
    },
    removeNote(state, action: PayloadAction<number>) {
      state.list = state.list.filter(item => item.id !== action.payload);
    },
    removeAll(state) {
      state.list = [];
    }
  }
});

export const { 
  toggleViev,
  showAddForm,
  hideAddForm,
  addNote, 
  showEditForm, 
  hideEditForm,
  editNote, 
  archiveNote, 
  removeNote, 
  removeAll } = noteSlice.actions;

export default noteSlice.reducer;