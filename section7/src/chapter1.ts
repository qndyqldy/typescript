/**
 * 첫 번째 사례
 */

function swap<T, U>(a: T, b: U) {
    return [b, a];
}

const [a, b] = swap('1', 2);

/**
 * 두 번째 사례
 */
function returnFirstValue<T>(data: [T, ...unknown[]]) {
    return data[0];
}

let num = returnFirstValue([0, 1, 2]);
let str = returnFirstValue(['a', 'b', 'c']);

/**
 * 세 번째 사례 -> T의 타입을 제한
 */
function getLength<T extends {length: number}>(data: T) {
    return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength('ywyim');
let var3 = getLength({length: 10});
console.log(var1);
console.log(var2);
console.log(var3);