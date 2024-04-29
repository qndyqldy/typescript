// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ['a', 'b', 'c'];
// 제네릭 문법
let boolArr: Array<boolean> = [true, false, true];
// 다중 타입
let multiArr: (number | string)[] = ['1', 1];
// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
    [1, 2, 3,], [4, 5, 6]
]

let doubleMultiArr: (number[] | string[])[] = [
    [1, 2, 3], ['a', 'b', 'c']
]

// 튜플 - 타입스크립트에서만
// 길이와 타입이 고정된 배열
let tup1:[number, number] = [1, 2];
let tup2:[number, string, boolean] = [1, "2", true];

const users: [string, number][] = [
    ['ywyim', 1],
    ['홍길동', 2],
    ['김두환', 3],
    ['구마적', 4],
    // [5, ''],
]