$(document).ready(function(){
    //Grid List
    var listItem = document.getElementsByClassName("grid-list-item");
    var listItemCreate = document.getElementsByClassName("grid-list-item-create");
    var listItemTitle = document.getElementsByClassName("grid-list-item-title");
    var listItemCreatedOn = document.getElementsByClassName("grid-list-item-created-on");

    var strings = [];

generateGridStrings(strings);

function generateGridStrings(strings){
    
    console.log("Generating grid strings...");
    
    var driverNames = ["<span class='merc-col'>Hamilton</span>", 
                        "<span class='merc-col'>Bottas</span>", 
                        "<span class='fer-col'>Vettel</span>", 
                        "<span class='fer-col'>Leclerc</span>", 
                        "<span class='rb-col'>Verstappen</span>", 
                        "<span class='rb-col'>Gasly</span>", 
                        "<span class='ren-col'>Hulkenburg</span>", 
                        "<span class='ren-col'>Ricciardo</span>", 
                        "<span class='haa-col'>Magnussen</span>", 
                        "<span class='haa-col'>Grosjean</span>",
                        "<span class='tr-col'>Kvyat</span>", 
                        "<span class='tr-col'>Albon</span>", 
                        "<span class='rp-col'>Perez</span>", 
                        "<span class='rp-col'>Stroll</span>", 
                        "<span class='alf-col'>Raikkonen</span>", 
                        "<span class='alf-col'>Giovinazzi</span>", 
                        "<span class='mcl-col'>Norris</span>", 
                        "<span class='mcl-col'>Sainz</span>", 
                        "<span class='wil-col'>Russell</span>", 
                        "<span class='wil-col'>Kubica</span>"
                    ];
                    
    var driverStrings =     [   
                                "wins", 
                                "finishes on the podium", 
                                "scores points", 
                                "gets the fastest lap",
                                "moves up from where he started", 
                                "moves down from where he started",
                                "crashes", 
                                "DNF's",
                                "crashes in the pitlane",
                                "falls victim to team orders",
                                "has a slow pit stop",
                                "crashes in the first corner",
                                "complains over the radio",
                                "gets a puncture",
                                "loses his front wing",
                                "qualifies ahead of his teammate",
                                "collides with his teammate",
                                "has a problem in the race",
                                "spins"
                            ];

    var generalStrings =    [
                                "Erisson's fault",
                                "Best fans",
                                "They touched",
                                "Small family saloon",
                                "Day late and a dollar short",
                            ];
    
    //Driver strings added here
    driverNames.forEach(function(driverName) {
        driverStrings.forEach(function(driverString, index) {
            var finalString = ""
            
            finalString += driverName
            finalString += " "
            finalString += driverString;

            strings.push(finalString);
            console.log(strings.length + ". Adding " + finalString);
        });
    });

    //General strings added here
    generalStrings.forEach(function(generalString) {
        strings.push(generalString);
        console.log(strings.length + ". Adding " + generalString);
    });
}


    $("#grid-creation-button").click(function(){  
        getNewGrid();
    });

    function getNewGrid(){
        var gridCards = document.getElementsByClassName("grid-card-text");
        $.each(gridCards, function(index, element) {
            var randomNumber = Math.floor((Math.random() * strings.length) + 0);
            element.innerHTML = strings[randomNumber];
        });
    }

    

});