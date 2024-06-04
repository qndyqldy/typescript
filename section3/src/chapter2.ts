/**
 * Unknown 타입
 */
function unknownExam() {
    // up casting
    let a: unknown = 1;
    let b: unknown = 'hello';
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar: unknown;

    // down casting
    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}

/**
 * Never 타입
 */
function neverExam() {
    function neverFunc(): never {
        while(true) {}
    }

    // up casting
    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // down casting
    // let never1: never = 10;
    // let never2: never = 'never';
    // let never3: never = true;
}

/**
 * void 타입
 */
function voidExam() {
    function voidFunc(): void {
        console.log('hi');
        return undefined;
    }

    // up casting
    let voidVar: void = undefined;
}

/**
 * any 타입 -- 모든 타입의 super 타입이 됨, 모든 타입의 sub 타입이 됨 (never 예외)
 * down casting 가능함
 */
function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar;
    unknownVar = anyVar;

    undefinedVar = anyVar;

    // 이때는 예외 -- never는 순수한 공집합이기 때문에 어떤 타입도 다운캐스팅을 할 수 없음
    // neverVar = anyVar;
}