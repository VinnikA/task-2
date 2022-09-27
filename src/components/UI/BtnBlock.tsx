import { BtnBlockProps } from "../../types";
import Btn from "./Btn";

const BtnBlock: React.FC<BtnBlockProps> = ({namesAndActions}) => {

  return (
    <div className="btn-block">
      {
        namesAndActions.map(item => 
          <Btn 
            key={item.name} 
            name={item.name} 
            action={item.action} 
          />
        )
      }
    </div>
  )
}

export default BtnBlock;