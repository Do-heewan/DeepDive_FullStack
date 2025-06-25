# Template

<br>

## Template Literal

JavaScript에서 backtick(`) 문자를 사용하여 문자열을 표현한 것을 템플릿 리터럴이라 한다.

1. 줄 바꿈을 쉽게할 수 있다.
2. 문자열 내부에 표현식을 쉽게 사용할 수 있다.

```js
const a = 5;
const b = 10;

console.log("Fiftenn is " + (a + b) );

console.log(`Fifteen is ${a + b} and
    not ${2 * a + b}.`);
```