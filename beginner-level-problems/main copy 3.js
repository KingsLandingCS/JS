function factorial(numb) {

    if (numb === 0 || numb === 1) {

        return 1;
    } else {

        return numb * factorial(numb - 1);
    }
}



console.log(factorial(4));