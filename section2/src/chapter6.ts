// any
// 특정 변수의 타입을 우리가 확실히 모를 때
let anyVar: any = 10;
anyVar = 'wook';
let num: number = anyVar;
let str: string = 'yim';

// unknown
// 저장할 순 있지만 반대는 안됨
// 다른 타입의 변수에 unknown 할당하지 못함
let unknownVar: unknown;
unknownVar = '';
unknownVar = 123;
unknownVar = {};
unknownVar = () => {};

// 타입 정제를 해야지만 할당 가능
if(typeof unknownVar === 'number') {
    num = unknownVar;
}