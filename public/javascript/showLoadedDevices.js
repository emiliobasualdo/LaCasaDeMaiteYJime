function showOven(ovenID) {
    var contenido = $('#myDevice');
            var onOffStatus;
            var temperature = "0";

            if (localStorage.getItem('ovenOnOffStatus') == "turnOff") {
                console.log("entro off");
                onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7"  onclick="routineTrigger(\'im77xxyulpegfmv8\',\'' + ovenID + '\',\'turnOn\')">ON</a>\
                                <a class= "btn btn-md btn-black display-7" onclick="routineTrigger(\'im77xxyulpegfmv8\',\'' + ovenID + '\',\'turnOff\')">OFF</a>\
                            </div>\
                            <param value="off" id="oven123"/>';

            } else {
                console.log("entro on");
                onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7"  onclick="routineTrigger(\'im77xxyulpegfmv8\',\'' + ovenID + '\',\'turnOn\')">ON</a>\
                                <a class="btn btn-md btn-black-outline display-7" onclick="routineTrigger(\'im77xxyulpegfmv8\',\'' + ovenID + '\',\'turnOff\')">OFF</a></div>\
                            </div>\
                            <param value="on" id="oven123"/>';
            }

            contenido.append('<section class="header3 cid-r5JWcBA5eR" id="header3-5d">\
                <div class="container">\
                    <div class="media-container-row">\
                        <div class="mbr-figure" style="width: 35%;">\
                            <img src="assets/images/mbr-1200x704.jpg" alt="Mobirise" title="">\
                        </div>\
                <div class="media-content">\
                    <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
                        <p>\
                        '+ovenID+'\
                    </p>\
                    </h1>\
                <div class="mbr-section-text mbr-white pb-3 ">\
                </div>\
                <h7>TEMPERATURE(ºC):  </h7><input type="text" id="tempOven">' + onOffStatus + '\
                </div>\
                </div>\
                </section>\
                <section class="mbr-section content8 cid-r5RRFtzuPy" id="content8-67">' +
                '    <div class="container">' +
                '        <div class="media-container-row title">' +
                '            <div class="col-12 col-md-8">' +
                '                <div class="mbr-section-btn align-center"><a class="btn btn-black-outline display-4" onclick="addDeviceToRoutine(\'im77xxyulpegfmv8\',\'' + ovenID + '\')"><span class="mbri-plus mbr-iconfont mbr-iconfont-btn"></span>ADD MORE DEVICES</a>' +
                '                    <a class="btn btn-black display-4" onclick="endRoutine(\'im77xxyulpegfmv8\',\'' + ovenID + '\')"><span class="mbri-success mbr-iconfont mbr-iconfont-btn"></span>END ROUTINE</a></div>' +
                '            </div>' +
                '        </div>' +
                '    </div>' +
                '</section>');

}

function showDoor(doorID) {
    var contenido = $('#myDevice');
    api.device.action(doorID, 'getState')
        .then((data) => {
            var status = JSON.stringify(data.result.status, null, 2);
            status = status.substring(1, status.length-1);
            var openClosedStatus;

            if(status == "closed"){
                openClosedStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7" onclick="trigger(\'' + doorID + '\',\'open\')">UNLOCK</a>\
                                <a class= "btn btn-md btn-black display-7" onclick="trigger(\'' + doorID + '\',\'close\')">LOCK</a>\
                            </div>';
            } else {
                openClosedStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" onclick="trigger(\'' + doorID + '\',\'open\')">UNLOCK</a>\
                                <a class="btn btn-md btn-black-outline display-7"onclick="trigger(\'' + doorID + '\',\'close\')">LOCK</a></div>\
                            </div>';
            }

            contenido.append('<section class="header3 cid-r5K0VsSp7w" id="header3-5i">\
            <div class="container">\
                <div class="media-container-row">\
                    <div class="mbr-figure" style="width: 35%;">\
                        <img src="assets/images/mbr-1-1200x803.jpg" alt="Mobirise" title="">\
                    </div>\
                    <div class="media-content">\
                        <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
                        <p>\DOOR</p></h1>\
                        <div class="mbr-section-text mbr-white pb-3 ">\
                        </div>' + openClosedStatus + '\
                    </div>\
                </div>\
            </div>\
        </section>' +
'        <section class="mbr-section content8 cid-r5RRFtzuPy" id="content8-67">' +
'                <div class="container">' +
'                    <div class="media-container-row title">' +
'                        <div class="col-12 col-md-8">' +
'                            <div class="mbr-section-btn align-center"><a class="btn btn-black-outline display-4" onclick="addDeviceToRoutine(\'' + doorID + '\')"><span class="mbri-plus mbr-iconfont mbr-iconfont-btn"></span>ADD MORE DEVICES</a>' +
'                                <a class="btn btn-black display-4" onclick="endRoutine(\'' + doorID + '\')"><span class="mbri-success mbr-iconfont mbr-iconfont-btn"></span>END ROUTINE</a></div>' +
'                        </div>' +
'                    </div>' +
'                </div>' +
'            </section>');
        })
        .catch((error) => {
            console.log('error');
        });
}


function showAC(acID) {
    var contenido = $('#myDevice');
    api.device.action(acID,'getState').then((data) => {
        var temperature = JSON.stringify(data.result.temperature,null, 2);
        var status = JSON.stringify(data.result.status,null,2);
        status = status.substring(1,status.length-1);
        var onOffStatus;
        if(status == "off"){
            onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7" onclick="trigger(\'' + acID + '\',\'turnOn\')">ON</a>\
                                <a class= "btn btn-md btn-black display-7" onclick="trigger(\'' + acID + '\',\'turnOff\')">OFF</a>\
                            </div>';
        } else {
            onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" onclick="trigger(\'' + acID + '\',\'turnOn\')">ON</a>\
                                <a class="btn btn-md btn-black-outline display-7" onclick="trigger(\'' + acID + '\',\'turnOff\')">OFF</a></div>\
                            </div>';
        }

        contenido.append('<section class="header3 cid-r5JWdFEF1r" id="header3-5f">\
            <div class="container">\
                <div class="media-container-row">\
                    <div class="mbr-figure" style="width: 35%;">\
                        <img src="assets/images/mbr-1-720x480.jpg" alt="Mobirise" title="">\
                    </div>\
                    <div class="media-content">\
                        <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
                        <p>\AIR CONDITIONER</p></h1>\
                        <div class="mbr-section-text mbr-white pb-3 ">\
                        </div>\
                        <h7>TEMPERATURE(ºC):  </h7><input type="text" value="' + temperature + '" id="tempAir">' + onOffStatus + '\
                    </div>\
                </div>\
            </div>\
        </section>' +
            '        <section class="mbr-section content8 cid-r5RRFtzuPy" id="content8-67">' +
            '                <div class="container">' +
            '                    <div class="media-container-row title">' +
            '                       <div class="col-12 col-md-8">' +
            '                            <div class="mbr-section-btn align-center"><a class="btn btn-black-outline display-4" onclick="addDeviceToRoutine(\'' + acID + '\')"><span class="mbri-plus mbr-iconfont mbr-iconfont-btn"></span>ADD MORE DEVICES</a>' +
            '                                <a class="btn btn-black display-4" onclick="endRoutine(\'' + acID + '\')"><span class="mbri-success mbr-iconfont mbr-iconfont-btn"></span>END ROUTINE</a></div>' +
            '                        </div>' +
            '                    </div>' +
            '                </div>' +
            '            </section>');
    }).catch((error) => {
        console.log('error');
    });
}


function showFridge(fridgeID) {
    var contenido = $('#myDevice');
    api.device.action(fridgeID,'getState').then((data) => {
        var temperature = JSON.stringify(data.result.temperature,null, 2);


        contenido.append('<section class="header3 cid-r5JWd5XdmE" id="header3-5e">\
            <div class="container">\
                <div class="media-container-row">\
                    <div class="mbr-figure" style="width: 35%;">\
                        <img src="assets/images/mbr-1200x690.jpg" alt="Mobirise" title="">\
                    </div>\
                    <div class="media-content">\
                        <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
                        <p>\FRIDGE</p></h1>\
                        <div class="mbr-section-text mbr-white pb-3 ">\
                        </div>\
                        <h7>TEMPERATURE(ºC):  </h7><input type="text" value="' + temperature + '" id="tempFridge">\
                    </div>\
                </div>\
            </div>\
        </section>' +
            '        <section class="mbr-section content8 cid-r5RRFtzuPy" id="content8-67">' +
            '                <div class="container">' +
            '                    <div class="media-container-row title">' +
            '                        <div class="col-12 col-md-8">' +
            '                            <div class="mbr-section-btn align-center"><a class="btn btn-black-outline display-4" onclick="addDeviceToRoutine(\'' + fridgeID + '\')"><span class="mbri-plus mbr-iconfont mbr-iconfont-btn"></span>ADD MORE DEVICES</a>' +
            '                                <a class="btn btn-black display-4" onclick="endRoutine(\'' + fridgeID + '\')"><span class="mbri-success mbr-iconfont mbr-iconfont-btn"></span>END ROUTINE</a></div>' +
            '                        </div>' +
            '                    </div>' +
            '                </div>' +
            '            </section>');
    }).catch((error) => {
        console.log('error');
    });
}


function showBlinds(blindsID) {
    var contenido = $('#myDevice');
    api.device.action(blindsID,'getState').then((data) => {

        var status = JSON.stringify(data.result.status,null,2);
        status = status.substring(1,status.length-1);

        var openClosedStatus;

        if(status == "closed"){
            openClosedStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7" onclick="trigger(\'' + blindsID + '\',\'up\')">OPEN</a>\
                                <a class= "btn btn-md btn-black display-7" onclick="trigger(\'' + blindsID + '\',\'down\')">CLOSE</a>\
                            </div>';
        } else {
            openClosedStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" onclick="trigger(\'' + blindsID + '\',\'up\')">OPEN</a>\
                                <a class="btn btn-md btn-black-outline display-7"onclick="trigger(\'' + blindsID + '\',\'down\')">CLOSE</a></div>\
                            </div>';
        }


        contenido.append('<section class="header3 cid-r5K0Vz6aVk" id="header3-5j">\
            <div class="container">\
                <div class="media-container-row">\
                    <div class="mbr-figure" style="width: 35%;">\
                        <img src="assets/images/mbr-14-1200x800.jpg" alt="Mobirise" title="">\
                    </div>\
                    <div class="media-content">\
                        <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
                        <p>\BLINDS</p></h1>\
                        <div class="mbr-section-text mbr-white pb-3 ">\
                        </div>' + openClosedStatus + '\
                    </div>\
                </div>\
            </div>\
        </section>' +
            '        <section class="mbr-section content8 cid-r5RRFtzuPy" id="content8-67">' +
            '                <div class="container">' +
            '                    <div class="media-container-row title">' +
            '                        <div class="col-12 col-md-8">' +
            '                            <div class="mbr-section-btn align-center"><a class="btn btn-black-outline display-4" onclick="addDeviceToRoutine(\'' + blindsID + '\')"><span class="mbri-plus mbr-iconfont mbr-iconfont-btn"></span>ADD MORE DEVICES</a>' +
            '                                <a class="btn btn-black display-4" onclick="endRoutine(\'' + blindsID + '\')"><span class="mbri-success mbr-iconfont mbr-iconfont-btn"></span>END ROUTINE</a></div>' +
            '                        </div>' +
            '                    </div>' +
            '                </div>' +
            '            </section>');
    })
        .catch((error) => {
            console.log('error');
        });
}


function showLights(lightsID) {
    var contenido = $('#myDevice');
    api.device.action(lightsID,'getState').then((data) => {

        var status = JSON.stringify(data.result.status,null,2);
        status = status.substring(1,status.length-1);
        var brightness = JSON.stringify(data.result.brightness,null, 2);

        /*        var onOffStatus;
                if(status == "off"){
                    brightness = 0;
                    onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7" onclick="trigger(\'' + lightsID + '\',\'turnOn\')">ON</a>\
                                        <a class= "btn btn-md btn-black display-7" onclick="trigger(\'' + lightsID + '\',\'turnOff\')">OFF</a>\
                                    </div>';
                } else {
                    onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black display-7" onclick="trigger(\'' + lightsID + '\',\'turnOn\')">ON</a>\
                                        <a class="btn btn-md btn-black-outline display-7" onclick="trigger(\'' + lightsID + '\',\'turnOff\')">OFF</a></div>\
                                    </div>';
                }*/


        contenido.append('<section class="header3 cid-r5JWc4Jvbq" id="header3-5c">\
            <div class="container">\
                <div class="media-container-row">\
                    <div class="mbr-figure" style="width: 35%;">\
                        <img src="assets/images/mbr-5-1200x675.jpg" alt="Mobirise" title="">\
                    </div>\
                    <div class="media-content">\
                        <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
                        <p>\LIGHTS</p></h1>\
                        <div class="mbr-section-text mbr-white pb-3 ">\
                        </div>\
                        <div class="slidecontainer">\
                            <h7>BRIGHTNESS:  </h7> <input type="range" min="1" max="100" value="' + brightness + '" class="slider" id="slideLights">\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </section>\
        <section class="mbr-section content8 cid-r5RRFtzuPy" id="content8-67">' +
            '    <div class="container">' +
            '        <div class="media-container-row title">' +
            '            <div class="col-12 col-md-8">' +
            '                <div class="mbr-section-btn align-center"><a class="btn btn-black-outline display-4" onclick="addDeviceToRoutine(\'' + lightsID + '\')"><span class="mbri-plus mbr-iconfont mbr-iconfont-btn"></span>ADD MORE DEVICES</a>' +
            '                    <a class="btn btn-black display-4" onclick="endRoutine(\'' + lightsID + '\')"><span class="mbri-success mbr-iconfont mbr-iconfont-btn"></span>END ROUTINE</a></div>' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '</section>');
    }).catch((error) => {
        window.alert(error);
    });
}
