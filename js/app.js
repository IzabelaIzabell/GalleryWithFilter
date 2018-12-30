var allImgs = document.querySelectorAll("#gallery img");
var hideButton = document.querySelector("#hideButton");
console.log(hideButton);
var showButton = document.querySelector("#showButton");
var input = document.querySelector("#tagInput");

hideButton.addEventListener('click', function(event){
    var inputText = input.value;
    console.log(inputText);
      
       for (i=0; i<allImgs.length; i++){
        var tags =allImgs[i].dataset.tag;
        // console.log(tags);
        if(tags.indexOf(inputText)!== -1){
            allImgs[i].classList.add("invisible");
        }
    }
     //clean input
     input.value = "";

});
showButton.addEventListener('click', function() {
    var inputText = input.value;
    console.log(inputText);
    for (i=0; i<allImgs.length; i++){
        var tags=allImgs[i].dataset.tag;
        // console.log(tags);
        if(tags.indexOf(inputText)!== -1){
            allImgs[i].style.display="inline-block";
        }else  allImgs[i].style.display="none";
        }
    //clean input
    input.value = "";
    // console.log("show");

});

