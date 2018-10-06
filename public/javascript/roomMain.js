
window.addEventListener('load', function () {
    var roomId = localStorage.getItem('currentRoomId');
    var roomName; 
    var header = $('#header1-33');
    header.html("");
    var deveices;
    api.room.get(roomId)
      .then((data) => {
        roomName = JSON.stringify(data.room.name, null, 2);
        roomName = roomName.substring(1, roomName.length-1);
        header.append('<div class="container"><div class="row justify-content-md-center"><div class="mbr-white col-md-10"><h1 class="mbr-section-title align-center mbr-bold pb-3 mbr-fonts-style display-1">' + roomName + '</h1></div></div></div>');
      })
      .catch((error) => {
        console.log('error');
      });

}, false);