import { getDummyData } from "../index"

const mockFetch = (data: AccordionData | unknown, ok = true) => {
  global.fetch = vi.fn().mockResolvedValue({
    ok,
    json: async () => data,
  })
}
export const mockData = {
  limit: 30,
  products: [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    },
  ],
  skip: 0,
  total: 100,
}

describe("getDummyData", () => {
  afterEach(() => {
    vi.clearAllMocks()
    fetchMock.mockClear()
  })

  test("fetches dummy data and returns data", async () => {
    mockFetch(mockData)

    const result = await getDummyData()

    expect(result).toEqual(mockData)
  })

  test("throws an error when response is not ok", async () => {
    mockFetch(null, false)

    await expect(getDummyData()).rejects.toThrow("Failed to fetch data")
  })

  test("throws an error when an unknown error occurs", async () => {
    const errorMessage = "Unknown Error"
    // Modify the fetch mock to simulate an unknown error
    fetchMock.mockRejectedValueOnce(new Error(errorMessage))

    await expect(getDummyData()).rejects.toThrow("An error occurred while fetching data")
  })
})
