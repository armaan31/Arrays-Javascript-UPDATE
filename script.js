var x = [];
function submit(){
  for (var j=1;j<=4; j++){
    var n = document.getElementById("student"+j).value;
    //displaying the array with the value of the names, j. 
    x.push(n);
  }
  var d = [];
  //displaying with format "name -."
  for(var k=0; k<4; k++){
    d.push("<h4> name-"+x[k]+"</h4>");
    //displaying the array with the tag name- against each name seperated by commas
  }
  document.getElementById("display").innerHTML=d;
  document.getElementById("submitbutton").style.display="none";
  //code to hide the element "submitbutton"
  document.getElementById("sortbutton").style.display="inline-block";
  //to show the elemet "sortbutton"
  var d2 = d.join(" ");
  //declaring array without commas
  document.getElementById("nocomma").innerHTML=d2;
  //displaying array without commas
}
function sorting(){
    x.sort();
    var dsorting = [];
    //variable to display sorted items WITH format
    for(var k=0; k<4; k++){
      dsorting.push("<h4> name-"+x[k]+"</h4>");
    }
    var d2 = dsorting.join(" ");
    //declaring array without commas
    document.getElementById("nocomma").innerHTML=d2;
    //displaying array without commas
    document.getElementById("sortbutton").style.display="none";
}
function update(){
  document.getElementById("nocomma").innerHTML="<h1>"+x+"</h1>";
}
function reset(){
    x=[];
    document.getElementById("display").innerHTML=x;
    document.getElementById("nocomma").innerHTML=x;
    document.getElementById("submitbutton").style.display="inline-block";
    document.getElementById("student1").value=null;
    document.getElementById("student2").value=null;
    document.getElementById("student3").value=null;
    document.getElementById("student4").value=null;
    //erasing all values
}
