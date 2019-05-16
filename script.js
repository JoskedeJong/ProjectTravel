var anyY = 0;
var anyX = 0;
var a = 0;
var q = 0;
var r = 0;
var x = 0;
var y = 0;
var id = 0;
var slice = 0;
var travelItems = [[0,"Destination", "Rating", "Cost", "word", "_"],[1,"Moscow","4\/5","120\$","one","a"],[2,"Berlin","2\/5","80\$","two","aa"],[3,"New York","5\/5","230\$","three","aaa"],[4,"Sydney","3\/5","150\$", "four", "aaaa",]];
var allSelected = [];
var allIdentifiers = [];
var allCombined = [];                                   // this conversion currently only works for single-digit row-identifiers, but can be modified for multi-digit
var frontString = [];
var backtString = [];
var unstrung = [];
var newArray = [];
var subArray = [];
var masterArray = [];
var strLength = [];
var selectForMeasure = [];

var anyArray = travelItems;                             // convert an array (in this case travelItems) to var anyAray. This should accept all arrays
var anyY = anyArray.length;
var anyX = anyArray[0].length;

var tbl = document.createElement("TABLE");              // creates basis for rest of table to be appended to
document.body.appendChild(tbl);
tbl.setAttribute("border", "2");

function emptyAll() {
    console.log("all emptied");
    masterArray.length = 0;
    allSelected.length = 0;
    allIdentifiers.length = 0;
    allCombined.length = 0;                             // this conversion currently only works for single-digit row-identifiers, but can be modified for multi-digit
    frontString.length = 0;
    backtString.length = 0;
    unstrung.length = 0;
    newArray.length = 0;
    subArray.length = 0;
    strLength.length = 0;
    selectForMeasure.length = 0;
    slice.length = 0;
    combineString = 0;
    a = 0;
    q = 0;
    r = 0;
    x = 0;
    y = 0;
    id = 0;
    clickedId = 0;
}

function arraySwitch(){                                 // function that loops around resultant masterArray to starting anyArray
    console.log("arrays switched");
    anyArray.length = 0;                                // empties old input-array
    anyArray = masterArray.slice(0);                    // copies output-array to input-array
    masterArray.length = 0;                             // empties output-array
}

function sortFunction(){                                // function that sorts the selected variables from anyArray and produces a re-ordered masterArray
    console.log("data sorted");

    for (a=0; a<anyY; a++){                             // this function is supposed to take the values for the selected collumn (q) and the values for the identifier
        var allSelected = anyArray [a][q];              // collumn, sting-ify them, add them together in one string, and then push them into a new array (allCombined)  
        var allIdentifiers = anyArray [a][0];           // [a]=value that passes all sub-arrays. [q] is location of to-be-sorted value. [0] is location of identifier.
        frontString = allSelected.toString();           // conversion from number to string
        backString = allIdentifiers.toString();
        combineString = frontString + backString;       // combination of both strings to one 'number'
        allCombined.push(combineString);                // 'numbers' pushed to to-be-sorted array 

        allCombined.sort();                             // this is where I sort the new array
    }

    for (a=0; a<anyY; a++){                             // makes new array that only contains the identifiers, in sorted order
        var selectForMeasure = allCombined[a];
        var strLength = selectForMeasure.length;
        newArray.push(allCombined[a][(strLength - 1)]);
    }    

    indexPicker = newArray.findIndex(searchFunction);   //function made to keep table-header values on top. this picks the values, the next function moves them.
    function searchFunction(value){
        return value == 0;
    }
    function removeHeaderValues(){                      // function made to keep header values on top
        newArray.splice(indexPicker, 1);                // removes element picked out by indexPicker
        newArray.unshift(0);                            // adds element 0 at start of array
    }
    removeHeaderValues(newArray);

    for (a=0; a<anyY; a++){                             // a is order-value (location) of items in newArray, r is id-value of these items
        var r = newArray[a];
        for (b=0; b<anyX; b++){                         // for all the values (=a) values of newArray I want properties from item r  '1 through anyX'. 
                                                        // b will go through all location values for array ith id r */                                             
            subArray.push(anyArray[r][b]);              // subArray is now a one-dimensional string with all the values that should be in master Array
        }
    }

    for (a=0; a<anyY; a++){                             // slices subArray into small arrays stored in 'slice', which are then pushed to masterArray
        var slice = subArray.slice((a * anyX),((a * anyX) + anyX));
        masterArray.push(slice);
    }
}    

function buildTable(){                                                       // function that creates the table
    console.log("table built");
    for (y=0; y < anyY; y++){
        var createRow = document.createElement("TR");
        tbl.appendChild(createRow);
        for (x=0; x < anyX; x++){
            var createData = document.createElement("TD");
            createRow.appendChild(createData);
            var contentData = document.createTextNode(anyArray[y][x]);    
            createData.appendChild(contentData);
            if ((x==(anyX -1)) && (y!=0)){
                var createButton = document.createElement("BUTTON");         // creates right buttons
                createData.appendChild(createButton);
            }
            if ((y==0) && (x!= anyX - 1)) {
                var createButton = document.createElement("BUTTON");         // creates top buttons
                createButton.setAttribute("id", x);
                createButton.setAttribute("onclick", "buttonIdentifier("+x+"); sortFunction(); buildTable(); arraySwitch(); emptyAll()");
                createData.appendChild(createButton);
            }
        }
    } 
}

function buttonIdentifier(clickedId){
    q = clickedId;
    console.log(q + " was clicked");
}

buildTable();
                                                                            // if I want anything to happen after the buttons have been created, it should probably be done here.