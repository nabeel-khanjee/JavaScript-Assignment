// implimentaion .js file

/*document.write("hello <br>");*/





// add html tag in javascript

/*document.write("haq <br> ki <i>khuli</i> <b>kitab</b>  altaf <br> <hr> altaf ");*/



// Comments
/*single line comment

document.write("haq <br> ki <i>khuli</i> <b>kitab</b>  altaf <br> <hr> altaf ");*/

/*multiple lines comment

/*oashdoahdhd
sasdiasasdhiasdhassd
aisuidasidbaasisudhgahssds
asoduiasdhiuahdhui
*/





// variables

/*there are three types of variables
var 
let 
const*/

/*var

var x="hello world";
document.write(x);
document.write(typeof(x));

var x=3;
document.write(x);
document.write(typeof(x));

var x=true;
document.write(x);
document.write(typeof(x));

var x=undefined;
document.write(x);
document.write(typeof(x));

var x=34.5;
document.write(x);
document.write(typeof(x));

let

let x="hello world";
document.write(x);
document.write(typeof(x));

x=3;
document.write(x);
document.write(typeof(x));

x=true;
document.write(x);
document.write(typeof(x));

x=undefined;
document.write(x);
document.write(typeof(x));

x=34.5;
document.write(x);
document.write(typeof(x));

const

const x="hello world";
document.write(x);
document.write(typeof(x));
*/





// data types

/*let x;
document.write(x);
x="string";
document.write(x);
x=4;
document.write(x);
x=true;
document.write(x);
x=null;
document.write(x);
x=["nabeel","shakeel","khanjee"];
document.write(x);
x={
  x:"nabeel",
  y:4,
}
document.write(x);
*/




// arithmetical operators + - * / % ++ --

/*let x,y,z;
x=4;
y=5;

z=x+y;
document.write(z+"<br>");
z=x-y;
document.write(z+"<br>");
z=x*y;
document.write(z+"<br>");
z=x/y;
document.write(z+"<br>");
z=x%y;
document.write(z+"<br>");
z=x**y;
document.write(z+"<br>");
x++;
y++;
document.write(x+"<br>");
document.write(y+"<br>");

z=(x+y)*2;
document.write(z+"<br>");


*/






// assignment operators = += -= *= /= %= **=

/*x=y
x+=y   ==    x=x+y
x-=y   ==    x=x-y
x*=y   ==    x=x*y
x/=y   ==    x=x/y
x%=y   ==    x=x%y
x**=y   ==    x=x**y
*/








// google console (shift + ctrl + i)

/* finding errors through google console 
testing 
more tools
developer tools
log
console.log[1,2,3];
table
console.table[1,2,3];
console.error[1,2,3];
console.warning[1,2,3]; 
time 
timeend
document get element by id
inner text
inner html
dong commands
*/






// comperision operators


/*
==
===     value && data typer
!=
!==
>
<
<=
>=
var a,b;
a=99;
b=88;
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
*/



// if statement

/*var a=3;
var b=4;

if(a<b){
  document.write(a+" is greater then " +b); 
}
if(a>b){
  document.write(a+" is greater then " +b); 
}
if(a<=b){
  document.write(a+" is greater then " +b); 
}
if(a>=b){
  document.write(a+" is greater then " +b); 
}*/





// logical operators  && || !

/*var a=20;
var b=23;
if(a<b&&b<a){
  document.write("you and elegible");
}
if(a<b||b<a){
  document.write("you or elegible");
}
console.log(! a < b);
*/





// if else statement

/*var a=20;
var b=23;
if(a<b&&b<a){
  document.write("you and elegible "+a);
}
else{
  document.write("you or elegible "+b);
}
*/




// if else if statement

/*var time=20;
if(time<10){
  document.write("Good morning");
}else if(time<17){
  document.write("Good evening");
}else{
  document.write("Good night")
}
*/


// conditional ternary operator

/*
var a=44;
var z;
(a<55)? z="true":z="false";
document.writeln(z);
*/


// switch statement


/*var day=2;

switch (true) {
  case 1: case 2:
    document.writeln('today is monday');
  break;
  case(day<4 &&day <6) :
    document.writeln('today is tuesday');
    
  break;
  case 3:
    document.writeln('today is wednesday');
    
  break;
  case 4:
    document.writeln('today is thursday');
    
  break;
  case 5:
    document.writeln('today is friday');
    
  break;
  case 6:
    document.writeln('today is saturday');
    
  break;
  case 7:
    document.writeln('today is sunday');
    
  break;
  
  default:
    document.writeln('Enter the valid week day');
    break;
}

*/

