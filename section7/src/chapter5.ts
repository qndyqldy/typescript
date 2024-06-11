/**
 * 프로미스 Promise
 * new Promise<T> => resolve 결과값의 타입을 generic 으로
 */
const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        resolve(20);
        // reject('~때문에 실패');
    }, 3_000)
});

promise.then((response) => {
    console.log(response * 10);
})

promise.catch((err) => {
    if(typeof err === 'string') {
        console.log(err);
    }
})

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */
interface Post {
    id: number;
    title: string;
    content: string;
}

function fetchPost(): Promise<Post> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: '제목',
                content: '내용'
            })
        }, 3_000)
    })
}


const postRequest = fetchPost();
postRequest.then((response) => {
    console.log(response);
    console.log(response.id);
});