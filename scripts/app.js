$(document).ready(function(){
    //Grid List
    var listItem = document.getElementsByClassName("grid-list-item");
    var listItemCreate = document.getElementsByClassName("grid-list-item-create");
    var listItemTitle = document.getElementsByClassName("grid-list-item-title");
    var listItemCreatedOn = document.getElementsByClassName("grid-list-item-created-on");

    loadExistingGrids();

    function loadExistingGrids(){

    }

    $(".grid-list-item").click(function(){
        
        if(!$(this).hasClass("grid-list-item-create")){
            return;
        }

        console.log("Clicked an element");

        var index = $(this).index(".grid-list-item");
        console.log(index);

        //This is where we'll request a grid
        $(this).toggleClass("grid-list-item-create");

        listItemTitle[index].innerHTML = "Grid " + (index + 1);

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        listItemCreatedOn[index].innerHTML = "Created: " + today;

        //getNewGrid();

    });

    function getNewGrid() {
        $.ajax({
            url: "http://ec2-34-245-196-36.eu-west-1.compute.amazonaws.com/new",
            type: 'GET',
            dataType: 'json',
            cache: false,
            success: function(res) {
                console.log(res);
                var gridCards = document.getElementsByClassName("grid-card-text");
                
                //Store this grid in local storage for later use
                if (typeof(Storage) !== "undefined") {
                    // Code for localStorage/sessionStorage.
                    //sessionStorage.setItem("gridID", res.ID);
                    $.each(res.cardData, function(index, element) {
                        gridCards[index].innerHTML = this;
                        //sessionStorage.setItem("gridCard" + index, this);
                    });
                } else {
                // Sorry! No Web Storage support..
                }
            },
            error: function(res) {
                console.log("failed");
                console.log(res);
            }
        });
    }

    function getGrid(id) {
        $.ajax({
            url: "http://ec2-34-245-196-36.eu-west-1.compute.amazonaws.com/grids/" + id,
            type: 'GET',
            success: function(res) {
                console.log(res);
                alert(res);
            }
        });
    }

});