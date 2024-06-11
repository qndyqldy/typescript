/**
 * 클래스 (class)
 *
 */
let studentA = {
	name: '영욱',
	grade: 'A',
	age: 32,
	study() {
		console.log('공부해라');
	},
	introduce() {
		console.log('하이요');
	}
}

class Student {
	// field - class의 property
	name;
	grade;
	age;

	// 생성자
	constructor(name, grade, age) {
		this.name = name;
		this.grade = grade;
		this.age = age;
	}

	// 메서드
	study() {
		console.log('공부해라');
	};
	introduce() {
		console.log(`안녕하세요 ${this.name}입니다.`);
	}
}

class StudentDeveloper extends Student {
	favoriteSkill;

	constructor(name, grade, age, favoriteSkill) {
		super(name, grade, age);
		this.favoriteSkill = favoriteSkill;
	}

	programming() {
		console.log(`${this.favoriteSkill}로 프로그래밍함`)
	}
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student('절구', 'B+', 6);
console.log(studentB);
studentB.study();
studentB.introduce();

let studentDeveloper = new StudentDeveloper('영욱', 'A-', 32, 'javascript');
console.log(studentDeveloper);
studentDeveloper.programming();