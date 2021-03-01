function updateCountryView() {
    var ddCountry = document.getElementById("ddTravel");
    var divCountry = document.getElementById("divCountry");

    if(ddTravel.value == "Yes") {
        divCountry.classList.remove("invisible");
    }

    else {
        divCountry.classList.add("invisible");
    }
}

function validateForm() {
    var formIsValid = true;

    // check #1 Date of Birth
    var DOB = document.querySelector("#txtDOB");
    var divDOBError = document.querySelector("#divDOBError");
    if (DOB.value == "") {
        divDOBError.classList.remove("invisible");
        divDOBError.innerHTML = "The Date of Birth can not be Empty.";
        DOB.classList.add("hasError");
        formIsValid = false;
    }
    else {
        var DOBDate = new Date(DOB.value);
        var todayDate = new Date();
        if(DOBDate >= todayDate) {
            divDOBError.classList.remove("invisible");
            divDOBError.innerHTML = "The Date of Birth must be before today.";
            DOB.classList.add("hasError");
            formIsValid = false;
        }
        else {
            divDOBError.classList.add("invisible");
            divDOBError.innerHTML = "";
            DOB.classList.remove("hasError");
        }
    }

    // check #2 Country exist in form
    var ddCountry = document.querySelector("#ddCountry");
    if(ddCountry.value == "Yes") {
        var txtCountry = document.querySelector("#txtCountry");
        if(txtCountry.value == "") {
            document.querySelector("#divCountryError").classList.remove("invisible");
            document.querySelector("#divCountryError").classList.add("visible");
            txtCountry.classList.add("hasError");
            formIsValid = false;
        }
        else {
            document.querySelector("#divCountryError").classList.add("invisible");
            txtCountry.classList.remove("hasError");
        }
    }

    // check #3 verify no weird characters
    var elements = document.getElementsByTagName("input");
    var invalidChars = ['#', '!', '~', '&', '"', '\'', '<', '>'];
    for (let i = 0; i < elements.length; i++) {
        for (let j = 0; j < invalidChars.length; j++) {
            if (elements[i].value.indexOf(invalidChars[j]) != -1) {
                elements[i].classList.add("hasError");
                formIsValid = false;
            }
        }
    }
    return formIsValid;
}

