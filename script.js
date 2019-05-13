var destPlaces = 5;
var destProps = 4;
var travelItems = new Array(destPlaces);
var x = 0;
var y = 0;

for(i=0; i <= destProps; i++){
    travelItems[i] = new Array();
}

travelItems[0][0] = "Destination";
travelItems[0][1] = "Rating";
travelItems[0][2] = "Cost"; 
travelItems[0][3] = ""; 

travelItems[1][0] = "Moscow";
travelItems[1][1] = 4;
travelItems[1][2] = "180\$";
travelItems[1][3] = ""; 

travelItems[2][0] = "Rotterdam";
travelItems[2][1] = 2;
travelItems[2][2] = "80\$";
travelItems[2][3] = ""; 

travelItems[3][0] = "New York";
travelItems[3][1] = 5;
travelItems[3][2] = "230\$";
travelItems[3][3] = ""; 

travelItems[4][0] = "Sydney";
travelItems[4][1] = 3;
travelItems[4][2] = "150\$"; 
travelItems[4][3] = ""; 

console.log(travelItems[3][0]);

var tbl = document.createElement("TABLE");
document.body.appendChild(tbl);
tbl.setAttribute("border", "2");

for (x=0; x < destPlaces; x++){
    var createRow = document.createElement("TR");
    tbl.appendChild(createRow);
    for (y=0; y < destProps; y++){
        var createData = document.createElement("TD");
        createRow.appendChild(createData);
        var contentData = document.createTextNode(travelItems[x][y]);
        createData.appendChild(contentData);
        if ((y==(destProps-1)) && (x!=0)){
            var createButton = document.createElement("BUTTON");
            createData.appendChild(createButton);
        }
    }
}
 
