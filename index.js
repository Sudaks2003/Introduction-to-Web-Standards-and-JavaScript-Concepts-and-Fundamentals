function mysubmit() {
    document.getElementById("para").style.fontSize = "100px";
}

function reload() {
    // to reload page
    window.location.reload();
}

function getVal() {
    const name = document.getElementById("name").value
    const age = document.getElementById("age").value
    const weight = document.getElementById("weight").value
    var height = document.getElementById("height").value

    height = (height / 3.281);
    var bmi = weight / (height * height);
    // alert(bmi);

    if (bmi > 16 && bmi < 18.5) {
        document.getElementById("para").innerHTML = "HEY " + name + ".YOUR BMI IS "+bmi.toFixed(2)+ ". YOU ARE UNDERWEIGHT, NEED TO GAIN MORE WEIGHT."
    }
    else if (bmi > 18.5 && bmi < 25.5) {
        document.getElementById("para").innerHTML = "HEY " + name + ".YOUR BMI IS "+bmi.toFixed(2)+". YOU ARE HEALTHY!!!!!"
    }
    else if (bmi > 25 && bmi < 30) {
        document.getElementById("para").innerHTML = "HEY " + name + ".YOUR BMI IS "+bmi.toFixed(2)+".OVERWEIGHT, YOU SHOULD DO DIET & EXERCISE."
    }
    else if (bmi > 25) {
        document.getElementById("para").innerHTML = "HEY " + name + ".YOUR BMI IS "+bmi.toFixed(2)+" . YOU'RE OBESE, YOU ARE ADVISED TO TAKE EXTEREME DIET"
    }
}


