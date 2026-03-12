function changeColor1(){
    //alert("Test Case 123")
    console.log("Test Case 123")
    let btn1=document.getElementById('btn1');
    console.log(btn1);
    btn1.innerHTML="Donald Trump";
    btn1.style.backgroundColor="blue";
}
function changeColor2(){
    let btn2=document.getElementsByClassName('btnStyles1')[0];
    console.log(btn2);
    btn2.style.backgroundColor="yellow"
}

function changeColor3(){
    //alert("Test 123")
    let btn3=document.querySelector('.btnStyles2');
    console.log(btn3);
    btn3.style.backgroundColor="green"
}

function changeColor4(){
    //alert("Test 123")
    let btn4=document.querySelector('.btnStyles3');
    console.log(btn4);
    btn4.style.backgroundColor="green"
}