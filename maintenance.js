const a=document.getElementById('name');
a.setAttribute("onChange","ex1(name)");
function ex1(element){
    const val1=element.target.value;
    console.log(val1);
}

const b =document.getElementsByClassName('Reg');
a.setAttribute("onChange","ex2()");
function ex2(element){
    const val2=element.target.value;
}
const c =document.getElementsByClassName('Block');
b.setAttribute("onChange","ex3(value)");
function ex3(element){
    const val1=element.target.value;
}
const d=document.getElementById('roomno');
d.setAttribute("onChange","ex4(value)");
function ex4(element){
    const val1=element.target.value;
}
const e=document.getElementsById('Issue');
e.setAttribute("onChange","ex5(value)");
function ex5(element){
    const val1=element.target.value;
}