function addRoom() {
        var newRoom;
        var roomName = document.getElementById("name-header13-1x").value;
        newRoom = new api.model.room(null, roomName, '{}');

        api.room.add(newRoom)
            .then((data) => {
                newRoom.id = data.room.id; 
                location.href = 'rooms.html';
            })
            .catch((error) => {
            });
}

function goToRoom(roomId) {
    localStorage.setItem('currentRoomId', roomId);
    location.href = 'room.html';
}

function deleteRoom() {
    var roomId = localStorage.getItem('currentRoomId');
    api.room.delete(roomId)
        .then((data) => {
            location.href = 'rooms.html';
        })
        .catch((error) => {
            console.log('error');
        });
}

function addDeviceToRoom(deviceType, deviceName) {
    var roomId = localStorage.getItem('currentRoomId');
    var name = "";
    api.roomDevice.get(roomId)
        .then((data) => {
            if ( deviceType == 'go46xmbqeomjrsjr') {
                name += deviceName + 'room' + roomId + data.devices.length;
            } else if (deviceType == 'im77xxyulpegfmv8') {
                name += deviceName + 'room' + roomId + data.devices.length;
            } else if (deviceType == 'eu0v2xgprrhhg41g') {
                name += deviceName + 'room' + roomId + data.devices.length;
            } else if (deviceType == 'lsf78ly0eqrjbz91') {
                name += deviceName + 'room' + roomId + data.devices.length;
            } else if (deviceType == 'li6cbv5sdlatti0j') {
                name += deviceName + 'room' + roomId + data.devices.length;
            } else if (deviceType == 'rnizejqr2di0okho') {
                name += deviceName + 'room' + roomId + data.devices.length;
            }
            var newdevice = new api.model.device(null, deviceType, name, "{}");
            api.device.add(newdevice)
                .then((data) => {
                    newdevice.id = data.device.id;
                    api.roomDevice.add(newdevice.id, roomId)
                        .then((data) => {
                            location.href = 'room.html'; // vuelvo al cuarto en el que estoy
                        })
                        .catch((error) => {
                            console.log('error');
                        });
                })
                .catch((error) => {
                    console.log('error');
                });
        })
        .catch((error) => {
            console.log('error');
        });
}

function trigger(deviceId, action) {
    api.device.action(deviceId, action)
        .then((data) => {
            console.log(data);
            location.reload();
        })
        .catch((error) => {
            console.log('error');
        });
}

function deleteDeviceFromRoom(deviceId) {
    api.roomDevice.delete(deviceId);
    api.device.delete(deviceId);
    location.reload();
}

function addRoutine() {
    var newRoutine;

    var routineName = document.getElementById("name-header13-2f").value;

    var actions = getActions(document.getElementById("myActions"));

    newRoutine = new api.model.routine(null, routineName, actions ,'{}');
    api.routine.add(newRoutine)
        .then((data) =>{
            newRoutine.id = data.routine.id;
            location.href= 'routines.html';
        })
        .catch((error) => {
            window.alert("ERROR: adding new routine");
        });
}
