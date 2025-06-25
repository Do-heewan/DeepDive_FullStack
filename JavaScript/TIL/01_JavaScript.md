# 자바스크립트 A-Z

<br>

## Console

console 객체는 브라우저의 디버깅 콘솔에 접근할 수 있는 메소드를 제공한다. 동작 방식은 브라우저마다 다르지만 사실상 표준으로 여겨지는 기능도 여럿 있다.

```js
console.log('안녕하세요.');
console.log(123);
console.log(false);

var greeting = "안녕하쇼";
console.log(greeting);

console.log({a : "A", b : "B", c : "C"});

console.table({a : "A", b : "B", c : "C"})

console.error('에러가 발생했습니다.');

console.warn('경고 메시지입니다.');

console.time('hello');
console.log(1);
console.log(2);
console.log(3);
console.timeEnd('hello');

// console.clear();
```
![Image](https://github.com/user-attachments/assets/f980ceb0-28ac-46a8-90eb-0aded99a84b6)

<br>

## var, let, const

자바 스크립트에서 변수를 선언할 때 사용한다.

### 변수 선언 방식

|var|let|const|
|---|---|---|
|중복 선언과 재할당이 가능하다.|중복 선언은 불가하며, 재할당은 가능하다.|중복 선언과 재할당 둘 다 불가하다.|

<br>

### var

- 다음과 같이 중복 선언과 재할당이 가능하며, 마지막에 할당된 값이 변수에 저장된다.

>이런 특징으로 인해 자율성은 생기지만 소스 코드가 복잡해질 경우 기존 선언해둔 변수를 잊고 다시 선언하거나 재할당을 해서 어떤 부분에서 값이 변경되는지 파악하기 힘들 수 있다.

```js
var greeting = "hello";
console.log(greeting); // Output: hello

var greeting = "hi";
console.log(greeting); // Output: hi

var greeting = "hey";
console.log(greeting); // Output: hey
```

### let

- 중복 선언은 불가하며, 재할당은 가능하다.

```js
let greeting_2 = "hello";
console.log(greeting_2); // Output: hello

greeting_2 = "hi";
console.log(greeting_2);
```

### const

- 중복 선언과 재할당 모두 불가

```js
const greeting_3 = "hello";
console.log(greeting_3); // Output: hello

greeting_3 = "hi"; 
```

![Image](https://github.com/user-attachments/assets/d3ba045f-1898-485e-94cf-b8900e6bf268)

<br>

## 유효한 참조 범위 (scope)

|var|let/const|
|---|---|
|함수 레벨 스코프(function-level-scope)|블록 레벨 스코프(block-level-scope)|

<br>

### var (function-level-scope)

- 함수 내에서 선언된 변수는 함수 내에서만 유효
- 함수 외부에서는 참조 X

```js
// 유효한 참조 범위
// var => 함수 레벨 스코프
function func() {
    if (true) {
        var a = 'a';
        console.log(a);
    }
    console.log(a)
}

func();
```

### let, const

- 함수, if문, for문, while문, try/catch문 등의 모든 코드 블록 내부에서 선언된 변수는 코드 블록 내부에서만 유효하며 코드 블록 외부에서는 참조하지 못한다.

```js
// let, const => 블록 레벨 스코프
function func2() {
    if (true) {
        let a = 'a2';
        const b = 'b2';
        console.log(a);
        console.log(b);
    }
}

func2();
```

<br>

## 호이스팅(Hoisting)

호이스트(Hoist) : 무언가를 들어 올리거나 끌어 올리는 동작

JavaScript에서 호이스팅은 코드가 실행되기 전에 변수 및 함수 선언(이름)이 로컬 범위(유효 범위)의 맨 위로 들어올려지거나 끌어올려지는 경우를 설명한다.

### var 선언문 호이스팅

```js
console.log(greeting)
var greeting = 'hello';
```

다음 예시는 아직 생성하지 않은 변수에 대한 콘솔 로그를 사용하면서 시작한다. 다음으로 greeting이라는 변수를 선언하고 문자열 hello를 할당한다. 코드를 실행하면 undefined가 반환된다.

JavaScript 인터프리터는 변수 생성의 **선언 단계 및 할당 단계**를 분할한다. 선언 부분은 코드가 실행되기 전에 현재 범위의 맨 위로 호이스팅되고 초기에 undefined 값이 할당된다.

### 함수 선언문 호이스팅

```js
func();

function func() {
    console.log("hoisting");
}
```

### let, const 선언문 호이스팅

let 또는 const로 변수를 선언하면 실제로 변수는 여전히 호이스팅 된다. 그러나 var와 차이점은 **var는 실제 할당 값이 할당되기전 까지 undefined 값이 할당**된다. 하지만 let/const를 사용하면 변수 초기에 어떤 값도 할당되지 않는다.

```js
console.log(greeting);
const greeting = "hello";
```

호이스팅은 되지만 변수는 초기에 undefined로 초기화된 var와 달리 초기에 초기화되지 않는다.

이러한 이유는 TDZ(Temporal Dead Zone)이라 한다. 일시적 데드 존은 변수를 사용할 수 없는 비활성 상태를 나타낸다.

### var / let / const 결론

변수를 생성할 때 재할당이 필요없다면 const를 사용한다.

재할당이 필요하면 let을 사용하지만 변수의 scope를 최대한 좁게 만들어서 사용한다. 
