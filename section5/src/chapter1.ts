/**
 * 인터페이스의 확장
 * 중복된 property 비효율
 */

// 비효율 예시
interface Animal {
    name: string;
    age: number;
}

// interface Dog {
//     name: string;
//     age: number;
//     isBark: boolean;
// }
//
// interface Cat {
//     name: string;
//     age: number;
//     isScratch: boolean;
// }
//
// interface Chicken {
//     name: string;
//     age: number;
//     isFly: boolean;
// }

/**
 * java와는 다르게 interface 상속 extends 사용
 * 동일한 property 재정의 가능 -> 원본타입의 서브타입만 가능
 */
interface Dog extends Animal {
    isBark: boolean;
}
interface Cat extends Animal {
    isScratch: boolean;
}
interface Chicken extends Animal {
    isFly: boolean;
}
interface DogCat extends Dog, Cat {

}

const dogCat: DogCat = {
    name: '',
    age: 0,
    isBark: true,
    isScratch: true
}

const dog: Dog = {
    name: 'hello',
    age: 2,
    isBark: true
};

const animal: Animal = {
    name: 'yy',
    age: 1
}
