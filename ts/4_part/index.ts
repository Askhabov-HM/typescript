import { stringify } from "querystring";

const badFunction = ( a: number, b: number ) => {
    a - b;
}

const goodFunction = ( c: number, d: number ): number => {
    return c + d;
}

function testFunc(first: number, second: string): string{
    return first + second;
}

const voidFunc = (a: number): void => {
    console.log(234)
}
const neverFunct = (b:string): never => {
    throw Error('test error');
}

// 4.5 Destructirization

const destruct = ({first, second}: {first: number, second: boolean} ): void => {
    console.log(first);
    console.log(second);
}