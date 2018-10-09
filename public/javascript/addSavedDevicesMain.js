window.addEventListener('load', function () {
    localStorage.setItem('ovenOnOffStatus', 'turnOff');
    localStorage.setItem('ovenTemperature', '0');
    var contenido = $('#mySavedDevices');
    contenido.html("");
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
                if (deviceType == "go46xmbqeomjrsjr") {             // lights
                    // contenido.append('<div class="card col-12 col-md-6 p-5 m-3 align-center col-lg-4">' +
                    //     '                <div class="card-img">' +
                    //     '                    <img onclick="goToLoadedDevice(\'' + deviceId + '\',\'' + deviceType + '\')" src="assets/images/mbr-5-1200x675.jpg" alt="Mobirise" title="">' +
                    //     '                </div>' +
                    //     '                <h4 onclick="goToLoadedDevice(\'' + deviceId + '\',\'' + deviceType + '\')" class="card-title py-2 mbr-fonts-style display-5">' + deviceId + '</h4>' +
                    //     '            </div>');
                } else if (deviceType == "im77xxyulpegfmv8") {      // oven
                    contenido.append('<div class="card col-12 col-md-6 p-5 m-3 align-center col-lg-4">' +
                        '                <div class="card-img">' +
                        '                    <img onclick="goToLoadedDevice(\'' + deviceId + '\',\'' + deviceType + '\')" src="assets/images/mbr-1200x704.jpg" alt="Mobirise" title="">' +
                        '                </div>' +
                        '                <h4 onclick="goToLoadedDevice(\'' + deviceId + '\',\'' + deviceType + '\')" class="card-title py-2 mbr-fonts-style display-5">' + deviceId + '</h4>' +
                        '            </div>');
                } else if (deviceType == 'eu0v2xgprrhhg41g') {      // blinds
                    // contenido.append('<div class="card col-12 col-md-6 p-5 m-3 align-center col-lg-4">' +
                    //     '                <div class="card-img">' +
                    //     '                    <img onclick="goToLoadedDevice(\'' + deviceId + '\',\'' + deviceType + '\')" src="assets/images/mbr-14-1200x800.jpg" alt="Mobirise" title="">' +
                    //     '                </div>' +
                    //     '                <h4 onclick="goToLoadedDevice(\'' + deviceId + '\',\'' + deviceType + '\')" class="card-title py-2 mbr-fonts-style display-5">' + deviceId + '</h4>' +
                    //     '            </div>');
                } else if (deviceType == 'lsf78ly0eqrjbz91') {      // door
                    // contenido.append('<div class="card col-12 col-md-6 p-5 m-3 align-center col-lg-4">' +
                    //     '                <div class="card-img">' +
                    //     '                    <img onclick="goToLoadedDevice(\'' + deviceId + '\',\'' + deviceType + '\')" src="assets/images/mbr-1-1200x803.jpg" alt="Mobirise" title="">' +
                    //     '                </div>' +
                    //     '                <h4 onclick="goToLoadedDevice(\'' + deviceId + '\',\'' + deviceType + '\')" class="card-title py-2 mbr-fonts-style display-5">' + deviceId + '</h4>' +
                    //     '            </div>');
                } else if (deviceType == 'li6cbv5sdlatti0j') {      // ac
                    // contenido.append('<div class="card col-12 col-md-6 p-5 m-3 align-center col-lg-4">' +
                    //     '                <div class="card-img">' +
                    //     '                    <img onclick="goToLoadedDevice(\'' + deviceId + '\',\'' + deviceType + '\')" src="assets/images/mbr-1-720x480.jpg" alt="Mobirise" title="">' +
                    //     '                </div>' +
                    //     '                <h4 onclick="goToLoadedDevice(\'' + deviceId + '\',\'' + deviceType + '\')" class="card-title py-2 mbr-fonts-style display-5">' + deviceId + '</h4>' +
                    //     '            </div>');
                } else if (deviceType == 'rnizejqr2di0okho') {      // fridge
                    // contenido.append('<div class="card col-12 col-md-6 p-5 m-3 align-center col-lg-4">' +
                    //     '                <div class="card-img">' +
                    //     '                    <img onclick="goToLoadedDevice(\'' + deviceId + '\',\'' + deviceType + '\')" src="assets/images/mbr-1200x690.jpg" alt="Mobirise" title="">' +
                    //     '                </div>' +
                    //     '                <h4 onclick="goToLoadedDevice(\'' + deviceId + '\',\'' + deviceType + '\')" class="card-title py-2 mbr-fonts-style display-5">' + deviceId + '</h4>' +
                    //     '            </div>');
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
