/// <reference types="vitest/globals" />
import "@testing-library/jest-dom"
import createFetchMock from "vitest-fetch-mock"
const fetchMocker = createFetchMock(vi)
fetchMocker.enableMocks()
