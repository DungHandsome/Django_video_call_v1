function connectsocket(){
    callsocket = new WebSocket(
        'ws://'
        + window.location.host
        + '/ws/call/'
    );

    callsocket.onopen = event => {
        callsocket.send(JSON.stringify({
            type: 'login',
            data: {name:myName}
        }));
    }

    const onNewCall = (data) => {
        otherUser = data.caller;
        remoteRTCMessage = data.rctMessage

        document.getElementById('CallerName').innerHTML = otherUser
        document.getElementById('call').style.display = 'none';
        document.getElementById('answer').style.display = 'block';
    };

    const onCallAnswer = (data) => {
        remoteRTCMessage = data.rctMessage;
        peerConnection.setRemoteDescription(new RTCSessionDescription)
        document.getElementById('calling').style.display = 'none';
        console.log("Call started");
    };
}