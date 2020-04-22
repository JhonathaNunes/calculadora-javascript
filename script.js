let num1 = "";
let num2 = "";
let operation = "";
let numbers = [...document.getElementsByClassName("numero")];
let operations = [...document.getElementsByClassName("operacao")];
let resultButton = document.getElementsByClassName("resultar")[0]
let result = ""

numbers.forEach(number => {
    number.onclick = function (event) {
        if (result == '') {
            let resultScreen = document.getElementById("resultado");

            if (operation == "") {
                if (event.target.textContent === '.' && num1.indexOf('.') !== -1) return;
                num1 += event.target.textContent;
                resultScreen.value += event.target.textContent;
            } else {
                if (event.target.textContent === '.' && num2.indexOf('.') !== -1) return;
                num2 += event.target.textContent;
                resultScreen.value += event.target.textContent;
            }
        }
    }
});

operations.forEach(op => {
    op.onclick = function (event) {
        let resultScreen = document.getElementById("resultado");

        if (num1 !== '' && operation == '') {
            operation = event.target.textContent
            resultScreen.value += operation
        }
    }
});

resultButton.onclick = function () {
    let resultScreen = document.getElementById("resultado");

    num1 = Number(num1)
    num2 = Number(num2)

    if (num2) {
        switch (operation) {
            case "+":
                result = num1 + num2
                resultScreen.value = result;
                break;
            case "-":
                result = num1 - num2
                resultScreen.value = result;
                break;
            case "*":
                result = num1 * num2
                resultScreen.value = result;
                break;
            case "/":
                result = num1 / num2
                resultScreen.value = result;
                break;
        }
    } else {
        resultScreen.value = "Erro de operação"
    }
}

