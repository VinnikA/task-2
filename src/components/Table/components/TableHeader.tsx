import { topTableTitles, bottomTableTitles } from "../../../constants";
import IconBtnBlock from "../../UI/IconBtnBlock";

type TableHeaderProps = {
  position: string
}

const TableHeader: React.FC<TableHeaderProps> = ({position}) => {
  const styleMod = `table__header table__header_${position}`;
  const notes = position === 'top' ? topTableTitles : bottomTableTitles;
  const headerButtons = [
    {name: 'archive'},
    {name: 'remove'}
  ];

  return (
    <div 
      className={styleMod}>
        {notes.map(item => <div key={item} className="table__title">{item}</div>)}
        {position === 'top' && <div className="table__title">
          <IconBtnBlock namesAndActions={headerButtons}/>
        </div>}
    </div>
  )
}

export default TableHeader;
