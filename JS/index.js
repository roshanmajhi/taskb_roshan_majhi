function form(){
  var a=document.getElementById('nm').value;
  var b=document.getElementById('cnt').value;
  var c=document.getElementById('eml').value;
  var d=document.getElementById('gndr').value;
  var e=document.getElementById('pswd').value;
  var f=document.getElementById('cpswd').value;

   if(a==""||b==""||c==""||d==""||e==""||f==""){
     alert("PLEASE INPUT ALL FIELD");
     return false;
   }
   else if(b.length>10||b.length<10){
    alert("Enter 10 digit only!!");
    return false;
  }
  else if(isNaN(b)){
    alert("Only Enter number!!");
    return false;
  }
  else if(e!=f){
    alert("Password doesnot match!!1");
    return false;
  }
   else{
    return true;
   }
}
 
