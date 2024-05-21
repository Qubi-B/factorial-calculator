a = 0;

alert(factorial(a));

function factorial(a){
    res = a;
    for(i = a; i >= 1; i--){
        res = res * (a - 1)
        a = a-1
    }
    return res;
}