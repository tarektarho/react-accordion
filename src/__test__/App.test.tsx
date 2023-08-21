import { render, screen, waitFor, fireEvent } from "@testing-library/react"
import App from "../App"

describe("App Component", () => {
  test("renders error popup when data fetch fails", async () => {
    vi.spyOn(global, "fetch").mockRejectedValueOnce(new Error("Fetch error"))

    render(<App />)
    await waitFor(() => {
      const errorPopup = screen.getByTestId("error-popup")
      expect(errorPopup).toBeInTheDocument()
    })

    const closeButton = screen.getByText("Close")
    fireEvent.click(closeButton)

    await waitFor(() => {
      const errorPopup = screen.queryByTestId("error-popup")
      expect(errorPopup).not.toBeInTheDocument()
    })
  })
})
