function myFunction (){
    var number1 =parseInt(document.getElementById("myNumber1").Value);
    var number2 =parseInt(document.getElementById("myNumber2").value);
    var number3 =parseInt(document.getElementById("myNumber3").value);

    if (isEquilateral(number1 === number2 &&
                      number1 === number3 && 
                      number2 === number3)){

        alert ("Triangle Equilateral");
    }
      else if (isScalene (number1+number2 > myNumber3 && 
                        myNumber1+myNumber3 > myNumber2 && 
                        myNumber2+myNumber3 > myNumber1)){
          alert ("Triangle Scalene")

    }
      else if (isIsosceles (myNumber1 === myNumber2 && 
                          myNumber1 >= mynumber3 && 
                          myNumber2 >= mynumber3)){
          alert ("Triangle Isosceles")

    }
    else {
        alert("No Triangle")
    }
}
    
