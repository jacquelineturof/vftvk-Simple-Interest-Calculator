function compute()
{
    // get input from the form
    var principal = document.getElementById("principal").value;

    // validate principal
    if (principal <= 0) {
        alert("Enter a positive number")
        document.getElementById("principal").focus()
        return
    }

    var rate = document.getElementById("rate").value
    var years = document.getElementById("years").value
    
    // calculate interest and year
    var interest = principal * years * rate / 100;

    var year = 2021 + parseInt(years)

    // make the form larger so it is easier to see results
    addHeightToForm()
    
    // display result
    var result = document.getElementById("result")
    result.innerHTML = "<p>" + "If you deposit " + "<span>" + principal + "</span>"+ "," + "</p>" +
        "<p>" + "at an interest rate of " + "<span>" + rate + "</span>" + "%." + "</p>" +
        "<p>" + "You will receive an amount of " + "<span>" + interest + "</span>" + "," + "</p>" +
        "<p>" + "in the year " + "<span>" + year + "</span>" + "</p>"
}

function displayRate() {
    var resultSpan = document.getElementById("rate-label")
    resultSpan.innerText = rate.value + " %"
}

function addHeightToForm() {
    var maindiv = document.querySelector('.maindiv')
    maindiv.classList.add("large")
}
        