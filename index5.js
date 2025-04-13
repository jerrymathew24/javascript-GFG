// Assignment 5: Write a JavaScript program to highlight the word with more than 5 characters with green background.


//split(' ') makes an array of words
//then we map over the array and check if the word length is greater than 5
//later we join the array back to a string with ' ' as separator

//here we use cleanWord to remove punctuation for length check
//but we keep the original word for display


let para = document.getElementById("para");
para.innerHTML = para.innerText
  .split(" ")
  .map((word) => {
    const cleanWord = word.replace(/[^\w]/g, ""); // remove punctuation for length check
    return cleanWord.length > 5
      ? `<span style="background-color:green; color:white">${word}</span>`
      : word;
  })
  .join(" ");
