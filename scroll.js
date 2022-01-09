
window.clsn = "blank";

function scfocus(a){
window.clsn = a;
document.body.classList = [];
document.body.classList.add('container');
document.body.classList.add(a);
document.getElementById('classname').value = a;
document.getElementById('code').classList.add(a);
//showcode(clsn)

}

function showcode(a){
//console.log(a)
window.f = "ssb/"+ clsn +".css";
//console.log(f)
fetch (f)
.then(x => x.text())
.then(y => window.code = y);
//console.log(code);
document.getElementById('code').innerText = code;
}

setInterval(function(){showcode(clsn)},4000);