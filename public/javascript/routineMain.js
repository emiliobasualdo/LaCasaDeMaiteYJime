window.addEventListener('load', function () {

    var routineId = localStorage.getItem('currentRoutineId');
    var routineName;
    var header = $('#header1-3p');
    header.html("");
    api.routine.get(routineId)
        .then((data) => {
            routineName = JSON.stringify(data.routine.name, null, 2);
            routineName = routineName.substring(1, routineName.length-1);
            header.append('\
                <div class="container">\
                    <div class="row justify-content-md-center">\
                        <div class="mbr-white col-md-10">\
                            <h1 class="mbr-section-title align-center mbr-bold pb-3 mbr-fonts-style display-1">' + routineName + '</h1>\
                        </div>\
                    </div>\
                </div>');
        })
        .catch((error) => {
            window.alert(error);
        });
    /*api.routine.get(routineId)
        .then((data) => {
            var actions = data.routine.actions;
            var device, deviceActions, numDevices = 0;
            var devices = [];
            for (var i=0; i<actions.length; i++){

                device = api.device.get(actions[i].deviceId);
                devices += device;

                deviceActions = localStorage.getItem('' + device.id);
                if (deviceActions == undefined){
                    numDevices++;
                    deviceActions="";
                }
                deviceActions += "" + actions[i].actionName + " ";
                if (actions[i].params != []){
                    for (var k=0; k<actions[i].params.length; k++){
                        deviceActions += "" + actions[i].params[k] + " ";
                    }
                }
                localStorage.setItem('' + device.id + device.typeId, deviceActions);
            }
            for (var j=0; j<numDevices; j++){
                var deviceAux = devices[j];
                var deviceActionsAux = localStorage.getItem('' + deviceAux.id);
                console.log(deviceAux.name);
                console.log(deviceActionsAux);
                if (deviceAux.typeId == "go46xmbqeomjrsjr") {
                    var brightness, onOffStatus;

                    //showLights(deviceAux.id, deviceAux.name);
                }
                if (deviceAux.typeId == "im77xxyulpegfmv8") {
                    //showOven(deviceAux.id, deviceAux.name);
                }
                if (deviceAux.typeId == 'eu0v2xgprrhhg41g') {
                    //showBlinds(deviceAux.id, deviceAux.name);
                }
                if (deviceAux.typeId == 'lsf78ly0eqrjbz91') {
                    //showDoor(deviceAux.id, deviceAux.name);
                }
                if (deviceAux.typeId == 'li6cbv5sdlatti0j') {
                    //showAC(deviceAux.id, deviceAux.name);
                }
                if (deviceAux.typeId == 'rnizejqr2di0okho') {
                    //showFridge(deviceAux.id, deviceAux.name);
                }
            }
        })
        .catch((error) => {
            window.alert(error);
        });*/
}, false);
