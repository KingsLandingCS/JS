function factorilizeNumber(value) {

    if (value === 0 || value === 1)

        return 1;

    for (let i = value - 1; i >= 1; i--) {

        value = value * i;

    }

    return value;
}


console.log(factorilizeNumber(4));