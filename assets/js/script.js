// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 41.12116469545058, lng: -73.43284814453408 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: uluru,
    });
    const svgMarker = {
        path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
        fillColor: "black",
        fillOpacity: 1,
        strokeWeight: 0,
        rotation: 0,
        scale: 2,
        anchor: new google.maps.Point(15, 30),
      };
    
      new google.maps.Marker({
        position: map.getCenter(),
        icon: svgMarker,
        map: map,
      });
    }

    // Smooth scrolling
    const links = document.querySelectorAll(".nav-link");

      for (const link of links) {
        link.addEventListener("click", clickHandler);
      }

      function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");

        document.querySelector(href).scrollIntoView({
          behavior: "smooth"
        });
      }

      // Slick slider code
      $(document).ready(function () {
        $(".news-slider").slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          dots: true,
          autoplaySpeed: 1000,

          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                slidesToShow: 1,
              },
            },
          ],
        });
      });
   

    $(document).ready(function () {
        $(".banner-slider").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          dots: true,
          arrows: false,
          autoplaySpeed: 2500,
          // cssEase: 'ease-out',
          fade: true,
          easing: 'linear',
        });
      });

      //Get the button
    let mybutton = document.getElementById("btn-back-to-top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", backToTop);

    function backToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }