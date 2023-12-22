// ----------------------Menu Bar---------------------

menu = document.querySelector('.menu_bar');
navbar = document.querySelector('.navbar');
leftnav = document.querySelector('.leftnav');
let rightnav= document.querySelector('.rightnav');
let rightnav_ul= document.querySelector('.rightnavul');

menu.addEventListener('click', () => {
    navbar.classList.toggle('r_navbar');
    leftnav.classList.toggle('r_leftnav');
    menu.classList.toggle('r_menu_bar');
    rightnav.classList.toggle('r_rightnav');
    rightnav_ul.classList.toggle('r_rightnavul');
})

// ----------------------More info--------------------

more_info=document.querySelector('.more_info');
education=document.querySelector('.education');
line1=document.querySelector('.line1');
line2=document.querySelector('.line2');
console.log(line1)
console.log(line2)
function show_edu(){
    line1.classList.add("info_line1");
    line2.classList.remove('info_line1');
    education.classList.remove('hide');
    more_info.classList.add('hide');
}
function show_info(){
    line2.classList.add('info_line1');
    line1.classList.remove('info_line1');
    education.classList.add('hide');
    more_info.classList.remove('hide');
}

// ------------contact form-----------------

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwQ1r1JF8Oc8sXkq5VKEzQ-tNbsr1OcG-fQXmyu_ZQT-_o_5SVYmpzd8sv8wBm1cqjL/exec';
  const form = document.forms['submit-to-google-sheet'];
    msg=document.getElementById('msg');
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })