const wallRed = function(){
    console.log("The wall has been painted red")
};
wallRed();

const wallGreen = function(item){
    console.log("The wall has been painted", item)
};
wallGreen("green");

const paintMultiply = function(welkeMuur, color){
    console.log("The " + welkeMuur + " wall has been painted " + color);
  };

paintMultiply("south-east", "grey");

paintMultiply("north", "orange");

const paintMultiply1 = function(chooseWall, color){
    console.log("The " + chooseWall + " wall has been painted " + color);
  };

paintMultiply1("grey", "south-east");

paintMultiply1("orange", "north");

const paintMultiply2 = function(color, chooseWall){
    console.log("The " + chooseWall + " wall has been painted " + color);
  };

paintMultiply2("south-east", "grey");

paintMultiply2("north", "orange");

const paintMultiply3= function(color, chooseWall){
    console.log("The " + chooseWall + " wall has been painted " + color);
  };

paintMultiply3("grey", "south-east");

paintMultiply3("orange", "north");


