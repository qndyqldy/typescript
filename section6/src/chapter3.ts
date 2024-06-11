/**
 * 인터페이스와 클래스
 */
// interface는 무조건 public field 정의
interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
}

// private, protected 필요하면 class 에서 정의해야함
// 클래스가 interface를 상속받을 때 implements 사용
class Character implements CharacterInterface {
    constructor(public name: string, public moveSpeed: number, private extra: string) {}

    move(): void {
        console.log(`${this.moveSpeed} 속도로 이동!`);
    }
}