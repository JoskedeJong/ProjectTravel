var destPlaces = 4
var destProps = 3
var travelItems = new Array(destPlaces);
var x = 0;
var y = 0;

for(i=0; i <= destProps; i++){
    travelItems[i] = new Array();
}

travelItems[0][0] = "Sydney";
travelItems[0][1] = 3;
travelItems[0][2] = "150\$"; 

travelItems[1][0] = "Moscow"
travelItems[1][1] = 4;
travelItems[1][2] = "180\$"

travelItems[2][0] = "Rotterdam"
travelItems[2][1] = 2;
travelItems[2][2] = "80\$"

travelItems[3][0] = "New York"
travelItems[3][1] = 5;
travelItems[3][2] = "230\$"

console.log(travelItems[3][0])

var tbl = document.createElement("TABLE");
document.body.appendChild(tbl);
tbl.setAttribute("border", "2");

for (x=0; x <= destProps; x++){
    var createRow = document.createElement("TR");
    tbl.appendChild(createRow);
    for (y=0; y <= destPlaces; y++){
        var createData = document.createElement("TD");
        createRow.appendChild(createData);
    }
}
 
