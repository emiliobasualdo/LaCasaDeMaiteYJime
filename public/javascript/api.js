var api = class {
    static get baseUrl() {
        return "http://127.0.0.1:8080/api/";
    }

    static get timeout() {
        return 60 * 1000;
    }

    static fetch(url, init) {
        return new Promise(function(resolve, reject) {
            var timeout = setTimeout(function() {
                reject(new Error('Time out'));
            }, api.timeout);

            fetch(url, init)
                .then(function(response) {
                    clearTimeout(timeout);
                    if (!response.ok)
                        reject(new Error(response.statusText));

                    return response.json();
                })
                .then(function(data) {
                    resolve(data);
                })
                .catch(function(error) {
                    console.log(error);
                    reject(error);
                });
        });
    }
}

//ROOM
api.room = class {
    static get url() {
        return api.baseUrl + "rooms/";
    }

    static add(room) {
        return api.fetch(api.room.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(room)
        });
    }

    static modify(room) {
        return api.fetch(api.room.url + room.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(room)
        });
    }

    static delete(id) {
        return api.fetch(api.room.url + id, {
            method: 'DELETE',
        });
    }

    static get(id) {
        return api.fetch(api.room.url + id);
    }

    static getAll() {
        return api.fetch(api.room.url);
    }
}

//DEVICE
api.device = class {
    static get url() {
        return api.baseUrl + "devices/";
    }
//Creates a new device
    static add(device) {
        return api.fetch(api.device.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(device)
        });
    }
//Updates an existing device
    static modify(device) {
        return api.fetch(api.device.url + device.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(device)
        });
    }
//Delete an existing device
    static delete(id) {
        return api.fetch(api.device.url + id, {
            method: 'DELETE',
        });
    }
//Retrieve a specific device
    static get(id) {
        return api.fetch(api.device.url + id);
    }
//Executes action in a specific device
    static action(id, actionName) {
        return api.fetch(api.device.url+ id +"/"+ actionName, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
        });
    }
//Retrieve all devices
    static getAllDevices() {
        return api.fetch(api.device.url);
    }
    //Retrieve logs for all devices
    //Retrieve events for all devices
    //Retrieve events for a specific device
    //Retrieve logs for a specific device
    //Retrieve devices from specific device type
}

//ROUTINE
api.routine = class {
    static get url() {
        return api.baseUrl + "routines/";
    }
//Retrieve all routines
    static getAll() {
        return api.fetch(api.routine.url);
    }
    //Creates a new routine
    static add(routine) {
        return api.fetch(api.routine.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(routine)
        });
    }
//Delete an existing routine
    static delete(id) {
        return api.fetch(api.routine.url + id, {
            method: 'DELETE',
        });
    }
//Retrieve a specific routine
    static get(id) {
        return api.fetch(api.routine.url + id);
    }
//Updates an existing routine
    static modify(routine) {
        return api.fetch(api.routine.url + routine.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(routine)
        });
    }
//Executes a specific routine
    static execute(id) {
        return api.fetch(api.routine.url+id+"/execute", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
        });
    }
}

//ROOM DEVICES
api.roomDevice = class {
//Retrieve devices in a specific room
    static get(id) {
        return api.fetch(api.room.url + id + "/devices");
    }

//Adds a device to a specific room
    static add(deviceId, roomId) {
        return api.fetch(api.device.url + deviceId + "/rooms/" + roomId, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
        });
    }
//Deletes a device from a specific room
    static delete(deviceId) {
        return api.fetch(api.device.url + deviceId + "/rooms", {
            method: 'DELETE',
        });
    }

}