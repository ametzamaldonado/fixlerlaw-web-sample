import emailjs from '@emailjs/browser';
// ------------ Mail Functions ------------

export function sendEmail ( e, form, templateID, serviceID, publicKey ){
  e.preventDefault();

  emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          alert('Email sent! We will be in contact with you soon.');
      }, (error) => {
          alert(error.text);
  });
  
  // ----- This resets all the inputs & textarea inside of the form ----- //
  Array.from(document.querySelectorAll("input, textarea")).forEach(
      input => (input.value = "")
  );
  // -------------------------------------------------------------------- //
};


