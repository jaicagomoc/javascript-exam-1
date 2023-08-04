import { filterEvenNumbers, 
         filterLengthWith4, 
         filterStartWithA 
        } from '../src/filter';

describe('array filter test', () => {
    // Please add test cases here
    test("filter: should return filteredevennumbers", () => {
        const numbers = [1, 2, 3, 4, 5, 6];
        const result = filterEvenNumbers(numbers);
        expect(result).toEqual([2, 4, 6]);   
      });
    
      test('filter: should return filterdlenghtwith4', () => {
        const words = ['apple', 'banana', 'kiwi', 'pear'];
        const result = filterLengthWith4(words);
        expect(result).toEqual(['kiwi', 'pear']); 
      });
    
      test('filter: should return filteredworkwitha', () => {
        const letters = ['apple', 'banana', 'kiwi', 'pear'];
        const result = filterStartWithA(letters);
        expect(result).toEqual(['apple']); 
      });
});