/**
 * 인터페이스 선언 합치기
 * 동일한 이름의 인터페이스는 합쳐짐
 * property재정의 -> 타입이 일치해야됨
 * 보통 라이브러리의 타입의 정이가 부실할 때 사용함
 * 모듈 보강
 */
interface Person {
    name: string;

}

interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: 'ywyim',
    age: 32
}

/**
 * 모듈 보강
 */
interface Lib {
    a: number;
    b: number;
}
interface Lib {
    c: string;
}
const lib: Lib = {
    a: 1,
    b: 2,
    c: 'hello'
}