const Intern = require('../lib/Intern');

describe("Intern", () => {
  const testIntern = new Intern("testName", "testID", "testEmail", "testSchool");

  test("getName() returns the employee's name", () => {
    expect(testIntern.getName()).toBe("testName")
  })

  test("getID() returns the employee's ID", () => {
    expect(testIntern.getID()).toBe("testID")
  })

  test("getEmail() returns the employee's email", () => {
    expect(testIntern.getEmail()).toBe("testEmail")
  })

  test("getSchool() returns the school", () => {
    expect(testIntern.getSchool()).toBe("testSchool")
  })

  test("getRole() returns Intern", () => {
    expect(testIntern.getRole()).toBe("Intern")
  })
})