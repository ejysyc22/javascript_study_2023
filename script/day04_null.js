//null, undefined 데이터타입 차이
//null == 변수의 값을 삭제할때 사용한다.
//'' == 빈 문자열은 DOM문제데이터를 삭제할때 사용한다.
let a = 10
console.log (a)
a = null //빈 값을 대입한다(내용삭제)
console.log(a)
//------------------------
const pwd = document.querySelector ('#pwd') //비밀번호 입력칸
const submit = document.querySelector ('#submit') //변경버튼
const reset = document.querySelector ('#reset') // 초기화버튼
console.log (pwd, submit, reset);
//사용자가 비밀번호 입력칸에 비밀번호 입력 후
//submit 버튼 클릭 시 원도우팝업창으로 '비밀번호 변경'
//reset버튼 클릭 시 비밀번호 입력칸 값 초기화(제거)

submit.addEventListener ('clack',function(){
    window.alert('비밀번호변경');
})
reset.addEventListener ('click',function(){
    /* pwd.value= '' */
    pwd.value = null
})
//------------------------------
//undefined 정의되지 않은 상태 (undefined는 값을 넣지 않은것)
let b = 10 
let c 
console.log (b,c)
console.log (b+c) //10+undefined = NaN 답을 낼수 없다.
//Not a Number = NaN (NaN:잘못된 결과가 나왔을때 알려주는것)
//-------------------------------
console.log('----------------------------')
let num1 = 10;
num1++;
console.log(num1); //11
num1--;
console.log(num1); //10
console.log(++num1);  
console.log(num1); 
/* 출력 또는 대입연산자와 함께 할때 전위,후위 연산자에 따라 결과값이 다르게 출력된다.
출력 예) console.log(num1++) 콘솔 로그로 기존 num1의 값을 먼저 전송출력 후
++ 증감연산자로 num1의 값을 나중에 1증가 한다.
개별 예) console.log(num1++)(num1--)
출력, 대입 관계없이 증감연산자를 개별로 작성한 경우
전위, 후의 연산과 관계없이 무조건 1증가 또는 1감소된다.
 */
let num2 = 5;
let num3 = 0;
console.log(`초기값 num2=${num2}, num3=${num3}`);
num3 = num2++
console.log(`num2=${num2}, num3=${num3}`)
num3 = ++num2
console.log(`num2=${num2}, num3=${num3}`)

let number1=10;
let number2=20;
let result;
number1--;
console.log(number1); //결과 9  (대입상대가 없으면 바로 적용)
number1++;
console.log(number1); //결과 10 (대입상대가 없으면 바로 적용)
result=number2++;
console.log(result); //결과 20 (number2(20)을 result에게 먼저 보내준것을 보여주고 다음에 1이 더해진다 )
result=++number2;
console.log(result); //결과 22 (위에서 받은 1인 더해져서 number2(21)되고 이번에 받은 1이 더해지고 result에게 넘겨진다.)
