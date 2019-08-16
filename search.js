const searchBox = document.getElementById("searchBox");
const searchHeader = document.getElementsByClassName("searchHeader");
const searchCaption = document.getElementsByClassName("searchCaption");
const searchGroup = document.getElementsByClassName("searchGroup");
const searchStart = 1;

//on key up event
searchBox.onkeyup = init;

function init () {
    //retrieve search input
  	var searchText = searchBox.value.toLowerCase();
    //if input if longer than 2 character, compare text
    if(searchText.length > searchStart){
      compareText(searchText);
    }
    //else set initial state
    else {
      setInitialState();
    }
}

function compareText(searchText){
	for(var i = 0; i < searchGroup.length; i++){
		var text = searchHeader[i].innerText.toLowerCase();
		var caption = searchCaption[i].innerText.toLowerCase();

			//fade in
			if(text.includes(searchText) || caption.includes(searchText)){
				searchGroup[i].style.display = "inherit";
			} //end if statement
			else if(!(text.includes(searchText) || caption.includes(searchText))){
					searchGroup[i].style.display = "none";
			} // end else if statement

		} //end for loop
} //end compareText

function setInitialState(){
  for(var i = 0; i < searchGroup.length; i++){
     searchGroup[i].style.display = "inherit";
  }
}
