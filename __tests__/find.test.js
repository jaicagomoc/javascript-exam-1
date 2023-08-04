import { firstGrownUp, 
         firstOrange, 
         firstLengthOver5Name 
        } from "../src/find";

describe("array find test", () => {
  // Please add test cases here
  test('find:should return firstgrownUp', () => {
    const ages = [10, 15, 20, 25];
    const result = firstGrownUp(ages);
    expect(result).toBe(20); 
  });
  
  test('find:should return firstorange', () => {
    const fruit = ['apple', 'banana', 'orange', 'kiwi'];
    const result = firstOrange(fruit);
    expect(result).toBe('orange'); 
  });
  
  test('find: should return firstlenghtover5name', () => {
    const names = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve'];
    const result = firstLengthOver5Name(names);
    expect(result).toBe('Charlie'); 
  });
});
