/**
 * 타입스크립트의 클래스
 */
const employee = {
    name: '영욱',
    age: 32,
    position: 'developer',
    work() {
        console.log('일함');
    }
}

class Employee {
    // field
    name: string;
    age: number;
    position: string;

    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 메서드
    work() {
        console.log('일함');
    }
}
// 타입스크립트의 클래스는 타입으로도 활용이 된다.
const employeeB = new Employee('영욱', 32, '개발자');
console.log(employeeB);

const employeeC:Employee = {
    name: 'test',
    age: 0,
    position: 'test',
    work() {
    }
}

class ExecutiveOfficer extends Employee {
    // field
    officeNumber: number;

    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}