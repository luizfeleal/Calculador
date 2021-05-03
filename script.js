document.getElementById("seletorDeFicheiros").addEventListener("change", function(event) {
    let ficheiros = event.target.files;
  if(ficheiros.length !== 0) {

    setInterval(function () {
      alert(ficheiros.length)
    }, 5000);
  }
    
   
  }, false);

