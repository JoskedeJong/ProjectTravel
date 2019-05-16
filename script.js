var anyY = 0;
var anyX = 0;

var x = 1;
var y = 0;
var a = 0;
var travelItems = [[0,"Destination", "Rating", "Cost", "word", "_"],[1,"Moscow","4\/5","120\$","one","a"],[2,"Berlin","2\/5","80\$","two","aa"],[3,"New York","5\/5","230\$","three","aaa"],[4,"Sydney","3\/5","150\$", "four", "aaaa",]];
var allSelected = [];
var allIdentifiers = [];
var allCombined = [];                                               // this conversion currently only works for single-digit row-identifiers, but can be modified for multi-digit
var frontString = [];
var backtString = [];
var unstrung = [];
var newArray = [];
var subArray = [];
var masterArray = [];
var strLength = [];
var t = 0;
var q = 0;

var anyArray = travelItems;                                             // convert an array to var anyAray. This should accept all arrays

var anyY = anyArray.length;
var anyX = anyArray[0].length;

var tbl = document.createElement("TABLE");                              // breates basis for rest of table to be appended to
document.body.appendChild(tbl);
tbl.setAttribute("border", "2");

function arraySwitch(){
    var w = masterArray.length;
    if (w  !== 0){
        console.log("blip");
        anyArray = masterArray.slice(0);
        // console.log(anyArray);
        function empty() {
            masterArray.length = 0;
            allSelected.length = 0;
            allIdentifiers.length = 0;
            allCombined.length = 0;                                               // this conversion currently only works for single-digit row-identifiers, but can be modified for multi-digit
            frontString.length = 0;
            backtString.length = 0;
            unstrung.length = 0;
            newArray.length = 0;
            subArray.length = 0;
            strLength.length = 0;
        }
        empty();
    }
}



function sortFunction(id){ 

    var q = (id);
                                                        /* why use a for loop? This function is used to pass through all properties and all identifiers for all possible property
                                                        values in the chosen category. The chosen category shoud be in allSelected */
                                               

    for (a=0; a<anyY; a++){                             //the following function is supposed to take the values for the selected collumn (q) and the values for the identifier
        var allSelected = anyArray [a][q];              // collumn, sting-ify them, add them together in one string, and then push them into a new array (allCombined)  
        var allIdentifiers = anyArray [a][0];           // [a]=value that passes all sub-arrays. [q] is location of to-be-sorted value. [0] is location of identifier.
        frontString = allSelected.toString();           // conversion from number to string
        backString = allIdentifiers.toString();
        combineString = frontString + backString;       // combination of both strings to one 'number'
        allCombined.push(combineString);                // 'numbers' pushed to to-be-sorted array 

        allCombined.sort();                             // this is where I sort the new array
    }

    for (n=0; n<anyY; n++){                             // makes new array that only contains the identifiers, in sorted order

        var selectForMeasure = allCombined[n];
        var strLength = selectForMeasure.length;
        newArray.push(allCombined[n][(strLength - 1)]);
    }    

    console.log(allCombined);

    indexPicker = newArray.findIndex(searchFunction);   //function made to keep header values on top. this picks the values, the next function moves them.
    function searchFunction(value){
        return value == 0;
    }
    function removeHeaderValues(){                      //function made to keep header values on top
        newArray.splice(indexPicker, 1);                // removes element picked out by indexPicker
        newArray.unshift(0);                            // adds element 0 at start of array
    }
    removeHeaderValues(newArray);

    for (t=0; t<anyY; t++){                             // t is order-value (location) of items in newArray, r is value of these items
        var r = newArray[t];
        for (p=0; p<anyX; p++){                         /* for all the values (=t) values of newArray I want properties from item r  '1 through anyX', 
                                                        except for the last one. p will go through all location values for array ith id r */                                             
            subArray.push(anyArray[r][p]); 
        }
    }

    for (s=0; s<anyY; s++){
        var slice = subArray.slice((s * anyX),((s * anyX) + anyX));
        masterArray.push(slice);
        var slice = "aaa";
    }
    
    for (y=0; y < anyY; y++){
        var createRow = document.createElement("TR");
        tbl.appendChild(createRow);s
        for (x=0; x < anyX; x++){
            var createData = document.createElement("TD");
            createRow.appendChild(createData);
            var contentData = document.createTextNode(anyArray[y][x]);    
            createData.appendChild(contentData);
            if ((x==(anyX -1)) && (y!=0)){
                var createButton = document.createElement("BUTTON");         //creates right buttons
                createData.appendChild(createButton);
            }
            if ((y==0) && (x!= anyX - 1)) {
                var createButton = document.createElement("BUTTON");         // creates top buttons
                createButton.setAttribute("onclick", "arraySwitch() ; sortFunction(id);");
                createButton.setAttribute("id", x);
                createData.appendChild(createButton);
            }
        }
    } 
    console.log(masterArray);   
                                                                            // if I want anything to happen after the buttons have been created, it should probably be done here.
}
sortFunction(0);                                    //perform sortFunction for value 0. This is here for when the page loads.
  

                                                    /* what do I want to achieve now? I want to read out every [1] character for each element of the string. To do what?
                                                    I want these so I I have a reference to set up my new table. How do I set up my table with a reference to a array of 
                                                    randomly ordered numbers? 
                                                    What I could do is use the identifier to taget the right sub-array and attach the old content back to the identifier.
                                                    if that is done, I technically have a  new travelItems*/