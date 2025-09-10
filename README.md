<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link  rel="stylesheet" href="jas.css"/>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'  rel='stylesheet' >
    <title>Personal responsive portfolio webPage</title>
    <syle>
            *{
    margin:0;
     padding:0;
     box-sizing:border-box;
     text-decoration: none;
     border: none;
     outline:none;
     scroll-behavior: smooth;
     font-family: "poppins", sans-serif;
 }
 
:root{
     --bg-color:#080808;
     --second--bg-color:#1b0000;
     --text-color:white;
     --main-color:#f60b0b;
 }
 
html{
     font-size:50%;
     overflow-x: hidden;
 }
body{
    background:var(--bg-color);
    color:var(--text-color);
    /*padding: 10rem;*/
 }

#btns{
    margin:2px;
    padding:4px;
    color:white;
    border:2px solid red;
    border-radius:10px;
    background-color: black;
    font-size: medium;

}
.btn{
    background-color:#1b0000;
}





/* Styling the navigation bar */
.header{
    position:fixd;
    padding:4rem 12% 4rem;
    background-color:var(--second--bg-color);
    display: flex;
    align-items: center;
    justify-content: space-between;  
}
.logo {
    font-size: 5rem;
    font-weight: 800px;
    color:var(--text-color);
    cursor:pointer;
    transition: 0.3s ease;
}
.logo span{
   color:var(--main-color);
}
.navbar a{
    font-size: 2rem;
    color:var(--text-color);
    margin-left: 3rem;
    font-weight: 500;
    transition: 0.3s ease;
    font-family:calibri;
    padding-right: 6x;
    padding-left:12px;
    border-bottom: 3px solid transparent;
}
.navbar a:hover,
.navbar a.active{
   color:var(--main-color);
   border-bottom: 3px solid var(--main-color);
}
input{
    background-color:lightcyan;
    margin-left: 10px;
    border:2px solid whitesmoke;
    border-radius:2px;
    padding:5px;
}
.home-content h1{
    font-size:4rem;
    line-height:1;
    font-weight: 700;
    margin-top:1.5rem;
}
.home-content h1 span{
    color: var(--main-color);
}
.home-image img{
   float:right;
    position:relative;
    width:30vw;
    border-radius: 50%;
    box-shadow: 0 0 25spx var(--main-color);
    cursor:pointer;
    transition: 0.4s ease-in-out;
}
.home-image :hover{
   box-shadow: 0 0 10px var(--main-color),
                0 0 20px var(--main-color),
                0 0 50px var(--main-color);
   transform: scale(1.03);
}
#pic2{
   float:left;
   border-radius: 75px;
   gap:5rem;
}
.social-icons a{
display: inline-flex;
justify-content:center;
align-items: center;
width:4.5rem;
height:4.5rem;
background: transparent;
border:2px solid var(--main-color);
font-size: 3rem;
border-radius:50%;
color:var(--main-color);
margin:28rem 1.5rem 3rem 0 ;
transition:0.3s ease;
}
.social-icons a:hover{
    color: var(--main-color);
    transform: scale(1.3) translateY(-5px);
    box-shadow: 10 10 25% var(--main-color);
   background-color:var(--main-color);
    color:var(--text-color);
}
.home-content p{
   text-align: justify;
    font-size: 2rem;
    font-weight:40;
    height:50px;
    color:var(--text-color);
}
.text-animation{
    color:var(--main-color);
    font-size:25px;
    font-weight:600;
    min-width:280px;
}
.text-animation span{
    position: relative;
    color:var(--text-color);
}
.text-animation{
  color:var(--main-color);
   font-size: 2rem;
}








 /*
.header{
     position:fixd;
     top:0;
     left:0;
     padding:4rem 12% 4rem;
     background:rgba(0,0,0,0.3);
     backdrop-filter: blur(10px);
     display: flex;
     justify-content: space-between;
     align-items: center;
     z-index:100;
     width:100%;
 }
 
.logo {
     font-size: 5rem;
     font-weight: 800px;
     color:var(--text-color);
     cursor:pointer;
     transition: 0.3s ease;
 }
.logo:hover{
     transform: scale(1,1);
 }
.logo span{
     text-shadow: 0 0 25px var(--main-color);
     color:var(--main-color);
 }
 .navbar a{
     font-size: 1.8rem;
     color:var(--text-color);
     margin-left: 4rem;
     font-weight: 500;
     transition: 0.3s ease;
     border-bottom: 3px solid transparent;
 }
.navbar a:hover,
.navbar a.active{
     color:var(--main-color);
     border-bottom: 3px solid var(--main-color);
 }
 #menu-icon{
     font-size: 3.6rem;
     color:var(--main-color);
     display:none;
 
 }
 section{
    min-height: 100vh;
    padding:10rem 12% 10rem;
 }
.home{
    display: flex;
    align-items: center;
    justify-content: center;
    gap:15rem;
 }
.home-conntent{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    justify-content: center;
 }
 span{
    color:var(--main-color)
 }
.logo span{
    color:var(--main-color)
 }
.home-conntent h3{
    margin-bottom: 2rem;
    margin-top: 1rem;
    font-size: 3.5rem;
 }
.home-content h1{
    font-size: 7rem;
    font-weight: 700;
    margin-top: 1.5rem;
    line-height: 1;
 }


.home-image img{
     position:relative;
     width:32vw;
     border-radius: 50%;
     box-shadow: 0 0 25spx var(--main-color);
     cursor:pointer;
     transition: 0.4s ease-in-out;
 }
.home-image img:hover{
     box-shadow: 0 0 25px var(--main-color),
                 0 0 50px var(--main-color),
                 0 0 100px var(--main-color);
    transform: scale(1.3) translateY(-5px);
 }
.home-content p{
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.8;
    max-width: 1000px;
 }

.social-icons a{
 display: inline-flex;
 justify-content:center;
 align-items: center;
 width:4.5rem;
 height:4.5rem;
 background: transparent;
 border:2px solid var(--main-color);
 font-size: 2.5rem;
 border-radius: 50%;
 color:var(--text-color);
 margin:3rem 1.5rem 3rem 0 ;
 transition:0.3s ease;
 }
 .social-icons a:hover{
     color: var(--text-color);
     transform: scale(1.3) translateY(-5px);
     box-shadow: 10 10 25% var(--main-color);
     background-color:var(--main-color);
 }
.btn{
     display: inline-block; 
     padding:1rem 2.8rem;
     background:black;
     border-radius: 4rem;
    font-size: 1.6rem;
    color: var(--main-color);
    letter-spacing: 0.1rem;
    font-weight: 600;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    border: 2px solid var(--main-color);
    border-radius: 2rem;
}
.btn:hover{
    transform: scale(1.05);
   background-color: var(--main-color);
    color:black;
    box-shadow: 0 0 50px var(--main-color);
}
.btn-group{
    display: flex;
    align-items: center;
    gap:1.5rem
    
}
.btn-group a:nth-of-type(2){
    background-color:black;
    color: var(--main-color);
    box-shadow:0 0 25px transparent;
}
.btn-group a:nth-of-type(2):hover{
    box-shadow:0 0 25px var(--main-color);
    background-color: var(--main-color);
    color:black;
}
*/
 .text-animation{
     font-size:34px;
     font-weight:600;
     min-width:280px;
 }
 .text-animation span{
     position: relative;
 }
 .text-animation span::before{
     content: "Web Developper";
     color: var(--main-color);
     animation: words 20s infinite;
 }
 .text-animation span::after{
     content:" ";
     background-color:var(--bg-color);
     position:absolute;
     width:calc(100% + 8px);
     height: 100%;
     border-left:3px solid var(--bg-color);
     right:-8px;
     animation: cursor 0.6s infinite, typing 20s steps(14) infinite;
 }
 @keyframes cursor {
     to{
         border-left:2px solid var(--main-color);
     } 
 }
 @keyframes words{
     0%,
     20%{
         content: "Web Developper";
     }
     41%,
     60%{
         content: "programmer";
     }
     61%,
     80%{
         content:"fronted designer";
     }
 }
 @keyframes typing{
     10%,
     15%,
     30%,
     35%,
     50%,
     55%,
     70%,
     75%,
     90%,
     95%{
         width:0;
     }
     5%,
     20%,
     25%,
     40%,
     45%,
     60%,
     80%,
     85%{
         width: calc(100% + 8px);
     }
 }


 
