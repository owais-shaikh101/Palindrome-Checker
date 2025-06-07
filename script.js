const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", function(){
  if(textInput.value.length === 0){
    alert("Please input a value");
  }
  else {
    const cleanString = textInput.value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    if(cleanString === cleanString.split("").reverse().join("")){
    result.style.display = "block";
    result.style.backgroundColor = "#005500";
      result.innerText = `${textInput.value} is a palindrome`;
    }
    else {
    result.style.display = "block";
    result.style.backgroundColor = "#aa0000";
      result.innerText = `${textInput.value} is not a palindrome`;
    }
  }
  textInput.value = "";
});



