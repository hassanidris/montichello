// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 59.23607899009092, lng: 17.839677400309043 };
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
          // autoplay: true,
          dots: true,
          arrows: false,
          autoplaySpeed: 3000,
        });
      });