let login = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () =>{
    login.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector(".header .navbar");

document.querySelector('#menu-btn').onclick = () =>{
    login.classList.remove('active');
    navbar.classList.toggle('active');
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    document.getElementById("Ubicacion").innerHTML = "Tu navegador no soporta Geolocalización.";
  }

  function showPosition(position) {
    var latitud = position.coords.latitude;
    var longitud = position.coords.longitude;

    fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitud}&lon=${longitud}&format=json`)
      .then(response => response.json())
      .then(data => {
        var pais = data.address.country;
        var region = data.address.state;
        document.getElementById("Ubicacion").innerHTML = "Ubicación actual: País: " + pais + ", Región: " + region;
      })
      .catch(error => {
        console.log(error);
        showError();
      });
  }


  function showError() {
    document.getElementById("Ubicacion").innerHTML = "No se pudo obtener la ubicación.";
  }


window.onscroll = () =>{
    login.classList.remove('active');
    navbar.classList.remove('active');
}


    function mostrarDetalles() {
        var descripcion = document.getElementById("descripcion");
        if (descripcion.style.display === "none") {
            descripcion.style.display = "block";
        } else {
            descripcion.style.display = "none";
        }
    }

    function updateClock() {
        var now = new Date();
        var time = now.toLocaleTimeString();
        document.getElementById('clock').textContent = time;
      }
      
      setInterval(updateClock, 1000);
      


var swiper = new Swiper(".gallery-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween:20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0:{
            slidesPerView:1,
        },
        700:{
            slidesPerView:2,
        },
    }
})
