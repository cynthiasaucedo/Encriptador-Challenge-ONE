/* Reglas de encriptación: 
"e" es convertido para "enter" 
"o" es convertido para "ober"
"i" es convertido para "imes"
"a" es convertido para "ai"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"ober" es convertido para "o"
"imes" es convertido para "i"
"ai" es convertido para "a"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

function encrypt(){
    var txt = document.querySelector(".input-text").value.toLocaleLowerCase();

//"i" affects mayus, minus
//g affects all line
//m affects multiple lines

var txtEncrypted = txt.replace(/e/igm,"enter");
var txtEncrypted = txtEncrypted.replace(/o/igm,"ober");
var txtEncrypted = txtEncrypted.replace(/i/igm,"imes");
var txtEncrypted = txtEncrypted.replace(/a/igm,"ai");
var txtEncrypted = txtEncrypted.replace(/u/igm,"ufat");

document.getElementById("msg").value = txtEncrypted;
}

function decrypt(){
    var txt= document.querySelector(".input-text").value.toLocaleLowerCase();

var txtEncrypted = txt.replace(/enter/igm,"e");
var txtEncrypted = txtEncrypted.replace(/ober/igm,"o");
var txtEncrypted = txtEncrypted.replace(/imes/igm,"i");
var txtEncrypted = txtEncrypted.replace(/ai/igm,"a");
var txtEncrypted = txtEncrypted.replace(/ufat/igm,"u");

document.getElementById("msg").value = txtEncrypted;
}

function copy(){
    var txtcopy = document.getElementById("msg");
    txtcopy.select();
    navigator.clipboard.writeText(txtcopy.value);
}

