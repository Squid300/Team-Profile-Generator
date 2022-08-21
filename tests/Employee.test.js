const Employee = require('../lib/Employee');

describe("Employee", () => {
  const testEmployee = new Employee("testName", "testID", "testEmail");

  test("getName() returns the employee's name", () => {
    expect(testEmployee.getName()).toBe("testName")
  })

  test("getID() returns the employee's ID", () => {
    expect(testEmployee.getID()).toBe("testID")
  })

  test("getEmail() returns the employee's email", () => {
    expect(testEmployee.getEmail()).toBe("testEmail")
  })

  test("getRole() returns Employee", () => {
    expect(testEmployee.getRole()).toBe("Employee")
  })
})