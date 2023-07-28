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
