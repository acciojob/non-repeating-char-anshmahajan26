function firstNonRepeatedChar(str) {
 // Write your code here
	 for (let i = 0; i < str.length; i++) {
    // agar first aur last position same hai,
    // matlab ye character sirf ek baar aaya hai
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return null;
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
