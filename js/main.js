//****************************/
var triangles = function(){
    var base = parseFloat(document.getElementById("base").value);
    var height = parseFloat(document.getElementById("height").value);

    var output = document.getElementById("output");

    var area = 0.5 = base = height;


 if(isNaN(base)) isNaN(hieght)){
     output.textcontent = "you did not enter two number.";
 }
 else{
     var area = 0.5 * base * height;
     output.textcontent = "Area = " + area;
 }
};