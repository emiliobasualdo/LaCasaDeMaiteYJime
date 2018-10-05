var selectedRoom;
var createButton, updateButton, deleteButton, getButton, getAllButton;
var resultTextArea, roomsSelect;

function toggleButtons(disabled) {
    createButton.disabled = disabled;
    updateButton.disabled = disabled;
    deleteButton.disabled = disabled;
    getButton.disabled = disabled;
}

function buildSelect(roomsObjList) {
    // assume roomsObjList = { value1 : 'Name 1', value2 : 'Name 2', ... }
    //        default = 'value1'

    var select = '<select>';
    for (var val in roomsObjList) {
        select += '<option value="' + roomsObjList[val]["id"]+ '">' + roomsObjList[val]["name"] + '</option>';
    }
    select += '</select>';
    return select;
}

function reload(data) {
    reloadSelect(data);
}

function reloadSelect(information){
    if(typeof information === "undefined") {
        console.log("is undefined");
        api.room.getAll()
            .then((data) => {
                information = data;
                console.log(data);
                roomsSelect.innerHTML = buildSelect(information["rooms"]);
            })
            .catch((error) => {
                resultTextArea.innerHTML = 'Request failed: ' + error;
            });
    }else {
        console.log(information);
        roomsSelect.innerHTML = buildSelect(information["rooms"]);
    }

}

window.addEventListener('load', function() {
    createButton = document.querySelector('#create');
    updateButton = document.querySelector('#update');
    deleteButton = document.querySelector('#delete');
    getButton = document.querySelector('#get');
    getAllButton = document.querySelector('#getAll');
    resultTextArea = document.querySelector('#result');
    roomsSelect = document.querySelector("#roomsSelect");

    createButton.addEventListener('click', function() {
        var newRoom;
        var index = Math.floor(Math.random() * (999 - 1) + 1);
        newRoom = new api.model.room(null, 'kitchen ' + index, '{ size: "9m2" }');

        api.room.add(newRoom)
            .then((data) => {
                newRoom.id = data.room.id;
                resultTextArea.innerHTML = JSON.stringify(data, null, 2);
                toggleButtons(false);
            })
            .catch((error) => {
                resultTextArea.innerHTML = 'Request failed: ' + error;
            });
    }, false);

    updateButton.addEventListener('click', function() {
        selectedRoom.meta = '{ size: "6m2" }';

        api.room.modify(selectedRoom)
            .then((data) => {
                resultTextArea.innerHTML = JSON.stringify(data, null, 2);
            })
            .catch((error) => {
                resultTextArea.innerHTML = 'Request failed: ' + error;
            });
    }, false);

    deleteButton.addEventListener('click', function() {
        api.room.delete(selectedRoom.id)
            .then((data) => {
                resultTextArea.innerHTML = JSON.stringify(data, null, 2);
                toggleButtons(false);
            })
            .catch((error) => {
                resultTextArea.innerHTML = 'Request failed: ' + error;
            });
        reload();
    }, false);

    getButton.addEventListener('click', function() {
        api.room.get(selectedRoom.id)
            .then((data) => {
                resultTextArea.innerHTML = JSON.stringify(data, null, 2);
                selectedRoom = data;
            })
            .catch((error) => {
                resultTextArea.innerHTML = 'Request failed: ' + error;
            });
    }, false);

    getAllButton.addEventListener('click', function() {
        api.room.getAll()
            .then((data) => {
                resultTextArea.innerHTML = JSON.stringify(data, null, 2);
                console.log(data);
                reload(data);
            })
            .catch((error) => {
                resultTextArea.innerHTML = 'Request failed: ' + error;
            });
    }, false);

    roomsSelect.addEventListener('change', function() {
        console.log(this.value);
        api.room.get(this.value)
            .then((data) => {
                console.log(data);
                selectedRoom = data["room"];
            })
            .catch((error) => {
                resultTextArea.innerHTML = 'Request failed: ' + error;
            });
        //console.log(selectedRoom);
    }, false);

    toggleButtons(false);
}, false);

