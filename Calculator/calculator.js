function add() {

    var input1=Number(document.getElementById("n1").value);

    var input2=Number(document.getElementById("n2").value);

    var result=input1 + input2;
 
    document.getElementById("answer").innerHTML=result;

}

function sub() {

    var input1=Number(document.getElementById("n1").value);

    var input2=Number(document.getElementById("n2").value);

    var result = input1 - input2;

    document.getElementById("answer").innerHTML=result;

}

function divide() {

    var input1=Number(document.getElementById("n1").value);

    var input2=Number(document.getElementById("n2").value);

    var result = input1 / input2;

    document.getElementById("answer").innerHTML=result;

}

function multiply() {

    var input1=Number(document.getElementById("n1").value);

    var input2=Number(document.getElementById("n2").value);

    var result = input1 * input2;

    document.getElementById("answer").innerHTML=result;

}

function square() {

    var input=Number(document.getElementById("n").value);

    var result = input*input;

    document.getElementById("answer").innerHTML=result;
}