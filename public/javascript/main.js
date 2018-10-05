var selectedRoom;
var addRoomBtn, updateButton, deleteButton, getButton, getAllButton;
var resultTextArea, roomsSelect;

function toggleButtons(disabled) {
    addRoomBtn.disabled = disabled;
    updateButton.disabled = !disabled;
    deleteButton.disabled = !disabled;
    getButton.disabled = !disabled;
}

function loadRooms() {
    var contenido = document.getElementById("myRooms");
    if(contenido) {
        var newRoom;
        var index = Math.floor(Math.random() * (999 - 1) + 1);
        //var roomName = document.getElementById("name-header13-1x").value;
        newRoom = new api.model.room(null, 'QUE2' + index, '{}');

        api.room.add(newRoom)
            .then((data) => {
                newRoom.id = data.room.id; 
                //document.location.href = 'rooms.html';
                // cambiar a rooms asi se actualiza la pagina y se actualice todo
                //resultTextArea.innerHTML = JSON.stringify(data, null, 2);
                //toggleButtons(false);
            })
            .catch((error) => {
                //resultTextArea.innerHTML = 'Request failed: ' + error;
            });
    } else {
        var newRoom;
        var index = Math.floor(Math.random() * (999 - 1) + 1);
        //var roomName = document.getElementById("name-header13-1x").value;
        newRoom = new api.model.room(null, 'QUE3' + index, '{}');

        api.room.add(newRoom)
            .then((data) => {
                newRoom.id = data.room.id; 
                //document.location.href = 'rooms.html';
                // cambiar a rooms asi se actualiza la pagina y se actualice todo
                //resultTextArea.innerHTML = JSON.stringify(data, null, 2);
                //toggleButtons(false);
            })
            .catch((error) => {
                //resultTextArea.innerHTML = 'Request failed: ' + error;
            });
    }
    //contenido.html("");
    //contenido.append('<section class="features13 cid-r5zf8QJWvr" id="features13-2w"><div class="container"><div class="media-container-row container"><div class="card col-12 col-md-6 p-5 m-3 align-center"><div class="card-img"><a href="room.html"><img src="assets/images/mbr-1-1200x798.jpg" alt="Mobirise" title=""></a></div><h4 class="card-title py-2 mbr-fonts-style display-2"><a href="room.html" class="text-black">Kitchen</a></h4></div></div></div></section>');      
    //$('#myRooms').html('<section class="features13 cid-r5zf8QJWvr" id="features13-2w"><div class="container"><div class="media-container-row container"><div class="card col-12 col-md-6 p-5 m-3 align-center"><div class="card-img"><a href="room.html"><img src="assets/images/mbr-1-1200x798.jpg" alt="Mobirise" title=""></a></div><h4 class="card-title py-2 mbr-fonts-style display-2"><a href="room.html" class="text-black">Kitchen</a></h4></div></div></div></section>');
     //document.location.href = 'rooms.html';
     // api.room.getAll()
     //        .then((data) => {
     //            for(var i = 0; i < data.rooms.length; i++) {
     //                var roomName = JSON.stringify(data.rooms[i].name, null, 2);
     //                roomName = roomName.substring(1, roomName.length-1);
     //                var roomId = JSON.stringify(data.rooms[i].id, null, 2);


     //            }
     //            resultTextArea.innerHTML = JSON.stringify(data, null, 2);
     //            console.log(data);
     //            reload(data);
     //        })
     //        .catch((error) => {
     //            resultTextArea.innerHTML = 'Request failed: ' + error;
     //        });
}

function addRoom() {
        var newRoom;
        var index = Math.floor(Math.random() * (999 - 1) + 1);
        var roomName = document.getElementById("name-header13-1x").value;
        newRoom = new api.model.room(null, roomName + index, '{}');

        api.room.add(newRoom)
            .then((data) => {
                newRoom.id = data.room.id; 
                document.location.href = 'rooms.html';
                loadRooms();
                // cambiar a rooms asi se actualiza la pagina y se actualice todo
                //resultTextArea.innerHTML = JSON.stringify(data, null, 2);
                //toggleButtons(false);
            })
            .catch((error) => {
                //resultTextArea.innerHTML = 'Request failed: ' + error;
            });
}

window.addEventListener('load', function() {
    addRoomBtn = document.querySelector('#addRoomBtn');
    updateButton = document.querySelector('#update');
    deleteButton = document.querySelector('#delete');
    getButton = document.querySelector('#get');
    getAllButton = document.querySelector('#getAll');
    resultTextArea = document.querySelector('#result');
    roomsSelect = document.querySelector("#roomsSelect");

    addRoomBtn.addEventListener('click', function() {
        var newRoom;
        var index = Math.floor(Math.random() * (999 - 1) + 1);
        var roomName = document.getElementById("name-header13-1x").value;
        newRoom = new api.model.room(null, roomName + index, '{ size: "9m2" }');

        api.room.add(newRoom)
            .then((data) => {
                newRoom.id = data.room.id;
                //resultTextArea.innerHTML = JSON.stringify(data, null, 2);
                //toggleButtons(false);
            })
            .catch((error) => {
                //resultTextArea.innerHTML = 'Request failed: ' + error;
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

