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
    api.routine.get(routineId)
        .then((data) => {
            var actions = data.routine.actions;
            var devicesAndActions = [[]];
            var devices = [];
            var deviceAdded;
            var device, action;
            var numDevices = 0;
            for (var i=0; i<actions.length; i++){

                device = api.device.get(actions[i].deviceId);
                action = JSON.stringify(actions[i], null, 2);
                deviceAdded = false;

                for (var j=0; j<numDevices; j++){
                    if (devices[j].id == device.id){
                        deviceAdded = true;
                        devicesAndActions[j].push(action);
                    }
                }
                if (!deviceAdded){
                    devices.push(device);
                    devicesAndActions.push([]);
                    devicesAndActions[numDevices++].push(action);
                }
            }
            for (j=0; j<numDevices; j++){

                device = devices[j];
                actions = devicesAndActions[j];

                if (device.typeId == "go46xmbqeomjrsjr") {
                    //showLights(device.id, device.name, actions);
                }
                if (device.typeId == "im77xxyulpegfmv8") {
                    //showOven(device.id, device.name, actions);
                }
                if (device.typeId == 'eu0v2xgprrhhg41g') {
                    //showBlinds(device.id, device.name, actions);
                }
                if (device.typeId == 'lsf78ly0eqrjbz91') {
                    //showDoor(device.id, device.name, actions);
                }
                if (device.typeId == 'li6cbv5sdlatti0j') {
                    //showAC(device.id, device.name, actions);
                }
                if (device.typeId == 'rnizejqr2di0okho') {
                    //showFridge(device.id, device.name, actions);
                }
            }
        })
        .catch((error) => {
            window.alert(error);
        });
}, false);
