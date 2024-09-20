function addition(){
    first = document.getElementById("first-number").value;
    first = Number(first);
    second = document.getElementById("second-number").value;
    second = Number(second);
    answer = first + second;
    document.getElementById("output").innerHTML = answer
}

function subtraction(){
    first = document.getElementById("first-number").value;
    first = Number(first);
    second = document.getElementById("second-number").value;
    second = Number(second);
    answer = first - second;
    document.getElementById("output").innerHTML = answer
}

function multiplication(){
    first = document.getElementById("first-number").value;
    first = Number(first);
    second = document.getElementById("second-number").value;
    second = Number(second);
    answer = first * second;
    document.getElementById("output").innerHTML = answer
}

function division(){
    first = document.getElementById("first-number").value;
    first = Number(first);
    second = document.getElementById("second-number").value;
    second = Number(second);
    answer = first /second;
    document.getElementById("output").innerHTML = answer
}

function raisePow(){
    first = document.getElementById("first-number").value;
    first = Number(first);
    second = document.getElementById("second-number").value;
    second = Number(second);
    answer = 1;
    
    for (let i = 0; i < second; i++) {
        answer *= first;
    }

    document.getElementById("output").innerHTML = answer;
}
function doclear(){
    
        document.getElementById("alt-output").style.display="block";
        document.getElementById("first-number").value = "";
        document.getElementById("second-number").value = "";
        document.getElementById("output").innerHTML = "";
        document.getElementById("main").style.display="none";
    
    
}