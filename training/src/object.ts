/**
 * 객체
 */
type obj = {
    id: number;
    name: string;
}

const user: obj = {
    id: 1,
    name: '욱'
}

const user2: {
    id: number;
    name: string;
} =  {
    id: 1,
    name: '영욱'
}

type User = {
    readonly id: number;
    name: string;
    color?: string;
}

let user3: User = {
    id: 2,
    name: '욱',
    color: '상아색'
}