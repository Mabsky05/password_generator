//variable list
l_case_set = "abcdefghijklmnopqrstuvwxyz",
u_case_set = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
n_case_set = "0123456789",
s_case_set = "~!@#$%^&*()_+{}[]|\:;'<>,\".?/"

var add_char= ""
var blank_string = ""

//query password length
function p_length() {
  password_length = window.prompt("Enter password length:");
    if (isNaN(password_length)) {
      alert("Please enter a number:")
      p_length()
  } else if (password_length < 8 || password_length > 128) {
      var num_confirm = confirm("Password length needs to be between 8 and 128 characters.");
      p_length()
  } else alert("You specified " + password_length + " characters.")
      return password_length;
}

//query lowercase 
function l_case() {
  lower_case = window.prompt("Include lowercase characters? (Y/N)");  
    if ((lower_case != "y") && (lower_case !="Y") && (lower_case != "n") && (lower_case != "N")) {
    alert("Please enter y or n");
    l_case();   
  } else if ((lower_case == "y" || lower_case == "Y")) {
    alert("Lowercase characters included.");
    return lower_case == "y";
  } else alert("Lowercase characters excluded.")
}

//query uppercase
function u_case() {
  upper_case = window.prompt("Include uppercase characters? (Y/N)");        
    if ((upper_case != "y") && (upper_case !="Y") && (upper_case != "n") && (upper_case != "N")) {
        alert("Please enter y or n")
        u_case()
      } else if ((upper_case == "y" || upper_case == "Y")) {
        alert("Uppercase characters included."); 
        return upper_case == "y";
    } else alert("Uppercase characters excluded.")
}

//query numbers
function n_case() {
  number_case = window.prompt("Include numbers? (Y/N)");  
    if ((number_case != "y") && (number_case !="Y") && (number_case != "n") && (number_case != "N")) {
        alert("Please enter y or n")
        n_case()
    } else if ((number_case == "y" || number_case == "Y")) {
      alert("Numbers included."); 
      return number_case == "y";
  } else alert("Numbers excluded.")
}      
    
//query special characters
function s_case() {
  special_case = window.prompt("Include special characters? (Y/N)");  
     if ((special_case != "y") && (special_case !="Y") && (special_case != "n") && (special_case != "N")) {
        alert("Please enter y or n")
        s_case()
      } else if ((special_case == "y" || special_case == "Y")) {
        alert("Special characters included."); 
        return special_case == "y"
      } else alert("Special characters excluded.") 
}

//query n values
function checker() { if ((lower_case == "n") && (upper_case == "n") && (number_case == "n") &&  (special_case == "n")) {
  alert("Please select at least one character type.")
  l_case();
  u_case()
  n_case()
  s_case()
  checker()
  }
}

//combine all queries in one function
function all_questions(){
p_length();
l_case();
u_case()
n_case()
s_case()
checker()
}

//generate password function
function pass_gen() {
  if  (lower_case == "y") {
    add_char += (l_case_set);
  }

  if  (upper_case == "y") {
    add_char += (u_case_set);
          }
        
          if  (number_case == "y") {
            add_char += (n_case_set);
          }

          if  (special_case == "y") {
            add_char += (s_case_set);

        } for (i = 0; i < password_length; i++) {
          blank_string += add_char[(Math.floor(Math.random()*add_char.length))]
            }  

    alert(blank_string)
    return(blank_string)
}

 
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(blank_string) {
  var passwordText = document.querySelector("#password");
  document.getElementById(".password").innerHTML = blank_string;
  passwordText.innerHTML = blank_string;

}

// Add event listener to generate button
generateBtn.addEventListener("click", all_questions);
generateBtn.addEventListener("click", pass_gen);

    
