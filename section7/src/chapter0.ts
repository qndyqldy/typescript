/**
 * 제네릭
 */

// 제네릭 함수
// 함수의 인수에 따라 반환값의 타입을 ~
// T - 타입 변수
function func<T>(value: T): T {
    return value;
}

let num = func(10);
let bool = func(true);
let str = func('hi');
let arr = func<[number, number, number]>([1, 2, 3]);