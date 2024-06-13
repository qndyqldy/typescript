/**
 * 유틸리티 타입
 * 맵드 타입 기반의 유틸리티 타입
 * Pick, Omit, Record
 */

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}
/**
 * Pick<T, K> -> 뽑다, 고르다
 * 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
 */
type Pick2<T, K extends keyof T> = {
    [key in K]: T[key];
}
const legacyPost: Pick<Post, 'title' | 'content'> = {
    title: '옛날글',
    content: '옛날 내용'
}

/**
 * Omit<T, K> -> 생략하다, 빼다
 * 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */
type Omit2<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title>>
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL', 'title'>>
// Pick<Post, 'content', 'tags', 'thumbnailURL'>
/**
 * Exclude<T, K> => 앞의 Property에서 뒤의 Property를 제외하고 반환
 */

const noTitlePost: Omit<Post, 'title'> = {
    content: '',
    tags: []
}

/**
 * Record<K, V> -> 실무에서 자주 쓰이는 타입
 * 객체 타입을 만들어줌
 * K = key
 * V = key의 Value
 * 동일한 패턴의 객체타입을 정의하기 쉽다.
 */
type Record2<K extends keyof any, V> = {
    [key in K]: V
};

type Thumbnail = Record<'large' | 'medium' | 'small', {url: string, size: number}>;
type test = Record<'a' | 'b' | 'c', string>;