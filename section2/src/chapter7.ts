// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
    return 'hello';
}

// return 이 필요없을 때 void 타입
function func2(): void {
    console.log('hello');
}

// never
// never -> 존재하지 않는
// 불가능한 타입
// 정상적으로 반환할 수 없을 때 never 타입 사용
function func3(): never {
    while(true) {

    }
}
function func4(): never {
    throw new Error();
}