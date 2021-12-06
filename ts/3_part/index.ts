let index: number = 8;
let text: string = 'test';
let isTrue: boolean = false;
let isNull: null = null;
let isUndefined: undefined = undefined;

let id: number | string = '123';

let mas: string[] = ['text1', 'text2', 'text3'];
let array: number[] = [1,2,3];

let obj: { x: number; y: number; } = {
    x: 10,
    y: 20,
};

class Col {

}
let col: Col = new Col();


// ANY TYPE
const json = '{ "x":10, "y":20 }';
const coordinates = JSON.parse(json);
console.log(coordinates);
{
    const json = '{ "x":10, "y":20 }';
    const coordinates: {x: number, y: number} = JSON.parse(json);
    console.log(coordinates)
}
