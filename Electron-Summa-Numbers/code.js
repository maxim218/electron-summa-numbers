"use strict";

function findElement(s) {
    return document.getElementById(s.toString());
}

window.onload = function() {
    const t1 = findElement("t1");
    const t2 = findElement("t2");
    const btn = findElement("getResultBox");
    const label = findElement("resultLabel");

    btn.onclick = function() {
        const v1 = parseInt(t1.value, 10);
        const v2 = parseInt(t2.value, 10);
        const s = v1 + v2;
        if(isNaN(s) === false) {
            label.innerHTML = s;
        } else {
            label.innerHTML = "Ошибка";
        }
    }
}
