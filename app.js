
var percentage = prompt ( "Enter your percentage")

if (percentage >= 80 &&  percentage <= 100) {
    console.log( "You got A+ " + percentage + "%")
    alert( "You got A+ " + percentage + "%")

}
else if (percentage >= 70 &&  percentage <= 79 ) {
    console.log( "You got A " + percentage + "%")
    alert( "You got A " + percentage + "%")

}
else if (percentage >= 60 &&  percentage <= 69) {
    console.log( "You got B " + percentage + "%")
    alert( "You got B " + percentage + "%")

}
else if (percentage >= 50 &&  percentage <= 59) {
    console.log( "You got C " + percentage + "%")
    alert( "You got C " + percentage + "%")

}
else if (percentage >= 40 &&  percentage <= 49) {
    console.log( "You got D " + percentage + "%")
    alert( "You got D " + percentage + "%")

}
else if (percentage >= 33 &&  percentage <= 39) {
    console.log( "You got E " + percentage + "%")
    alert( "You got E " + percentage + "%")

}
else if (percentage < 33  && percentage >= 1) {
    console.log( "You failed " )
    alert( "You failed " )

}
else if (percentage < 1 ||  percentage > 100) {
    console.log( "invalid input ")
    alert( "invalid input ")

};

