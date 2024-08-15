function FizzBuzz(n) {
    if (n % 5 === 0 && n % 3 === 0) {
        console.log("FizzBuzz");
    } else if (n % 5 === 0) {
        console.log("Fizz");
    } else if (n % 3 === 0) {
        console.log("Buzz");
    } else {
        return n;
    }
}
console.log(FizzBuzz(17));

function palindromeWords() {
    let word = document.getElementById('palindrome').value;
    let convertWord = word.split("");
    let reverseWord = convertWord.reverse();
    let reversedWord = reverseWord.join("");
    // console.log(reversedWord);
    if(word === reversedWord){
        console.log("palimdrome");
    } else {
       console.log("not a palimdrome");
    }
}


function evenOddNumbers(){
    let even = [];
    let odd = [];
    for(i = 0; i <= 100; i++){
        if(i % 2 === 0){
            even.push(i);
        } else {
            odd.push(i);
        }
    }   return {even, odd};
}


console.log("even Nubers", evenOddNumbers().even);
console.log("Odd Numbers:", evenOddNumbers().odd)