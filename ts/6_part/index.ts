const arrayTest = ['1', '2', '3']; // Выведение типо массива
const arrayTestSecond: string[] = ['1', '2', '3']; // Аннтоация типа массива

const wrappedArray = [
    ['1', '2', '3'],
    ['4', '5', '6'],
];
const wrappedArraySecond: string[][] = [
    ['1', '2', '3'],
    ['4', '5', '6'],
];

const multipleTypesArray: (string | number)[] = [1, '1', '2', 3];
const multipleTypesArraySecond: (string | number)[] = ['1', '2',];
// we can push number type item in to array below