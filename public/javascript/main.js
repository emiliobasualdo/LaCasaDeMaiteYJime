function addRoom() {
    var newRoom;
    var roomName = document.getElementById("name-header13-1x").value;
    console.log(roomName.length);
    if (!roomName) {
        swal({
            title: "Error",
            text: "Enter a room name first",
            type: "error",
            closeOnConfirm: true
        });
        return;
    } else if (roomName.length <= 2) {
        swal({
            title: "Error",
            text: "Room name must have at least 3 charaters long",
            type: "error",
            closeOnConfirm: true
        });
        return;
    }
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
    if (!roomName) {
        swal({
            title: "Error",
            text: "Enter a room name first",
            type: "error",
            closeOnConfirm: true
        });
        return;
    } else if (roomName.length <= 2) {
        swal({
            title: "Error",
            text: "Room name must have at least 3 charaters long",
            type: "error",
            closeOnConfirm: true
        });
        return;
    }
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

function addDeviceToRoom2(deviceId) {
    var roomId = localStorage.getItem('currentRoomId');
    api.device.get(deviceId)
        .then((data) => {
            console.log(data);
            var m = JSON.parse(data.device.meta);
            m.room = roomId;
            data.device.meta = JSON.stringify(m);
            api.device.modify(data.device)
                .then((data) => {
                    api.roomDevice.add(deviceId, roomId)
                        .then((data) => {
                            location.href = 'room.html'; // vuelvo al cuarto en el que estoy//'addroomWithDevices.html'
                        })
                        .catch((error) => {
                            console.log('error');
                        });
                })
                .catch((error) => {
                    console.log('error in modify');
                });
        })
        .catch((error) => {
            console.log('error in retiving device');
        });
}

function addDeviceToRoomWithDevices2(deviceId) {
    var roomId = localStorage.getItem('currentRoomId');
    api.device.get(deviceId)
        .then((data) => {
            console.log(data);
            var m = JSON.parse(data.device.meta);
            m.room = roomId;
            data.device.meta = JSON.stringify(m);
            api.device.modify(data.device)
                .then((data) => {
                    api.roomDevice.add(deviceId, roomId)
                        .then((data) => {
                            location.href = 'addroomWithDevices.html'
                        })
                        .catch((error) => {
                            console.log('error');
                        });
                })
                .catch((error) => {
                    console.log('error in modify');
                });
        })
        .catch((error) => {
            console.log('error in retiving device');
        });
}

function addDevice(deviceType) {
    var name = "";
    var userName = document.getElementById("name-header13-69").value;// prompt("Please enter a name", "Device Name");
    var Exp = /^[A-Za-z0-9- ]+$/;
    if (!userName || userName == "Device Name") {
        swal({
            title: "Error",
            text: "Enter a device name first",
            type: "error",
            closeOnConfirm: true
        });
        return;
    } if (!userName.match(Exp)) {
        swal({
            title: "Error",
            text: "Device name must be alphanumeric",
            type: "error",
            closeOnConfirm: true
        });
        return;
    }
    console.log('user device name: ' + userName);
    api.device.getAllDevicesByType(deviceType)
        .then((data) => {
            if ( deviceType == 'go46xmbqeomjrsjr') {
                name += userName + '_' + data.devices.length;
            } else if (deviceType == 'im77xxyulpegfmv8') {
                name += userName + '_' + data.devices.length;
            } else if (deviceType == 'eu0v2xgprrhhg41g') {
                name += userName  + '_' + data.devices.length;
            } else if (deviceType == 'lsf78ly0eqrjbz91') {
                name += userName  + '_' + data.devices.length;
            } else if (deviceType == 'li6cbv5sdlatti0j') {
                name += userName  + '_' + data.devices.length;
            } else if (deviceType == 'rnizejqr2di0okho') {
                name += userName  + '_' + data.devices.length;
            }
            var m = {
                fav: null,
                room: null
            };
            var newdevice = new api.model.device(null, deviceType, name, JSON.stringify(m));
            api.device.add(newdevice)
                .then((data) => {
                    newdevice.id = data.device.id;
                    location.href = 'devices.html'; // vuelvo al cuarto en el que estoy
                })
                .catch((error) => {
                    console.log('error');
                });
        })
        .catch((error) => {
            console.log('error');
        });
}

function addDeviceToRoom(deviceType, deviceName) {
    var roomId = localStorage.getItem('currentRoomId');
    var name = "";
    var userName = document.getElementById("name-header13-69").value; //prompt("Please enter a name", "Device Name");
    var Exp = /^[A-Za-z0-9- ]+$/;
    if (!userName || userName == "Device Name") {
        swal({
            title: "Error",
            text: "Enter a device name first",
            type: "error",
            closeOnConfirm: true
        });
        return;
    } if (!userName.match(Exp)) {
        swal({
            title: "Error",
            text: "Device name must be alphanumeric",
            type: "error",
            closeOnConfirm: true
        });
        return;
    }
    console.log(userName);
    api.roomDevice.get(roomId)
        .then((data) => {
            if ( deviceType == 'go46xmbqeomjrsjr') {
                name += userName + '_' + roomId + data.devices.length;
            } else if (deviceType == 'im77xxyulpegfmv8') {
                name += userName + '_' + roomId + data.devices.length;
            } else if (deviceType == 'eu0v2xgprrhhg41g') {
                name += userName  + '_' + roomId + data.devices.length;
            } else if (deviceType == 'lsf78ly0eqrjbz91') {
                name += userName  + '_' + roomId + data.devices.length;
            } else if (deviceType == 'li6cbv5sdlatti0j') {
                name += userName  + '_' + roomId + data.devices.length;
            } else if (deviceType == 'rnizejqr2di0okho') {
                name += userName  + '_' + roomId + data.devices.length;
            }
            var m = {
                fav: null,
                room: roomId
            };
            var newdevice = new api.model.device(null, deviceType, name,  JSON.stringify(m));
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
    var userName = document.getElementById("name-header13-69").value; //prompt("Please enter a name", "Device Name");
    var Exp = /^[A-Za-z0-9- ]+$/;
    if (!userName || userName == "Device Name") {
        swal({
            title: "Error",
            text: "Enter a device name first",
            type: "error",
            closeOnConfirm: true
        });
        return;
    } if (!userName.match(Exp)) {
        swal({
            title: "Error",
            text: "Device name must be alphanumeric",
            type: "error",
            closeOnConfirm: true
        });
        return;
    }
    console.log(userName);
    api.roomDevice.get(roomId)
        .then((data) => {
            if ( deviceType == 'go46xmbqeomjrsjr') {
                name += userName + '_' + roomId + data.devices.length;
            } else if (deviceType == 'im77xxyulpegfmv8') {
                name += userName + '_' + roomId + data.devices.length;
            } else if (deviceType == 'eu0v2xgprrhhg41g') {
                name += userName + '_' + roomId + data.devices.length;
            } else if (deviceType == 'lsf78ly0eqrjbz91') {
                name += userName + '_' + roomId + data.devices.length;
            } else if (deviceType == 'li6cbv5sdlatti0j') {
                name += userName + '_' + roomId + data.devices.length;
            } else if (deviceType == 'rnizejqr2di0okho') {
                name += userName + '_' + roomId + data.devices.length;
            }
            var m = {
                fav: null,
                room: roomId
            };
            var newdevice = new api.model.device(null, deviceType, name, JSON.stringify(m));
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
                        visible(deviceId+"cont",false);
                        visible(deviceId+"off",false);
                        visible(deviceId+"on",true);
                    }else{
                        visible(deviceId+"cont",true);
                        visible(deviceId+"off",true);
                        visible(deviceId+"on",false);
                        switchButtons(deviceId+"on",deviceId+"off", "on");
                    } // sin break para que aplique el cambio de temperatura
                case "fridge":
                    changeText(deviceId+"cont", data.result.temperature);
                    break;
                case "door":
                    console.log("Caso door");
                    if(data.result.status == "closed"){
                        if(data.result.lock  == "locked"){
                            visible(deviceId+"lock", false);
                            visible(deviceId+"unlock", true);
                            visible(deviceId+"open", false);
                            visible(deviceId+"close", false);
                        }else{
                            visible(deviceId+"lock", true);
                            visible(deviceId+"unlock", false);
                            visible(deviceId+"open", true);
                            visible(deviceId+"close", false);
                        }
                    } else {
                        if(data.result.lock == "locked"){ // no deberia pasar pero que se yo
                            visible(deviceId+"lock", false);
                            visible(deviceId+"unlock", true); // solo le doy la opcion de desbloqeuar
                            visible(deviceId+"open", false);
                            visible(deviceId+"close", false);
                        } else{
                            visible(deviceId+"lock", false);
                            visible(deviceId+"unlock", false); // solo le doy la opcion de desbloqeuar
                            visible(deviceId+"open", false);
                            visible(deviceId+"close", true);
                        }
                    }
                    break;
                case "blinds":
                    console.log("Caso blinds");
                    if(data.result.status == "closed" || data.result.status == "closing"){
                        switchButtons(deviceId+"open",deviceId+"close", "closed");
                        visible(deviceId+"close",false);
                        visible(deviceId+"open",true);
                    }else{
                        switchButtons(deviceId+"open",deviceId+"close", "opened");
                        visible(deviceId+"open",false);
                        visible(deviceId+"close",true);
                    }
                    break;
                case "lights":
                    console.log("Caso lights");
                    if(data.result.status == 'off'){
                        switchButtons(deviceId+"on",deviceId+"off", "off");
                        visible(deviceId+"off",false);
                        visible(deviceId+"on",true);
                        visible(deviceId+"cont",false);
                    }else{
                        switchButtons(deviceId+"on",deviceId+"off", "on");
                        visible(deviceId+"off",true);
                        visible(deviceId+"on",false);
                        visible(deviceId+"cont",true);
                    }
                    document.getElementById(deviceId+"slider").value = data.result.brightness;
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

function visible(deviceId, visible){
    if(visible){
        document.getElementById(deviceId).style.display = "inline-block";
    }else{
        document.getElementById(deviceId).style.display = "none";
    }
}

function changeText(textID, newText)
{
    document.getElementById(textID)["value"] = newText;
}

function switchButtons(buttonOn, buttonOff, onOff) {
    if (onOff == "on" || onOff == "lock" || onOff == "opened" || onOff == "up") {
        document.getElementById(buttonOn).classList.add("btn-black");
        document.getElementById(buttonOn).classList.remove("btn-black-outline");
        document.getElementById(buttonOff).classList.add("btn-black-outline");
        document.getElementById(buttonOff).classList.remove("btn-black");
    }else {
        document.getElementById(buttonOff).classList.add("btn-black");
        document.getElementById(buttonOff).classList.remove("btn-black-outline");
        document.getElementById(buttonOn).classList.add("btn-black-outline");
        document.getElementById(buttonOn).classList.remove("btn-black");
    }

}

function deleteDeviceFromRoom(deviceId) {
    api.roomDevice.delete(deviceId);
    api.device.delete(deviceId);
    var id = deviceId + 'delete1';
    document.getElementById(id).remove();
    id = deviceId + 'delete2';
    document.getElementById(id).remove();
    //location.href = 'room.html';
    //location.reload();
}

function addTofavourites(deviceId) {
    api.device.get(deviceId)
        .then((data) => {
            console.log(data);
            var m = JSON.parse(data.device.meta);
            m.fav = 'fav';
            data.device.meta = JSON.stringify(m);
            api.device.modify(data.device)
                .then((data) => {
                    console.log(data);
                    var id = deviceId + 'fav';
                    // var span = document.createElement('span', {class: 'mbri-star mbr-iconfont mbr-iconfont-btn'});
                    // document.getElementById(id).appendChild(span);
                    document.getElementById(id).innerText = 'DELETE FROM FAVOURITES';
                    document.getElementById(id).setAttribute( "onClick", "deleteFavourite(\'"+deviceId+"\')");
                    //location.reload();
                })
                .catch((error) => {
                    console.log('error in modify');
                });
        })
        .catch((error) => {
            console.log('error in retiving device');
        });
}

function deleteFavourite(deviceId) {
    api.device.get(deviceId)
        .then((data) => {
            console.log(data);
            var m = JSON.parse(data.device.meta);
            m.fav = null;
            data.device.meta = JSON.stringify(m);
            api.device.modify(data.device)
                .then((data) => {
                    console.log(data);
                    var id = deviceId + 'fav';
                    var contenido = document.getElementById(id);
                    // var span = document.createElement('span', {class: 'mbri-star mbr-iconfont mbr-iconfont-btn'});
                    // document.getElementById(id).appendChild(span);
                    document.getElementById(id).innerText = 'ADD TO FAVOURITES';
                    document.getElementById(id).setAttribute( "onClick", "addTofavourites(\'"+deviceId+"\')");
                    //location.reload();
                })
                .catch((error) => {
                    console.log('error in modify');
                });
        })
        .catch((error) => {
            console.log('error in retiving device');
        });
}

function deleteFavourite1(deviceId) {
    api.device.get(deviceId)
        .then((data) => {
            console.log(data);
            var m = JSON.parse(data.device.meta);
            m.fav = null;
            data.device.meta = JSON.stringify(m);
            api.device.modify(data.device)
                .then((data) => {
                    console.log(data);
                    var id = deviceId + 'delete1';
                    document.getElementById(id).remove();
                    id = deviceId + 'delete2';
                    document.getElementById(id).remove();
                    //location.reload();
                })
                .catch((error) => {
                    console.log('error in modify');
                });
        })
        .catch((error) => {
            console.log('error in retiving device');
        });
}

function setRoutineName(){
    var aux = document.getElementById('name-header13-2f').value.toString();
    console.log(aux);
    if(aux == "" || aux.length == 0 || aux == null ){
        window.alert("Please enter a routine name.");
        return null;
    }
    var letters = /^[A-Za-z]+$/;
    if($.isNumeric(aux) || !aux.match("^[a-zA-Z]+$")){
        window.alert("Routine names can only contain letters");
        return null;
    }

    //var rName;
    //despues cambiar esto. guardar variables en local storage asi no hace tantos fetchs a la db
    // api.routine.getAll()
    //     .then((data) => {
    //         for(var i = 0; i < data.routines.length; i++) {
    //             rName = JSON.stringify(data.routines[i].name).toString();
    //             //console.log(rName);
    //             //console.log(aux);
    //             //AGREGAR ESTO Y SOLUCIONARLO
    //             // if(rName == aux){
    //             //     console.log("entor");
    //             //     window.alert("Already existing routine name. Please enter anotherone.");
    //             //     return null;
    //             // }
    //         }
    //     })
    //     .catch((error) => {
    //         console.log('error');
    //     });
    localStorage.setItem('currentRoutineName', aux);
    location.href = 'addsaveddevice.html';
}

function goToLoadedDevice(deviceId, deviceType){
    localStorage.setItem('currentLoadedDeviceId', deviceId);
    localStorage.setItem('currentLoadedDeviceType', deviceType);
    location.href = 'chooseaction.html';
}

function addDeviceToRoutine(deviceType, deviceId) {
    // console.log("routineConstructor before concating");
    // console.log(localStorage.getItem('routineConstructor'));
    var aux = getAndConcatCurrentAction(deviceType, deviceId);
    var devices = localStorage.getItem('addedDevicesRoutine');
    devices += "" + deviceId;
    localStorage.setItem('addedDevicesRoutine', devices);
    // console.log("routineConstructor after concating");
    // console.log(localStorage.getItem('routineConstructor'));
    if(aux != null) {
        location.href = 'addsaveddevice.html'
    }
}

function getAndConcatCurrentAction(deviceType, devId){
    var currAction;
    if (deviceType == 'lights'){ //lights
        currAction = getLightsState(devId);
    }
    else if(deviceType == 'oven'){ //oven
        currAction = getOvenState(devId);
    }
    else if(deviceType == 'blinds'){//blinds
        currAction = getBlindsState(devId);
    }
    else if(deviceType == 'door'){//door
        currAction = getDoorState(devId);
    }
    else if(deviceType == 'ac'){//ac
        currAction = getACState(devId);
    }
    else if(deviceType == 'fridge'){//fridge
        currAction = getFridgeState(devId);
    }
    //si el estado de la current action que está buscando tiene algún parámetro incorrecto, no puede seguir
    if(currAction == null){
        return null;
    }
    var combined;
    var routineConstructorAux = localStorage.getItem('routineConstructor');
    if(routineConstructorAux == "" || routineConstructorAux.length == 0 || routineConstructorAux  == null){
        combined = currAction;
    }
    else{
        combined = currAction.concat(JSON.parse(localStorage.getItem('routineConstructor')));
    }

    localStorage.setItem('routineConstructor', JSON.stringify(combined));
    return combined;
}

function endRoutine(deviceType, devId) {
    var combined = getAndConcatCurrentAction(deviceType, devId);
    if(combined == null){ //significa que no hay ninguna action que agregar y la api no lo deja
        return null;
    }
    console.log(combined);
    var routineName = localStorage.getItem('currentRoutineName');
    var routineToAdd = new api.model.routine(null, routineName, combined, "{}");
    //ojo que no se por que la primera vez q se agrega una routine, la variable routineName hace q se genere un error. si pones un string constante funciona bien para la primer routine. ver q onda
    api.routine.add(routineToAdd)
        .then((data) =>{
            //location.href= 'routines.html';
        })
        .catch((error) => {
            window.alert("Error en creacion de rutina");
        });
}

function getOvenState(devId){
    var actions =[];
    var ovenOnOff = document.getElementById("ovenOnOff").value;
    var temperature = document.getElementById("tempOven").value;

    if(ovenOnOff == "off"){
        actions.push(new api.model.action(devId,"turnOff",[], "nada"));
    } else {
        actions.push(new api.model.action(devId,"turnOn",[],"nada"));
        if(!$.isNumeric(temperature)){
            window.alert("Please insert a number in the temperature field");
            return null;
        } else if(temperature >= 90 && temperature <= 230){
            actions.push(new api.model.action(devId,"setTemperature",[temperature],"nada"));
        } else{
            window.alert("Please insert a valid temperature between 90 and 230 degrees");
            return null;
        }
    }

    return actions;
}

//agregar open y closed en tooooodo el programa todo
function getDoorState(devId){
    var actions = [];
    var doorLockUnlock = document.getElementById("doorLockUnlock").value;

    if(doorLockUnlock == "lock"){
        actions.push(new api.model.action(devId,"lock",[], "nada"));
    } else{
        actions.push(new api.model.action(devId,"unlock",[], "nada"));
    }

    return actions;
}

function getLightsState(devId) {
    var actions = [];
    var lightsOnOff = document.getElementById("lightsOnOff").value;
    var brightness = document.getElementById("brightness").value;

    if (lightsOnOff == "off"){
        actions.push(new api.model.action(devId, "turnOff", [], "nada"));
    } else {
        actions.push(new api.model.action(devId, "turnOn", [], "nada"));
        actions.push(new api.model.action(devId, "setBrightness", [brightness], "nada"));
    }

    return actions;
}

function getBlindsState(devId) {

    var actions = [];
    var blindsUpDown = document.getElementById("blindsUpDown").value;

    if(blindsUpDown == "down"){
        actions.push(new api.model.action(devId, "down", [], "nada"));
    } else {
        actions.push(new api.model.action(devId, "up", [], "nada"));
    }

    return actions;
}

function getACState(devId) {

    var actions = [];
    var acOnOff = document.getElementById("acOnOff").value;
    var tempAC = document.getElementById("tempAC").value;

    if(acOnOff == "off"){
        actions.push(new api.model.action(devId, "off", [], "nada"));
    } else {
        actions.push(new api.model.action(devId, "on", [], "nada"));
        if(!$.isNumeric(tempAC)){
            window.alert("Please insert a number in the temperature field");
            return null;
        } else if (tempAC >= 16 && tempAC <= 30){
            actions.push(new api.model.action(devId,"setTemperature", [tempAC], "nada"));
        } else{
            window.alert("Please insert a valid temperature between 16 and 30 degrees");
            return null;
        }
    }
    return actions;
}

function getFridgeState(devId) {

    var actions = [];
    var tempFridge = document.getElementById("tempFridge").value;

    if(!$.isNumeric(tempFridge)){
        window.alert("Please insert a number in the temperature field");
        return null;
    } else if(tempFridge >= 0 && tempFridge <= 9){
        actions.push(new api.model.action(devId,"setTemperature",[tempFridge],"nada"));
    } else {
        window.alert("Please insert a valid temperature between 0 and 9 degrees");
        return null;
    }

    return actions;
}

function showSelection(deviceType, deviceId, action){
    var elem;
    switch (deviceType) {
        case "oven":
            if(action == 'turnOff'){
                switchButtons(deviceId+"on",deviceId+"off", "off");
                elem = document.getElementById("ovenOnOff");
                elem.value = "off";
            }else if(action == 'turnOn'){
                switchButtons(deviceId+"on",deviceId+"off", "on");
                elem = document.getElementById("ovenOnOff");
                elem.value = "on";
            }
            else if(action == 'setTemperature'){
                //POR SI PONEMOS EL BOTON SET
            }
            break;
        case "ac":
            if(action == 'turnOff'){
                switchButtons(deviceId+"on",deviceId+"off", "off");
                elem = document.getElementById("acOnOff");
                elem.value = "off";
            }else if(action == 'turnOn'){
                switchButtons(deviceId+"on",deviceId+"off", "on");
                elem = document.getElementById("acOnOff");
                elem.value = "on";
            }
            break;
        case "fridge":
            //aca puede ir el set.
            break;
        case "door":
            if(action == "lock"){
                switchButtons(deviceId+"lock",deviceId+"unlock", "lock");
                elem = document.getElementById("doorLockUnlock");
                elem.value = "lock";
            }else{
                switchButtons(deviceId+"lock",deviceId+"unlock", "unlock");
                elem = document.getElementById("doorLockUnlock");
                elem.value = "unlock";
            }
            break;
        case "blinds":
            if(action == "down"){
                switchButtons(deviceId+"up",deviceId+"down", "down");
                elem = document.getElementById("blindsUpDown");
                elem.value = "down";
            }else{
                switchButtons(deviceId+"up",deviceId+"down", "up");
                elem = document.getElementById("blindsUpDown");
                elem.value = "up";
            }

            break;
        case "lights":
            if(action == 'turnOff'){
                switchButtons(deviceId+"on",deviceId+"off", "off");
                elem = document.getElementById("lightsOnOff")
                elem.value = "off";
            }else{
                switchButtons(deviceId+"on",deviceId+"off", "on");
                elem = document.getElementById("lightsOnOff")
                elem.value = "on";
            }
    }

}

function initAddedDevicesToRoutine() {
    localStorage.setItem('addedDevicesRoutine', "");
    location.href='addroutine.html';
}

function goToRoutine(routineId) {
    localStorage.setItem('currentRoutineId', routineId);
    location.href = 'routine.html';
}

function executeRoutine(routineId) {
    api.routine.execute(routineId);
}

function deleteRoutine() {
    var routineId = localStorage.getItem('currentRoutineId');
    api.routine.delete(routineId)
        .then((data) =>{
            location.href = 'routines.html';
        })
        .catch((error) => {
            window.alert(error);
        })
}
