/*
if 문과 for 반복문을 사용하여 숫자 배열에서 짝수만 골라 출력하는 코드를 작성합니다. 
또한, for...of 문을 사용해 다른 배열을 순회하며 조건에 맞는 값을 필터링하는 연습도 추가합니다. 
결과물로 코드와 콘솔 출력 스크린샷을 제출합니다.
*/

const number_list = [1, 2, 3, 4, 5, 6,  7, 8, 9, 10];

for (let i = 1; i <= number_list.length; i++) {
  if (i % 2 == 0) {
    console.log('짝수 : ', i);
  }
}

const words = ['apple', 'ban', 'as', 'qwer', 'zxcvbnm', 'Z'];
console.log(words);

for (const word of words) {
  if (word.length >= 3) {
    console.log('단어의 길이가 3 이상인 단어 : ', word)
  }
}