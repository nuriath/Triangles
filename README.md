# Triangle Tracker
 ```
 In this project of tracking a triangle, i've use the javascript to track if a triangle is an equilateral, isosceles, scalene or if these is not a tringle to track.
 ```
  ### Author
     ```
     Mwangaza Nuriath is a softer developer since october 2018,
     ```

 ## function

 function myFunction (){
    var number1 =parseInt(document.getElementById("number1").value);
    var number2 =parseInt(document.getElementById("number2").value);
    var number3 =parseInt(document.getElementById("number3").value);

    if (number1 === number2 && number1 === number3 && number2 === number3){

        alert ("Triangle Equilateral");
    }
      else if(number1+number2 !== number3 ||number1+number3 !==number2 || number2+number3 !== number1){
          alert ("Triangle Scalene");

    }
      else if (number1 === number2 || number1 < number3 || number2 < number3){
          alert ("Triangle Isosceles");

    }
    else {
        ("No Triangle)
    }    
 }
  ### Setup used

  ```
  *Google chrom
  *Visual Studio Code.
  ```
  ### Contributors
  ```
  Mwangaza Nuriath (mnuriath28@gmail.com),
  ```
  ### Lincense & Copyright
  (c) Mwangaza Nuriath, 2018
