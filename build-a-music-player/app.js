var main = function() {
    var volume;
    
  //The PLAY button!!!!
    $('#play').click(function(){
        $('#message').text("Playing track");
        $('#player').trigger("play");
    });

    //The Pause button!!!!
    $('#pause').click(function(){
        $('#message').text("Track paused");
        $('#player').trigger("pause");
    });

    //Muted Button
    //This will assign the variable muted with true or false
   $('#mute').click(function(){
        if (!$('#player').prop('muted')) {
            $('#player').prop('muted', true);
            $('#message').text("Track muted");
        }
    });

    //unmute button
    $('#unmute').click(function(){
        if ($('#player').prop('muted')) {
            $('#player').prop('muted', false);
            $('#message').text("Track unmuted");
        }
    });

    //this is the STOP button!
    currentTime = $("player").prop('stopped');
    $("player").prop("stopped",0);

    $('#stop').click(function(){
        $('#message').text("Track Stopped");
        $('#player').trigger("stop");
    });

  // Volume Up button
    $('#up').click(function(){
        var volume = $('#player').prop('volume');
        if (volume < 1) {
            volume += 0.1;
            $('#player').prop('volume', volume);
            $('#message').text("Volume Increased");
        }
    });

    // volume lower, different function so declare variable again
    $('#down').click(function(){
        var volume = $('#player').prop('volume');
        if (volume > 0) {
            volume -= 0.1;
            $('#player').prop('volume', volume);
            $('#message').text("Volume Decreased");
        }
    });

}

$(document).ready(main);
