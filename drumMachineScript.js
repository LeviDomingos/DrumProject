let element = true;
$(document).ready(function() {

  $("#swicth").on("click", getSwitchValue);
  $(".drum-pad").on("click", assignEvent);
  
  var audios = $(".clip");

  function assignEvent(event) {
    if(this.id ==="Heater-1" && element) {
      audios[0].play();
      $("#display").text(this.id);
    }  
    if(this.id ==="Heater-2" && element) {
      audios[1].play();
      $("#display").text(this.id);
    }  

    if(this.id ==="Heater-3" && element) {
      audios[2].play();
      $("#display").text(this.id);
    }  
    if(this.id ==="Heater-4_1" && element) {
      audios[3].play();
      $("#display").text(this.id);
    } 
    
    if(this.id ==="Dsc_Oh" && element) {
      audios[4].play();
      $("#display").text(this.id);
    }  
    if(this.id ==="Heater-6" && element) {
      audios[5].play();
      $("#display").text(this.id);
    }  

    if(this.id ==="Kick_n_Hat" && element) {
      audios[6].play();
      $("#display").text(this.id);
    }  
    if(this.id ==="RP4_KICK_1" && element) {
      audios[7].play();
      $("#display").text(this.id);
    }  

    if(this.id ==="Cev_H2" && element) {
      audios[8].play();
      $("#display").text(this.id);
    }  
  }

  function getSwitchValue() {
      element = window.document.getElementById("swicth").checked;
  }    

});
