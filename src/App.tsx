import "./App.css"
import { useState, useEffect, useCallback } from "react"
import Accordion from "./components/Accordion/Accordion"
import LoadMoreButton from "./components/LoadMoreButton/LoadMoreButton"
import { getDummyData } from "./server/index"
import AccordionSkeleton from "./components/AccordionSkeleton/AccordionSkeleton"

const App = () => {
  const defaultLimit = 4
  const [products, setProducts] = useState<Product[]>([])
  const [totalItems, setTotalItems] = useState<number>(0)
  const [showSkeleton, setshowSkeleton] = useState(false)
  const [limit, setLimit] = useState<number>(defaultLimit)
  const [disableLoadMoreButton, setDisableLoadMoreButton] = useState<boolean>(false)

  const handleAccordionDataLimit = useCallback(
    (data: AccordionData) => {
      // Check if data.products is an array or a single object
      const productsArray = Array.isArray(data.products) ? data.products : [data.products]
      const offset = 0
      const endIndex = offset + limit
      setProducts(productsArray.slice(offset, endIndex)) // Another way of doing is to passthe limit as query param to the backend
    },
    [limit]
  )

  const increaseLimit = () => {
    if (limit === totalItems) {
      setDisableLoadMoreButton(true)
      return
    }
    setLimit(limit + 4)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setshowSkeleton(defaultLimit >= limit)
        const data: AccordionData = await getDummyData()
        handleAccordionDataLimit(data)
        setTotalItems(data.total)
        setInterval(() => setshowSkeleton(false), 1000)
      } catch (error) {
        console.error("Error fetching data:", error)
        //show frindaly error message to the user
        setProducts([])
        setshowSkeleton(true)
      }
    }
    fetchData()
  }, [limit, handleAccordionDataLimit])

  return (
    <div className="h-full flex m-0 justify-center items-cente">
      {showSkeleton || !products ? (
        <AccordionSkeleton />
      ) : (
        <section className="accordion-container bg-white h-screen grid place-items-center">
          <div className="px-[40px] w-full">
            <h1 className="font-bold text-[24px] mb-[16px]">Veelgestelde vragen</h1>
            <Accordion products={products} />
            <div className="footer-continer flex items-center justify-between mt-[32px]">
              <LoadMoreButton disabled={disableLoadMoreButton} onClick={increaseLimit} text="Bekijk alle vragen" />
              <span>
                Total items: {limit} out of {totalItems}
              </span>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default App
