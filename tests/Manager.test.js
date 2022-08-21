const Manager = require('../lib/Manager');

describe("Manager", () => {
  const testManager = new Manager("testName", "testID", "testEmail", "testOfficeNumber");

  test("getName() returns the employee's name", () => {
    expect(testManager.getName()).toBe("testName")
  })

  test("getID() returns the employee's ID", () => {
    expect(testManager.getID()).toBe("testID")
  })

  test("getEmail() returns the employee's email", () => {
    expect(testManager.getEmail()).toBe("testEmail")
  })

  test("getOffice() returns the office number", () => {
    expect(testManager.getOffice()).toBe("testOfficeNumber")
  })

  test("getRole() returns Manager", () => {
    expect(testManager.getRole()).toBe("Manager")
  })
})