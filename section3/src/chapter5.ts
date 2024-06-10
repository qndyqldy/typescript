/**
 * 타입 추론
 * 잘 이용하면 굳이 타입을 정의하지 않아도 됨
 * but. 모든 상황에 추론을 하지는 않음
 */

/* 1. 변수에 값을 초기화했을 때 -> 변수의 초기값을 이용하여 추론 */
// 타입 넓히기
let a = 10;
let b = 'string';
let c = {
    id: 1,
    name: 'ywyim',
    profile: {
        nickname: 'supply'
    }
};

let {id, profile} = c;

let [one, two, three] = [1, 'hello', true];

function func(message = "hello") {
    return message;
}

console.log(one);
console.log(two);
console.log(three);

/* any 타입의 진화 */
// 암묵적으로 any 타입으로 추론됨
// 추천 X
let d;
// any -> number
d = 10;
d.toFixed(2);

// any -> string
d = 'string';
d.toUpperCase();

/* const 로 선언하면 number literal 타입으로 추론됨 */
const num = 10;
const str = 'hello';
let ab: string = str;

let arr = [1, 'string'];
arr = ['string', 2];


