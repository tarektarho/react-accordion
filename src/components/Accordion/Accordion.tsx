import React, { useState } from "react"
import "./style.css"
import AccordionItems from "../AccordionItems/AccordionItems"

interface AccordionProps {
  products: Product[]
}

const Accordion: React.FC<AccordionProps> = ({ products }) => {
  // Store active section index in the state
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  return (
    <div className="accordion-main">
      {/* Render actual accordion items */}
      {products.map((item, index) => (
        <AccordionItems
          isActive={index === activeIndex}
          item={item}
          key={item.id}
          setActiveIndex={setActiveIndex}
          sectionIndex={index}
        />
      ))}
    </div>
  )
}

export default Accordion
