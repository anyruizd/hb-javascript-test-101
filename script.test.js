import {
    generateRandomColor,
    filterNegativeNumbers,
    functionalFilterNegativeNumbers,
    mapNumbersIntoStrings,
    functionalMapNumbersIntoStrings,
    printType,
    isPalindrome,
    Person,
    printOutPersonAge
} from './script.js';

describe ('generateRandomColor', () =>{
    const keys = ['r', 'g', 'b'];
    const color = generateRandomColor();
    it('should return an object containing r: g: b: ', () =>{
        // int numbers
        // range between 0-255
        expect(color).toMatchObject({
            r: expect.any(Number),
            g: expect.any(Number),
            b: expect.any(Number)
        });
    });

    it('should return numbers between 0-255 for each key', () =>{
        for (let i of keys){
            expect(color[i]).toBeGreaterThanOrEqual(0);
            expect(color[i]).toBeLessThanOrEqual(255);
        };
    });

    it('numbers generated should be integers', () =>{
        for (let i of keys){
            expect(color[i]).toEqual(parseInt(color[i]));
        }; 
    });
});

describe('filterNegativeNumbers', () =>{
    it('should return a new array with positive numbers only', () => {
        expect(filterNegativeNumbers([-4, -6, -5, 0, 34, 54, -7])).toEqual([0, 34, 54]);
    });
    it('should return an empty array if all numbers are negative', () => {
        expect(filterNegativeNumbers([-4, -6, -5, -1, -34, -54, -7])).toEqual([]); 
    });
    it('should return an empty array if another is inserted', () => {
        expect(filterNegativeNumbers([])).toEqual([]);
    });
    it('should return the same array if inserted is all positive', () => {
        expect(filterNegativeNumbers([4, 6, 5, 1, 34, 54, 7])).toEqual([4, 6, 5, 1, 34, 54, 7]);
    });
});

describe('functionalFilterNegativeNumbers', () =>{
    it('should return a new array with positive numbers only', () => {
        expect(functionalFilterNegativeNumbers([-4, -6, -5, 0, 34, 54, -7])).toEqual([0, 34, 54]);
    });
    it('should return an empty array if all numbers are negative', () => {
        expect(functionalFilterNegativeNumbers([-4, -6, -5, -1, -34, -54, -7])).toEqual([]); 
    });
    it('should return an empty array if another is inserted', () => {
        expect(functionalFilterNegativeNumbers([])).toEqual([]);
    });
    it('should return the same array if inserted is all positive', () => {
        expect(functionalFilterNegativeNumbers([4, 6, 5, 1, 34, 54, 7])).toEqual([4, 6, 5, 1, 34, 54, 7]);
    });
});