// alert box

/*var a=47;
var b=6;
if(a>b){
  alert("han bhee keesa hia");
}else{
  alert("nikal loray");
}
*/







// confirm box


/*var a=confirm("Do you  like our website");
if(a){
  alert("Thanks");
}else{
  alert("Sorry");
}
*/





// prompt box

/*var name=prompt("what is your name");
var gender=prompt("what is your gender");
if (gender=="male"||gender=="Male"||gender=="MALE"){
  alert("Thank you for sign in Mr "+name);
}else{
  alert("Thank you for sign in Miss "+name);
}
*/






// Function

/*function myFunction() {
  document.writeln("Hello everybody <br>"); 
}
myFunction();
myFunction();
myFunction();
myFunction();
myFunction();
myFunction();
*/






// Function with parameters

/*function myFunction(a,b,c) {
  if (a>=18&&(b=="Male"||b=="MALE"||b=="male")){
    alert("Your are old enough to busuness wiith us Mr " +c);
  }else if (a>=18&&(b=="Female"||b=="FEMALE"||b=="female")){
    alert("Your are old enough to busuness wiith us Miss " +c);
  }else{
    alert("Please enter valid name,age and gander");
  }
}


var name=prompt("What is your name:");
var age=prompt("what is your age:");
var gender=prompt("what is your gender:");

myFunction(age,gender,name);
*/






// Function With Return Type

/*
function myFunction(a,b,c) {
  return {
    a,
    b,
    c
  };
}


var name=prompt("What is your name:");
var age=prompt("what is your age:");
var gender=prompt("what is your gender:");

let data=myFunction(age,gender,name);

let returnName=data.a,returnAge=data.b,returnGender=data.c;

// let {returnAge,returnGender,returnName}=myFunction(age,gender,name);

alert(returnName +" "+ returnAge +" "+returnGender);
*/







// Global and local variables

/*var a=55;   //global
function name() {
  var b=45;   //local
  document.writeln(a);
  document.writeln(b);

}
document.writeln(a);
// document.writeln(b);
name();
*/







// Events 

/*
click (onclick)
double click (ondblclick)
right click (oncontextclick)

mouse hover (onmouseenter)
mouse out (onmouseout)
mouse up (onmouseup)
mouse down (onmousedown)

key press (onkeypress)
key up (onkeyup)

load (onload)
unload (onunload)
resize (onresize)
scroll (onscroll)
*/

/*
function myFunction(){
  alert("hello kesay ho yaar");
}
*/







// while loop

/*
var a=1;
while(a<=100){
  document.writeln("<li>" +a+") Nabeel Shakeel</li>");
  a=a+1;
}
*/







// do while loop

/*
var a;
do{
  document.writeln("Do while loop");
  a=confirm("do you  want to continue the loop");
}while(a==true) 
*/








// for loop

/*
for (let index = 0; index < 10; index++) {
  document.writeln("<br>For loop");  
}
*/







// break switch Statement

/*
for (let index = 0; index < 10; index++) {
  if(index==3){
    document.writeln("<br>hey (" + index);  
    continue;
  }
  document.writeln("<br>For loop (" + index);  
  
}
for (let index = 0; index < 10; index++) {
  if(index==3){
    document.writeln("<br>hey (" + index);  
    break;
  }
  document.writeln("<br>For loop (" + index);  
  
}
*/








// Even  odd number while loop

/*
var a=prompt("Enter the starting range");
var b=prompt("Enter the ending range");
while(a<=b){
  if((b%2)==0){
    alert("The number" +b+" is an even  number");
    document.writeln(b+"<br>");
  }else{
    alert("The number" +b+" is an odd  number");
    document.writeln(b+"<br>");
  }
  b--;
}
*/







// nested loop

for (let i = 0; i < 10; i++) {
  document.writeln("<br>");
  for (let j = 10; j > i; j--) {
    document.writeln("s");
  }for (let j = 0; j < i; j++) {
    document.writeln("x");
  }
  for (let j = 0; j < i; j++) {
    document.writeln("x");
  }
}