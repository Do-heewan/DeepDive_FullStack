const num_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(num_list)

num_list.pop()
num_list.pop()
num_list.pop();

console.log("pop() 연산 세 번 실행 후 :", num_list);

num_list.push(10);
console.log("10을 푸쉬 한 결과 :", num_list);

const word = "HelLo";
console.log(word);

console.log("대문자 변환 :", word.toUpperCase());
console.log("소문자 변환 :", word.toLowerCase());

console.log("1번째 substring :", word.substring(1));
console.log("3번째 substring :", word.substring(3));
console.log("5번째 substring :", word.substring(5));