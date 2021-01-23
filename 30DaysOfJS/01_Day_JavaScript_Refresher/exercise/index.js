const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
]
  
/**
 * 1、declare an empty array
 */

function exercise1() {
    const arr1 = new Array(4);
    console.log('exercise1', arr1);
}

exercise1();

/**
 * 2、Declare an array with more than 5 number of elements
 */

function exercise2() {
    const arr = ['first', 'second', 'third', 'fourth', 'sixth'];
    console.log('exercise2', arr);
}

exercise2();

/**
 * 3、Find the length of your array
 */

function exercise3() {
    console.log('exercise3', countries.length);
    console.log('exercise3', webTechs.length);
}

exercise3();

/**
 * 4、Get the first item, the middle item and the last item of the array
 */

function exercise4() {
    let countriesLen = parseInt(countries.length/2);
    let first = countries.indexOf(0);
    let last = countries.lastIndexOf(0);
    let middle = countries.indexOf(countriesLen)
    console.log('exercise4', first, middle, last);
}

exercise4();