.about{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10rem;
    background-color: var(--second--bg-color);
    color: var(--text-color);
 }
.about-image{
    border-radius: 50%;
 }
#about img{
    position: relative;
    width:32vw;
    border-radius: 50%;
    box-shadow:0 0 25px var(--main-color);
    top:1rem;
    cursor:pointer;
    transition: 0.4s ease-in-out;
 }
#about img:hover{
 box-shadow: 0 0 25px var(--main-color),
             0 0 50px var(--main-color),
             0 0 100px var(--main-color);
}



.heading{
     text-align: center;
     font-size:6rem;
     margin:5rem 0;
}
 .about-content h2{
     text-align: left;
     line-height:1.5;
 }
 .about-content h3{
font-size: 2.6rem;
 }
 .about-content p{
     font-size:1.8rem;
     margin:1rem 0 3rem ;
 }
 .about .heading{
    margin:0;
 }
 
.about-content .text-animation span::before{
    content: "Web Developper";
    color: var(--main-color);
    animation: words 20s infinite;
}
.about-content .text-animation span::after{
    content:" ";
    background-color:var(--second--bg-color);
    position:absolute;
    width:calc(100% + 8px);
    height: 100%;
    border-left:3px solid var(--bg-color);
    right:-8px;
    animation: cursor 0.6s infinite, typing 20s steps(14) infinite;
}





















 ::-webkit-scrollbar{
     width:10px;
 }
 ::-webkit-scrollbar-thumb{
     background-color: var(--main-color);
 }
 
 ::-webkit-scrollbar-track{
     background-color: var(--bg-color);
     width: 50px;
 }
 .services{
     background-color: var(--bg-color);
     color:black;
 }
 .services h2{
     margin-bottom: 5rem;
     color:var(--text-color);
 }
 .services-container{
     display:grid;
     grid-template-columns: repeat(3,1fr);
     align-items: center;
     gap:2.5rem;
 }
 .services-box{
     display:flex;
     align-items: center;
     justify-content: center;
     background-color: var(--main-color);
     height: 600px;
     border-radius: 3rem;
     border:5px solid transparent;
     cursor:pointer;
     transition:0.4s ease-in-out;
 }
 .services-box:hover{
     background-color: var(--second--bg-color);
     color:var(--main-color);
     border:5px solid var(--main-color);
     transform: scale(1.03);
 }
 .services-box .services-info{
     height: 100%;
     display: flex;
     flex-direction: column;
     text-align: center;
     justify-content: center;
     align-items: center;
     padding:5rem 5rem  ;
 }
 .services-info h4{
     font-size: 4rem;
     margin: 2rem 0;
     font-weight: 800;
 }
 .services-info p{
     margin-bottom: 30rem;
     font-size: 2rem;
     font-weight: 400;
     line-height:1;
 }
 .services-info i{
     font-size: 2rem;
 }

















