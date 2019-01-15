// You need to write a function to implement an algorithm which will accept a string of characters and should find the highest occurrence of the character and display it. For example if input is "aaaaaaaaaaaaaaaaabbbbcddddeeeeee" it should return "a".

function highestOccurance(str) {
    let max = 0,
    maxChar = '';
    str.split('').forEach(function(char) {
        if (str.split(char).length > max) {
            max = str.split(char).length;
            maxChar = char
        }
  
    })
  return maxChar
}
console.log(highestOccurance("aaaaaaaaaaaaaaaaabbbbcddddeeeeee"))