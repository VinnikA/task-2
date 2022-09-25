import TableBody from "./components/TableBody";
import TableHeader from "./components/TableHeader";
import Btn from "../UI/Btn";
import BtnBlock from "../UI/BtnBlock";

type TableProps = {
  position: string
}

const Table: React.FC<TableProps> = ({position}) => {
  return (
    <section className="section">
      <TableHeader position={position} />
      <TableBody />
      {position === 'top' && <BtnBlock />}
    </section>
  )
}

export default Table;