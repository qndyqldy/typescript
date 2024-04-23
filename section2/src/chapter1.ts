// number
let num1:number = 123;
let num2:number = -123;
let num3:number = 0.123;
let num4:number = -0.123;
let num5:number = Infinity;
let num6:number = -Infinity;
let num7:number = NaN;

// 숫자 타입에 string 타입을 넣거나, 함수 사용 불가
// num1 = 'hello';
// num1.toUppercase();

// string
let str1:string = 'hello';
let str2:string = "hello";
let str3:string = `hello`;
let str4:string = `hello ${num1}`;

// number 타입의 함수 사용 불가
// str1.toFixed();

// boolean
let bool1:boolean = true;
let bool2:boolean = false;

// null
let null1:null = null;

// undefined
let unde1:undefined = undefined;

// null 타입이 아닌 타입에 null 값을 넣으면 타입에러로 인식함
// 필요하면 tsconfig.json에 "strictNullChecks": false 설정
// let numA:number = null;

// 리터럴 타입
// 리터럴 -> 값
let numA:10 = 10;
let strA:'hello' = 'hello';
let boolA:true = true;