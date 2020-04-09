let num1 = "";
let num2 = "";
let operation = "";
let numbers = [...document.getElementsByClassName("numero")];
let operations = [...document.getElementsByClassName("operacao")];
let result = document.getElementsByClassName("resultar")[0]

numbers.forEach(number => {
    number.onclick = function (event) {
        if (num1 === "" || num2 === "") {
            let resultScreen = document.getElementById("resultado");
            if (event.target.textContent === '.' && resultScreen.value.indexOf('.') !== -1) return;
            resultScreen.value += event.target.textContent;
        }
    }
});

operations.forEach(op => {
    op.onclick = function (event) {
        let resultScreen = document.getElementById("resultado");

        if (num1 === "") {
            num1 = Number(resultScreen.value);
            resultScreen.value = "";
        }
        
        operation = event.target.textContent
    }
});

result.onclick = function () {
    let resultScreen = document.getElementById("resultado");

    num2 = Number(resultScreen.value)

    switch (operation) {
        case "+":
            resultScreen.value = num1 + num2;
            break;
        case "-":
            resultScreen.value = num1 - num2;
            break;
        case "*":
            resultScreen.value = num1 * num2;
            break;
        case "/":
            resultScreen.value = num1 / num2;
            break;
    }

    num1, num2, operation = ""
}

