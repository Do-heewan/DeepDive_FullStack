let val;

const list = document.querySelector('ul.list-group');
const listItem = document.querySelector('li.list-group-item:first-child');

console.log('list', list);
console.log('list item', listItem);

// val = list.childNodes; // NodeList 반환, line break 도 포함
// val = list.childNodes[0]; // text
// val = list.childNodes[0].nodeName;
// val = list.childNodes[3]
// val = list.childNodes[3].nodeType; // 1

// // NodeType

// // 1 - Element
// // 2 - Attribute (deprecated)
// // 3 - Text node
// // 8 - Comment node (주석)
// // 9 - Document itself
// // 10 - Doctype

// // children element node return
// val = list.children; // HTML Collection 반환 (line break 포함 X)
// val = list.children[1];
// list.children[1].textContent = 'Hi';

// // First Child
// val = list.firstChild; // text
// val = list.firstElementChild;

// // Last Child
// val = list.lastChild;
// val = list.lastElementChild;

// // child 요소 count
// val = list.childElementCount; // 5

// // parent node return
// val = listItem.parentNode;
// val = listItem.parentElement.parentElement;

// // next sibling return
// val = listItem.nextSibling;
// val = listItem.nextElementSibling;
// val = listItem.nextElementSibling.nextElementSibling;

// // previous sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling; // null

// console.log(val);

val = list.childNodes;

// for (let node of list.childNodes) {
//     console.log(node);
// }

// console.log(Array.from(list.childNodes).filter);

console.log(val)