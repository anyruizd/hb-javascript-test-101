import {
    generateRandomColor,
    filterNegativeNumbers,
    unctionalFilterNegativeNumbers,
    mapNumbersIntoStrings,
    functionalMapNumbersIntoStrings,
    printType,
    isPalindrome,
    Person,
    printOutPersonAge
} from './script.js';

describe ('generateRandomColor', () =>{
    it('should return an object containing r: g: b: ', () =>{
        expect(generateRandomColor()).toMatchObject({
            r: expect.any(Number),
            g: expect.any(Number),
            b: expect.any(Number)
        });
    });
});

describe('filterNegativeNumbers', () =>{
    it('should return a new array with positive numbers only', () => {
        expect(filterNegativeNumbers([-4, -6, -5, 0, 34, 54, -7])).toEqual([0, 34, 54]);
    });
});

