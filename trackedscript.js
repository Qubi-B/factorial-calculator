function output(){
    a = parseInt(document.getElementById("inputnumber").value);
    document.getElementById("output").innerHTML = factorial(a);
}


function factorial(a){
    res = a;
    for(i = a; i > 1; i--){
        res = res * (a - 1)
        a = a-1
    }
    return res;
}