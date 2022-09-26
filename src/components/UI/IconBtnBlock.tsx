import { BtnBlockProps } from "../../types";
import IconBtn from "./IconBtn";

const IconBtnBlock: React.FC<BtnBlockProps> = ({namesAndActions}) => {
  return (
    <div className="icon-btn-block">
      {
        namesAndActions.map(item => 
          <IconBtn 
            key={item.name} 
            name={item.name} 
            action={item.action} 
          />)
      }
    </div>
  )
}

export default IconBtnBlock;