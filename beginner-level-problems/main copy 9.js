function checkPalindrome(str) {

   let reversedStr = str.split("").reverse().join("");


   if (str === reversedStr) {

      console.log("true");
   } else {

      console.log("false");
   }

   return reversedStr;
}

checkPalindrome("madam");