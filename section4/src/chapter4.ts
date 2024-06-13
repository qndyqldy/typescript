/**
 * 사용자 정의 타입 가드
 */

type Dog = {
    name: string;
    isBark: boolean;
};

type Cat = {
    name: string;
    isScratch: boolean;
}

type Animal = Dog | Cat;

// 타입 단언을 사용
function isDog(animal: Animal): animal is Dog {
    return (animal as Dog).isBark !== undefined;
}
function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
    if(isDog(animal)) {
        // 강아지
        animal;
    } else if(isCat(animal)) {
        // 고양이
        animal;
    }
}


let cat2: Animal = {
    name: '절구',
    isScratch: true
} as Cat;

function test (value: Animal): value is Cat {
    return (value as Cat).isScratch !== undefined;
}