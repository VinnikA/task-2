import { TableItemType } from "../../../types";
import { getString } from "../../../helpers";

const TableItem: React.FC<TableItemType> = ({content, category, icon}) => {
  return (
    <div className="table__item">
      <div className="table__content">
        {getString(content)}
      </div>
    </div>
  )
}

export default TableItem;