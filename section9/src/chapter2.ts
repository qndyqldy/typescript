/**
 * 분산적인 조건부 타입
 */

 type Extract<T, U> = T extends U ? T : never;

 type B = Extract<number | string | boolean , string>;
 // 1단계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>

// 2단계
// never
// string
// never

// 최종결과 string