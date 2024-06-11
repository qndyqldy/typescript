/**
 * 함수 타입 정의
 */
// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입]의 매개변수를 받고, 어떤 [타입]의 결과값을 반화하는지 이야기
function func(a: number, b: number) {
    return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */
const add = (a: number, b: number) => {
    return a + b;
}

/**
 * 함수의 매개변수
 * 기본값과 다른 타입을 선언하면 오류 발생
 * 타입 추론을 통한 매개변수와 다른 타입의 매개변수를 넣으면 오류 발생
 * 선택적 매개변수 '?' 사용
 * 선택적 매개변수를 사용할 때는 필수인 매개변수는 앞에다 배치
 *
 */
function introduce(name = "ywyim",age: number, tall?: number) {
    console.log(`name : ${name}`);
    if(typeof tall === 'number') {
        console.log(`tall : ${tall + 10}`);
    }

}
// introduce(1);
introduce('ywyim', 32, 172);
introduce('ywyim', 32);

function getSum(...number: [number, number, number]) {
    let sum = 0;
    number.forEach(it => sum += it);
    return sum;
}

console.log(getSum(1, 2, 3));
// console.log(getSum(1, 2, 3, 5, 6, 120));