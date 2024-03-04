let arr = [

    { price: "100", product: "Mobile" },
    { price: "200", product: "Laptop" },
    { price: "300", product: "Mic" },
    { price: "400", product: "PC" },
];


let newArr = arr.map((value) => {

    return value.product;

});

console.log(newArr);