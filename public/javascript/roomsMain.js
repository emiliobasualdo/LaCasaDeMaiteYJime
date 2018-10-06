window.addEventListener('load', function () {
    var contenido = $('#myRooms');
    contenido.html("");
    api.room.getAll()
            .then((data) => {
                for(var i = 0; i < data.rooms.length; ) {
                    var roomName1, roomName2, roomName3, roomId1, roomId2, roomId3;
                    if ((i+2) < data.rooms.length) {
                        roomName1 = JSON.stringify(data.rooms[i].name, null, 2);
                        roomName1 = roomName1.substring(1, roomName1.length-1);
                        roomId1 = JSON.stringify(data.rooms[i].id, null, 2);
                        roomId1 = roomId1.substring(1,roomId1.length-1);
                        i++;
                        roomName2 = JSON.stringify(data.rooms[i].name, null, 2);
                        roomName2 = roomName2.substring(1, roomName2.length-1);
                        roomId2 = JSON.stringify(data.rooms[i].id, null, 2);
                        roomId2 = roomId2.substring(1,roomId2.length-1);
                        i++;
                        roomName3 = JSON.stringify(data.rooms[i].name, null, 2);
                        roomName3 = roomName3.substring(1, roomName3.length-1);
                        roomId3 = JSON.stringify(data.rooms[i].id, null, 2);
                        roomId3 = roomId3.substring(1,roomId3.length-1);
                        i++;
                        contenido.append(
                            '<section class="features13 cid-r5JvK1DRP8" id="features13-4z">\
                                <div class="container">\
                                    <div class="media-container-row container">\
                                        <div class="card col-12 col-md-6 p-5 m-3 align-center col-lg-4">\
                                            <div class="card-img">\
                                                <a onclick="goToRoom(\'' + roomId1 + '\')"><img src="assets/images/mbr-1200x814.jpg" alt="Mobirise" title=""></a>\
                                            </div>\
                                            <h4 class="card-title py-2 mbr-fonts-style display-5">\
                                                <a onclick="goToRoom(\'' + roomId1 + '\')" class="text-black">' + roomName1 + '</a>\
                                            </h4>\
                                        </div>\
                                        <div class="card col-12 col-md-6 p-5 m-3 align-center col-lg-4">\
                                            <div class="card-img">\
                                                <a onclick="goToRoom(\'' + roomId2 + '\')"><img src="assets/images/mbr-1200x814.jpg" alt="Mobirise" title="">\
                                            </div>\
                                            <h4 class="card-title py-2 mbr-fonts-style display-5">\
                                                <a onclick="goToRoom(\'' + roomId2 + '\')" class="text-black">' + roomName2 + '</a>\
                                            </h4>\
                                        </div>\
                                        <div class="card col-12 col-md-6 p-5 m-3 align-center col-lg-4">\
                                            <div class="card-img">\
                                                <a onclick="goToRoom(\'' + roomId3 + '\')"><img src="assets/images/mbr-1200x814.jpg" alt="Mobirise" title="">\
                                            </div>\
                                            <h4 class="card-title py-2 mbr-fonts-style display-5">\
                                                <a onclick="goToRoom(\'' + roomId3 + '\')" class="text-black">' + roomName3 + '</a>\
                                            </h4>\
                                        </div>\
                                    </div>\
                                </div>\
                            </section>');
                    }
                    else if ((i+1) < data.rooms.length) {
                        roomName1 = JSON.stringify(data.rooms[i].name, null, 2);
                        roomName1 = roomName1.substring(1, roomName1.length-1);
                        roomId1 = JSON.stringify(data.rooms[i].id, null, 2);
                        roomId1 = roomId1.substring(1,roomId1.length-1);
                        i++;
                        roomName2 = JSON.stringify(data.rooms[i].name, null, 2);
                        roomName2 = roomName2.substring(1, roomName2.length-1);
                        roomId2 = JSON.stringify(data.rooms[i].id, null, 2);
                        roomId2 = roomId2.substring(1,roomId2.length-1);
                        i++;
                        contenido.append('<section class="features13 cid-r5zf8QJWvr" id="features13-2w"> <div class="container"><div class="media-container-row container"><div class="card col-12 col-md-6 p-5 m-3 align-center"><div class="card-img"><a onclick="goToRoom(\'' + roomId1 + '\')"><img src="assets/images/mbr-1200x814.jpg" alt="Mobirise" title=""></a></div> <h4 class="card-title py-2 mbr-fonts-style display-5"><a onclick="goToRoom(\'' + roomId1 + '\')" class="text-black">' + roomName1 + '</a></h4></div> <div class="card col-12 col-md-6 p-5 m-3 align-center"><div class="card-img"><a onclick="goToRoom(\'' + roomId2 + '\')"><img src="assets/images/mbr-1200x814.jpg" alt="Mobirise" title=""></div><h4 class="card-title py-2 mbr-fonts-style display-5"><a onclick="goToRoom(\'' + roomId2 + '\')" class="text-black">' + roomName2 + '</a></h4></div></div></div></section>');
                    }
                    else {
                        roomName1 = JSON.stringify(data.rooms[i].name, null, 2);
                        roomName1 = roomName1.substring(1, roomName1.length-1);
                        roomId1 = JSON.stringify(data.rooms[i].id, null, 2);
                        roomId1 = roomId1.substring(1,roomId1.length-1);
                        contenido.append('<section class="features13 cid-r5zf8QJWvr" id="features13-2w"><div class="container"><div class="media-container-row container"><div class="card col-12 col-md-6 p-5 m-3 align-center"><div class="card-img"><a onclick="goToRoom(\'' + roomId1 + '\')"><img src="assets/images/mbr-1200x814.jpg" alt="Mobirise" title=""></a></div><h4 class="card-title py-2 mbr-fonts-style display-5"><a onclick="goToRoom(\'' + roomId1 + '\')" class="text-black">' + roomName1 + '</a></h4></div></div></div></section>');
                        i++;
                    }
                }
            })
            .catch((error) => {
                console.log('error');
            });
}, false);

