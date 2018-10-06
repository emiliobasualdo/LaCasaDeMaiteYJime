window.addEventListener('load', function () {
    var contenido = $('#myRooms');
    contenido.html("");
    api.room.getAll()
            .then((data) => {
                for(var i = 0; i < data.rooms.length; i++) {
                    var roomName = JSON.stringify(data.rooms[i].name, null, 2);
                    roomName = roomName.substring(1, roomName.length-1);
                    var roomId = JSON.stringify(data.rooms[i].id, null, 2);
                    roomId = roomId.substring(1,roomId.length-1);
                    contenido.append('<section class="features13 cid-r5zf8QJWvr" id="features13-2w"><div class="container"><div class="media-container-row container"><div class="card col-12 col-md-6 p-5 m-3 align-center"><div class="card-img"><a onclick="goToRoom(\'' + roomId + '\')"><img src="assets/images/mbr-1-1200x798.jpg" alt="Mobirise" title=""></a></div><h4 class="card-title py-2 mbr-fonts-style display-2"><a onclick="goToRoom(\'' + roomId + '\')" class="text-black">' + roomName + '</a></h4></div></div></div></section>');
                }
            })
            .catch((error) => {
                console.log('error');
            });
}, false);