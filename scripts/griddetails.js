var gridDetails = document.getElementsByClassName("grid-details-content");
var gridCreation = document.getElementsByClassName("grid-details-creation");

$("#grid-creation-button").click(function(){

    console.log("Creation button pressed");

    $(gridDetails).toggleClass("grid-details-hide");
    $(gridCreation).toggleClass("grid-details-hide");

    

});