let list = {};
let t1 = document.getElementById("table1").rows;
let t2 = document.getElementById("table2").rows;

for (let i = 0; i < t1.length; i++) {
    if (i === 0) {
        continue;
    }

    list[t1[i].children[0].innerHTML] = t1[i].children[1].innerHTML;
}

for (let i = 0; i < t2.length; i++) {
    if (i === 0) {
        continue;
    }

    let textArray = t2[i].children[1].innerHTML.split(" ");
    let valueBuffer = "";
    textArray.forEach((text) => {
        let value = null;
        switch (text) {
            case "+":
                value = text;
                break;
            case "-":
                value = text;
                break;
            case "*":
                value = text;
                break;
            case "/":
                value = text;
                break;
            default:
                value = list[text];
        }
        
        valueBuffer = valueBuffer.concat(value);
    });

    t2[i].children[1].innerHTML = eval(valueBuffer);
}
