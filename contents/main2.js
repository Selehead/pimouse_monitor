var ros = new ROSLIB.Ros({ url : 'ws://' + location.hostname + ':9000' });

ros.on('connection', function() {console.log('websocket: connected'); });
ros.on('error', function(error) {console.log('websocket error: ', error); });
ros.on('close', function() {console.log('websocket: closed'); });

var ls = new ROSLIB.Topic({
        ros : ros,
        name : '/lightsensors',
        messageType : 'pimouse_ros/lightsensorvalues'
});

ls.subscribe(function(message) {
        str = JSON.stringify(message);  //文字列に変換
        document.getElementById("lightsensors").innerHTML = str;
        //$("#lightsensors").html(str); //これでもよい
        console.log(str);
});

