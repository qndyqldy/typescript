/**
 * 클래스 접근 제어자
 * public, private, protected
 */

class Employee {
    // field

    // 생성자에서 접근제어자를 선언하면 field 정의 생략 가능, 값 초기화도 해줌
    constructor(private name: string, protected age: number, private position: string) {
    }

    // 메서드
    work() {
        console.log(`${this.name} 일함`);
    }
}

class ExecutiveOfficer extends Employee {
    // field
    officeNumber: number;

    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }

    // 메서드
    func() {
        console.log(this.age);
    }
}

const employee = new Employee('영욱', 32, '개발자');
console.log(employee);