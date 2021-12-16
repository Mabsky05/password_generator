
var password_length = function p_length() {
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
var lower_case = function l_case() {
    lower_case = window.prompt("Include lowercase characters? (Y/N)");  
    if ((lower_case != "y") && (lower_case !="Y") && (lower_case != "n") && (lower_case != "N")) {
        alert("Please enter y or n")
        l_case()   
      } 
    }

    
    //query uppercase
var upper_case = function u_case() {
    upper_case = window.prompt("Include uppercase characters? (Y/N)");  
      
      if ((upper_case != "y") && (upper_case !="Y") && (upper_case != "n") && (upper_case != "N")) {
          alert("Please enter y or n")
          u_case()
        }
      }    
    //query numbers
var number_case = function n_case() {
    number_case = window.prompt("Include numbers? (Y/N)");  
      if ((number_case != "y") && (number_case !="Y") && (number_case != "n") && (number_case != "N")) {
          alert("Please enter y or n")
          n_case()
        }
      }   
    
    //query special characters
var special_case = function s_case() {
    special_case = window.prompt("Include special characters? (Y/N)");  
      if ((special_case != "y") && (special_case !="Y") && (special_case != "n") && (special_case != "N")) {
          alert("Please enter y or n")
          s_case()
        } 
    }
    
    
  
      
function _gen() {
  lower_case ()
  upper_case ()
  number_case () 
  special_case()
  if ((lower_case == "n") && (upper_case == "n") && (number_case == "n") &&  (special_case == "n") ) {
      alert("Please select at least one character type.")
      _gen()
      }}
    

lower_case();      
password_length();

      
function pass_gen() {
      
      var l_case_set = Math.floor((Math.random() * 25) + 97)
      var u_case_set = Math.floor((Math.random() * 25) + 65)
      var n_case_set = Math.floor((Math.random() * 10) + 48)
      var s_case_set = Math.floor((Math.random() * 15) + 33)

      blank_array = []
      blank_pass = ""

        if  (lower_case == "y") {
        blank_array.push(l_case_set);
        }
      
        if  (upper_case == "y") {
          blank_array.push(u_case_set);
        }
      
        if  (number_case == "y") {
          blank_array.push(n_case_set);
        }
      
        if  (special_case == "y") {
          blank_array.push(s_case_set);
        }
    
        for (i = 0; i < 8; i++) {
        var pre_index = Math.floor((Math.random()*blank_array.length))
        var index = blank_array[pre_index];
        (blank_pass = blank_pass + (String.fromCharCode(index)))
          }
    
    
    alert("im working")
    alert(password_length)
    alert(lower_case)
    alert(blank_pass)

        }

pass_gen();

    
    
    
    
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
    
    