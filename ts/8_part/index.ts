const objt = {
    name: 'userName',
    age: 20,
    year: new Date(),
    someFunc(): boolean {
        return true;
    }
}

function logObj(obj: {name: string, age: number, year: Date}): void{
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.year);
}
// below bad code

// use Interface to be a good programmer

interface ObjInterface {
    name: string;
    age: number;
    year: Date;
    someFunc(): boolean;
}

function logObjSecond( obj: ObjInterface): void{
    console.log(obj.someFunc());
}