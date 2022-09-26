import { noteType, TableBodyType } from "../../../types";
import { categories } from "../../../constants";
import TableRow from "./TableRow";
import { getActive, getSummary } from "../../../helpers";

const TableBody: React.FC<TableBodyType> = ({position, notes, archived}) => {

  const summary = getSummary(notes);
  const notesByCondition = getActive(notes, 'archived', archived);

  return (
    <div className="table">
      {position === 'top' && 
        notesByCondition.map(item => 
          <TableRow 
            key={item.name}
            position={position}
            note={item}
            archived={archived}
          />)
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