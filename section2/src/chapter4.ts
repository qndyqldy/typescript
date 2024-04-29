// 타입 별칭
// 주의점 - 동일한 타입 별칭 불가
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    location: string;
}
let user: User = {
    id: 1,
    name: 'ywyim',
    nickname: 'supply',
    birth: '1991.09.30',
    location: '대전'
}

let user2: User = {
    id: 1,
    name: '절구',
    nickname: 'supply',
    birth: '2018.05.30',
    location: '대전'
}

// 인덱스 시그니처
// key와 value의 타입을 기준으로 규칙을 이용하여 유연하게
// 주의점 - 규칙을 위반하지만 않으면 모든 타입 허용함 (property가 없어도 가능해짐)
// 추가적인 property는 인덱스 시그니처의 타입과 일치하거나 호환이 돼야 한다
type CountryCodes = {
    [key: string]: string;
}
let countryCodes: CountryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk'
}

type CountryNumberCodes = {
    [key: string]: number;
    Korea: number;
}
let countryNumberCodes: CountryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
}