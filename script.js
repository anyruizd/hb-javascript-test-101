export function generateRandomColor(){
    const color = {};
    color.r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    color.g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    color.b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    return color;
}


export function filterNegativeNumbers(array){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        if (array[i] >= 0){
            newArray.push(array[i]);
        }
    }
    return newArray;
}


export function functionalfilterNegativeNumbers(array){
    return newArray = array.filter(function(x){ return x >= 0 });
}

export function mapNumbersIntoStrings(array){
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        newArray[i] = array[i].toString();
    } 
    return newArray;
}

export function functionalmapNumbersIntoStrings(array){
    return array.map(function (x){ return x.toString();});
}

export function printType(variable){
    console.log(typeof(variable));
}


export function isPalindrome(string){
    const newString = string.replace(/[^a-z0-9]/ig,'');
    return newString === newString.split('').reverse().join('');
}

export class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    printName(){
        console.log(this.name) 
    }
    get Age(){
        return this.age;
    }
  }


export function printOutPersonAge(person){
    console.log(person.Age);
}
