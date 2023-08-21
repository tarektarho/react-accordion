import "./App.css"
import { useState, useEffect, useCallback } from "react"
import Accordion from "./components/Accordion/Accordion"
import LoadMoreButton from "./components/LoadMoreButton/LoadMoreButton"
import { getDummyData } from "./server/index"
import AccordionSkeleton from "./components/AccordionSkeleton/AccordionSkeleton"
import ErrorPopup from "./components/ErrorPopup/ErrorPopup"

const App = () => {
  const defaultLimit = 4
  const [products, setProducts] = useState<Product[]>([])
  const [totalItems, setTotalItems] = useState<number>(0)
  const [showSkeleton, setShowSkeleton] = useState(false)
  const [internalLimit, setInternalLimit] = useState<number>(defaultLimit)
  const [disableLoadMoreButton, setDisableLoadMoreButton] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  // Using useCallback to prevent unnecessary re-renders of child components when the parent component re-renders.
  // Handle setting the product limit for the accordion
  const handleAccordionDataLimit = useCallback(
    (data: AccordionData) => {
      // Check if data.products is an array or a single object
      const productsArray = Array.isArray(data.products) ? data.products : [data.products]
      const offset = 0
      const endIndex = offset + internalLimit
      setProducts(productsArray.slice(offset, endIndex)) // Set the displayed products based on the limit
    },
    [internalLimit]
  )

  // Fetch data and set up component when mounted or when limit changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        setShowSkeleton(defaultLimit >= internalLimit) // Show skeleton on first load or when limit changes
        const data: AccordionData = await getDummyData() // Fetch data from the server
        handleAccordionDataLimit(data) // Set the products based on the limit
        setTotalItems(data.limit) // Set the total number of items
        setTimeout(() => setShowSkeleton(false), 1000) // Hide skeleton after a delay to keep consistency.
        //setShowSkeleton(false)
        setError(null)
      } catch (error) {
        console.error("Error fetching data:", error) // log to Sentry
        setError("Something went wrong. Try again later")
        // Show a user-friendly error message and set up skeleton
        setProducts([])
        setShowSkeleton(true)
      }
    }
    fetchData() // Call the fetchData function
  }, [internalLimit, handleAccordionDataLimit])

  // Increase the limit when the "Load More" button is clicked
  const increaseLimit = () => {
    if (internalLimit >= totalItems) {
      setDisableLoadMoreButton(true) // Disable the button when all items are shown
      return
    }
    setInternalLimit(totalItems) // Set internalLimit to totalItems (Show all items)
  }

  const handleCloseError = () => {
    setError(null)
    window.location.href = "/"
  }

  const renderErrorPopUpIfAny = () => {
    if (error) {
      return (
        <div data-testid="error-popup" className="flex justify-center items-center h-screen">
          {error && <ErrorPopup message={error} onClose={handleCloseError} />}
        </div>
      )
    }
  }

  return (
    <div className="h-full flex m-0 justify-center items-cente">
      {showSkeleton || !products.length ? (
        <AccordionSkeleton />
      ) : (
        <section className="accordion-container bg-white h-screen grid place-items-center">
          <div className="px-4 w-full">
            <h1 className="font-bold text-2xl mb-4">Veelgestelde vragen</h1>
            <Accordion products={products} />
            <div className="footer-container flex flex-col md:flex-row items-center justify-between mt-8">
              <LoadMoreButton disabled={disableLoadMoreButton} onClick={increaseLimit} text="Bekijk alle vragen" />
              <span>
                Total items: {internalLimit} out of {totalItems}
              </span>
            </div>
          </div>
        </section>
      )}
      {renderErrorPopUpIfAny()}
    </div>
  )
}

export default App
