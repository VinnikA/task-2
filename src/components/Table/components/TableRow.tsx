import { TableRowType } from "../../../types";
import { topTableTitles, bottomTableTitles } from "../../../constants";
import TableItem from "./TableItem";
import Icon from "../../UI/Icon";
import IconBtnBlock from "../../UI/IconBtnBlock";

const TableRow: React.FC<TableRowType> = ({position, note, archived}) => {
 
  const styleMod = `table__row table__row_${position}`;
  const keys = position === 'top' 
    ? topTableTitles.map(el => el.toLowerCase()) 
    : bottomTableTitles.map(el => el.toLocaleLowerCase());

  const cat = note[('category' as (keyof typeof note))];
  const name = note[('name' as (keyof typeof note))];

  const edit = () => {
    console.log('edit');
  };

  const archive = () => {
    console.log('archive');
  };

  const unarchive = () => {
    console.log('unarchive');
  };

  const remove = () => {
    console.log('remove');
  };

  const toggledBtn = archived 
    ? {name: 'unarchive', action: unarchive} 
    : {name: 'archive', action: archive};

  const rowButtons = [
    {name: 'edit', action: edit},
    toggledBtn,
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