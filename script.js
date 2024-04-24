let list = [];
let sqrt = [];
function oblicz(x) {
    let y = 0;
    let degree = parseFloat(document.getElementById("stopien").value);
    if (degree > 0) {
        for (let i = 0; i < degree; i++) {
            y += list[i] * Math.pow(x, degree - i);
        }
    }
    y += list[degree];
    return y;
}
function result() {
    document.getElementById("result").innerHTML = ""
    list = [];
    sqrt = [];
    let wielomian = document.getElementById("value").value;
    let parts = wielomian.split(/(?=[-+])/);
    for (let i = 0; i < parts.length; i++) {
        let part = parts[i];
        if (part.includes("x")) {
            let znak = part;
            if (znak === "x" || znak === "+x") {
                znak = "+1x";
            } else if (znak === "-x") {
                znak = "-1x";
            }
            let prevChar = i > 0 ? parts[i - 1] : "";
            if (prevChar === "-") {
                znak = "-" + znak
            }
            let num = parseFloat(znak);
            if (!isNaN(num)) {
                list.push(num);
            }
        } else {
            let num = parseFloat(part);
            if (!isNaN(num)) {
                list.push(num);
            }
        }
    }
    console.log(list);
    let from = parseFloat(document.getElementById("z").value);
    let to = parseFloat(document.getElementById("do").value);
    let iterator = parseFloat(document.getElementById("st").value);
    if (iterator !== 0) {
        for (let i = from; i < to; i += iterator) {
            let x1 = i;
            let x2 = i + iterator;
            let y1 = oblicz(x1);
            let y2 = oblicz(x2);
            console.log(y1)
            console.log(y2)
            if ((y1 < 0 && y2 >= 0) || (y1 >= 0 && y2 < 0)) {
                sqrt.push((x1 + x2) / 2);
            }
        }
    }
    if (sqrt.length > 0) {

        document.getElementById("result").innerHTML = sqrt.join(", ")
    } else {
        document.getElementById("result").innerHTML = "Brak pierwiastków"
    }
}
