// 익명함수를 에로우 펑션으로 변경가능
// function을 없애고 파라메터와 중괄호사이에 에로우 삽입
// 중괄호에 문장이 한문장이면 중괄호 생략 가능
// 할당문이 아닌 표현식이면 return 도 생략
// 앞에 파라메터가 한개면 괄호 생략 가능
let circleArea = function(pi, r) {
    let area = pi * r * r;
    return area;
};

/*
let circleArea = (pi, r) => {
    let area = pi * r * r;
    return area;
}

let circleArea = (pi, r) => return pi * r * r;

let circleArea = (pi, r) => pi * r * r;

let circleArea = pi => pi * 3 * 5;
*/

// 위의 문장을 한줄로 작성하시오.

let result = circleArea(3.14, 3);

console.log(result); //실행 결과 "28.26"
