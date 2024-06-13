/**
 * enum - typescript 에서 지원
 * 실제 값은 index
 * 값은 설정할 수 있음
 */
enum Role {
	USER = 'user',
	ADMIN = 'admin'
}

console.log(Role.USER);
console.log(Role.ADMIN);

enum Type {
	FREE= 1,
	CONTENT= 10,
	STUDY = 14,
	ETC
}

console.log(Type.FREE);
console.log(Type.CONTENT);
console.log(Type.STUDY);
console.log(Type.ETC);

type User = {
	name: string;
	role: Role;
}

const user: User = {
	name: 'wook',
	role: Role.USER
}

if(user.role === Role.USER) {
	console.log('유저 맞아');
}

let role: Role = Role.USER;