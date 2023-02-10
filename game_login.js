
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

    //Set "player1_name" using localStorage.setItem() function
	  //Set "player2_name" using localStorage.setItem() function
    localStorage.setItem("player1_name");
    localStorage.setItem("player2_name");
    window.location = "game_page.html";
}

