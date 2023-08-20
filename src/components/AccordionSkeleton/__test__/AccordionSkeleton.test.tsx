import { render, screen } from "@testing-library/react"
import AccordionSkeleton from "../AccordionSkeleton"

describe("AccordionSkeleton Component", () => {
  test("renders skeleton elements", () => {
    render(<AccordionSkeleton />)

    // Test for the existence of skeleton elements using their test IDs
    const skeletonContainer = screen.getByTestId("skeleton")
    const horizontalLine = screen.getByTestId("horizontal-line")
    const accordionMain = screen.getByTestId("accordion-main")
    const footerContainer = screen.getByTestId("footer-container")

    // Assert that the elements are rendered
    expect(skeletonContainer).toBeInTheDocument()
    expect(horizontalLine).toBeInTheDocument()
    expect(accordionMain).toBeInTheDocument()
    expect(footerContainer).toBeInTheDocument()
  })
})
