import { NameAndActionProps } from "../../types"

const Btn: React.FC<NameAndActionProps> = ({name, action}) => {
  return (
    <button className="btn" onClick={action}>
      {name}
    </button> 
  )
}

export default Btn;