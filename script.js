function generateRandomNumber(){
    const color = {};
    color.r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    color.g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    color.b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    return color;
}


function filterNegativeNumbers(array){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        if (array[i] >= 0){
            newArray.push(array[i]);
        }
    }
    return newArray;
}


function functionalfilterNegativeNumbers(array){
    return newArray = array.filter(function(x){ return x >= 0 });
}

function mapNumbersIntoStrings(array){
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        newArray[i] = array[i].toString();
    } 
    return newArray;
}

function functionalmapNumbersIntoStrings(array){
    return array.map(function (x){ return x.toString();});
}

function printType(variable){
    console.log(typeof(variable));
}


function isPalindrome(string){
    return string === string.split('').reverse().join('');
}


// First function test
console.log(generateRandomNumber());

// Second function test 
console.log(filterNegativeNumbers([-4, -6, -5, 0, 34, 54, -7]));
console.log(filterNegativeNumbers([-4, -6, -5, -1, -34, -54, -7]));

// Second function (functional) test
console.log(functionalfilterNegativeNumbers([-4, -6, -5, 0, 34, 54, -7]));
console.log(functionalfilterNegativeNumbers([-4, -6, -5, -1, -34, -54, -7]));

// Third function test
console.log(mapNumbersIntoStrings([-4, -6, -5, 0, 34, 54, -7]));

// Third function (functional) test
console.log(functionalmapNumbersIntoStrings([-4, -6, -5, 0, 34, 54, -7]));

// Fourth function test
printType('1');
printType(1);
printType([1, 2, 3, 4, 5]);
printType(printType);

// Fifth function test
console.log(isPalindrome("madam"));
console.log(isPalindrome("anitalavalatina"));
console.log(isPalindrome("holi"));