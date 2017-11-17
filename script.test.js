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

describe('mapNumbersIntoStrings', () => {
    it('should return a new array with all its elements converted into String', () => {
        expect(mapNumbersIntoStrings([-4, -6, -5, 0, 34, 54, -7])).toEqual(['-4', '-6', '-5', '0', '34', '54', '-7']);
    });
    it('should return the same array if is a string array', () => {
        expect(mapNumbersIntoStrings(['4', '6', '5', '0', '34', '54', '7'])).toEqual(['4', '6', '5', '0', '34', '54', '7']);
    });
    it('should return an empty array if another is inserted', () => {
        expect(mapNumbersIntoStrings([])).toEqual([]);
    });
});

describe('functionalMapNumbersIntoStrings', () => {
    it('should return a new array with all its elements converted into String', () => {
        expect(functionalMapNumbersIntoStrings([-4, -6, -5, 0, 34, 54, -7])).toEqual(['-4', '-6', '-5', '0', '34', '54', '-7'])
    });
    it('should return the same array if is a string array', () => {
        expect(functionalMapNumbersIntoStrings(['4', '6', '5', '0', '34', '54', '7'])).toEqual(['4', '6', '5', '0', '34', '54', '7']);
    });
    it('should return an empty array if another is inserted', () => {
        expect(functionalMapNumbersIntoStrings([])).toEqual([]);
    });
});

describe('printType', () => {
    const spy = jest.spyOn(global.console,'log');
    const types = ['string', 'number','function','undefined','object'];
    const variables = ['any', 2, function (){}, undefined, []];
    for (let i=0; i< types.length; i++){
        printType(variables[i]);
        it('should call the console', () => {
            expect(spy).toHaveBeenCalled();
        });
        it('should print type into the console', () => {
            expect(spy).toBeCalledWith(types[i]);
        });
    };
});

describe('isPalindrome', () => {
    it('should return true or false if is or not a palindrome ', () => {
        expect(isPalindrome('anitalavalatina')).toBeTruthy();
        expect(isPalindrome('holi')).toBeFalsy();
    });

    it('should return is palindrome even if array has capital letters and spaces', () => {
        expect(isPalindrome('Anita Lava la Tina')).toBeTruthy();
    });
});

describe('Person', () => {
    const spy2 = jest.spyOn(global.console,'log');
    const person = new Person('Any', 26);
    it('should return name and age when is called', () => {
        expect(person).toMatchObject({
            name: 'Any',
            age: 26
        });
    });

    it('should print the name into the console', () => {
        person.printName();
        expect(spy2).toBeCalledWith('Any');
    });
});

describe('printOutPersonAge', () => {
    const spy3 = jest.spyOn(global.console,'log');
    const person = new Person('Any', 26);
    it('should print the age into the console', () => {
        printOutPersonAge(person);
        expect(spy3).toBeCalledWith(26);
    });
});