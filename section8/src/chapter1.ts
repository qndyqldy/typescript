/**
 * 인덱스드 엑세스 타입
 * 인덱스를 이용하여 다른 타입 내의 특정 property 추출
 * 객체, 배열, 튜플에 모두 사용 가능
 */
interface Post {
    title: string;
    content: string;
    author: { 
        id: number;
        name: string;
        age: number;
    }
}

// string 값이 아니라 타입만 입력 가능하다
// ex) const key = 'author';
// function printAuthorInfo(author: Post[key]) 이렇게 불가능
function printAuthorInfo(author: Post['author']) {
    console.log(`${author.name}-${author.id}`);
}
const post: Post = {
    title: '제목',
    content: '내용',
    author: {
        id: 0,
        name: '영욱',
        age: 32
    }
}

/**
 * 배열 타입
 */
type PostList = [{
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    }
}, {
    name: string;
    age: number;
    color: string;
}];
function printAuthorInfo2(author: PostList[0]['author']) {
    console.log(`${author.name}-${author.id}`);
}
// 배열타입의 type을 가져오려면 Type[number]로하면 가져와짐
const postList: PostList[number] = {
    title: '제목',
    content: '내용',
    author: {
        id: 0,
        name: '영욱',
        age: 32
    }
}

const dog: PostList[1] = {
    name: 'julgu',
    age: 8,
    color: 'black&white'
}

// 튜플
type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
console.log(postList);
console.log(dog);