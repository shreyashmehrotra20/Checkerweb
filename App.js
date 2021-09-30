const afterSubmitting = () => {
  var Name = document.getElementById("name").value;
  var Regnumber = document.getElementById("Regno").value;
  var DateofBirth = document.getElementById("DOB").value;
  var tempAddr = document.getElementById("tempAddr").value;
  var PerAddr = document.getElementById("perAddr").value;
  var EmailId = document.getElementById("Emailid").value;
  var Phno = document.getElementById("Phnumber").value;

  var Chname = /^[a-zA-Z]{3,50}$/;
  var ChRegno = /^[A-Z][0-9]{9}$/;
  var ChEmailId = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  var ChMobileno = /^[0-9]{10}$/;

  if (Chname.test(Name)) {
    document.getElementById("username").innerHTML("");
  } else {
    document.getElementById("username").innerHTML("ooooo");
    return false;
  }
};
