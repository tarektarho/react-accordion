import { render, screen, fireEvent } from "@testing-library/react"
import ErrorPopup from "../ErrorPopup"

describe("ErrorPopup Component", () => {
  test("renders correctly with message", () => {
    // Mock props
    const mockProps = {
      message: "An error occurred",
      onClose: vi.fn(),
    }

    // Render the ErrorPopup component
    render(<ErrorPopup {...mockProps} />)

    // Check if the error message is rendered
    const errorMessage = screen.getByText(mockProps.message)
    expect(errorMessage).toBeInTheDocument()

    // Check if the close button is rendered
    const closeButton = screen.getByRole("button")
    expect(closeButton).toBeInTheDocument()
  })

  test("calls onClose when close button is clicked", () => {
    // Mock props
    const mockProps = {
      message: "An error occurred",
      onClose: vi.fn(),
    }

    // Render the ErrorPopup component
    render(<ErrorPopup {...mockProps} />)

    // Simulate close button click
    const closeButton = screen.getByRole("button")
    fireEvent.click(closeButton)

    // Check if onClose was called
    expect(mockProps.onClose).toHaveBeenCalled()
  })
})
