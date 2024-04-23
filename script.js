let list = [];
let sqrt = [];
function result() {
    list = [];
    sqrt = [];
    let str = document.getElementById("value").value;
    let parts = str.split(/(?=[-+])/);

    for (let i = 0; i < parts.length; i++) {
        let part = parts[i];

        if (part.includes("x")) {
            let coefficient = part;

            if (coefficient === "x" || coefficient === "+x") {
                coefficient = "+1x";
            } else if (coefficient === "-x") {
                coefficient = "-1x";
            }

            let prevChar = i > 0 ? parts[i - 1] : "";
            if (prevChar === "-") {
                coefficient = "-" + coefficient
            }

            let num = parseFloat(coefficient);
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

            let y1 = calculate(x1);
            let y2 = calculate(x2);
            console.log(y1)
            console.log(y2)

            if ((y1 < 0 && y2 >= 0) || (y1 >= 0 && y2 < 0)) {
                sqrt.push((x1 + x2) / 2);
            }
        }
    }

    if (sqrt.length > 0 ) {
        for (let i = 0; i < sqrt.length; i++) {
            document.getElementById("result").innerHTML += sqrt[i] + "\n";
        }
    }
    else {
        document.getElementById("result").innerHTML = "Brak pierwiastków"
    }
}

    function calculate(x) {
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