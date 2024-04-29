// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 자바스크립트에는 없음
// 숫자형 enum
enum Role {
    ADMIN,
    USER = 10,
    GUEST,
}

enum Language {
    korean = 'ko',
    english = 'en'
}

type User = {
    name: string;
    role: Role
};
const user1 = {
    name: 'ywyim',
    role: Role.ADMIN, // 0 <- 관리자
    language: Language.korean
};
const user2 = {
    name: '홍길동',
    role: Role.USER, // 1 <- 일반유저
    language: Language.english
};
const user3 = {
    name: '아무개',
    role: Role.GUEST // 2 <- 게스트
};
console.log(user1);
console.log(user2);
console.log(user3);