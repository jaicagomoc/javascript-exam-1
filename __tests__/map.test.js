import { addSerialNumber, halfNumbers, spliceNames } from "../src/map";

describe("array map test", () => {
  // Please add test cases here
test('map: should return halfnumber', () => {
  const numbers = [10, 20, 30];
  const result = halfNumbers(numbers);
  expect(result).toEqual([5, 10, 15]); 
});

test('map:should return splicenames', () => {
  const names = ['Aires', 'Ella', 'Jai'];
  const result = spliceNames(names);
  expect(result).toEqual(['Hello Aires', 'Hello Ella', 'Hello Jai']); 
});

test('map: should return addserialnumber', () => {
  const fruit = ['apple', 'banana', 'plum'];
  const result = addSerialNumber(fruit);
  expect(result).toEqual(['1. apple', '2. banana', '3. plum']); 
});
});
