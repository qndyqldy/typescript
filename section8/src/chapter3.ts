/**
 * 맵드 타입
 * 인터페이스에서는 불가함
 * 타입 별칭으로만 사용해야 함
 */

interface User {
    id: number;
    name: string;
    age: number;
}

type PartialUser = {
    [key in 'id' | 'name' | 'age']?: User[key];
}

type ReadonlyUser = {
    readonly [key in keyof User] : User[key];
}
type BooleanUser = {
    [key in keyof User]: boolean;
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {

    return {
        id: 1,
        name: '영욱',
        age: 32
    };
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: User) {
    // ... 수정하는 기능
}


updateUser({
    id: 1,
    name: '영욱',
    age: 25
});

const user = fetchUser();
// user.name = '';