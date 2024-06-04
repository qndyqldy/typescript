/**
 * 1. 합집합 타입 -> union type
 */
let a: string | number | boolean;
a = 10;
a = 'string';
a = true;

let arr: (number | string | boolean) [] = [1, 'string', true];

type Dog = {
    name: string;
    color: string;
}

type Person = {
    name: string;
    language: string;
}

type Union1 = Dog | Person;

let union1: Union1 = {
    name: '욱',
    language: 'korean'
}
let union2: Union1 = {
    name: '절구',
    color: 'black&white'
}
let union3: Union1 = {
    name: '이름',
    language: '언어',
    color: '색'
}
// let union4: Union1 = {
//     language: '언어',
//     color: '색'
// }

/**
 * 2. 교집합 타입 - Intersection 타입
 * 객체의 모든 property 포함해야 함
 * 하나라도 빠지면 타입 오류 발생
 */

let variable: number & string;

type Intersection = Dog & Person;

let intersection1: Intersection = {
    name: '이름',
    language: '언어',
    color: '색'
}
