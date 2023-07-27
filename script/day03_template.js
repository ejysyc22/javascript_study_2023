// 자바스크립트 = 객체지향언이
// 객체구분 > 변수생성 > 변수활용 속성, 이벤트, 메서드

//getElement 객체방법
const ulwrap = document.getElementById ('wrap'); 
const liTag = document.getElementsByTagName ('li');   
const aTag = document.getElementsByTagName ('a'); 
//querySelector 객체방법(css비슷한점이 많음)
const ulWrapQ = document.querySelector('#wrapQ');
const liTagQ  = document.querySelectorAll('#wrap li');  
const aTagQ = document.querySelectorAll('#wrap a');  /* querySelector만 선택해서 가능 */
const aTagQ1 = document.querySelector('#wrap a:nth-child(1)')
//변수 정상출력확인
console.log(ulwrap, ulWrapQ, liTag); 
console.log(liTag[0], liTag[1], liTag[2], liTag[3]);
console.log(liTagQ, liTagQ[0], liTagQ[1], liTagQ[2], liTagQ[3]);
console.log(aTag, aTag[0], aTag[1], aTag[2], aTag[3], aTagQ1);
//-----------------------------------------------------------------
console.log ('----------------------------------------------------')
console.log ('li태크 변수 값은 ' + liTagQ[0]+'입니다!');
console.log ('1+1='+(1+1));
console.log ('7x4='+(7*4));
console.log (`1+1=${1+1}`);
console.log (`7X4=${7*4}`);
console.log (`li태그 변수 값은 ${liTagQ[0]}`);