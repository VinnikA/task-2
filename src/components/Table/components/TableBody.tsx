import { TableBodyType } from "../../../types";
import { useAppSelector } from "../../../hooks";
import TableRow from "./TableRow";
import { getActive, getSummary } from "../../../helpers";

const TableBody: React.FC<TableBodyType> = ({position}) => {

  const notes = useAppSelector(state => state.notes.list);
  const archived = useAppSelector(state => state.notes.showArchived);

  const summary = getSummary(notes);
  const notesByCondition = getActive(notes, 'archived', archived);

  const showMessage = !notesByCondition.length;

  return (
    <div className="table">
      {position === 'top' && 
        notesByCondition.map(item => 
          <TableRow 
            key={item.name}
            position={position}
            note={item}
          />)
      }
      {position === 'top' && 
        showMessage && 
        <div className="table__message">
          There are no notes!
        </div>
      }
      {position === 'bottom' && 
        summary.map(item =>
          <TableRow
            key={item.name} 
            position={position} 
            note={item}
          />
        )
      }
    </div>
  )
}

export default TableBody;