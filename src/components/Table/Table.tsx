import { SingleStringProps } from "../../types";
import { useAppDispatch } from "../../hooks";
import { showAddForm } from "../../store/noteSlice";
import TableBody from "./components/TableBody";
import TableHeader from "./components/TableHeader";
import BtnBlock from "../UI/BtnBlock";



const Table: React.FC<SingleStringProps> = ({position}) => {

  const dispatch = useAppDispatch();

  const handelClick = () => dispatch(showAddForm());

  const addNote = [
    {name: 'add note', action: handelClick},
  ];
  
  return (
      <section className="section">
        <div className="table">
          <TableHeader position={position} />
          <TableBody position={position} />
        </div>
        {position === 'top' && <BtnBlock namesAndActions={addNote}/>}
      </section>
  )
}

export default Table;