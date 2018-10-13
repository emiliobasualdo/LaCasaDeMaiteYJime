window.addEventListener('load', function () {
    var contenido = $('#mySavedDevices');
    api.device.getAllDevices()
        .then((data) => {
            var j = 0;
            for (var i=0; i<data.devices.length; i++) {
                if (i == j) {
                    contenido.append('<div class="container">\n' +
                        '        <div class="media-container-row">');
                }
                var deviceType = JSON.stringify(data.devices[i].typeId, null, 2);
                deviceType = deviceType.substring(1, deviceType.length-1);
                var deviceId = JSON.stringify(data.devices[i].id, null, 2);
                deviceId = deviceId.substring(1, deviceId.length-1);
                var devicesAlreadyAddedToRoutine = localStorage.getItem('addedDevicesRoutine');
                var deviceAdded = false;
                var currDeviceId = "";
                var currDeviceIdIndex = 0;
                while (!deviceAdded && currDeviceIdIndex*16 + 16 <= devicesAlreadyAddedToRoutine.length){
                    currDeviceId = devicesAlreadyAddedToRoutine.substring(currDeviceIdIndex*16, currDeviceIdIndex*16 + 16);
                    if (deviceId == currDeviceId){
                        deviceAdded = true;
                    }
                    currDeviceIdIndex++;
                }

                var deviceName = data.devices[i].name;
                deviceName = deviceName.substr(0, deviceName.indexOf('_'));
                if (deviceType == "go46xmbqeomjrsjr" && !deviceAdded) {             // lights
                    contenido.append('<section class="features13 cid-r5yZWJv2j2" id="features13-2c">\
                           <div class="container">\
                        <div class="media-container-row container">\
                        <div class="card col-12 col-md-6 p-5 m-3 align-center col-lg-4">\
                                        <div class="card-img">\
                                            <img onclick="goToLoadedDevice(\'' + deviceId + '\',\'' + deviceType + '\')" src="assets/images/mbr-5-1200x675.jpg" alt="Mobirise" title="">\
                                        </div>\
                                        <h4 onclick="goToLoadedDevice(\'' + deviceId + '\',\'' + deviceType + '\')" class="card-title py-2 mbr-fonts-style display-5">' + deviceName + '</h4>\
                                    </div> </div> </div> </section>');
                } else if (deviceType == "im77xxyulpegfmv8" && !deviceAdded) {      // oven
                    contenido.append('<section class="features13 cid-r5yZWJv2j2" id="features13-2c">' +
                        '                           <div class="container">' +
                        '                        <div class="media-container-row container">' +
                        '<div class="card col-12 col-md-6 p-5 m-3 align-center col-lg-4">' +
                        '                <div class="card-img">' +
                        '                    <img onclick="goToLoadedDevice(\'' + deviceId + '\',\'' + deviceType + '\')" src="assets/images/mbr-1200x704.jpg" alt="Mobirise" title="">' +
                        '                </div>' +
                        '                <h4 onclick="goToLoadedDevice(\'' + deviceId + '\',\'' + deviceType + '\')" class="card-title py-2 mbr-fonts-style display-5">' + deviceName+ '</h4>' +
                        '            </div>' +
                        '</div>\
                </div>\
                </section>');
                } else if (deviceType == 'eu0v2xgprrhhg41g' && !deviceAdded) {      // blinds
                    contenido.append('<section class="features13 cid-r5yZWJv2j2" id="features13-2c">\
                           <div class="container">\
                        <div class="media-container-row container">' +
                        '<div class="card col-12 col-md-6 p-5 m-3 align-center col-lg-4">' +
                        '                <div class="card-img">' +
                        '                    <img onclick="goToLoadedDevice(\'' + deviceId + '\',\'' + deviceType + '\')" src="assets/images/mbr-14-1200x800.jpg" alt="Mobirise" title="">' +
                        '                </div>' +
                        '                <h4 onclick="goToLoadedDevice(\'' + deviceId + '\',\'' + deviceType + '\')" class="card-title py-2 mbr-fonts-style display-5">' + deviceName + '</h4>' +
                        '            </div>' +
                        '</div>\
                </div>\
                </section>\
                    ');
                } else if (deviceType == 'lsf78ly0eqrjbz91' && !deviceAdded) {      // door
                    contenido.append('<section class="features13 cid-r5yZWJv2j2" id="features13-2c">\
                           <div class="container">\
                        <div class="media-container-row container">' +
                        '<div class="card col-12 col-md-6 p-5 m-3 align-center col-lg-4">' +
                        '                <div class="card-img">' +
                        '                    <img onclick="goToLoadedDevice(\'' + deviceId + '\',\'' + deviceType + '\')" src="assets/images/mbr-1-1200x803.jpg" alt="Mobirise" title="">' +
                        '                </div>' +
                        '                <h4 onclick="goToLoadedDevice(\'' + deviceId + '\',\'' + deviceType + '\')" class="card-title py-2 mbr-fonts-style display-5">' + deviceName + '</h4>' +
                        '            </div>' +
                        '</div>\
                               </div>\
                                </section>');
                } else if (deviceType == 'li6cbv5sdlatti0j' && !deviceAdded) {      // ac
                    contenido.append('<section class="features13 cid-r5yZWJv2j2" id="features13-2c">\
                           <div class="container">\
                        <div class="media-container-row container">' +
                        '<div class="card col-12 col-md-6 p-5 m-3 align-center col-lg-4">' +
                        '                <div class="card-img">' +
                        '                    <img onclick="goToLoadedDevice(\'' + deviceId + '\',\'' + deviceType + '\')" src="assets/images/mbr-1-720x480.jpg" alt="Mobirise" title="">' +
                        '                </div>' +
                        '                <h4 onclick="goToLoadedDevice(\'' + deviceId + '\',\'' + deviceType + '\')" class="card-title py-2 mbr-fonts-style display-5">' + deviceName + '</h4>' +
                        '            </div>' +
                        '</div>\
                </div>\
                </section>\
    ');
                } else if (deviceType == 'rnizejqr2di0okho' && !deviceAdded) {      // fridge
                    contenido.append('<section class="features13 cid-r5yZWJv2j2" id="features13-2c">\
                           <div class="container">\
                        <div class="media-container-row container">' +
                        '<div class="card col-12 col-md-6 p-5 m-3 align-center col-lg-4">' +
                        '                <div class="card-img">' +
                        '                    <img onclick="goToLoadedDevice(\'' + deviceId + '\',\'' + deviceType + '\')" src="assets/images/mbr-1200x690.jpg" alt="Mobirise" title="">' +
                        '                </div>' +
                        '                <h4 onclick="goToLoadedDevice(\'' + deviceId + '\',\'' + deviceType + '\')" class="card-title py-2 mbr-fonts-style display-5">' + deviceName + '</h4>' +
                        '            </div>' +
                       ' </div>\
                </div>\
                </section>\
    ');
                }
                if (i == j){
                    contenido.append('</div>\
                    </div>');
                    j+=3;
                }
            }
        })
        .catch((error) => {
            window.alert(error);
        });
}, false);
