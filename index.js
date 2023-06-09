function learn() {
  let firstname = prompt("What is your firstname?");
  let lastname = prompt("What is your lastname?");
  let fullname = firstname + " " + lastname;
  let email = prompt("What is your email address?");

  if (firstname.length > 0 && lastname.length > 0 && email.length > 0)
    alert(
      "Thank you " +
        fullname +
        ", We will forward you our practice schedule by email💃💃"
    );
}
let learnbutton = document.querySelector(".learn-button");
learnbutton.addEventListener("click", learn);