/*
 .projects{
     background: url() center no-repeat;
     background-size: cover;
 }
 
 .projects-box{
     display: flex;
     grid-template-columns: repeat(3,1fr);
     place-items:center;
     margin:5rem 0;
     gap:5rem;
 }
 
 .projects-card{
     height: 600px;
     max-width: 450px;
     background-color:rgba(0,0,0,0.127);
     border:2px solid var(--main-color);
     border-radius: 5rem;
     display:flex;
     flex-direction:column;
     align-items: center;
     justify-content: center;
     text-align: center;
     gap: 2.5rem;
     padding:5rem 2rem;
     overflow:hidden;
     cursor: pointer;
     box-shadow: 0 0 5px var(--main-color);
     transition: 0.4s ease;
 }
 .projects-card:hover{
     box-shadow: 0 0 25px var(--main-color),
                 0 0 50px var(--main-color);
     transform:scale(1.02);
 }
 
 .projects-card img{
    max-width:18vw;
    object-fit:cover;
    border-radius: 50rem;
 }
 .projects-card img{
    box-shadow: 0 0 25px var(--main-color),
                 0 0 50px var(--main-color);
     transform:scale(1.02);
 }
 
 
 .projects-card h3{
     font-size: 3rem;
 }
 .projects-card p{
     font-size: 1.6rem;
}
*/

