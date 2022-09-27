import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { hideEditForm, editNote } from "../../store/noteSlice";
import { FormData } from "../../types";
import { getDates, getDate } from "../../helpers";
import { categories } from "../../constants";
import BtnBlock from "../UI/BtnBlock";

const EditForms = () => {
  const dispatch = useAppDispatch();
  const nodeId = useAppSelector(state => state.notes.editetNoteId);
  const note = useAppSelector(state => state.notes.list.find(item => item.id === nodeId));
  const { 
    register, 
    formState: {errors}, 
    handleSubmit 
  } = useForm<FormData>({
    defaultValues: {
      noteCategory: note?.category,
      noteName: note?.name,
      noteContent: note?.content,
      noteStart: getDate(note?.dates[0]),
      noteEnd: getDate(note?.dates[1])
    }
  });

  const onSubmit = handleSubmit(data => {
    const editedNote = {
      category: data.noteCategory,
      name: data.noteName,
      content: data.noteContent,
      dates: getDates(data.noteStart, data.noteEnd)
    };
    dispatch(editNote(editedNote));
    dispatch(hideEditForm());
  });

  const onCancel = (e?: React.SyntheticEvent) => {
    if(e) {
      e.preventDefault();
    };
    dispatch(hideEditForm());
  };

  const buttons = [
    {name: 'cancel', action: onCancel},
    {name: 'submit', action: onSubmit}
  ];

  return (
    <div className="overlay">
      <form className="form" onSubmit={onSubmit} >
        <h2 className="form__heading">Edit the note</h2>
        <label className="form__label">Category: 
          <select 
            className="form__input" {...register('noteCategory')} >
            {categories.map(item => 
              <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
        <label className="form__label">Name: 
          <input className="form__input" {...register('noteName', {required: true})} />
        </label>
        <label className="form__label">Content: 
          <textarea className="form__input" {...register('noteContent', {required: true})} />
        </label>
        <label className="form__label">Start date: 
          <input type='date' className="form__input" {...register('noteStart')} />
        </label>
        <label className="form__label">End date: 
          <input type='date' className="form__input" {...register('noteEnd')} />
        </label>
        <BtnBlock namesAndActions={buttons}/>
      </form>
    </div>
  )
}

export default EditForms;