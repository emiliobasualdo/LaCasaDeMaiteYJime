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

                api.device.get(actions[i].deviceId)
                    .then((data) => {
                        if (i == actions.length) {
                            i=0;
                        }
                        device = data.device;
                        action = JSON.stringify(actions[i], null, 2);
                        deviceAdded = false;

                        for (var j=0; j<numDevices && !deviceAdded; j++){
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
                        i++;
                        if (i == actions.length){
                            for (var j=0; j<numDevices; j++){
                                var deviceType = JSON.stringify(devices[j].typeId, null, 2);
                                deviceType = deviceType.substring(1, deviceType.length-1);
                                var deviceId = JSON.stringify(devices[j].id, null, 2);
                                deviceId = deviceId.substring(1, deviceId.length-1);
                                var deviceName = devices[j].name;
                                deviceName = deviceName.substr(0, deviceName.indexOf('_'));
                                actions = devicesAndActions[j];

                                if (deviceType == "go46xmbqeomjrsjr") {
                                    showLights(deviceId, deviceName, actions);
                                }
                                if (deviceType == "im77xxyulpegfmv8") {
                                    showOven(deviceId, deviceName, actions);
                                }
                                if (deviceType == 'eu0v2xgprrhhg41g') {
                                    showBlinds(deviceId, deviceName, actions);
                                }
                                if (deviceType == 'lsf78ly0eqrjbz91') {
                                    showDoor(deviceId, deviceName, actions);
                                }
                                if (deviceType == 'li6cbv5sdlatti0j') {
                                    showAC(deviceId, deviceName, actions);
                                }
                                if (deviceType == 'rnizejqr2di0okho') {
                                    showFridge(deviceId, deviceName, actions);
                                }
                            }
                        }
                    })
                    .catch((error) =>{
                        window.alert(error);
                    });
            }
        })
        .catch((error) => {
            window.alert(error);
        });
}, false);
