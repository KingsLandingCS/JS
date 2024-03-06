function insertionSort(arr) {

    const n = arr.length;


    for (let i = 1; i < n; i++) {

        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {

            arr[j + 1] = arr[j];

            j--;
        }

        arr[j + 1] = key;
    }

    return arr;

}

const numbers = [5, 3, 8, 1, 2];

console.log("Original array:", numbers);
console.log("Sorted array:", insertionSort(numbers.slice()));