/* Styling the projects pages */
.projects{
    background: url() center no-repeat;
    background-size: cover;
}
.projects-box{
    display: flex;
    grid-template-columns: repeat(3,1fr);
    place-items:center;
    margin:5rem 0;
    row-gap:5rem;
}
.projects-card{
    height: 600px;
    max-width: 450px;
    background-color:rgba(0,0,0,0.127);
    border:2px solid var(--main-color);
    border-radius: 5rem;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 2rem;
    padding:5rem 2rem;
    overflow:hidden;
    cursor: pointer;
    box-shadow: 0 0 5px var(--main-color);
    transition: 0.4s ease;
}
.projects-card:hover{
    box-shadow: 0 0 25px var(--text-color),
                0 0 50px var(--main-color);
    transform:scale(1.02);
}
.projects-card img{
   max-width:18vw;
   object-fit:cover;
   border-radius:10%;
   
  
}
h2{
    
    font-size: 3rem;
    color:var(--text-color)
}
.projects-card h3{
    text-align:center;
    font-size: 3rem;
    color:var(--text-color)
}
.projects-card p{
    font-size: 13px;
    color:var(--text-color);
    margin-bottom: 18rem;
  
}
















.contact{
     background-color: var(--bg-color);
}
.contact h2{
     margin-bottom: 3rem;
     color: var(--text-color);
}
.contact form{
     display: flex;
     align-items: center;
     justify-content: center;
     gap:3rem;
     margin: 5rem auto;
     text-align: center;
 }
.contact form .input-box{
     display: flex;
     justify-content:center;
     flex-wrap: wrap;
}
.contact form .input-box input,
.contact form textarea{
 width:100%;
 padding:2.5rem;
 font-size:1.8rem;
 color:var(--text-color);
 background-color: var(--bg-color);
 border-radius: 2rem;
 border:2px solid var(--main-color);
 margin: 1.5rem 0;
 resize:none;
}
.contact form .btn{
     margin-top:2rem;
}

/*
.footer{
     position: relative;
     bottom:0;
     width:100%;
     padding:40px 0;
     background-color: var(--second--bg-color);
}
.footer .social{
     text-align: center;
     padding-bottom: 25px;
     color:var(--main-color);
 }
 .footer .social a{
     font-size: 25px;
     color:var(--main-color);
     border:2px soid var(--main-color);
     width:42px;
     height:42px;
     line-height: 42px;
     display:inline-block;
     text-align:center;
     border: 50%;
     margin:0 10px;
     transition:0.3s ease;
 }
 .footer .social a:hover{
     transform: scale(1.2)translateY(-10px);
     background-color: var(--main-color);
     color:black;
     box-shadow: 0 0 25px var(--main-color);
 }
 .footer ul{
     margin-top:0;
     padding:0;
     font-size: 18px;
     line-height: 1.6;
     margin-bottom: 0;
     text-align: center;
 }
 .footer ul li a{
    color:white;
     border-bottom: 3px solid transparent;
     transition: 0.3s ease;
 }
 .footer ul li a:hover{
     border-bottom: 3px solid var(--main-color);
     color:var(--main-color)
 }
 .footer ul li {
     display:inline-block;
     padding:0 15px;
}
.footer .copyright{
    margin-top: 50px;
    text-align: center;
    font-size: 16px;
    color:var(--text-color);
}
 */
