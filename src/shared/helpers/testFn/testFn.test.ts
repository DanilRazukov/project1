import { testFn } from "./testFn";

describe("testFn", () => {
  const result = "1 2"
  test("test", () => {
    expect(testFn(1, 2)).toBe(result)
  })
})
