/* Submit text to Telegram */
$('form').submit(function (e) {
    tokenID = sessionStorage.getItem('tokenID');
    chatID = sessionStorage.getItem('chatID');
    envName = sessionStorage.getItem('envName');

    var comment = document.getElementById("comment_input").innerText;
    var email = document.getElementById("email_input").innerText;
    var url=window.location.search.slice(16);
    var pages=window.location.pathname.slice(1,-4);
    var result = true;

    console.log('comment_input: ' + comment_input);

    //    var chech_agree_flag = check_agree_send();
    //    console.log('chech_agree: ' + chech_agree_flag);

    /*switch(url){
        case "?course=qa&name=qa_practice":
            var userUrl="Курс QA-практика";
            break;
    
        case "?course=qa&name=qa_theory": 
            var userUrl="Курс QA-менторство";
            break;
    
        case "?course=qa&name=qa_automation": 
            var userUrl="Курс QA-автоматизація";
            break;
    
        case "?course=ba&name=ba_practice":
            var userUrl="Курс BA-практика";
            break;
    
        case "?course=pm&name=pm_practice":
            var userUrl="Курс PM-практика";
            break;
        case "":
            var userUrl=" ";
            break;
    }

    switch(pages){
        case "/index.php":
            var userPage="Home Page";
            break;
    
        case "/courses.php": 
            var userPage="";
            break;
    
        case "/about_us.php": 
            var userPage="About Us";
            break;
    
        case "/our_trainers.php":
            var userPage="Our Trainers";
            break;
        c
    }*/
    
    console.log(pages);
    console.log(url);

    var chech_agree_flag = check_agree_send();
    console.log('chech_agree: ' + chech_agree_flag);

    var check_name_flag = check_name();
    console.log('check_name: ' + check_name_flag);

    var check_phone_flag = check_phone();
    console.log('check_phone: ' + check_phone_flag);

    var check_comment_flag = check_comment();
    console.log('check_comment: ' + check_comment_flag);

    var check_email_flag = check_email();
    console.log('check_email: ' + check_email_flag);

    // chech_agree_flag == false ||
    if (chech_agree_flag == false || check_name_flag == false || check_phone_flag == false || check_email_flag == false || check_comment_flag == false)
        return false;


    /* var brversion_text = "Browser:" + platform.name +
      " v" + platform.version +
      " on " + platform.os; */

    /*
    '\nBrowser: ' + platform.name + ' v' + platform.version +
    '\nOS: ' + platform.os + */
    const indx=0;

var input = $("#phone_input");

input.intlTelInput({
    
    autoHideDialCode:true,
    
    autoPlaceholder:"polite",
    
    customPlaceholder:null,
    
    dropdownContainer:null,
    
    excludeCountries: [],
    
    formatOnDisplay:true,
    
    geoIpLookup:null,
    
    hiddenInput:"",
    
    initialCountry:"",
    
    localizedCountries:null,
    
    nationalMode:true,
    
    onlyCountries: [],
    
    placeholderNumberType:"MOBILE",
    
    preferredCountries: [],
    
    separateDialCode:false,
    
    utilsScript:"js/utils.js" //для форматирования/плейсхолдера и т.д.
});
var input=$("#phone_input");

var intlNumber = input.intlTelInput("getNumber");
    var sum_text = 
        'Enviroment: ' + envName +
        '\nPage: '+ pages + '\n' + 
        '\nCourse: '  + url +
        '\n' +
        'Name: ' + $('#name_input').val() +
        '\nPhone: ' + intlNumber + 
        '\nEmail: ' + $('#email_input').val() +
        '\nComment: ' + comment;  /* +  
      '\nBrowser: ' + platform.name + " v" + platform.version +
      '\nOS: ' + platform.os;
      */
    
    e.preventDefault();
    $.ajax({
        url: 'https://api.telegram.org/bot' + tokenID + '/sendMessage',
        method: 'POST',
        data: {
            chat_id: chatID,
            text: sum_text
        },
        success: function () {
            document.getElementById("write_to_us-block").setAttribute("class", "no-display");
            document.getElementById("write_to_us-thanks-block").setAttribute("class", "");

            /* alert('your message has been sent!'); */
        },
        error: function(){
            alert('No Internet Connection.');
        }
    });
});


function countDigits(n) {
    for (var i = 0; n > 1; i++) {
        n /= 10;
    }
    return i;
}



