/*
사용자의 이름과 나이를 입력받아 배열로 저장하는 프로그램을 자바스크립트로 작성합니다. 
입력받은 이름과 나이를 순서대로 출력하고, 각 사용자들의 나이의 평균을 계산한 값을 출력해봅니다. 
결과물로 프로그램 실행 결과의 스크린샷을 제출합니다.
*/

const arr = [];
let total_age = 0;

for (let i = 0; i < 3; i++) {
  let name = prompt("이름을 입력해주세요.");
  let age = parseInt(prompt("나이를 입력해주세요."));
  arr.push([name, age]);
}

for (let ix of arr) {
  console.log("이름 : ", ix[0]);
  console.log("나이 : ", ix[1]);

  total_age += ix[1];
}

console.log("나이의 평균 : ", total_age / arr.length);