function calc() {
    let num1 = document.getElementById("inp1").value;
    let num2 = document.getElementById("inp2").value; 
    let result = document.getElementById("res");
    let btn = document.getElementById("btn1");

    let res = parseInt(num1) * parseInt(num2);
    let res2 = res / 100;
    let resf = res2 + parseInt(num1);

    result.innerHTML = resf;
}

function reset() {
    document.getElementById("inp1").value = "";
    document.getElementById("inp2").value = ""; 
    let res = document.getElementById("res");

    res.innerHTML = "Tip amount:"
}



