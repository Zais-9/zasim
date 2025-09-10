let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections =  document.querySelectorAll('section');
let navlinks =  document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top  = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add
                ('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}










    <script src="https://smtpjs.com/v3/smtp.js"></script>
    const form = document.querySelector('.contact-form'),
    //FFuntion to send the massage then click on button send
    function sendMsg(e){
    e.preventDefault(); 

    const   name = document.querySelector('.name'),
            email  = document.querySelector('.email'),
            num = document.querySelector('.num'),
            sub = document.querySelector('.sub'),
            msg = document.querySelector('.msg');

    //Function send email
    Email.send({
    SecureToken : "37905b10-c046-456a-ac7d-c7009b1772bc",
    To : 'mdjaseema40@gmail.com',
    From : "email.value",
    Subject : "Contact Form",
    Body : "msg.value"
    }).then(
    message => alert(message)
    );
    }
//add the event listenersubmit
form.addEventListener('submit',sendMsg);



