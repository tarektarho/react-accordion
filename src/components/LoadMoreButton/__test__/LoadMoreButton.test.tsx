import { render, screen, fireEvent } from "@testing-library/react"
import LoadMoreButton from "../LoadMoreButton"

describe("LoadMoreButton Component", () => {
  test("renders correctly", () => {
    // Mock props
    const mockProps = {
      disabled: false,
      onClick: vi.fn(),
      text: "Load More",
    }

    // Render the LoadMoreButton component
    render(<LoadMoreButton {...mockProps} />)

    // Check if the button text is rendered
    const buttonText = screen.getByText(mockProps.text)
    expect(buttonText).toBeInTheDocument()

    // Check if the icon is rendered
    const icon = screen.getByTestId("icon")
    expect(icon).toBeInTheDocument()
    expect(icon).toBeInstanceOf(SVGElement)
  })

  test("calls onClick when button is clicked", () => {
    // Mock props
    const mockProps = {
      disabled: false,
      onClick: vi.fn(),
      text: "Load More",
    }

    // Render the LoadMoreButton component
    render(<LoadMoreButton {...mockProps} />)

    // Simulate button click
    const button = screen.getByRole("button")
    fireEvent.click(button)

    // Check if onClick was called
    expect(mockProps.onClick).toHaveBeenCalled()
  })

  test("disables button when disabled prop is true", () => {
    // Mock props
    const mockProps = {
      disabled: true,
      onClick: vi.fn(),
      text: "Load More",
    }

    // Render the LoadMoreButton component
    render(<LoadMoreButton {...mockProps} />)

    // Check if the button is disabled
    const button = screen.getByRole("button")
    expect(button).toBeDisabled()
  })

  test("displays correct styles when the button is not disabled", () => {
    // Mock props
    const mockPropsEnabled = {
      disabled: false,
      onClick: vi.fn(),
      text: "Load More",
    }

    // Render the LoadMoreButton component with enabled state
    render(<LoadMoreButton {...mockPropsEnabled} />)
    const buttonEnabled = screen.getByRole("button")

    // Check if the button has correct enabled styles
    expect(buttonEnabled).toHaveClass("bg-[#82DB39] hover:bg-[#82DB39]/80")
    expect(buttonEnabled).not.toHaveClass("disabled:opacity-75 bg-[#6b7280] cursor-not-allowed")
  })
  test("displays correct styles when the button is disabled", () => {
    // Mock props
    const mockPropsDisabled = {
      disabled: true,
      onClick: vi.fn(),
      text: "Load More",
    }

    // Render the LoadMoreButton component with disabled state
    render(<LoadMoreButton {...mockPropsDisabled} />)
    const buttonDisabled = screen.getByRole("button")

    // Check if the button has correct disabled styles
    expect(buttonDisabled).toHaveClass("disabled:opacity-75 bg-[#6b7280] cursor-not-allowed")
    expect(buttonDisabled).not.toHaveClass("bg-[#82DB39] hover:bg-[#82DB39]/80")
  })
})
