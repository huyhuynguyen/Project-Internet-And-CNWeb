

// var button_signup = document.querySelector('.btn-signup') 
// button_signup.onclick = function(e){
   
//     Validator({
//         form: "#form-container",
//         errorSelector: ".form-message",
//         rules: [
//           Validator.isFirstName('input[name="firstname"]', 4),
//           Validator.isLastName('input[name="lastname"]', 4),
//           Validator.isEmail('input[name="email"]', 4),
//           Validator.isPassword('input[name="password"]', 8),
//           Validator.isConfirmPassword('input[name="confirmpassword"]'),
//           Validator.isChecked('input[name="subscribe"]'),         
//         ],
//       });
//       e.preventDefault();
// }

// Xu li form 

function Validator(options) {

    var formElement = document.querySelector(options.form) 
    console.log(formElement)
    if (formElement) {
            // duyet qua cac rule
            options.rules.forEach(function(rule) {
               
                   
                    console.log(rule.selector)
                    validate(options,rule)
                
            })            
    
    }    
}


function validate(options , rule) {
    var inputElement = document.querySelector(rule.selector)
    console.log(inputElement)
    var errorSelector = inputElement.parentElement.parentElement.querySelector(options.errorSelector); 
    // errorSelector.innerHTML = "123"
    console.log("Errror:" + errorSelector)
   
    inputElement.onchange = function() {
        // console.log(inputelemtcheck)
        switch(rule.selector){
            case 'input[name="confirmpassword"]' :
                // console.log(rule.test())
                if (!rule.test(inputElement.value)){
                 
                    errorSelector.innerHTML = "Confirm sai mat khau"
                }
                else {
                    errorSelector.innerHTML = ""
                }
                
                break ;
            case 'input[name="subscribe"]' :
                if (rule.test(inputElement.checked)) {
                    errorSelector.innerHTML = ""
                }  
                else {
                    errorSelector.innerHTML = "you not checked"
                }
                break 
            default : 
            var check = Validator.minlength(inputElement,rule.min).test(inputElement.value) 
            if (check != undefined) {
                
                errorSelector.innerHTML = check
        }
        else {
            errorSelector.innerHTML=""
        }
           
            break;
    }
            
       
    }
           
   
}

Validator.isFirstName = function(selector ,min) {
    return {
        selector : selector ,
        min : min,
        test : function(value ) {
            return value.trim() ? undefined : "Vui Long nhap lai"
        }
    }

}
Validator.isLastName = function(selector ,min) {
    return {
        selector : selector ,
        min : min,
        test : function(value) {
            return value.trim() ? undefined : "Vui Long nhap lai"
        }
    }

}
Validator.isEmail = function(selector ,min) {
    return {
        selector : selector ,
        min : min,
        test : function(value) {
            return value.trim() ? undefined : "Vui Long nhap lai"
        }
    }

}
Validator.isName = function(selector ,min) {
    return {
        selector : selector ,
        min : min,
        test : function(value) {
            return value.trim() ? undefined : "Vui Long nhap lai"
        }
    }

}
Validator.isPassword = function(selector ,min) {
    return {
        selector : selector ,
        min : min,
        test : function(value) {
            return value.trim() ? undefined : "Vui Long nhap lai"
        }
    }

}
Validator.minlength = function(selector , min) {
    return {
        selector : selector ,
        test : function(value) {
            return (value.length >= min) ? undefined : `Do dai toi thieu ${min} ki tu`
        }
    }

}
Validator.isConfirmPassword = function(selector) {
    return {
        selector : selector ,
        test : function(confirmPassword) {
            console.log(selector)
            var password = document.querySelector('input[name="password"]').value
        
            console.log(password, confirmPassword) 
            return password == confirmPassword
        }
    }
}
Validator.isChecked = function(selector) {
    return {
        selector : selector ,
        test : function(value) {
                if (value) return true 
                else return false 
        }
    }

} 
