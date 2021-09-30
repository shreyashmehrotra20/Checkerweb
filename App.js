const afterSubmitting = () => {
  var Name = document.getElementById("name").value;
  var Regnumber = document.getElementById("Regno").value;
  var DateofBirth = document.getElementById("DOB").value;
  var tempAddr = document.getElementById("tempAddr").value;
  var EmailId = document.getElementById("Emailid").value;
  var Phno = document.getElementById("Phnumber").value;

  var Chname = /^[a-zA-Z]{3,50}$/;
  var ChRegno = /^[0-9]{2}[a-zA-Z0-9]{7}/;
  var ChEmailId = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  var ChMobileno = /^[0-9]{10}$/;
  console.log(document.getElementById("username"));

  if (Chname.test(Name)) {
    document.getElementById("username").innerHTML = "";
  } else {
    document.getElementById("username").innerHTML =
      "Name must be in alphabet and less than 50 char only";
    return false;
  }

  if (ChRegno.test(Regnumber)) {
    document.getElementById("regno").innerHTML = "";
  } else {
    document.getElementById("regno").innerHTML =
      "registration number must be 20BCT307 like this";
    return false;
  }

  if (ChEmailId.test(EmailId)) {
    document.getElementById("mail").innerHTML = "";
  } else {
    document.getElementById("mail").innerHTML =
      "Email id is not in proper formatt";
    return false;
  }

  if (ChMobileno.test(Phno)) {
    document.getElementById("Ph").innerHTML = "";
  } else {
    document.getElementById("Ph").innerHTML =
      "phnone number is not in correct formtt";
    return false;
  }
};

const clicking = () => {
  var x = document.getElementById("tempAddr").value;
  document.getElementById("perAddr").value = x;
};
