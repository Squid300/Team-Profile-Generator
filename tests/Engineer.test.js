const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
  const testEngineer = new Engineer("testName", "testID", "testEmail", "testGithub");

  test("getName() returns the employee's name", () => {
    expect(testEngineer.getName()).toBe("testName")
  })

  test("getID() returns the employee's ID", () => {
    expect(testEngineer.getID()).toBe("testID")
  })

  test("getEmail() returns the employee's email", () => {
    expect(testEngineer.getEmail()).toBe("testEmail")
  })

  test("getOffice() returns the github username", () => {
    expect(testEngineer.getGithub()).toBe("testGithub")
  })

  test("getRole() returns Engineer", () => {
    expect(testEngineer.getRole()).toBe("Engineer")
  })
})