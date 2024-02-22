function fibonacciRecursive(num) {

   if (num <= 1) {

      return num;
   }

   else {
      return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2);
   }

}

console.log(fibonacciRecursive(6));