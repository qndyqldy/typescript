/**
 * 인덱스 시그니처
 * key, value의 타입을 기준으로 규칙을 이용하여 유연하게
 */
type IndexSignature = {
    [key: string]: string;
}

const indexSignature1: IndexSignature ={
    korea: '한국',
    japan: '일본'
}
const indexSignature2: IndexSignature ={
    name: '영욱',
    school: '세종대'
}
const indexSignature3: IndexSignature ={
    type: 'student',
    color: 'yellow'
}
