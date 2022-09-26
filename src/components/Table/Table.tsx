import { useState } from "react";
import TableBody from "./components/TableBody";
import TableHeader from "./components/TableHeader";
import BtnBlock from "../UI/BtnBlock";

import { notes } from "../../constants";

type TableProps = {
  position: string
}

const Table: React.FC<TableProps> = ({position}) => {
  const [archived, setArchived] = useState(false);

  const handelClick = () => console.log('click');

  const addNote = [
    {name: 'add note', action: handelClick},
  ];
  
  return (
    <section className="section">
      <div className="table">
        <TableHeader position={position} />
        <TableBody position={position} notes={notes} archived={archived} />
      </div>
      {position === 'top' && <BtnBlock namesAndActions={addNote}/>}
    </section>
  )
}

export default Table;