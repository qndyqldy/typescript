/**
 * keyof 연산자
 * 타입에만 사용가능 함
 */
/**
 * typeof 연산자
 * 변수의 타입으로 정의함
 */
interface Person {
    name: string;
    age: number;
}

function getPropertyKey(person: Person, key: keyof typeof person) {
    return person[key];
}

const person : Person = {
    name: '영욱',
    age: 32
};

console.log(getPropertyKey(person, 'name'));
console.log(getPropertyKey(person, 'age'));

