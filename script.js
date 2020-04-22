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
        }
        
        if (num1 && !operation) {
            operation = event.target.textContent
            resultScreen.value += operation
        }
    }
});

result.onclick = function () {
    let resultScreen = document.getElementById("resultado");

    num2 = Number(resultScreen.value.substr(resultScreen.value.indexOf(operation)+1))

    if (num2) {
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
    } else {
        resultScreen.value = "Erro de operação"
    }
}