$(function () {
    /*
        var name_input = $("#name_input");
        var name_line = $("#name_input");
        var error_message_name_empty = $("#error_message_name_empty");
        var error_message_name_short = $("#error_message_name_short");
        var error_message_name_long = $("#error_message_name_long");
        var error_message_name_only_numbers = $("#error_message_name_only_numbers");
    
    
        var email_input = $("#email_input");
        var email_line = $("#email_input");
        var error_message_email_empty = $("#error_message_email_empty");
        var error_message_email_invalid = $("#error_message_email_invalid");
        var error_message_email_long = $("#error_message_email_long");
    
        var error_message_agree_empty = $("#error_message_agree_empty");
    
        var comment_input = $("#comment_input");
        // var comment_line = $("#comment_line");
        var error_message_comment_long = $("#error_message_comment_long");
    
        var phone_input = $("#phone_input");
        var phone_line = $("#phone_input");
        var error_message_phone_empty = $("#error_message_phone_empty");
        var error_message_phone_short = $("#error_message_phone_short");
        var error_message_phone_long = $("#error_message_phone_long");
        var error_message_phone_only_numbers = $("#error_message_phone_only_numbers");
    
    
        var agree_input = $("#agree-checkbox");
        var error_message_agree_empty = $("#error_message_agree_empty");
    
    
        error_message_name_empty.hide();
        error_message_name_short.hide();
        error_message_name_long.hide();
        error_message_name_only_numbers.hide();
    
        error_message_email_empty.hide();
        error_message_email_invalid.hide();
        error_message_email_long.hide();
    
        error_message_phone_empty.hide();
        error_message_phone_short.hide();
        error_message_phone_long.hide();
        error_message_phone_only_numbers.hide();
    
        error_message_comment_long.hide();
    
        error_message_agree_empty.hide();
    */
    /*
        //Functions for lines in form 
        name_input.focus(function () {
            name_line.css({ "border-width": "1px" });
        });
        name_input.focusout(function () {
            name_line.css({ "border-width": "1px" });
            check_name();
        });
        phone_input.focus(function () {
            phone_line.css({ "border-width": "1px" });
        });
        phone_input.focusout(function () {
            phone_line.css({ "border-width": "1px" });
            check_phone();
        });
        email_input.focus(function () {
            email_line.css({ "border-width": "1px" });
        });
        email_input.focusout(function () {
            email_line.css({ "border-width": "1px" });
            check_email();
        });
        comment_input.focus(function () {
            // comment_line.css({ "border-width": "1px" }); 
        });
        comment_input.focusout(function () {
            // comment_line.css({ "border-width": "1px" }); 
            check_comment();
        });
        
        agree_input.focusout(function () {
            check_agree();
        });
        */









    //Validation for email or phone
    /*
    function check_email_phone() {
        var patternEmail = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i);
        var patternPhone = new RegExp(/((\+)?\b(38)?(0[\d-]{2}))([\d-]{5,8})([\d-]{2})/);
        let email = patternEmail.test(phone_input.val());
        let phone = patternPhone.test(phone_input.val());
        var phone_length = countDigits(phone_input.val());

        if (phone && phone_length == 12) {
            phone_line.css({ "border-color": "white" });
            error_message_phone.hide();
            button_send.removeAttr("disabled", "disabled");
            return true;
        } else if (email) {
            phone_line.css({ "border-color": "white" });
            error_message_phone.hide();
            button_send.removeAttr("disabled", "disabled");
            return true;
        } else {
            phone_line.css({ "border-color": "red" });
            error_message_phone.show();
            button_send.attr("disabled", "disabled");
            return false;
        };
    };
    */


    var textarea = document.getElementsByTagName('textarea')[0];

    /*
     error in console
    
      textarea.addEventListener('keydown', resize);
    */

    function resize() {
        var el = this;
        setTimeout(function () {
            el.style.cssText = 'height:23px; padding:0';
            el.style.cssText = 'height:' + el.scrollHeight + 'px';
        }, 1);
    }

});//end


// then clicked on check box
/*function check_agree() {
    var error_message_agree_empty = $("#error_message_agree_empty");
    var unchecked = document.getElementById("form-agree").checked;
    console.log('error_message_agree_empty: ' + error_message_agree_empty);
    console.log('unchecked_status: ' + unchecked);

    if (unchecked == true) {
        error_message_agree_empty.show();
        console.log('if: true');
        return false;
    } else {
        error_message_agree_empty.hide();
        console.log('if: ok');
        return true;
    };
};*/

// then clicked on send button



