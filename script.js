var destPlaces = 5;
var destProps = 4;
var travelItems = new Array(destPlaces);
var x = 1;
var y = 0;
var a = 0;
var allSelected = [];
var allIdentifiers = [];
var allCombined = [];                               // this conversion currently only works for single-digit row-identifiers, but can be modified for multi-digit
var frontString = [];
var backtString = [];
var unstrung = [];
var newArray = [];
var subArray = [];
var masterArray = [];
var strLength = [];
var t = 0;
var q = 0;

for(i=0; i <= destProps; i++){
    travelItems[i] = new Array();
}

travelItems[0][0] = 0;
travelItems[0][1] = "Destination";
travelItems[0][2] = "Rating";
travelItems[0][3] = "Cost"; 
travelItems[0][4] = ""; 

travelItems[1][0] = 1;
travelItems[1][1] = "Moscow";
travelItems[1][2] = "4\/5";
travelItems[1][3] = "120\$";
travelItems[1][4] = "a"; 

travelItems[2][0] = 2;
travelItems[2][1] = "Berlin";
travelItems[2][2] = "2\/5";
travelItems[2][3] = "80\$";
travelItems[2][4] = "aa"; 

travelItems[3][0] = 3;
travelItems[3][1] = "New York";
travelItems[3][2] = "5\/5";
travelItems[3][3] = "230\$";
travelItems[3][4] = "aaa"; 

travelItems[4][0] = 4;
travelItems[4][1] = "Sydney";
travelItems[4][2] = "3\/5";
travelItems[4][3] = "150\$"; 
travelItems[4][4] = "aaaa"; 

// console.log(travelItems);

var tbl = document.createElement("TABLE");
document.body.appendChild(tbl);
tbl.setAttribute("border", "2");

for (y=0; y < destPlaces; y++){
    var createRow = document.createElement("TR");
    tbl.appendChild(createRow);
    for (x=1; x <= destProps; x++){
        var createData = document.createElement("TD");
        createRow.appendChild(createData);
        var contentData = document.createTextNode(travelItems[y][x]);       // this var should probably be changed to intermediate function
        createData.appendChild(contentData);
        if ((x==(destProps)) && (y!=0)){
            var createButton = document.createElement("BUTTON");            //creates right buttons
            createData.appendChild(createButton);
        }
        if ((y==0) && (x!= destProps)) {
            var createButton = document.createElement("BUTTON");                // creates top buttons
            createButton.setAttribute("onclick", "sortFunction(id);");
            createButton.setAttribute("id", x);
            createData.appendChild(createButton);
            }

    }
}

function sortFunction(id){ 
    var q = (id);
                                                        /* why use a for loop? This function is used to pass through all properties and all identifiers for all possible property
                                                        values in the chosen category. The chosen category shoud be in allSelected */

    for (a=0; a<=(destProps); a++){                      // make 5 the amount of y-coord values
        var allSelected = travelItems [a][q];           //  a is y coordinate, 2 is x coordinate      -> make 2 the column that needs to be sorted
        var allIdentifiers = travelItems [a][0];
        frontString = allSelected.toString();             //  conversion from number to string
        backString = allIdentifiers.toString();
        combineString = frontString + backString;      //  combination of both strings to one 'number'
        allCombined.push(combineString);               //  'numbers' pushed to to-be-sorted array 

        allCombined.sort();                             // this is where I sort the new array
    }

    for (n=0; n<=destProps; n++){                       // makes new array that only contains the identifiers, in sorted order

        var selectForMeasure = allCombined[n];
        var strLength = selectForMeasure.length;
        newArray.push(allCombined[n][(strLength - 1)]);
    }    

    indexPicker = newArray.findIndex(searchFunction);
    function searchFunction(value){
        return value == 0;
    }
    function removeFunction(){
        newArray.splice(indexPicker, 1);                // removes element picked out by indexPicker
        newArray.unshift(0);                            // adds element 0 at start of array
    }
    removeFunction(newArray);

    for (t=0; t<=destProps; t++){                        // t is order-value (location) of items in newArray, r is value of these items
        var r = newArray[t];
        for (p=0; p<=destProps; p++){                   /* for all the values (=t) values of newArray I want properties from item r  '1 through destProps', 
                                                            except for the last one. p will go through all location values for array ith id r */                                             
            subArray.push(travelItems[r][p]); 
        }
    }
    for (s=0; s<=destProps; s++){
        var slice = subArray.slice((s * 5),((s * 5) + 5));
        masterArray.push(slice);
        var slice = "aaa";
    }

    console.log(masterArray);   
    // var masterArray = [];   
}

                                                    /* what do I want to achieve now? I want to read out every [1] character for each element of the string. To do what?
                                                    I want these so I I have a reference to set up my new table. How do I set up my table with a reference to a array of 
                                                    randomly ordered numbers? 
                                                    What I could do is use the identifier to taget the right sub-array and attach the old content back to the identifier.
                                                    if that is done, I technically have a  new travelItems*/

allCombined = [];                                // resets string so it doesn't keep growing with each click. This is probably placed wrong right now