function spawnCall() {
document.getElementById("head").innerHTML = 

"<title>MedTour</title>" +
"<meta charset='UTF-8'>" +
"<meta name='viewport' content='width=device-width, initial-scale=1'>" +
"<link rel='stylesheet' href='purecss.css'>" +
"<link rel='stylesheet' href='style.css'>" +
"<link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.6.1/css/all.css'>";


document.getElementById("headercontent").innerHTML = 

"<div class='menuholder xs-visible'>" +

"<div class='menu' id='menubars'>" +

"<div class='linebar'></div>" +
"<div class='linebar'></div>" +
"<div class='linebar'></div>" +

"</div>" +

"</div>";


document.getElementById("menutoggle").innerHTML = 


"<div class='companyname'>MEDCARE<br><div>Wellcare Centre</div></div>" +


"<ul>" +

"<li>" +
"<a id='index' href='index.html'>Home</a>" +
"</li>" +

"<li>" +
"<a  id='about' href='about.html'>About-us</a>" +
"</li>" +

"<!-- <li class='dropdown'> -->" +
"<!-- <div id='toggle' class='xs-visible' style='float:right;'><img id='arrowtoggle' class='arrowimg1' src='img/arrow.png'></div> -->" +
"<!-- <a id='service' href='services.html'>Services</a> -->" +
"<!-- <div id='togglee' class='a dropdown-content'> -->" +
"<!-- <a href='s1.html'>Service one</a> -->" +
"<!-- <a href='s2.html'>Service two</a> -->" +
"<!-- <a href='s3.html'>Service three</a> -->" +
"<!-- <a href='s4.html'>Service Four</a> -->" +
"<!-- <a href='#'></a> -->" +
"<!-- </div> -->" +
"<!-- </li> -->" +

"<li>" +
"<a id='service' href='services.html'>Services</a>" +
"</li>" +

"<li>" +
"<a id='gallery' href='gallery.html'>Gallery</a>" +
"</li>" +

"<li>" +
"<a id='testimonial' href='testimonial.html'>Testimonials</a>" +
"</li>" +

"<li>" +
"<a id='contact' href='contact.html'>Contact</a>" +
"</li>" +

"</ul>";


document.getElementById("smedia").innerHTML = 

"<a href='#' class='fab fa-facebook-f'></a>" +
"<a href='#' class='fab fa-twitter'></a>" +
"<a href='#' class='fab fa-youtube'></a>" +
"<a href='#' class='fab fa-instagram'></a>" ;


document.getElementById("footer").innerHTML = 

"<div class='col-sm-4'>" +
"<h3>LOCATION</h3>" +
"<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.898636259301!2d77.63539211384365!3d12.978334618244345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a30d631f93%3A0x908a5ca987d63664!2sChinmaya+Mission+Hospital+Rd%2C+Indiranagar%2C+Bengaluru%2C+Karnataka!5e0!3m2!1sen!2sin!4v1545304360561' width='90%' height='210px' frameborder='0' style='border:0' allowfullscreen></iframe>" +

"</div>" +
"<div class='col-sm-4'>" +
"<h3>CONTACT US</h3>" +
"<p>Mobile : +91 98765 43211</p>" +
"<p>Office : +91 98765 43211</p>" +
"<p>Address : CMH Road, Indranagar,<br> Bangalore-560 000</p>" +
"<h3>SOCIAL</h3>" +
"<i class='fab fa-facebook-square'></i>" +
"<i class='fab fa-twitter'></i>" +
"<i class='fab fa-youtube'></i>" +
"<i class='fab fa-instagram'></i>" +
"</div>" +
"<div class='col-sm-4'>" +
"<h3>FOLLOW BLOG VIA EMAIL</h3>" +
"<div class=''>Enter your email address to follow this blog and receive notifications of new posts by email." +

"<h3>Join 77 other followers</h3>" +
"<input type='text' name='email' style='width: 95%; padding: 1px 2px' placeholder='Enter your email address' value='' id='subscribe-field'>" +
"<button class='button'>FOLLOW</button>" +
"</div>" +

"</div>" ;

}