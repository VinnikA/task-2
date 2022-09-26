import { NameProps } from "../../types";
import { FaShoppingCart, FaRandom, FaRegLightbulb, FaQuoteRight } from "react-icons/fa";

const Icon: React.FC<NameProps> = ({name}) => {
  return (
    <div className="round-icon">
      {name === 'Task' && <FaShoppingCart />}
      {name === 'Random Thought' && <FaRandom />}
      {name === 'Idea' && <FaRegLightbulb />}
      {name === 'Quote' && <FaQuoteRight />}
    </div>
  )
}

export default Icon