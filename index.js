var inquirymodal = document.getElementById("InquiryModal");

var mailmodal = document.getElementById("MailModal");

var product;

function sendInquiry(type) {
  inquirymodal.style.display = "block";
  product = type;
}


function submitEnquiry() {


  var mail = document.getElementById("email");

  if (validateInquiry()) {
    inquirymodal.style.display = "none";
    console.log(product);
    console.log(mail.value);

    Swal.fire({
      title: "Good job!",
      text: "Inquiry sent successfully!",
      icon: "success"
    });
  }

}


function sendMail() {
  mailmodal.style.display = "block";
}


function closeModal() {
  inquirymodal.style.display = "none";
  mailmodal.style.display = "none";
}

function submitMail() {
  mailmodal.style.display = "none";

  var mailId = document.getElementById("txtMail");
  var subject = document.getElementById("txtSubject");
  var message = document.getElementById("txtMessage");

  console.log('mail : ' + mailId.value);
  console.log('subject : ' + subject.value);
  console.log('message : ' + message.value);


  Swal.fire({
    title: "Good job!",
    text: "Inquiry sent successfully!",
    icon: "success"
  });
}


function validateMail() {

}

function validateInquiry() {
  var input = document.getElementById("email");

  var flag;

  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (emailPattern.test(input.value)) {
    flag = true; // Email is valid
  } else {
    flag = false; // Email is invalid

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Enter a valid Email Id!",
    });
  }

  return flag;

}
