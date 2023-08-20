import { render, fireEvent, screen } from "@testing-library/react"
import AccordionItems from "../AccordionItems"

describe("AccordionItems Component", () => {
  const mockItem = {
    title: "Test Title",
    description: "Test Description",
  }

  test("renders title and toggle icon", () => {
    render(<AccordionItems item={mockItem} isActive={false} setActiveIndex={() => {}} sectionIndex={0} />)

    const titleElement = screen.getByText(mockItem.title)
    const plusIcon = screen.getByTestId("plus-icon")

    expect(titleElement).toBeInTheDocument()
    expect(plusIcon).toBeInTheDocument()
  })

  test("toggles section on click", () => {
    const mockSetActiveIndex = vi.fn()
    render(<AccordionItems item={mockItem} isActive={false} setActiveIndex={mockSetActiveIndex} sectionIndex={0} />)

    const accordionItems = screen.getByTestId("Accordion-items")

    fireEvent.click(accordionItems)

    expect(mockSetActiveIndex).toHaveBeenCalledWith(0) // Check if setActiveIndex was called with correct index
  })

  test("renders description when section is active", () => {
    render(<AccordionItems item={mockItem} isActive={true} setActiveIndex={() => {}} sectionIndex={0} />)

    const descriptionElement = screen.getByText(mockItem.description)

    expect(descriptionElement).toBeInTheDocument()
  })

  test("renders minus icon when section is active", () => {
    render(<AccordionItems item={mockItem} isActive={true} setActiveIndex={() => {}} sectionIndex={0} />)

    const minusIcon = screen.getByTestId("minus-icon")

    expect(minusIcon).toBeInTheDocument()
  })

  test("renders plus icon when section is inactive", () => {
    render(<AccordionItems item={mockItem} isActive={false} setActiveIndex={() => {}} sectionIndex={0} />)

    const plusIcon = screen.getByTestId("plus-icon")

    expect(plusIcon).toBeInTheDocument()
  })
})