function check_name() {
    var name_input = $("#name_input");
    var name_line = $("#name_input");
    var error_message_name_empty = $("#error_message_name_empty");
    var error_message_name_short = $("#error_message_name_short");
    var error_message_name_long = $("#error_message_name_long");
    var error_message_name_only_numbers = $("#error_message_name_only_numbers");

    var name_clear = name_input.val().trim();

    var name_length = name_clear.length;
    var patternName = new RegExp(/^[a-zA-Zа-яА-яЁёàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ðіїІЄє0-9 `'\u{0060}\u{2018}\u{2019}\u{2032}\u{0027}-]+$/ui);
    let name = patternName.test(name_clear);

    console.log('name-length: ' + name_length);
    console.log('name-correctness: ' + name_clear);

    if (name_length == 0) {
        name_line.css({ "border-color": "red" });
        error_message_name_empty.show();
        error_message_name_short.hide();
        error_message_name_long.hide();
        error_message_name_only_numbers.hide();
        return false;
    }
    else if (name == false) {
        name_line.css({ "border-color": "red" });
        error_message_name_only_numbers.show();
        error_message_name_empty.hide();
        error_message_name_short.hide();
        error_message_name_long.hide();
        return false;
    }
    else if (name_length > 50) {
        name_line.css({ "border-color": "red" });
        error_message_name_long.show();
        error_message_name_empty.hide();
        error_message_name_short.hide();
        error_message_name_only_numbers.hide();
        return false;
    }
    else if (name_length < 2) {
        name_line.css({ "border-color": "red" });
        error_message_name_short.show();
        error_message_name_empty.hide();
        error_message_name_long.hide();
        error_message_name_only_numbers.hide();
        return false;
    }
    else {
        name_line.css({ "border-color": "#FFFFFF" });
        error_message_name_empty.hide();
        error_message_name_short.hide();
        error_message_name_long.hide();
        error_message_name_only_numbers.hide();
        return true;
    };
};



function check_agree_send() {
    var error_message_agree_empty = $("#error_message_agree_empty");
    var unchecked = document.getElementById("form-agree").checked;
    console.log('error_message_agree_empty: ' + error_message_agree_empty);
    console.log('unchecked_status: ' + unchecked);

    if (unchecked == false) {
        document.getElementById("checkbox-icon").setAttribute("class", "no-display");
        document.getElementById("checkbox-custom").setAttribute("class", "");
        error_message_agree_empty.show();
        console.log('if: false');
        return false;
    } else {;
        document.getElementById("checkbox-icon").setAttribute("class", "");
        document.getElementById("checkbox-custom").setAttribute("class", "checkbox-custom-background");
        error_message_agree_empty.hide();
        console.log('if: true');
        return true;
    };
};


//Validation for email or phone
function check_email() {
    var email_input = $("#email_input");
    var email_line = $("#email_input");
    var error_message_email_empty = $("#error_message_email_empty");
    var error_message_email_invalid = $("#error_message_email_invalid");
    var error_message_email_long = $("#error_message_email_long");

    var patternEmail = new RegExp(/^[A-Z0-9._+-\\(\\)]+@[A-Z0-9-]+[\.]{1}[A-Z]{1,4}[\.]{0,1}(?=[A-Z])[A-Z]{1,3}$/ig);
    var email_clear = email_input.val().trim();
    let email = patternEmail.test(email_clear);
    var email_length = email_clear.length;

    console.log('email-length: ' + email_length);
    console.log('email-correctness: ' + email_clear);
    if (email_length == 0) {
        email_line.css({ "border-color": "red" });
        error_message_email_empty.show();
        error_message_email_invalid.hide();
        error_message_email_long.hide();
        return false;
    }else if (email_length !=0){
        if (email_length > 50 ) {
        email_line.css({ "border-color": "red" });
        error_message_email_empty.hide();
        error_message_email_invalid.hide();
        error_message_email_long.show();
        return false;
        } else if (email == false) {
        email_line.css({ "border-color": "red" });
        error_message_email_empty.hide();
        error_message_email_invalid.show();
        error_message_email_long.hide();
        return false;
        } else {
        email_line.css({ "border-color": "#FFFFFF" });
        error_message_email_empty.hide();
        error_message_email_invalid.hide();
        error_message_email_long.hide();
        return true;
        };
    }else{
        email_line.css({ "border-color": "#FFFFFF" });
        error_message_email_empty.hide();
        error_message_email_invalid.hide();
        error_message_email_long.hide();
        return true;
    }
    
};





function check_phone() {
    var phone_input = $("#phone_input");
    var phone_line = $("#phone_input");
    var error_message_phone_empty = $("#error_message_phone_empty");
    var error_message_phone_short = $("#error_message_phone_short");
    var error_message_phone_plugin = $("#error_message_phone_plugin");
    var error_message_phone_long = $("#error_message_phone_long");
    var error_message_phone_only_numbers = $("#error_message_phone_only_numbers");

    //    var patternPhone = new RegExp(/((\+)?\b(38)?(0[\d-]{2}))([\d-]{5,8})([\d-]{2})/);
    var patternPhone = new RegExp(/^[0-9]*$/gm);

    var phone_clear = phone_input.val().trim();
    var phone = patternPhone.test(phone_clear);
    var phone_length_all = phone_clear.length;
    console.log('phone-length: ' + phone_length_all);
//    console.log('phone-correctness: ' + phone);

    if (phone_length_all == 0) {
        phone_line.css({ "border-color": "red" });
        error_message_phone_empty.show();
        error_message_phone_short.hide();
        error_message_phone_long.hide();
        error_message_phone_only_numbers.hide();
        error_message_phone_plugin.hide();
        return false;
    }
    
    else if (phone == false) {
        phone_line.css({ "border-color": "red" });
        error_message_phone_plugin.show();
        error_message_phone_empty.hide();
        error_message_phone_short.hide();
        error_message_phone_long.hide();
        return false;
    }
    
   /*
    else if (phone_length_all > 22) {
        phone_line.css({ "border-color": "red" });
        error_message_phone_long.show();
        error_message_phone_empty.hide();
        error_message_phone_short.hide();
        error_message_phone_only_numbers.hide();
        return false;
    }
    */
   /* else if (phone_length_all < 9) {
        phone_line.css({ "border-color": "red" });
        error_message_phone_short.show();
        error_message_phone_empty.hide();
        error_message_phone_long.hide();
        error_message_phone_plugin.hide();
        error_message_phone_only_numbers.hide();
        return false;
    }*/
    else if ($.trim(phone_input.val())) {
          if (phone_input.intlTelInput("isValidNumber")) {
            phone_line.css({ "border-color": "#212121" });
            error_message_phone_empty.hide();
            error_message_phone_plugin.hide();
            error_message_phone_short.hide();
            error_message_phone_long.hide();
            error_message_phone_only_numbers.hide();
            return true;
          } else {
            phone_line.css({ "border-color": "red" });
            error_message_phone_plugin.show();
            error_message_phone_short.hide();
            error_message_phone_empty.hide();
            error_message_phone_long.hide();
            error_message_phone_only_numbers.hide();
            return false;
          }
    }
    else{
        phone_line.css({ "border-color": "#FFFFFF" });
        error_message_phone_empty.hide();
        error_message_phone_plugin.hide();
        error_message_phone_short.hide();
        error_message_phone_long.hide();
        error_message_phone_only_numbers.hide();
        return true;
    };
};




function check_comment() {
    var comment_line = $("#comment_line");
    var error_message_comment_long = $("#error_message_comment_long");

    var comment_text = document.getElementById("comment_input").textContent;
    var comment_clear = comment_text.trim();

    var comment_length = comment_clear.length;
    const index=1;

    console.log('comment_length: ' + comment_length);
    console.log('text: ' + comment_clear);

    if (comment_length > 500) {
        comment_line.css({ "border-color": "red" });
        error_message_comment_long.show();
        return false;
    } else {
        comment_line.css({ "border-color": "#FFFFFF" });
        error_message_comment_long.hide();
        return true;
    };
};

/*let textArea = document.getElementById("comment_input");
let characterCounter = document.getElementById("char_count");
const maxNumOfChars = 100;

const countCharacters = () => {
    let numOfEnteredChars = textArea.value.length;
    let counter = maxNumOfChars - numOfEnteredChars;
    characterCounter.textContent = counter + "/100";
};
textArea.addEventListener("input", countCharacters);*/

// phone mask
/*var element = document.getElementById('phone_input');
var maskOptions = {
  mask: '+{38\\0}(#0) 000 - 00 - 00',
  definitions: {
    '#': /[123456789]/
  }
};
var mask = IMask(element, maskOptions);*/

//international telephones


console.log= function() {};


  /*var reset = function() {
    var phone_input = $("#phone_input");
    var phone_line = $("#phone_input");
    var error_message_phone_empty = $("#error_message_phone_empty");
    var error_message_phone_short = $("#error_message_phone_short");
    var error_message_phone_plugin = $("#error_message_phone_plugin");
    var error_message_phone_long = $("#error_message_phone_long");
    var error_message_phone_only_numbers = $("#error_message_phone_only_numbers");
    phone_line.css({ "border-color": "#212121" });
        error_message_phone_empty.hide();
        error_message_phone_plugin.hide();
        error_message_phone_short.hide();
        error_message_phone_long.hide();
        error_message_phone_only_numbers.hide();
  };
  
  // on blur: validate
  input.addEventListener('blur', function() {
    var phone_input = $("#phone_input");
    var phone_line = $("#phone_input");
    var error_message_phone_empty = $("#error_message_phone_empty");
    var error_message_phone_short = $("#error_message_phone_short");
    var error_message_phone_plugin = $("#error_message_phone_plugin");
    var error_message_phone_long = $("#error_message_phone_long");
    var error_message_phone_only_numbers = $("#error_message_phone_only_numbers");
    reset();
    if (input.value.trim()) {
      if (iti.isValidNumber()) {
        phone_line.css({ "border-color": "#212121" });
            error_message_phone_empty.hide();
            error_message_phone_plugin.hide();
            error_message_phone_short.hide();
            error_message_phone_long.hide();
            error_message_phone_only_numbers.hide();
            return true;
      } else {
            phone_line.css({ "border-color": "red" });
            error_message_phone_plugin.show();
            error_message_phone_short.hide();
            error_message_phone_empty.hide();
            error_message_phone_long.hide();
            error_message_phone_only_numbers.hide();
            return false;
      }
    }
  });
  input.addEventListener('change', reset);
  input.addEventListener('keyup', reset);*/



   /* var input = document.querySelector("#phone_input");
window.intlTelInput(input, {
  initialCountry: "auto",
  geoIpLookup: function(callback) {
    $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
      var countryCode = (resp && resp.country) ? resp.country : "ua";
      callback(countryCode);
    });
  },
  utilsScript: "../../build/js/utils.js?1613236686837" // just for formatting/placeholders etc
$("#phone_input").intlTelInput({
        defaultCountry: "auto",
        geoIpLookup: function(callback) {
          $.get('http://ipinfo.io', function() {}, "jsonp").always(function(resp) {
            var countryCode = (resp && resp.country) ? resp.country : "ua";
            callback(countryCode);
          });
        },
        utilsScript: "js/utils.js" //для форматирования/плейсхолдера и т.д.
});*/
//console.log= function() {};
var input = document.querySelector("#phone_input");
$("#phone_input").intlTelInput({
    allowDropdown:true,
    
    autoHideDialCode:true,
    
    autoPlaceholder:"polite",
    
    customPlaceholder:null,
    
    dropdownContainer:null,
    
    excludeCountries: [],
    
    formatOnDisplay:true,
    
    hiddenInput:"",
    
    localizedCountries:null,
    
    nationalMode:true,
    
    onlyCountries: [],
    
    placeholderNumberType:"MOBILE",
    
    preferredCountries: [],

    initialCountry: "auto",

    geoIpLookup: function(success, failure) {
        $.get('https://ipinfo.io',function () { }, "jsonp").always(function(resp) {
        var countryCode = (resp && resp.country) ? resp.country : "ua";
        success(countryCode);
        });
    },
    utilsScript:"js/utils.js"
});
// Получить код страны
var extension = $("#phone_input").intlTelInput("getExtension");

// Получить текущий номер в данном формате
var intlNumber = $("#phone_input").intlTelInput("getNumber");

// Получить тип (фиксированный/мобильный/бесплатный и т.д.) текущего номера. 
//var numberType = $("#demo").intlTelInput("getNumberType");

// Получить данные по стране для выбранного флага.
//var countryData = $("#demo").intlTelInput("getSelectedCountryData");

// Получить более подробную информацию об ошибке валидации. 


var isValid = $("#phone_input").intlTelInput("isValidNumber");

// Загрузить скрипт utils.js (находится в каталоге lib) для всключения форматирования\валидации и др.

// Изменить выбранную страну
//$("#demo").intlTelInput("selectCountry", "gb");

// Вставить номер и, соответственно, обновить выбранный флаг.
//$("#demo").intlTelInput("setNumber", "+44 7733 123 456");

var error = $("#phone_input").intlTelInput("get<a href='http://www.jqueryscript.net/tags.php?/Validation/'>Validation</a>Error");