@media(max-width:1285px){
    html{
         font-size: 50%;
    }
    .services-container{
         padding-bottom: 7rem;
         grid-template-columns: repeat(1,1fr);
         margin:0 5rem;
    }
    .projects-box{
         grid-template-columns: repeat(2,1fr);
    }
    .projects-box img{
         min-width: 30vw;
    }
}
@media(max-width:991px){
    header{
         padding:2rem 3%;
    }
    section{
         padding:10rem 3% 2rem
    }
    .contact form{
         flex-direction: column;
    }
    .footer{
         padding:2rem 3%;
    }
}








/* Styling the footer page */
.footer{
     position: relative;
     bottom:0;
     width:100%;
     padding:40px 0;
     background-color: var(--main-color);
}
.footer .social{
     text-align: center;
     padding-bottom: 25px;
     color:var(--mai-color);
 }
 .footer .social a{
     font-size: 25px;
     color:var(--bg-color);
     width:42px;
     height:42px;
     line-height: 42px;
     display:inline-block;
     text-align:center;
     border:2px solid var(--bg-color);
     border: 50%;
     margin:0 10px;
     transition:0.3s ease; 
     background-color: var(--text-color);
 }
 .footer .social a:hover{
     transform: scale(1.2)translateY(-10px);
     background-color: var(--bg-color);
     color:var(--mai-color);
     box-shadow: 0 0 25px var(--text-color);
     border:2px solid var(--text-color);
 }
 .footer ul{
     margin-top:0;
     padding:0;
     font-size: 18px;
     line-height: 1.6;
     margin-bottom: 0;
     text-align: center;
 }
 .footer ul li a{
    text-decoration: none;
    color:var(--text-color);
     border-bottom: 3px solid transparent;
     transition: 0.3s ease;
 }
 .footer ul li a:hover{
     border-bottom: 3px solid var(--bg-color);
     color:var(--bg-color);
 }
 .footer ul li {
     display:inline-block;
     padding:0 15px;
}
.footer .copyright{
   margin-top: 50px;
   margin-bottom: 7px;
    text-align: center;
    font-size: 16px;
    color:var(--text-color);
}
.number{
    text-decoration: none;
    color:var(--text-color);
   text-align: center;
   font-size:10rem;
}
.number:hover{
    color:var(--bg-color);
}

.navjas a{
    text-align:center ;
}






@media(max-width:895px){
    #menu-icon{
        display:block;
   /*     
    }
    .navbar{
        position:absolute;
        top:100%;
        right:0;
        width:50%;
        padding:1rem 3%;
        background:rgba(0,0,0,0.8);
        backdrop-filter:blur(20px);
        border-bottom-left-radius: 2rem;
        border-left:2px solid var(--main-color);
        border-bottom:2px solid var(--main-color);
        display:none;
    }
    .navbar .active{
        display:block;
    }
    .navbar a{
        display:block;
        font-size:2rem;
        margin:3rem 0;
        color:white;
    }
     .home{
         flex-direction: column-reverse;
         margin:5rem 4rem;
         gap: 3rem;
     }
     .home-content{
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         text-align: center;
     }
     .home-conntent h3{
         font-size:2.6rem;
     }
     .home-conntent h1{
         font-size:8rem;
         margin-top: 3rem;
     }
     .home-conntent p{
     max-width:600px;
     margin:0 auto;
     }
     .home-img img{
         width:56vw;
         margin:3rem 0;
     }
     .about{
         flex-direction: column-reverse;
         padding:10rem 9% 10rem;
     }
     .about .heading{
         margin:3rem 0;
     }
     .about img{
         width:50vw;
     }*/
     .services h2{
         margin-bottom: 3rem;
     } 
     .services-container{
         grid-template-columns: repeat(1,1fr);
 
     }
     .projects-box{
         grid-template-columns: repeat(1,1fr);
     }
     .projects-box img{
         min-width: 42rem;
         
     }
     
    }

