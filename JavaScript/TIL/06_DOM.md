# DOM이란

### HTML을 이용한 화면에 UI 표현하기

브라우저에서 UI를 볼 수 있는 것은 이 HTML을 분석해서 보여줄 수 있다. 이 HTML은 요소(Element)로 이루어져 있다.

### 돔(Document Object Model) 이란?

돔(문서 객체 모델)은 메모리에 웹 페이지 문서 구조를 트리구조로 표현해서 웹 브라우저가 HTML 페이지를 인식하게 해준다.

또한 웹 페이지를 이루는 요소들을 자바스크립트가 이용할 수 있게끔 브라우저가 트리구조로 만든 객체 모델을 의미한다.

<br>

## DOM Object

window 객체가 브라우저 창 이라고 하면 document 객체는 브라우저 내에서 콘텐츠를 보여주는 웹 페이지 자체라고 할 수 있다.

![Image](https://github.com/user-attachments/assets/96d7c9a1-6f8c-451f-b076-44cb108ebfbe)

### Document 객체 프로퍼티 사용

```js
let val;

val = document;
val = document.baseURI; // 절대 URI 반환
val = document.head; // <head> 태그 반환
val = document.body; // <body> 태그 반환

val = document.forms; // <forms> 태그 반환
val = document.forms[0]; // 
val = document.forms[0].classList;
val = document.forms[0].className;

val = document.scripts; // <script> 태그 반환
val = document.scripts[0].getAttribute('src');

val = document.images; // <img> 태그 반환

console.log(val);
```

### Document 객체 메소드 사용

document 객체의 메서드들을 사용하면 다양한 방법으로 웹 페이지 내의 태그들에 접근할 수 있다.

**하나의 요소에 접근**

```js
// 파라미터로 전달한 ID를 가진 태그를 반환
document.getElementById(요소아이디);

// 파라미터로 전달한 name 속성을 가진 태그를 반환
document.getElementsByName(name속성값);

// 파라미터로 전달한 선택자에 맞는 첫 번째 태그를 반환
document.querySelector(선택자);
```

```js
const headerContainer = document.getElementById('header-container');

// headerContainer.style.display = 'none';

headerContainer.textContent = 'Text Content';
headerContainer.innerText = 'Inner Text';
headerContainer.innerHTML = '<span>Inner HTML</span>';

console.log(headerContainer);
```

**여러 요소에 접근**

```js
// 파라미터로 전달한 태그이름을 가진 모든 태그들을 반환(배열)
document.getElementsByTagName(태그이름);

// 파라미터로 전달된 클래스 이름을 가진 모든 태그들을 반환(배열)
document.getElementsByClassName(클래스이름);

// 파라미터로 전달한 선택지에 맞는 모든 태그들을 반환(배열)
document.querySelectorAll(선택자);
```

```js
const items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'blue';
items[3].textContent = 'Hi';

let list = document.getElementsByTagName('li');
console.log(list);
console.log(list[0]);
list[1].style.color = 'red';
list[4].textContent = 'Hello';

list = Array.from(list);
list.reverse();
list.forEach(function(li, index) {
    console.log(li.className);
    li.textContent = `${index}, List`;
});

console.log(list);
```

```js
const items = document.querySelectorAll('ul.list-group li.list-group-item');

items.forEach(function (item, index) {
    item.textContent = `${index}. List`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function (li, index) {
    li.style.background = 'gray';
});

for (let i = 0; i < liEven.length; i++) {
    liEven[i].style.background = 'lightgray';
}

console.log(items);
```

<br>

## DOM 탐색하기

DOM을 이용하면 요소와 요소의 콘텐츠에 무엇이든 할 수 있다. 하지만 무언가를 하기 전엔, 당연히 조작하고자 하는 DOM 객체에 접근하는 것이 선행되어야 한다.

DOM에 수행하는 모든 연산은 document 객체에서 시작한다. document 객체는 DOM에 접근하기 위한 '진입점'이다. 진입점을 통과하면 어떤 노드에도 접근할 수 있다.

![Image](https://github.com/user-attachments/assets/0d22a4d5-3278-42ba-9905-883f291e9764)

### 자식 노드 탐색하기

```js
let val;

const list = document.querySelector('ul.list-group');
const listItem = document.querySelector('li.list-group-item:first-child');

console.log('list', list);
console.log('list item', listItem);

val = list.childNodes; // NodeList 반환, line break 도 포함
val = list.childNodes[0]; // text
val = list.childNodes[0].nodeName;
val = list.childNodes[3]
val = list.childNodes[3].nodeType; // 1

// NodeType

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment node (주석)
// 9 - Document itself
// 10 - Doctype

// children element node return
val = list.children; // HTML Collection 반환 (line break 포함 X)
val = list.children[1];
list.children[1].textContent = 'Hi';

// First Child
val = list.firstChild; // text
val = list.firstElementChild;

// Last Child
val = list.lastChild;
val = list.lastElementChild;

// child 요소 count
val = list.childElementCount; // 5

// parent node return
val = listItem.parentNode;
val = listItem.parentElement.parentElement;

// next sibling return
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

// previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling; // null

console.log(val);
```

### DOM 컬렉션

childNodes는 마치 배열 같다. 하지만 childNodes는 배열이 아닌 반복 가능한 유사 배열 객체인 컬렉션이다.