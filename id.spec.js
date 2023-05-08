// function createNewId() {
//   return Math.random();
// }

// function createNewId() {
//   return Math.floor(Math.random());
// }

// function createNewId(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

function createNewId(min = 0, max = 0, ids = []) {
  let id;
  let a = [];
  do {
    id = Math.floor(Math.random() * (max - min + 1)) + min;
    if (a.indexOf(id) === -1) {
      a.push(id);
    }
    if (a.length === max - min + 1) {
      if (ids.indexOf(id) > -1) {
        return "failed";
      }
    }
  } while (ids.indexOf(id) > -1);
  return id;
}

// test("returns a random number", () => {
//   const mockMath = Object.create(global.Math);
//   mockMath.random = jest.fn(() => 0.75);
//   global.Math = mockMath;
//   const id = createNewId();
//   expect(id).toBe(0.75);
// });

// test("returns a random number", () => {
//   jest.spyOn(Math, "floor");
//   const mockMath = Object.create(global.Math);
//   const globalMath = Object.create(global.Math);
//   mockMath.random = () => 0.75;
//   global.Math = mockMath;
//   const id = createNewId();
//   createNewId();
//   expect(Math.floor).toHaveBeenCalledWith(0.75);
//   global.Math = globalMath;
// });

test("returns a random number", () => {
  jest.spyOn(Math, "floor");
  const mockMath = Object.create(global.Math);
  const originalMath = Object.create(global.Math);
  mockMath.random = () => 0.75;
  global.Math = mockMath;
  const id = createNewId(10, 100);
  expect(id).toBe(78);
  global.Math = originalMath;
});

test("returns an integer", () => {
  const id = createNewId();
  expect(id).toBe(Math.floor(id));
});

test("generates a number within a specified range", () => {
  const id = createNewId(10, 100);
  expect(id).toBeLessThanOrEqual(100);
  expect(id).toBeGreaterThanOrEqual(10);
});

test("generates a unique number", () => {
  mockIds = [1, 2, 3, 4, 5];
  let id = createNewId(1, 5, mockIds);
  expect(id).toBe("failed");

  id = createNewId(1, 6, mockIds);
  expect(id).toBe(6);
});
