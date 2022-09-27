import { TableRowType } from "../../../types";
import { useAppDispatch } from "../../../hooks";
import { topTableTitles, bottomTableTitles } from "../../../constants";
import TableItem from "./TableItem";
import Icon from "../../UI/Icon";
import IconBtnBlock from "../../UI/IconBtnBlock";
import { archiveNote, removeNote, showEditForm } from "../../../store/noteSlice";

const TableRow: React.FC<TableRowType> = ({position, note}) => {

  const dispatch = useAppDispatch();

  const archived = note.archived;
  const styleMod = `table__row table__row_${position}`;
  const keys = position === 'top' 
    ? topTableTitles.map(el => el.toLowerCase()) 
    : bottomTableTitles.map(el => el.toLocaleLowerCase());
  const cat = note[('category' as (keyof typeof note))];
  const name = note[('name' as (keyof typeof note))];
  const id = note[('id' as (keyof typeof note))];

  const showEdited = () => {
    dispatch(showEditForm(id as number));
  };

  const toggleArchived = () => {
    dispatch(archiveNote(id as number)); 
  };

  const remove = () => {
    dispatch(removeNote(id as number));
  };

  const btnName = archived ? 'unarchive' : 'archive';

  const rowButtons = [
    {name: 'edit', action: showEdited},
    {name: btnName, action: toggleArchived},
    {name: 'remove', action: remove}
  ];

  return (
    <div className={styleMod} >
      <div className="table__item">
        {position === 'top' ?  <Icon name={cat}/> : <Icon name={name}/>}
        <div className="table__content">
          {name}
        </div>
      </div>
      {
        (keys as (keyof typeof note)[]).slice(1).map((key) => 
        <TableItem key={key} content={note[key]} category={cat} />)
      }
      {position === 'top' && <div className="table__item">
        <IconBtnBlock namesAndActions={rowButtons}/>
      </div>}
    </div>
  )
}

export default TableRow;