import { useAppDispatch, useAppSelector } from "../../../hooks";
import { SingleStringProps } from "../../../types";
import { topTableTitles, bottomTableTitles } from "../../../constants";
import IconBtnBlock from "../../UI/IconBtnBlock";
import { toggleViev, removeAll } from "../../../store/noteSlice";

const TableHeader: React.FC<SingleStringProps> = ({position}) => {

  const dispatch = useAppDispatch();
  const showHide = useAppSelector(state => state.notes.showArchived);

  const styleMod = `table__header table__header_${position}`;
  const notes = position === 'top' 
    ? topTableTitles 
    : bottomTableTitles;
  
  const showHideArchived = () => {
    dispatch(toggleViev());
  };

  const removeAllNotes = () => {
    dispatch(removeAll());
  };

  const btnName = showHide ? 'unarchive' : 'archive';

  const headerButtons = [
    {name: btnName, action: showHideArchived},
    {name: 'remove', action: removeAllNotes}
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
