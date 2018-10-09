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

function setRoutineName(){
    var aux = document.getElementById('name-header13-2f').value.toString();
    console.log(aux);
    if(aux == "" || aux.length == 0 || aux == null){
        window.alert("Please enter a routine name.");
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
    localStorage.setItem('currentRoutineName', aux );
    location.href = 'addsaveddevice.html';
}

function goToLoadedDevice(deviceId, deviceType){
    localStorage.setItem('currentLoadedDeviceId', deviceId);
    localStorage.setItem('currentLoadedDeviceType', deviceType);
    location.href = 'chooseaction.html';
}

function addDeviceToRoutine(deviceType, deviceId) {
    console.log("routineConstructor before concating");
    console.log(localStorage.getItem('routineConstructor'));
    var aux = getAndConcatCurrentAction(deviceType, deviceId);
    console.log("routineConstructor after concating");
    console.log(localStorage.getItem('routineConstructor'));
    localStorage.setItem('maite', "maite");
    console.log(localStorage.getItem('maite'));
    location.href = 'addsaveddevice.html'
}

function getAndConcatCurrentAction(deviceType, devId){
    var currAction;
    if (deviceType == "go46xmbqeomjrsjr"){ //lamp

    }
    else if(deviceType == "im77xxyulpegfmv8"){ //oven
        currAction = getOvenState(devId);
    }
    else if(deviceType == 'eu0v2xgprrhhg41g'){//blinds

    }
    else if(deviceType == 'lsf78ly0eqrjbz91'){//door

    }
    else if(deviceType == 'li6cbv5sdlatti0j'){//ac

    }
    else if(deviceType == 'rnizejqr2di0okho'){//fridge

    }

    if(currAction == null){
        location.reload();
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
     console.log("routineConstructor en el medio");
     console.log(localStorage.getItem('routineConstructor'));

return combined;
}






function endRoutine(deviceType, devId) {
     var combined = getAndConcatCurrentAction(deviceType, devId);
     var routineName = localStorage.getItem('currentRoutineName');
     var routineToAdd = new api.model.routine(null, routineName, combined, "{}");
     console.log("ROUTINE ACTIONS FINAL");
     console.log(combined);
     console.log("routineTOAdd");
     console.log(routineToAdd);
     console.log("routineName");
     console.log(routineName);


     //ojo que no se por que la primera vez q se agrega una routine, la variable routineName hace q se genere un error. si pones un string constante funciona bien para la primer routine. ver q onda
     api.routine.add(routineToAdd)
         .then((data) =>{
             //location.href= 'routines.html';
         })
         .catch((error) => {
             window.alert("ERROR: adding new routine");
         });
}




function getOvenState(devId){
    var actions =[];
    var ovenOnOff = document.getElementById("oven123").value;
    var temperature = document.getElementById("tempOven").value;

    if(ovenOnOff == "off"){
        actions.push(new api.model.action(devId,"turnOff",[], "nada"));
    }
    else{
         actions.push(new api.model.action(devId,"turnOn",[],"nada"));
    }


    if(!$.isNumeric(temperature) && ovenOnOff != 'off'){
        window.alert("Please insert a number in the temperature field");
        return null;
    }
    else if(temperature >= 90 && temperature <= 230){
        actions.push(new api.model.action(devId,"setTemperature",[temperature],"nada"));
    }
    else{
        if(ovenOnOff != "off"){
            window.alert("Please insert a valid temperature between 90 and 230 degrees");
            return null;
        }
    }
return actions;
}


function routineTrigger(genericDeviceId, deviceId, action){
    var aux;
    if(genericDeviceId == 'im77xxyulpegfmv8'){
        if(action == 'turnOn'){
            localStorage.setItem('ovenOnOffStatus', 'turnOn');
            aux = document.getElementById("tempOven").value;
            localStorage.setItem('ovenTemp', aux);
            location.reload();
        }
        else if(action == 'turnOff'){
            localStorage.setItem('ovenOnOffStatus', 'turnOff');
            location.reload();
        }
    }

}
