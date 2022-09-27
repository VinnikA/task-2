import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../hooks";
import { hideAddForm, addNote } from "../../store/noteSlice";
import { FormData } from "../../types";
import { timeMark, getDates } from "../../helpers";
import { categories } from "../../constants";
import BtnBlock from "../UI/BtnBlock";

const AddForms = () => {
  const dispatch = useAppDispatch();

  const { register, formState: {errors}, handleSubmit } = useForm<FormData>();

  const onSubmit = handleSubmit(data => {
    dispatch(hideAddForm());
    const newNote = {
      id: Date.now(),
      category: data.noteCategory,
      name: data.noteName,
      content: data.noteContent,
      created: timeMark(),
      dates: getDates(data.noteStart, data.noteEnd),
      archived: false
    };
    dispatch(addNote(newNote));
    console.log(newNote);
  });

  const onCancel = (e?: React.SyntheticEvent) => {
    if(e) {
      e.preventDefault();
    };
    dispatch(hideAddForm());
  };

  const buttons = [
    {name: 'cancel', action: onCancel},
    {name: 'submit', action: onSubmit}
  ];

  return (
    <div className="overlay">
      <form className="form" onSubmit={onSubmit} >
        <h2 className="form__heading">Add a new note</h2>
        <label className="form__label">Category: 
          <select className="form__input" {...register('noteCategory')}>
            {categories.map(item => <option key={item} value={item}>{item}</option>)}
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

export default AddForms;