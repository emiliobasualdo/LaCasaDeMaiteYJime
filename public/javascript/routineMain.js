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
        var routineActions = data.routine.actions;
         // console.log("Todas las actions de la routine:");
         // console.log(routineActions);
        var map = new Map();


        var aux = [];
        for(var i=0; i<routineActions.length; i++){
            var deviceId = routineActions[i].deviceId;
            var action = routineActions[i];
            if(map.has(deviceId)){
                aux = map.get(deviceId);
                aux.push(action);
                map.set(deviceId, aux);

            }
            else{
                var aux2 = [];
                aux2.push(action);
                map.set(deviceId, aux2);

            }
        }


        var deviceType;
        var device;
        var deviceName;
        // console.log("Routine Name:");
        // console.log(routineName);
        // console.log("Routine Devices and Actions");
        for (let [deviceId, v] of map) {
            //console.log(deviceId,v);
            api.device.get(deviceId).then((data) => {
                device = data.device;
                deviceType = device.typeId;
                deviceName = device.name;
                deviceName = deviceName.substr(0, deviceName.indexOf('_'));

                if (deviceType == "go46xmbqeomjrsjr") {
                    showLights(deviceId, deviceName, v);
                }
                if (deviceType == "im77xxyulpegfmv8") {
                    showOven(deviceId, deviceName, v);
                }
                if (deviceType == 'eu0v2xgprrhhg41g') {
                    showBlinds(deviceId, deviceName, v);
                }
                if (deviceType == 'lsf78ly0eqrjbz91') {
                    showDoor(deviceId, deviceName, v);
                }
                if (deviceType == 'li6cbv5sdlatti0j') {
                    showAC(deviceId, deviceName, v);
                }
                if (deviceType == 'rnizejqr2di0okho') {
                    showFridge(deviceId, deviceName, v);
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
