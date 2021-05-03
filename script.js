document.getElementById("seletorDeFicheiros").addEventListener("change", function(event) {
    let ficheiros = event.target.files;
  if(ficheiros.length !== 0) {

    setInterval(function () {
      alert(ficheiros.length)
    }, 300000);
  }
    
   
  }, false);

