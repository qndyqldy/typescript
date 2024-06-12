/**
 * 조건부 타입
 * 삼항연산자를 이용하여 조건에 따른 타입 선택
 * Generic과 함께 사용
 */
// example
type A = number extends string ? string: number;

type ObjA = {
    a: number;
}

type ObjB = {
    a: number;
    b: number;
}

type B = ObjB extends ObjA ? number: string;
const a : ObjB extends ObjA ? number: string = 1;

/**
 * 제네릭과 조건부 타입
 */
type StringNumberSwitch<T> = T extends number ? string : number;
const b: StringNumberSwitch<string> = 1;
const c: StringNumberSwitch<number> = 'a';

function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces<T>(text: any){
    if(typeof text === 'string') {
        return text.replaceAll(' ', '');
    } else {
        return undefined;
    }
}

let result = removeSpaces('hi im youngwook');
console.log(result);
console.log(result.toUpperCase());
let result2 = removeSpaces(undefined);