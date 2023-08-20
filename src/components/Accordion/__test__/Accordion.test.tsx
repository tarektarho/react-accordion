import { render, fireEvent, screen } from "@testing-library/react"
import Accordion from "../Accordion"

describe("Accordion Component", () => {
  const mockProducts = [
    {
      id: 1,
      title: "Title 1",
      description: "Description 1",
    },
    {
      id: 2,
      title: "Title 2",
      description: "Description 2",
    },
  ]

  test("renders AccordionItems components", () => {
    render(<Accordion products={mockProducts} />)

    const accordionItems = screen.getAllByTestId("Accordion-items")

    expect(accordionItems).toHaveLength(mockProducts.length) // Check if correct number of AccordionItems are rendered
  })

  test("toggles active section on click", () => {
    render(<Accordion products={mockProducts} />)

    const firstAccordionItem = screen.getByTestId("plus-icon")

    fireEvent.click(firstAccordionItem)

    const activeAccordionItem = screen.getByTestId("description")

    expect(activeAccordionItem).toBeInTheDocument()
  })

  test("renders non-active AccordionItems component when section is not active", () => {
    render(<Accordion products={mockProducts} />)

    const firstAccordionItem = screen.getByTestId("minus-icon")
    fireEvent.click(firstAccordionItem)

    const nonActiveAccordionItem = screen.queryByText("Description 1")

    expect(nonActiveAccordionItem).not.toBeInTheDocument()
  })
})
