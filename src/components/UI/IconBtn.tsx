import { NameAndActionProps } from "../../types";
import { FaEdit, FaDownload, FaUpload, FaTrash } from "react-icons/fa";

const IconBtn: React.FC<NameAndActionProps> = ({name, action}) => {
  return (
    <button className="icon-btn" onClick={action}>
      {name === 'edit' && <FaEdit />}
      {name === 'archive' && <FaDownload />}
      {name === 'unarchive' && <FaUpload />}
      {name === 'remove' && <FaTrash />}
    </button> 
  )
}

export default IconBtn;