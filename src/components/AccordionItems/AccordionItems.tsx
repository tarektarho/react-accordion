import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import "./style.css"

interface AccordionItem {
  title: string
  description: string
}

interface AccordionItemsProps {
  item: AccordionItem
  isActive: boolean
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>
  sectionIndex: number
}

const AccordionItems: React.FC<AccordionItemsProps> = ({ item, isActive, setActiveIndex, sectionIndex }) => {
  const toggleSection = () => {
    const newIndex = isActive ? null : sectionIndex
    setActiveIndex(newIndex)
  }
  return (
    <div
      data-testid="AccordionItems"
      className={`accordion-items-container flex-col cursor-pointer ${
        isActive ? "bg-[#E5F7F9] hover:bg-[#E5F7F9]/80" : ""
      }`}
      onClick={toggleSection}
    >
      <div className="flex items-start flex-row pt-[32px] pl-[16px] pb-[10px]">
        <div>{isActive ? <AiOutlineMinus size={18} /> : <AiOutlinePlus size={18} />}</div>
        <div className="text-[16px] font-semibold pl-[16px]">{item.title}</div>
      </div>
      {isActive && (
        <div data-testid="description" className="text-[16px] pl-[43px] pb-[32px]">
          {" "}
          {item.description}
        </div>
      )}
    </div>
  )
}

export default AccordionItems
