// object
// 객체 리터럴 타입
// 구조 기준 - 구조적 타입 시스템 -> property based type system
// property? - optional property (필수 유무)
let user: {
    id?: number;
    name: string;
} = {
    id: 1,
    name: '임영욱'
}

// readonly - property 앞에 선언
// 읽기 전용 (수정 x)
let config: {
    readonly apiKey: string;
} = {
    apiKey: 'dfjklvsd'
}