@media(max-width:991px){
    header{
         padding:2rem 3%;
    }
    section{
         padding:10rem 3% 2rem
    }
    .contact form{
         flex-direction: column;
    }
    .footer{
         padding:2rem 3%;
    }
}
        
    </syle>
</head>
<body>
<header class="header">
       <a href="#home" class="logo">
        <span>Jaseem's</span>Portfolio
       </a>

       

    <nav class="navbar">
      <a href="#home" class="active">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#projects">Projects</a>
      <a href="#contact" onclick=touch() >Contact</a>
    </nav>
</header>
        
    <div class="home-content">
            <h1>Hi, It's <span>Jaseem</span></h1>
           <h3 class="text-animation">I am a <span></span> </h3>

           <div class="home-image">
            <img src="pic1.jpg">
        </div>
        <br><br>

            <p className="text-[2rem] font-[400] text-justify mb-8"><b>Here's an example of a "About My-self": </b>
           <br>

                "I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience. I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen. I like to see the sunrise in the morning, I like to see the moonlight at night; I like to feel the music flowing on my face, I like to smell the wind coming from the ocean. I like to look at the clouds in the sky with a blank mind, I like to do thought experiments when I cannot sleep in the middle of the night. I like flowers in spring, rain in summer, leaves in autumn, and snow in winter. I like to sleep early, I like to get up late; I like to be alone, I like to be surrounded by people. I like country's peace, I like metropolis' noise; I like the beautiful west lake in Hangzhou, I like the flat cornfield in Champaign.
                
                I always wanted to be a great writer, like Victor Hugo who wrote "Les Miserable", or like Roman Roland who wrote "John Christopher". They have influenced millions of people through their books. I also wanted to be a great psychologist, like William James or Sigmund Freud, who could read people's mind. Of course, I am nowhere close to these people, yet. I am just someone who does some teaching, some research, and some writing. But my dream is still alive.
                
                This is a brief introduction of myself. If you are interested in knowing more, read my articles or take a look at my pictures. Do not expect too much, and keep your sense of humor."
                 </p>
                 <br>

                <div class="social-icons">
                    <a href="https://github.com/Zais-9">
                        <i class="bx bxl-github"></i>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100090462123865&mibextid=ZbWKwL">
                        <i class="bx bxl-facebook"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/md-jaseem-99ba482a9?utm_source=share&utm_campaign
                            =share_via&utm_content=profile&utm_medium=android_app">
                        <i class="bx bxl-linkedin-square"></i>
                    </a>
                    <a href="#">
                        <i class="bx bxl-instagram-alt"></i>
                    </a>
                </div>

        <a href="ReadMore.html" class="btn" id="btns">Read More</a>
        
         <a href="pic3.jpg" class="btn"  id="btns" download>
                    <i class="fa-solid fa-download"></i>Dawnload CV</a>

        
            

            
           
        </section> 
        <br><br><hr><hr>      

<script src="project.js"></script>












    
    
    <section class="about" id="about">

        
        

         <div class="about-content">
                
                <div class="home-image">
                    
                    
                    
<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>About Page</title>
                <link  rel="stylesheet" href="home.css"/>
        </head>
        <body>
            
        
          </div>
         </section>
