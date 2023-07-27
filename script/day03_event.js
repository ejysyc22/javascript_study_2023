//1. 변수생성
const btn2 = document.querySelector ('#btn2');
const btn3 = document.querySelector ('#btn3');  
const btn4 = document.querySelector ('#btn4');
const btn5 = document.querySelector ('#btn5');
const input_id = document.querySelector ('#user_id');
console.log (btn2, btn3, btn4, btn5, input_id); //정상화인
//2. 이벤트 작성
//btn3을 클릭했을때 경고창을 띄우기
//객체,이벤트리스터('이벤트종류',함수(){실행결과})
btn3.addEventListener('click',function(){
    window.alert('error');
})
btn4.addEventListener('mouseover',function(){
    this.style.backgroundColor='aqua';
    // this 현재 이벤트 객체 대상 == btn4
    // 현재대상.style.css 속성 = '대입값'
});
btn5.addEventListener('click',function(){
    btn4.style.transform='skewX(10deg)';
    btn3.style.backgroundColor ='yellow';
    btn2.innerHTML ='결과';
});
input_id.addEventListener('focus',function(){  /* focus에 커서를 놓았을때 */   
    this.style.backgroundColor ='lime';
})  
input_id.addEventListener('blur',function(){   /* focus를 잃었을때 */
    this.style.backgroundColor='gray';
})


//변수.addEventListener('이벤트',function(){실행});
//변수.addEventListener('이벤트',function(){실행});
//변수.addEventListener('이벤트',function(){실행});
//변수.addEventListener('이벤트',function(){실행});
//변수.addEventListener('이벤트',function(){실행});
//변수.addEventListener('이벤트',function(){실행});
//변수.addEventListener('이벤트',function(){실행});
//변수.addEventListener('이벤트',function(){실행});