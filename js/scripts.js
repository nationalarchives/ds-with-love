

$(function() {

    var $audio = $("#bg-video-wrapper audio");

    $audio.append("<source src=\"/media/bg-audio.mp3\" type=\"audio/mpeg\">");

    var toggleAudio = function () {

        var $audio = $("#bg-video-wrapper audio");

        if($audio[0].paused) {
            $audio_button.attr('data-icon','u');
            $audio[0].play();
        } else {
            $audio_button.attr('data-icon','P');
            $audio[0].pause();
        }
    }

    var $audio_button = $('<button class="bg-audio-control tooltip"><span class="glyphicon glyphicon-volume-up"></span><span class="tooltiptext"><b>Turn on</b><br>ambient music</span></button>');
    $audio_button.appendTo($("#icon-bar"));

    $audio_button.on('click', function(){

        toggleAudio();

    })

    var $video = $("#bg-video-wrapper video");

    $video.append("<source src=\"/media/bg-video-uncompressed.mp4\" type=\"video/mp4\">");

    var toggleVideo = function () {

        var $video = $("#bg-video-wrapper video");

        if($video[0].paused) {
            $video_button.attr('data-icon','u');
            $video[0].play();
        } else {
            $video_button.attr('data-icon','P');
            $video[0].pause();
        }
    }

    var $video_button = $('<button class="bg-video-control tooltip" data-icon="P"><span class="glyphicon icon glyphicon-flash"></span><span class="tooltiptext"><b>Turn off</b><br>background motion</span></button>');
    $video_button.appendTo($("#icon-bar"));

    $video_button.on('click', function(){

    toggleVideo();

    })

});





