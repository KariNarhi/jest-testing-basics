const functions = require("./functions");

// const initDatabase = () => console.log("Database initialized...");
// const closeDatabase = () => console.log("Database closed...");

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

const nameCheck = () => console.log("Checking names...");

describe("Checking names", () => {
  beforeEach(() => nameCheck());

  test("User is Jeff", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });

  test("User is Karen", () => {
    const user = "Karen";
    expect(user).toBe("Karen");
  });
});

// toBe
test("Should calculate 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// not.toBe
test("Should calculate 2 + 2 to not equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is opposite of toBeUndefined
// toBeTruthy matches any values that result "true"
// toBeFalsy matches any values that result "false"

// toBeNull
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test("Should be falsy", () => {
  expect(functions.checkValue(0)).toBeFalsy();
});

// toEqual
test("User should be John Doe object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "John",
    lastName: "Doe",
  });
});

// Less than and greater than
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// RegEx
test('There is no "I" in team ', () => {
  expect("team").not.toMatch(/I/i);
});

// Arrays
test("Admin should be in usernames", () => {
  usernames = ["John", "Karen", "Admin"];
  expect(usernames).toContain("Admin");
});

// Promise
test("Promise-based fetch, name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

// Async Await
test("Async-Await -based fetch, name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
