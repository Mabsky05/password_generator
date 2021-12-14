// Assignment Code

//function KEY() {

//query password length
function p_length() {
var password_length = window.prompt("Enter password length:");

  if (isNaN(password_length)) {
    alert("Please enter a number:")
    p_length()
  } else if (password_length < 8 || password_length > 128) {
    var num_confirm = confirm("Password length needs to be between 8 and 128 characters.");
    p_length()
  } else alert("You specified " + password_length + " characters.")
  
}


//query lowercase
function l_case() {
var lower_case = window.prompt("Include lowercase characters? (Y/N)");  

if ((lower_case != "y") && (lower_case !="Y") && (lower_case != "n") && (lower_case != "N")) {
    alert("Please enter y or n")
    l_case()
  } else if (lower_case  == "y" || lower_case == "Y"
    
}    

//query uppercase
function u_case() {
  var upper_case = window.prompt("Include uppercase characters? (Y/N)");  
  
  if ((upper_case != "y") && (upper_case !="Y") && (upper_case != "n") && (upper_case != "N")) {
      alert("Please enter y or n")
      u_case()
    }
  }    

//query numbers
function n_case() {
  var num_case = window.prompt("Include numbers? (Y/N)");  
  
  if ((num_case != "y") && (num_case !="Y") && (num_case != "n") && (num_case != "N")) {
      alert("Please enter y or n")
      n_case()
    }
  }   

//query special characters
function s_case() {
  var spec_case = window.prompt("Include special characters? (Y/N)");  
  
  if ((spec_case != "y") && (spec_case !="Y") && (spec_case != "n") && (spec_case != "N")) {
      alert("Please enter y or n")
      s_case()
    }
}


  
  
function querySelector() {
  p_length()
  l_case()
  u_case()
  n_case()
  s_case()
  if ((lower_case == "n") && (lower_case == "N") && (upper_case == "n") && (upper_case == "N") && (num_case == "n") && (num_case == "N") && (spec_case == "n") && (spec_case == "N")) {
    alert("Please select at least one character type.")
    querySelector()
  }
}
 
  



//SETS!

var l_case_set = Math.floor((Math.random() * 25) + 97)
var u_case_set = Math.floor((Math.random() * 25) + 65)
var n_case_set = Math.floor((Math.random() * 10) + 48)
var s_case_set = [Math.floor((Math.random() * 15) + 33), Math.floor((Math.random() * 7) + 58), 
Math.floor((Math.random() * 6) + 91), Math.floor((Math.random() * 4) + 123)]


//var generateBtn = document.querySelector("#generate");


// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;


// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);



//get random character from unicode

length = 7;


//reference: https://codehandbook.org/generate-random-string-characters-in-javascript/


//string from lowercase only 
function random_string_gen_beta() {

  blank_string = "";
  
  for (i = 0; i < length; i++) {
  var index = Math.floor((Math.random() * 25) + 97);
  (blank_string = blank_string + (String.fromCharCode(index)))
    }
  alert(blank_string)
  }


//string from uppercase only
function random_string_gen_ALPHA() {

  blank_string = "";
  
  for (i = 0; i < length; i++) {
  var index = Math.floor((Math.random() * 25) + 65);
  (blank_string = blank_string + (String.fromCharCode(index)))
    }
  alert(blank_string)
  }




//string from numbers only
function random_string_gen_numba() {

  blank_string = "";
  
  for (i = 0; i < length; i++) {
  var index = Math.floor((Math.random() * 10) + 48);
  (blank_string = blank_string + (String.fromCharCode(index)))
    }
  alert(blank_string)
  }

//string from characters only
function random_string_gen_chara() {

blank_string = "";
 for (i = 0; i < length; i++) {
  index_set = [Math.floor((Math.random() * 15) + 33), Math.floor((Math.random() * 7) + 58), Math.floor((Math.random() * 6) + 91), Math.floor((Math.random() * 4) + 123)]
  var pre_index = Math.floor((Math.random()*4))
  var index = index_set[pre_index];
  (blank_string = blank_string + (String.fromCharCode(index)))
 }alert(blank_string);
}


//string from upper + lower



//append list of random charcodes to set length

//alert(options[index]) //checker
