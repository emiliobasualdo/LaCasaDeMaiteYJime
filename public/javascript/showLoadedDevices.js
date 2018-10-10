function showOven(devID) {
    var contenido = $('#myDevice');
            var onOffStatus;
            onOffStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7"  id="'+ devID +'on" onclick="showSelection(\'oven\',\'' + devID + '\',\'turnOn\')">ON</a>\
                                <a class= "btn btn-md btn-black display-7" id="'+ devID +'off" onclick="showSelection(\'oven\',\'' + devID+ '\',\'turnOff\')">OFF</a>\
                            </div>\
                            <param value="off" id="ovenOnOff"/>';


            contenido.append('<section class="header3 cid-r5JWcBA5eR" id="header3-5d">\
                <div class="container">\
                    <div class="media-container-row">\
                        <div class="mbr-figure" style="width: 35%;">\
                            <img src="assets/images/mbr-1200x704.jpg" alt="Mobirise" title="">\
                        </div>\
                <div class="media-content">\
                    <h1 class="mbr-section-title mbr-white pb-3 mbr-fonts-style display-5">\
                        <p>\
                        '+devID+'\
                    </p>\
                    </h1>\
                <div class="mbr-section-text mbr-white pb-3 ">\
                </div>\
               <h7>TEMPERATURE(ºC):  </h7><input type="text" id="tempOven">' + onOffStatus + '\
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

            lockedUnlockedStatus = '<div class="mbr-section-btn"><a class="btn btn-md btn-black-outline display-7"  id="'+ devID +'lock" onclick="showSelection(\'door\',\'' + devID + '\',\'lock\')">LOCK</a>\
                                <a class= "btn btn-md btn-black display-7" id="'+ devID +'unlock" onclick="showSelection(\'door\',\'' + devID+ '\',\'unlock\')">UNLOCK</a>\
                            </div>\
                            <param value="unlock" id="doorLockUnlock"/>';

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
                        </div>' + lockedUnlockedStatus + '\
                    </div>\
                </div>\
            </div>\
        </section>\
        <section class="mbr-section content8 cid-r5RRFtzuPy" id="content8-67">' +
        '    <div class="container">' +
        '        <div class="media-container-row title">' +
        '            <div class="col-12 col-md-8">' +
        '                <div class="mbr-section-btn align-center"><a class="btn btn-black-outline display-4" onclick="addDeviceToRoutine(\'im77xxyulpegfmv8\',\'' + devID + '\')"><span class="mbri-plus mbr-iconfont mbr-iconfont-btn"></span>ADD MORE DEVICES</a>' +
        '                    <a class="btn btn-black display-4" onclick="endRoutine(\'im77xxyulpegfmv8\',\'' + devID + '\')"><span class="mbri-success mbr-iconfont mbr-iconfont-btn"></span>END ROUTINE</a></div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</section>');

}


function showAC(devID) {
    var contenido = $('#myDevice');

}


function showFridge(devID) {
    var contenido = $('#myDevice');
}


function showBlinds(devID) {
    var contenido = $('#myDevice');

}


function showLights(devID) {
    var contenido = $('#myDevice');
}
