/// <reference types="vitest/globals" />
import "@testing-library/jest-dom"
// import { fetch } from "cross-fetch"
import createFetchMock from "vitest-fetch-mock"
// vi.mock("node-fetch")
const fetchMocker = createFetchMock(vi)
fetchMocker.enableMocks()
