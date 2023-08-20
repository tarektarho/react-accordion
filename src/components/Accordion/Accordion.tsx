import "./style.css"
import AccordionItems from "../AccordionItems/AccordionItems"
import { useState } from "react"

interface AccordionProps {
  products: Product[]
}

const Accordion: React.FC<AccordionProps> = ({ products }) => {
  //store active secion in the state
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  return (
    <div className="accordion-main">
      {
        // Render actual accordion items
        products.map((item, index) => {
          return (
            <AccordionItems
              isActive={index === activeIndex}
              item={item}
              key={item.id}
              setActiveIndex={setActiveIndex}
              sectionIndex={index}
            />
          )
        })
      }
    </div>
  )
}

export default Accordion
