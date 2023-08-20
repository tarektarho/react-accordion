import { render, fireEvent, screen } from "@testing-library/react"
import AccordionItemsComponent from "../AccordionItems"

const mockAccordionItem = {
  title: "Test Title",
  description: "Test Description",
}

test("renders AccordionItems component", () => {
  const setActiveIndexMock = vi.fn()
  render(
    <AccordionItemsComponent
      item={mockAccordionItem}
      isActive={false}
      setActiveIndex={setActiveIndexMock}
      sectionIndex={0}
    />
  )

  // Check if the title is rendered
  const titleElement = screen.getByText(/Test Title/i)
  expect(titleElement).toBeInTheDocument()

  const AccordionItems = screen.getByTestId("AccordionItems")
  // Simulate a click to toggle the section
  fireEvent.click(AccordionItems)
  expect(setActiveIndexMock).toHaveBeenCalledWith(0)
})
