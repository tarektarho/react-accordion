import { BASE_URL } from "../utils/constants"

export const getDummyData = async () => {
  try {
    const response = await fetch(BASE_URL)
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status code: ${response.status}`)
    }
    const responseData = await response.json()

    console.log("here")

    return responseData
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`An error occurred while fetching data: ${error.message}`)
    } else {
      throw new Error(`An unknown error occurred while fetching data`)
    }
  }
}
