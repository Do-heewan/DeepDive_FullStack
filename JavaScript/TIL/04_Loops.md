# Loops

자바스크립트에서 루프(Loop)를 사용하면 코드 블록을 여러 번 실행할 수 있다.

<br>

## 루프의 종류

|for|for/in|while|do/while|
|--|---|---|---|
|코드 블록을 여러 번 반복|객체의 속성을 따라 반복|지정된 조건이 true인 동안 코드 블록을 반복|조건이 true인 동안 루프 반복|

### for

코드 블록을 여러 번 반복한다.

```js
for(let i = 0; i < 10; i++) {
    if (i === 3) {
        console.log('It is 3');
        continue
    }

    if (i === 5) {
        console.log('Stop');
        break
    }

    console.log('Number ' + i);
}
```

![Image](https://github.com/user-attachments/assets/a7a2c9f0-32c7-4408-926e-cf54f018464b)

### for/in

객체의 속성(property)을 따라 반복한다.

```js
const user = {
    name : "Noh",
    province : "Gyeongnam",
    city : "Masan"
}

for (let x in user) {
    console.log(`${x} : ${user[x]}`);
}
```

![Image](https://github.com/user-attachments/assets/378b994b-f665-481b-b3c6-36a452df91d5)

### while

지정된 조건이 true인 동안 코드 블록을 반복

```js
let i = 0;

while (i < 10) {
    console.log('Number ', i);
    i++;
}
```

![Image](https://github.com/user-attachments/assets/65c2999f-b9f1-435b-b355-cde008ac28bb)


### do/while

while 루프의 변형. 조건이 true인지 검사하기 전에, 코드 블록을 한 번 실행한다. 이후 조건이 true 인 동안 루프를 반복한다.

```js
let i = 0;

do {
    console.log('Number ', i);
    i++;
}

while (i < 10);
```

![Image](https://github.com/user-attachments/assets/65c2999f-b9f1-435b-b355-cde008ac28bb)

### 배열을 Loop를 이용해서 컨트롤해주기

```js
const locations = ['서울', '대구', '부산', '경기도'];

// for
for (let i = 0; i < locations.length; i++) {
    console.log(locations[i]);
}

console.log('------------------')

// foreach
locations.forEach(function (location, index, array) {
    console.log(`${index} : ${location}`);
    console.log(array);
});

console.log('-------------------')

// MAP
locations.map(function (location) {
    console.log(location);
});
```

![Image](https://github.com/user-attachments/assets/b974904e-c64c-44bb-b80f-c1abe167ec46)

### for vs forEach

- for 루프는 원래 사용되었던 접근 방식이지만, forEach는 배열 요소를 반복하는 새로운 접근 방식이다.
- for 루프는 필요한 경우 break 문을 사용하여 for 루프를 중단할 수 있지만 forEach에서는 이와 같은 작업을 수행할 수 없다.
- for 루프는 await과 함께 작동하지만, forEach는 await과 완벽하게 작동하지 않는다.
- for 루프는 forEach 루프보다 빠르다.