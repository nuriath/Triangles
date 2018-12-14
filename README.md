# Triangles
 ```
 A triangle is a kind of shape that have tree side and tree angels
 ```
     ```
     Mwangaza Nuriath
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
  (c) Mwangaza Nuriath
