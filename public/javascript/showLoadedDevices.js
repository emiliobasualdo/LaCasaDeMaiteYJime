function showOven(devID) {
    var contenido = $('#myDevice');
    var onOffStatus;
    onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7"  id="'+ devID +'onR" onclick="showSelection(\'oven\',\'' + devID + '\',\'turnOn\')">ON</a>\
                                <a class= "btn btn-md btn-black display-7" id="'+ devID +'offR" onclick="showSelection(\'oven\',\'' + devID+ '\',\'turnOff\')">OFF</a>\
                            </div>\
                            <param value="off" id="ovenOnOff"/>';


    contenido.append(
        '<section class="header3 cid-r5JWcBA5eR" id="header3-5d">\
            <div class="container">\
                <div class="media-container-row">\
                    <div class="mbr-figure" style="width: 35%;">\
                        <img src="assets/images/mbr-1200x704.jpg" alt="Mobirise" title="">\
                    </div>\
                    <div class="media-content">\
                        <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
                            <p>\OVEN</p></h1>\
                        <div class="mbr-section-text mbr-white pb-3 ">\
                        </div>\
                        <h7>TEMPERATURE(ºC):  </h7><input type="text" id="tempOvenR">' + onOffStatus + '\
                   </div>\
                </div>\
            </div>\
        </section>\
        <section class="mbr-section content8 cid-r5RRFtzuPy" id="content8-67">' +
        '    <div class="container">' +
        '        <div class="media-container-row title">' +
        '            <div class="col-12 col-md-8">' +
        '                <div class="mbr-section-btn align-center"><a class="btn btn-black-outline display-4" onclick="addDeviceToRoutine(\'oven\',\'' + devID + '\')"><span class="mbri-plus mbr-iconfont mbr-iconfont-btn"></span>ADD MORE DEVICES</a>' +
        '                    <a class="btn btn-black display-4" onclick="endRoutine(\'oven\',\'' + devID + '\')"><span class="mbri-success mbr-iconfont mbr-iconfont-btn"></span>END ROUTINE</a></div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</section>');

}

function showDoor(devID) {
    var contenido = $('#myDevice');
    var lockedUnlockedStatus;

    lockedUnlockedStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7"  id="'+ devID +'lockR" onclick="showSelection(\'door\',\'' + devID + '\',\'lock\')">LOCK</a>\
                        <a class= "btn btn-md btn-black display-7" id="'+ devID +'unlockR" onclick="showSelection(\'door\',\'' + devID+ '\',\'unlock\')">UNLOCK</a>\
                    </div>\
                    <param value="unlock" id="doorLockUnlock"/>';

    contenido.append(
        '<section class="header3 cid-r5K0VsSp7w" id="header3-5i">\
            <div class="container">\
                <div class="media-container-row">\
                    <div class="mbr-figure" style="width: 35%;">\
                        <img src="assets/images/mbr-1-1200x803.jpg" alt="Mobirise" title="">\
                    </div>\
                    <div class="media-content">\
                        <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
                        <p>\DOOR</p></h1>\
                        <div class="mbr-section-text mbr-white pb-3 ">\
                        </div>' + lockedUnlockedStatus + '\
                    </div>\
                </div>\
            </div>\
        </section>\
        <section class="mbr-section content8 cid-r5RRFtzuPy" id="content8-67">' +
        '    <div class="container">' +
        '        <div class="media-container-row title">' +
        '            <div class="col-12 col-md-8">' +
        '                <div class="mbr-section-btn align-center"><a class="btn btn-black-outline display-4" onclick="addDeviceToRoutine(\'door\',\'' + devID + '\')"><span class="mbri-plus mbr-iconfont mbr-iconfont-btn"></span>ADD MORE DEVICES</a>' +
        '                    <a class="btn btn-black display-4" onclick="endRoutine(\'door\',\'' + devID + '\')"><span class="mbri-success mbr-iconfont mbr-iconfont-btn"></span>END ROUTINE</a></div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</section>');

}


function showAC(devID) {
    var contenido = $('#myDevice');
    var onOffStatus;
    onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7"  id="'+ devID +'onR" onclick="showSelection(\'ac\',\'' + devID + '\',\'turnOn\')">ON</a>\
                                <a class= "btn btn-md btn-black display-7" id="'+ devID +'offR" onclick="showSelection(\'ac\',\'' + devID+ '\',\'turnOff\')">OFF</a>\
                            </div>\
                            <param value="off" id="acOnOff"/>';

    contenido.append(
        '<section class="header3 cid-r5JWcBA5eR" id="header3-5d">\
            <div class="container">\
                <div class="media-container-row">\
                    <div class="mbr-figure" style="width: 35%;">\
                        <img src="assets/images/mbr-1-720x480.jpg" alt="Mobirise" title="">\
                    </div>\
                    <div class="media-content">\
                        <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
                            <p>\AIR CONDITIONER</p>\
                        </h1>\
                        <div class="mbr-section-text mbr-white pb-3 ">\
                        </div>\
                        <h7>TEMPERATURE(ºC):  </h7><input type="text" id="tempACR">' + onOffStatus + '\
                   </div>\
                </div>\
            </div>\
        </section>\
        <section class="mbr-section content8 cid-r5RRFtzuPy" id="content8-67">' +
        '    <div class="container">' +
        '        <div class="media-container-row title">' +
        '            <div class="col-12 col-md-8">' +
        '                <div class="mbr-section-btn align-center"><a class="btn btn-black-outline display-4" onclick="addDeviceToRoutine(\'ac\',\'' + devID + '\')"><span class="mbri-plus mbr-iconfont mbr-iconfont-btn"></span>ADD MORE DEVICES</a>' +
        '                    <a class="btn btn-black display-4" onclick="endRoutine(\'ac\',\'' + devID + '\')"><span class="mbri-success mbr-iconfont mbr-iconfont-btn"></span>END ROUTINE</a></div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</section>');
}


function showFridge(devID) {
    var contenido = $('#myDevice');

    contenido.append(
        '<section class="header3 cid-r5JWcBA5eR" id="header3-5d">\
            <div class="container">\
                <div class="media-container-row">\
                    <div class="mbr-figure" style="width: 35%;">\
                        <img src="assets/images/mbr-1200x690.jpg" alt="Mobirise" title="">\
                    </div>\
                    <div class="media-content">\
                        <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
                            <p>\FRIDGE</p>\
                        </h1>\
                        <div class="mbr-section-text mbr-white pb-3 ">\
                        </div>\
                        <h7>TEMPERATURE(ºC):  </h7><input type="text" id="tempFridgeR">\
                   </div>\
                </div>\
            </div>\
        </section>\
        <section class="mbr-section content8 cid-r5RRFtzuPy" id="content8-67">' +
        '    <div class="container">' +
        '        <div class="media-container-row title">' +
        '            <div class="col-12 col-md-8">' +
        '                <div class="mbr-section-btn align-center"><a class="btn btn-black-outline display-4" onclick="addDeviceToRoutine(\'fridge\',\'' + devID + '\')"><span class="mbri-plus mbr-iconfont mbr-iconfont-btn"></span>ADD MORE DEVICES</a>' +
        '                    <a class="btn btn-black display-4" onclick="endRoutine(\'fridge\',\'' + devID + '\')"><span class="mbri-success mbr-iconfont mbr-iconfont-btn"></span>END ROUTINE</a></div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</section>');

}


function showBlinds(devID) {
    var contenido = $('#myDevice');
    var upDownStatus;
    upDownStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7"  id="'+ devID +'upR" onclick="showSelection(\'blinds\',\'' + devID + '\',\'up\')">OPEN</a>\
                                <a class= "btn btn-md btn-black display-7" id="'+ devID +'downR" onclick="showSelection(\'blinds\',\'' + devID+ '\',\'down\')">CLOSE</a>\
                            </div>\
                            <param value="down" id="blindsUpDown"/>';


    contenido.append(
        '<section class="header3 cid-r5JWcBA5eR" id="header3-5d">\
            <div class="container">\
                <div class="media-container-row">\
                    <div class="mbr-figure" style="width: 35%;">\
                        <img src="assets/images/mbr-14-1200x800.jpg" alt="Mobirise" title="">\
                    </div>\
                    <div class="media-content">\
                        <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
                            <p>\BLINDS</p></h1>\
                        <div class="mbr-section-text mbr-white pb-3 ">\
                        </div>' + upDownStatus + '\
                   </div>\
                </div>\
            </div>\
        </section>\
        <section class="mbr-section content8 cid-r5RRFtzuPy" id="content8-67">' +
        '    <div class="container">' +
        '        <div class="media-container-row title">' +
        '            <div class="col-12 col-md-8">' +
        '                <div class="mbr-section-btn align-center"><a class="btn btn-black-outline display-4" onclick="addDeviceToRoutine(\'blinds\',\'' + devID + '\')"><span class="mbri-plus mbr-iconfont mbr-iconfont-btn"></span>ADD MORE DEVICES</a>' +
        '                    <a class="btn btn-black display-4" onclick="endRoutine(\'blinds\',\'' + devID + '\')"><span class="mbri-success mbr-iconfont mbr-iconfont-btn"></span>END ROUTINE</a></div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</section>');

}


function showLights(devID) {
    var contenido = $('#myDevice');
    var onOffStatus;
    onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7"  id="'+ devID +'onR" onclick="showSelection(\'lights\',\'' + devID + '\',\'turnOn\')">ON</a>\
                                <a class= "btn btn-md btn-black display-7" id="'+ devID +'offR" onclick="showSelection(\'lights\',\'' + devID+ '\',\'turnOff\')">OFF</a>\
                            </div>\
                            <param value="off" id="lightsOnOff"/>';


    contenido.append(
        '<section class="header3 cid-r5JWcBA5eR" id="header3-5d">\
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
                            <h7>BRIGHTNESS:  </h7> <input type="range" min="1" max="100" value="0" class="slider" id="brightnessR">\
                        </div>' + onOffStatus + '\
                   </div>\
                </div>\
            </div>\
        </section>\
        <section class="mbr-section content8 cid-r5RRFtzuPy" id="content8-67">' +
        '    <div class="container">' +
        '        <div class="media-container-row title">' +
        '            <div class="col-12 col-md-8">' +
        '                <div class="mbr-section-btn align-center"><a class="btn btn-black-outline display-4" onclick="addDeviceToRoutine(\'lights\',\'' + devID + '\')"><span class="mbri-plus mbr-iconfont mbr-iconfont-btn"></span>ADD MORE DEVICES</a>' +
        '                    <a class="btn btn-black display-4" onclick="endRoutine(\'lights\',\'' + devID + '\')"><span class="mbri-success mbr-iconfont mbr-iconfont-btn"></span>END ROUTINE</a></div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</section>');
}
