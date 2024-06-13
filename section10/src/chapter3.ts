/**
 * 유틸리티 타입
 * 조건부 타입 기반의 유틸리티 타입
 * Exclude, Extract, ReturnType
 */
/**
 * Exclude<T, U> -> 제외하다, 추방하다
 * T에서 U를 제거하는 타입
 */
type Exclude2<T, U> = T extends U ? never : T;
// 1단계
// Exclude<string, boolean>
// Exclude<boolean, boolean>

// 2단계
// string
// never
// => string | never => string
type A = Exclude<string | boolean, boolean>;

/**
 * Extract<T, U> -> T에서 U를 추출하는 타입
 */
type Extract2<T, U> = T extends U ? T : never;
type B = Extract<string | boolean, boolean>;

/**
 * ReturnType<T> -> 함수의 반환값 타입을 추출하는 타입
 */
type ReturnType2<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;
function funcA(): string {
    return 'hello';
}
function funcB(): number {
    return 0;
}

type ReturnA = ReturnType2<typeof funcA>;
type ReturnB = ReturnType2<typeof funcB>;