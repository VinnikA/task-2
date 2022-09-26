import { TableItemType } from "../../../types"

const TableItem: React.FC<TableItemType> = ({content, category, icon}) => {
  return (
    <div className="table__item">
      <div className="table__content">
       {content}
      </div>
    </div>
  )
}

export default TableItem