import React from "react"
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
  // Function to toggle the active section
  const toggleSection = () => {
    const newIndex = isActive ? null : sectionIndex // Calculate new active index
    setActiveIndex(newIndex) // Set the new active index using the provided setter function
  }

  return (
    <div
      data-testid="AccordionItems"
      className={`accordion-items-container flex-col cursor-pointer ${
        isActive ? "bg-[#E5F7F9] hover:bg-[#E5F7F9]/80" : ""
      }`}
      onClick={toggleSection} // Attach the toggleSection function to the click event
    >
      {/* Title and toggle icon */}
      <div className="flex items-start flex-row pt-8 pl-4 pb-2">
        <div>
          {isActive ? (
            <AiOutlineMinus size={18} /> // Render the minus icon when section is active
          ) : (
            <AiOutlinePlus size={18} /> // Render the plus icon when section is inactive
          )}
        </div>
        <div className="text-16 font-semibold pl-4">{item.title}</div> {/* Display the section title */}
      </div>

      {/* Description */}
      {isActive && ( // Render the description only if the section is active
        <div data-testid="description" className="text-16 pl-10 pb-8">
          {item.description} {/* Display the section description */}
        </div>
      )}
    </div>
  )
}

export default AccordionItems
