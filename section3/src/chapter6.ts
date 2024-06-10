/**
 * 타입 단언
 * 규칙 : 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이여야 함
 */
type Person = {
    name: string;
    age: number;
}

let person = {} as Person;
person.name = 'ywyim';
person.age = 32;

type Dog = {
    name: string;
    color: string;
}
let dog = {
    name: '절구',
    color: 'black&white',
    breed: '코숏'
} as Dog;

let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string;

/**
 * const 단언
 * property 가 아무리 많더라도 const 단언을 하면 모든 property를 readonly 처리 가능
 */
let num4 = 10 as const;
let cat = {
    name: '절구',
    color: 'black&white'
} as const;

/**
 * Non Null 단언
 * ! 연산자 사용
 * ex) dog!.name
 */
type Post = {
    title: string;
    author?: string;
};

let post: Post = {
    title: '게시글1',
    author: 'ywyim'
};

const len: number = post.author!.length;