</body>
</html>







            
        <section class="about" id="about">
            <div class="about-img">
                <img src="pic2.jpg" alt="">
            </div>

             <div class="about-content">
                    <h2 class="heading">About <span>Me</span></h2>
                    <h3 class="text-animation">
                        <span></span>
                    </h3>
                
                <p><b>Here's an example of "About Me": </b>
                    <br>
         
                         "I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience. I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen. I like to see the sunrise in the morning, I like to see the moonlight at night; I like to feel the music flowing on my face, I like to smell the wind coming from the ocean. I like to look at the clouds in the sky with a blank mind, I like to do thought experiments when I cannot sleep in the middle of the night. I like flowers in spring, rain in summer, leaves in autumn, and snow in winter. I like to sleep early, I like to get up late; I like to be alone, I like to be surrounded by people. I like country's peace, I like metropolis' noise; I like the beautiful west lake in Hangzhou, I like the flat cornfield in Champaign.
                         
                         I always wanted to be a great writer, like Victor Hugo who wrote "Les Miserable", or like Roman Roland who wrote "John Christopher". They have influenced millions of people through their books. I also wanted to be a great psychologist, like William James or Sigmund Freud, who could read people's mind. Of course, I am nowhere close to these people, yet. I am just someone who does some teaching, some research, and some writing. But my dream is still alive.
                         
                         This is a brief introduction of myself. If you are interested in knowing more, read my articles or take a look at my pictures. Do not expect too much, and keep your sense of humor."
                </p>
                </section>




                <section class="services" id="services">
                    <h2 class="heading">Services</h2>

                    <div class="services-container">
                        <div class="services-box">
                           <div class="services-info">
                                <i class="bx bxl-figma"></i>

                                <h4>Web Developer</h4>
                                <p><b>Web developers typically specialize in front-end or back-end development, but some are full-stack developers who work on both:</b>
                                    <br><br>
                                    <b>Front-end developers</b><br>
                                    Focus on the user-facing side of the website, such as the visual look, colors, pictures, and layoutsbr.
                                     <br><br>
                                   <b> Back-end developers</b><br>
                                    Focus on making the website functional and secure, such as programming and coding the structure of the website.
                                    <br><br>
                                    <b>Full-stack developers</b><br>
                                    Work on both front-end and back-end development, and may coordinate the duties of other developers.
                                </p>
                            </div>
                        </div>

                        <div class="services-box">
                            <div class="services-info">
                                <i class="bx bx-code"></i>

                                <h4>Programmer</h4>
                                <p>Programmers write code in a computer language to instruct a computer how to perform a task. They also test the code to ensure it works as intended. Programmers work with other programmers and designers to plan software and applications. 
                                    <br><br>
                                    Programmers write code in a computer language to instruct a computer how to perform a task. They also test the code to ensure it works as intended. Programmers work with other programmers and designers to plan software and applications. 
                                    <br><br>
                                    Programmers need to be tech-savvy, creative, and have strong analytical and problem-solving skills. They also need to be patient and enjoy using logic to solve complex problems. 
                                     </p>
                            </div>
                        </div>

                        <div class="services-box">
                            <div class="services-info">
                                <i class="bx bx-code-curly"></i>

                                <h4>Web Designer</h4>
                                <p><b>responsible for creating the design and layout of a website or web pages.</b>
                                    <br><br>
                                    Web design involves creating the visual elements and layout of a website, while coding involves translating these designs into a functional website using programming languages like HTML, CSS, and JavaScript. Typically, dedicated web developers translate the designs to code.
                                    <br><br>
                                    Web design is the creation of websites and pages to reflect a company's brand and information and ensure a user-friendly experience. Appearance and design are incorporated as vital elements whether you're designing a website, mobile app or maintaining content on a web page.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="projects" id="projects">
                    <h2 class="heading">projects</h2>

                    <div class="projects-box">
                        <div class="projects-card">
                            <img src="pic4.png" alt="">
                           
                            <h3>Project 1</h3>
                            <p><b>Analog Wall-clock:--</b>
                                <br> It is a device that displays the current time using moving hands and a circular dial marked with hours, minutes, and sometimes seconds. It's called “analog” because it represents time through continuous, physical motion, as opposed to digital clocks that use numerical displays. An analogue clock has a clock face with a dial of numbers from 1 to 12. It uses an hour hand and a minute hand that rotate in a clockwise direction around the numbers to show the time. On an analogue clock, the longer hand shows the minutes and the shorter hand shows the An analog clock is a tool for reading the time of day. The longest hand indicates the seconds, the longer one indicates the minutes while the smallest one indicates the hours. The shortest hand indicates the hour, a longer hand indicates the minutes, and the longest arm indicates the seconds.
                            </p>
                            <a href="clock.html" class="btn" id="btns">See Project</a>
                        </div>

                        <div class="projects-card">
                            <img src="pic5.png" alt="">
                            <h3>Project 2</h3>
                            <p><b>Stone,Paper,Scissor "Via Pythone" :--</b>
                                <br>Rock paper scissors (also known by several other names and word orders, see § Names) is an intransitive hand game, usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are "rock" (a closed fist), "paper" (a flat hand), and "scissors" (a fist with the index finger and middle finger extended, forming a V). The earliest form of "rock paper scissors"-style game originated in China and was subsequently imported into Japan.
                                A simultaneous, zero-sum game.
                               <br><br>
                            <b> 1. Rock: A fist </b>
                            <br>
                            <b> 2. Paper: A flat hand</b>
                            <br>
                            <b> 3. Scissors: The index and middle finger</b></p>
                            <a href="Stone-game.py" class="btn" id="btns">See Project </a>
                        </div>

                        <div class="projects-card">
                            <img src="pic6.jpeg" alt="">                           
                            <h3>Project 3</h3>
                            <p><b>Caculator:--</b>
                                <br>Building a calculator is a good mini project for learning programming concepts and improving web development skills: 
                                <br>
                                Step 1: Create a Layout.
                                <br>
                                Step 2: Set up the boiler code.
                                <br>
                                Step 3: Create major elements in the layout.
                                <br>
                                Step 4: Create the HTML content.
                                <br>
                                Step 5: Create CSS for the layout.
                                <br>
                                Step 6: Create CSS to style individual elements.
                                <br>
                                Step 7: Add background color and style.</p>
                                <a href="calculator.html" class="btn" id="btns">See Project</a>
                        </div>
                    </div>
                </section>

                <section class="contact" id="contact">
                    <h2 class="heading">Contact <span>Me</span></h2>

                    <form class="contact-form "  action="https://api.web3forms.com/submit" method="POST">
                        <div class="input-group">
                            <input type="hidden" name="access_key" value="dc63f3c7-c286-4106-bbf0-4def7823f363">
                            <div class="input-box">
                                <input class="name" type="text" id="name" name="name" placeholder="Full name" required>
                                <input class="email" type="email"  id="email" name="email" placeholder="Email" required>
                            </div>
                            <div class="input-box">
                                <input class="num" type="number" id="phone" name="phone" placeholder="Phone No" required>
                                <input class="sub" type="text" id="subject" name="subject" placeholder="Subject" required>
                            </div>
                        </div>

                        <div class="input-group-2">
                            <textarea class="msg" name="text" id="text" cols="30" rows="10" placeholder="Your massage" required></textarea>
                            <button type="submit" value="send" class="btn" id="btns" onclick="sendMail()">send</button>
                        </div>
                    </form>
                </section>






                
             
    <footer class="footer">
        <div class="social">
            <a href="https://github.com/Zais-9">
                <i class="bx bxl-github"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100090462123865&mibextid=ZbWKwL">
                <i class="bx bxl-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/in/md-jaseem-99ba482a9?utm_source=share&utm_campaign
                    =share_via&utm_content=profile&utm_medium=android_app">
                <i class="bx bxl-linkedin-square"></i>
            </a>
            <a href="#">
                <i class="bx bxl-instagram-alt"></i>
            </a>
        </div>

             <nav class="navbar" class="list">
                <ul class="list">
              <li><a href="#Home">FAQ</a></li>
              <li><a href="About.html">About</a></li>
              <li><a href="Services.html">Services</a></li>
              <li><a href="Projects.html">Projects</a></li>
              <li><a href="Contact.html">Contact</a></li>
            </ul>
             </nav>


        <p class="copyright">
            mdjaseema40@gmail.com | All Rights Reserved-2024 <br>
            <a href="6289172829" class="number" phone>6289172829</a>
        </p>
    </footer>

</body>
</html>


           
           




<script src="project.js"></script>

    

</body>
</html>
