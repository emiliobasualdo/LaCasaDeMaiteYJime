
window.addEventListener('load', function () {
    api.devicesLog.getAll(1000).then(data => {
        localStorage.setItem('data',JSON.stringify(data["deviceLogs"]));

        var logs = remove_duplicates_es6('data');
        //console.log(logs);
        addToTable(logs);


    }).catch((error) => {
        console.log(error)
    });

});

var avoidActions = ["getState"];
var avoidResults = ["false", false];
var columnKeys = ["timestamp", "deviceId", "action", "params"];

function remove_duplicates_es6(name) {

    var resp= [];
    var arr = JSON.parse(localStorage.getItem(name));
    arr.sort(comparator);
    //console.log(arr.length);
    var i,j;
    for (i = 0; i <arr.length-1; i++) {
        //console.log(arr[i]);
        if (arr[i]["timestamp"].includes(arr[i+1]["timestamp"].substring(0,arr[i+1]["timestamp"].indexOf('.')))
            && arr[i]["deviceId"] == arr[i+1]["deviceId"] ) { // son iguales
        }else {
            resp.push(arr[i]);
        }
    }
    return resp ;
}

function comparator(a,b){
    var ts1 = (new Date(a.timestamp).getTime());
    var ts2 = (new Date(b.timestamp).getTime());
    if (ts1 > ts2)
        return -1;
    if (ts1 < ts2)
        return 1;
    return 0;
}

function addToTable(data){
    //var data = JSON.parse(localStorage.getItem('data'));
    //console.log(data);
    data.sort(comparator);

    for (let i = 0; i <data.length; i++) {

        data[i]["timestamp"] = data[i]["timestamp"].replace('T',' ');
        data[i]["timestamp"] = data[i]["timestamp"].slice(0, 19);

        api.device.get(data[i].deviceId)
            .then(device => {
                //console.log(device);
                //localStorage.setItem('name', JSON.stringify(device.device.name));
                //data[i]["deviceId"]  = JSON.parse(localStorage.getItem('name'));
                data[i]["deviceId"] = device.device.name.substr(0, device.device.name.indexOf('_'));
                //console.log(localStorage.getItem('name'));

                if (showableRow(data[i]))
                    buildHtmlTable('#excelDataTable', data[i]);

            }).catch((error) => {
            console.log(error)
            })
        ;
    }
    return data;
}

// Builds the HTML Table out of myList.
function buildHtmlTable(selector, data) {
    var row$ = $('<tr/>');
    for (var colIndex = 0; colIndex < columnKeys.length; colIndex++) {
        var cellValue = data[columnKeys[colIndex]];
        if (cellValue == null) cellValue = "";
        row$.append($('<td/>').html(cellValue));
    }
    $(selector).append(row$);
}


function showableRow(row){

    // salteamos las acciones de la lista y los resultados inutiles
    return  !   (avoidActions.indexOf(row.action) > -1  ||
                row.result == null                       ||
                avoidResults.indexOf(row.result.status) > -1 ||
                avoidResults.indexOf(row.result) > -1
                )
}