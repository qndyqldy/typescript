/**
 * 템플릿 리터럴 타입
 * 거의 사용 안함..
 */
type Color = 'red' | 'black' | 'green';

type Animal = 'dog' | 'cat' | 'chicken';

type ColoredAnimal = `${Color}-${Animal}`;

let coloredAnimal:ColoredAnimal = "red-cat";