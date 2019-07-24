var a = 5;
var b = "10";
var c = 10;
var d = a + c;
var e = c * a;
var f = b + e; 
console.info(f);
console.log(a);
console.error(b);
var h1 = document.createElement("h1"); //<h1></h1>
h1.append(f)
document.body.appendChild(h1);

var a = document.createElement("a"); // <a></a>
a.setAttribute("href","http://google.com"); //<a href
a.setAttribute("target","_blank");
a.append(b);
document.body.appendChild(a); //DCM

var ul = document.createElement("ul");
var li = document.createElement("li");

ul.appendChild(li);
li.append("Item 01");
var li2 = document.createElement("li");
li2.appendChild(a);
ul.appendChild(li2);

document.body.appendChild(ul);

var a = 5;
var b = "Google";
var c = 10;
var d = a+c;
var e = c*a;
var f = a+e;
console.info(f,a,e);
console.log(a,f,e);
console.error(b,f,e,a);
var h1 = document.createElement("h1"); // <h1></h1>
h1.append(f);

document.body.appendChild(h1); //DOM /*função para adicionar coisas no html*/
//document.body.append(d); /*document se refere ao documento inteiro do html*/
var A = document.createElement("A"); // <a></a>
A.setAttribute("href", "http://google.com"); // <a href=""> </a>
A.setAttribute("target", "_blank");
A.append(b); 

document.body.appendChild(A); // DOM

var ul = document.createElement("ul");
var li = document.createElement("li");
var span = document.createElement("span");

ul.appendChild(li);
li.appendChild(span);
span.append("Item 01");
var li2 = document.createElement("li");
li2.appendChild(A);
ul.appendChild(li2);
document.body.appendChild(ul);

var section = document.createElement("section");
var div = document.createElement("div");
var h1 = document.createElement("h1");
var nav = document.createElement("nav");
var ul = document.createElement("ul");
var li = document.createElement("li");
var li2 = document.createElement("li");
var a = document.createElement("a");
var a2 = document.createElement("a");

section.appendChild(div);
div.appendChild(h1);
h1.append("Exercicio JavaScript");
section.appendChild(nav);
nav.appendChild(ul);
ul.appendChild(li);
li.appendChild(a);
a.setAttribute("href", "http://google.com"); // <a href=""> </a>
a.setAttribute("target", "_blank");
a.append("Link 01");
ul.appendChild(li2);
li2.appendChild(a2);
a2.setAttribute("href", "http://google.com"); // <a href=""> </a>
a2.setAttribute("target", "_blank");
a2.append("Link 02");

document.body.appendChild(section);