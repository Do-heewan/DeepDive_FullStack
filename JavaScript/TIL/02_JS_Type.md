# 자바 스크립트 타입

<br>

## Data Type in JavaScript

### 자바 스크립트 타입

- 원시 타입 : Boolean, String, Number, null, undefined, Symbol (불변성을 가지고 있다.)
- 참조 타입 : Object, Array

기본적으로 JavaScript는 원시 타입에 대한 값을 저장하기 위해 Call Stack 메모리 공간을 사용하지만 참조 타입의 경우 Heap이라는 별도의 메모리 공간을 사용한다.

이 경우 Call Stack은 개체 및 배열 값이 아닌 Heap 메모리 참조 ID를 값으로 저장한다.

|원시 타입|참조 타입|
|---|---|
|고정된 크기로 Call Stack 메모리에 저장, 실제 데이터가 변수에 할당.|데이터 크기가 정해지지 않고 Call Stack 메모리에 저장, 데이터의 값이 heap에 저장되며 변수에 heap 메모리의 주소값이 할당.|

### 자바 스크립트는 동적 타입

- JavaScript는 느슨한 타입()의 동적 언어이다. JS의 변수는 어떤 특정 타입과 연결되지 않으며, 모든 타입의 값으로 할당 (및 재할당) 가능

``` js
let foo = 42 // Number
foo = 'bar' // String
foo = true // Boolean
```

- 같은 변수가 여러개의 타입을 가질 수 있다.
- 타입을 명시하지 않아도 된다.

```js
// 원시 타입
// 문자열 String
const name = "han";
// Number
const age = 30;
// Boolean
const hasjob = true;
// null
const car = null;
// undefined
let anything;
// Symbol
const sym = Symbol();

// 참조 타입
// Array 배열
const hobbies = ['walking', 'books'];
// Object
const address = {
    provinde : '경기도',
    city : '성남'
}
```

```js
console.log(typeof name); // 타입의 종류 알아보기
console.log(Array.isArray(hobbies)) // Array는 예외
```

<br>

## 자바스크립트 타입 변환

JavaScript 변수는 새 변수 및 다른 데이터 유형으로 변환할 수 있다.

1. JavaScript 함수를 사용
2. JavaScript 자체에 의해 자동으로

### 함수를 사용하는 방법

```js
let val;

// Number to String
val = String(111);
val = String(8 + 4);

// Boolean to String
val = String(false);

// Date to String
val = String(new Date());

// Array to String
val = String([1, 2, 3, 4, 5]);

// toString()
val = (5).toString();

// String to Number
val = Number('1');

val = parseInt('111.40'); // 소수점 이하 제거
val = parseFloat('111.40'); // 소수점 표현

console.log(val);
console.log(typeof val);
console.log(val.length);
```

### 자동으로 타입이 변환되는 경우

```js
const val1 = 2;
const val2 = String(3);
const sum = val1 + val2; // number + string -> string + string

console.log(sum); // 23
console.log(typeof sum);
```

<br>

## 연산 및 Math

```js
const num1 = 20;
const num2 = 10;
let val;

val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

val = Math.E // Euler's Number
val = Math.PI // PI
val = Math.SQRT2 // square root 2
val = Math.SQRT1_2 // square root 1/2
val = Math.LN2 // ln 2
val = Math.LN10 // ln 10
val = Math.LOG2E // log e
val = Math.LOG10E // log e
val = Math.round(2.4); // 반올림
val = Math.ceil(2.4); // 올림


console.log(val);
```