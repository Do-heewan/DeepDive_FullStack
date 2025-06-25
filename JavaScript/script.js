// console.log('안녕하세요.');
// console.log(123);
// console.log(false);

// var greeting = "안녕하쇼";
// console.log(greeting);

// console.log({a : "A", b : "B", c : "C"});

// console.table({a : "A", b : "B", c : "C"})

// console.error('에러가 발생했습니다.');

// console.warn('경고 메시지입니다.');

// console.time('hello');
// console.log(1);
// console.log(2);
// console.log(3);
// console.timeEnd('hello');

// console.clear();

// var greeting = "hello";
// console.log(greeting); // Output: hello

// var greeting = "hi";
// console.log(greeting); // Output: hi

// var greeting = "hey";
// console.log(greeting); // Output: hey

// let greeting_2 = "hello";
// console.log(greeting_2); // Output: hello

// greeting_2 = "hi";
// console.log(greeting_2);

// const greeting_3 = "hello";
// console.log(greeting_3); // Output: hello

// greeting_3 = "hi"; 

// // 유효한 참조 범위
// // var => 함수 레벨 스코프
// function func() {
//     if (true) {
//         var a = 'a';
//         console.log(a);
//     }
//     console.log(a)
// }

// func();

// // let, const => 블록 레벨 스코프
// function func2() {
//     if (true) {
//         let a = 'a2';
//         const b = 'b2';
//         console.log(a);
//         console.log(b);
//     }
// }

// func2();

// // 호이스팅
// console.log(greeting)
// var greeting = 'hello'; // Output: undefined
// let greeting = 'hi'; // Error


// func();

// function func() {
//     console.log("hoisting");
// }

// console.log(greeting);
// const greeting = "hello";

// let foo = 64;
// console.log(typeof foo);

// foo = "name";
// console.log(typeof foo);

// // 원시 타입
// // 문자열 String
// const name = "han";
// // Number
// const age = 30;
// // Boolean
// const hasjob = true;
// // null
// const car = null;
// // undefined
// let anything;
// // Symbol
// const sym = Symbol();

// // 참조 타입
// // Array 배열
// const hobbies = ['walking', 'books'];
// // Object
// const address = {
//     provinde : '경기도',
//     city : '성남'
// }

// console.log(typeof name); // 타입의 종류 알아보기
// console.log(Array.isArray(hobbies)) // Array는 예외

// let val;

// // Number to String
// val = String(111);
// val = String(8 + 4);

// // Boolean to String
// val = String(false);

// // Date to String
// val = String(new Date());

// // Array to String
// val = String([1, 2, 3, 4, 5]);

// // toString()
// val = (5).toString();

// // String to Number
// val = Number('1');

// val = parseInt('111.40'); // 소수점 이하 제거
// val = parseFloat('111.40'); // 소수점 표현

// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// const val1 = 2;
// const val2 = String(3);
// const sum = val1 + val2; // number + string -> string + string

// console.log(sum); // 23
// console.log(typeof sum);

// const num1 = 20;
// const num2 = 10;
// let val;

// val = num1 + num2;
// val = num1 - num2;
// val = num1 * num2;
// val = num1 / num2;
// val = num1 % num2;

// val = Math.E // Euler's Number
// val = Math.PI // PI
// val = Math.SQRT2 // square root 2
// val = Math.SQRT1_2 // square root 1/2
// val = Math.LN2 // ln 2
// val = Math.LN10 // ln 10
// val = Math.LOG2E // log e
// val = Math.LOG10E // log e
// val = Math.round(2.4); // 반올림
// val = Math.ceil(2.4); // 올림

// console.log(val);

const a = 5;
const b = 10;

console.log("Fiftenn is " + (a + b) );

console.log(`Fifteen is ${a + b} and
    not ${2 * a + b}.`);