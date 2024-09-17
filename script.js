function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");
  
    if (menuBtn.className === "nav-menu") {
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }
  
  // Dark mode
  
  const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggel-switch");
  
  toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
  });
  
  // Typing Effect
  
  var typingEffect = new Typed(".typedText", {
    strings: ["Designer", "Coder", "Developer"],
  
    Loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
  });
  
  // sent btn
//   document.getElementById("myBtn").addEventListener("click", function () {
//     var inputField = document.getElementById("input-field").value;
    
//     if (inputField === "") {
//         alert("Please fill in the input field");
//     } else {
//         alert("Your request is sent");
//     }
//   });
  
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail(){
  const bodyMessage =`Full Name: ${fullName.value}<br> Email:${email.value}<br> Phone Number:${phone.value}<br> Message:${message.value}`;
  Email.send({
    SecureToken : "6ba9d261-038e-4ec3-a114-d9dd265e127d",
    To : 'sameerkhanaasukhan@gmail.com',
    From : "sameerkhanaasukhan@gmail.com",
    Subject : subject.value,
    Body : bodyMessage 
}).then(
    message => {
      if(message=="OK"){
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success"
        });
      }
    }

);
}

function checkInputs(){
  const items= document.querySelectorAll(".item");

  for (const item of items){
    if(item.value ==""){
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

// checkEmail
if(items[1].value !=""){
  checkEmail()
}

items[1].addEventListener("keyup", ()=>{
  checkEmail()
})




    item.addEventListener("keyup",()=>{
      if(item.value != ""){
        item.classList.remove("error");
      item.parentElement.classList.remove("error");
      }
      else{
        item.classList.add("error");
      item.parentElement.classList.add("error");
      }
    })

  }
function checkEmail(){
  const emailRegex = /^([a-zA-Z\d.-]+)@([a-zA-Z\d-]+)\.([a-zA-Z]{2,3})(\.[a-zA-Z]{2,3})?$/;
  const errorTextEmail =document.querySelector(".error-text.email")


  if(!email.value.match(emailRegex)){
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if(email.value != ""){
      errorTextEmail.innerText = "Enter a valid email address";
    }
    else{
      errorTextEmail.innerText = "Email Address can't be blank";
    }
  }
  else{
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

}
form.addEventListener("submit", (e) =>{
  e.preventDefault();
  checkInputs();
  // sendEmail();

if(!fullName.classList.contains("error")&& !email.classList.contains("error")&& !phone.classList.contains("error")&& !subject.classList.contains("error")&& !message.classList.contains("error")){
  sendEmail();
}
});





  // Scroll Animation
  
  const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
  });
  
  sr.reveal(".featured-name", { delay: 100 });
  sr.reveal(".text-info", { delay: 200 });
  sr.reveal(".text-btn", { delay: 200 });
  sr.reveal(".social_icons", { delay: 200 });
  sr.reveal(".featured-image", { delay: 320 });
  
  sr.reveal(".project-box", { interval: 200 });
  
  sr.reveal(".top-header", {});
  
  const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
  });
  
  srLeft.reveal(".about-info", { delay: 100 });
  srLeft.reveal(".contact-info", { delay: 100 });
  
  const srRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
  });
  srRight.reveal(".skill", { delay: 100 });
  srRight.reveal(".skill-box", { delay: 100 });
  
  // active
  
  const sections = document.querySelectorAll(".section[id]");
  
  function scrollActive() {
    const scrollY = window.scrollY;
  
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");
  
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".nav-menu a[href*=" + sectionId + "]")
          .classList.add("active-link");
      } else {
        document
          .querySelector(".nav-menu a[href*=" + sectionId + "]")
          .classList.remove("active-link");
      }
    });
  }
  
  window.addEventListener("scroll", scrollActive);

  

