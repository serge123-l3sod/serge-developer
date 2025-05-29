
    window.addEventListener('load', function () {
      document.getElementById('loader-spinner').style.display = 'block';
    });

    function enter() {
      const button = document.getElementById('button');
      const loader = document.getElementById('style');

      loader.style.display = 'block';  // Show spinner
      button.disabled = true;           // Disable button

      // Redirect after 5 seconds using setTimeout
      setTimeout(function () {
        // window.location.href ="../DEVELOPER-LION-KING/page/home.html";
         window.location.href ="home.html";
      }, 2000);  // 2000 milliseconds = 2 seconds
    }

