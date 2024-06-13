/**
 * 유틸리티 타입
 * 맵드 타입 기반의 유틸리티 타입
 * Partial, Required, Readonly
 */
/**
 * Partial<T> -> 부분적인, 일부분의
 * 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */
interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}
type Partial2<T> = {
    [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
    title: '나중에',
    content: '초안...'
};

/**
 * Required<T> -> 필수의, 필수적인
 * 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 * -? 이용하면 optional을 제거하겠다 의미
 */
type Required2<T> = {
    [key in keyof T]-?: T[key]
}
const withTunmbnailPost: Required<Post> = {
    title: '영욱이 제목',
    tags: ['영욱'],
    content: '내용',
    thumbnailURL: ''
}

/**
 * Readonly<T> -> 읽기전용, 수정불가
 * 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 바꿔주는 타입
 */
type Readonly2<T> = {
    readonly [key in keyof T] : T[key];
}
const readonlyPost: Readonly2<Post> = {
    title: '보호된 게시글',
    content: '',
    tags: []
}
// readonlyPost.title = '';