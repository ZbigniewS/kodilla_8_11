// plik scripts.js
var list = document.getElementById('list');
var add = document.getElementById('addElem');
var itemByTagName = document.getElementsByTagName('li');
var czas = document.getElementById('czas');
document.getElementById("start").innerHTML = Date();

add.addEventListener('click', function (e) {
    var n = itemByTagName.length;
    list.innerHTML += '<li>item ' + n + '</li>';
    console.log(n);
}
);
czas.addEventListener('click', function (czas) {
    document.getElementById('now').innerHTML = Date();
}
);

console.log(itemByTagName);


