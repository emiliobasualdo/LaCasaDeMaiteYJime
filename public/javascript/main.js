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

function addRoomWithDevices() {
    var newRoom;
    var roomName = document.getElementById("name-header13-1x").value;
    newRoom = new api.model.room(null, roomName, '{}');
    api.room.add(newRoom)
        .then((data) => {
            newRoom.id = data.room.id;
            localStorage.setItem('currentRoomId', newRoom.id);
            location.href = 'addDeviceToRoomWithDevices.html';
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

function addDeviceToRoomWithDevices(deviceType, deviceName) {
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
                            location.href = 'addroomWithDevices.html'; // vuelvo al cuarto en el que estoy
                        })
                        .catch((error) => {
                            console.log('errorAdd');
                        });
                })
                .catch((error) => {
                    console.log('errorAdd');
                });
        })
        .catch((error) => {
            console.log('errorAdd');
        });
}

function trigger(deviceId, action, deviceType) {
    var params = getParams(deviceId, deviceType, action);
    console.log("Action:", "deviceId: "+deviceId, "action: "+action,"deviceType: "+deviceType, "params: "+params);
    api.device.action(deviceId, action, params)
        .then((data) => {
            console.log(data);
            if (data.result) {
                updateStates(deviceId, deviceType);
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function getParams(deviceId, deviceType, action){
    console.log("getParams:", "deviceId: "+deviceId, "action: "+action,"deviceType: "+deviceType);
    if (action.includes("turn")) // ninguna que haga turnOn o turnOff va a tener un parametro por ahora
        return {};

    var num;
    switch (deviceType) {
        case "oven":
        case "fridge":
        case "ac":
            console.log("getParams: Caso oven/ac/fridge");
            num = document.getElementById(deviceId+"temp").value;
            return JSON.stringify([num]);
        case "lights":
            console.log("getParams: Caso ligths");
            num = document.getElementById(deviceId+"slider").value;
            return JSON.stringify([num]);
        case "door":
        case "blinds":
            return {};
        }
}

function updateStates(deviceId, deviceType){
    console.log("updateStates");
    api.device.action(deviceId,'getState',null)
        .then((data) => {
            console.log("data:",data);
            switch (deviceType) {
                case "oven":
                case "ac":
                    console.log("Caso oven/ac");
                    // prendimo o apagamos -> hacemos un switch
                    if(data.result.status == 'off'){
                        switchButtons(deviceId+"on",deviceId+"off", "off");
                    }else{
                        switchButtons(deviceId+"on",deviceId+"off", "on");
                    } // sin break para que aplique el cambio de temperatura
                case "fridge":
                    changeText(deviceId+"temp", data.result.temperature);
                    break;
                case "door":
                    console.log("Caso door");
                    if(data.result.lock == "locked"){
                        switchButtons(deviceId+"lock",deviceId+"unlock", "lock");
                    }else{
                        switchButtons(deviceId+"lock",deviceId+"unlock", "unlock");
                    }
                    break;
                case "blinds":
                    console.log("Caso blinds");
                    if(data.result.status == "closed" || data.result.status == "closing"){
                        switchButtons(deviceId+"open",deviceId+"close", "closed");
                    }else{
                        switchButtons(deviceId+"open",deviceId+"close", "opened");
                    }
                    break;
                case "lights":
                    console.log("Caso lights");
                    if(data.result.status == 'off'){
                        switchButtons(deviceId+"on",deviceId+"off", "off");
                    }else{
                        switchButtons(deviceId+"on",deviceId+"off", "on");
                    }
                    document.getElementById(deviceId+"slider").value = data.result.brightness;
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function changeText(textID, newText)
{
    //console.log(textID, newText);
    //console.log(document.getElementById(textID));
    //console.log("old value", document.getElementById(textID)["value"]);
    document.getElementById(textID)["value"] = newText;
}
function switchButtons(buttonOn, buttonOff, onOff) {
    console.log(buttonOn, buttonOff, onOff);
    if (onOff == "on" || onOff == "lock" || onOff == "opened")
    {
        console.log("case on");
        document.getElementById(buttonOn).classList.add("btn-black");
        document.getElementById(buttonOn).classList.remove("btn-black-outline");
        document.getElementById(buttonOff).classList.add("btn-black-outline");
        document.getElementById(buttonOff).classList.remove("btn-black");
    }else
    {
        console.log("case off");
        document.getElementById(buttonOff).classList.add("btn-black");
        document.getElementById(buttonOff).classList.remove("btn-black-outline");
        document.getElementById(buttonOn).classList.add("btn-black-outline");
        document.getElementById(buttonOn).classList.remove("btn-black");
    }

}

function deleteDeviceFromRoom(deviceId) {
    api.roomDevice.delete(deviceId);
    api.device.delete(deviceId);
    location.href = 'room.html';
    //location.reload();
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

function goToLoadedDevice(deviceId, deviceType){
    localStorage.setItem('currentLoadedDeviceId', deviceId);
    localStorage.setItem('currentLoadedDeviceType', deviceType);
    location.href = 'chooseaction.html';
}

function addDeviceToRoutine(deviceId) {
    console.log("adding device to routine");
    console.log(deviceId);
    location.href = 'addsaveddevice.html'
}

function endRoutine(deviceId) {
    console.log("adding device to routine and ending");
    console.log(deviceId);
    location.href='routines.html';
}
