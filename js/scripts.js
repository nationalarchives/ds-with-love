

$(function() {

    var $audio = $("#bg-video-wrapper audio");

    $audio.append("<source src=\"/media/bg-audio.mp3\" type=\"audio/mpeg\">");

    var $audio_button = $('<button class="bg-audio-control tooltip"><span id="audio-icon-toggle" class="glyphicon glyphicon-volume-up"></span><span id="audio-text-toggle" class="tooltiptext"><b>Turn on</b><br>ambient music</span></button>');
    $audio_button.appendTo($("#icon-bar"));

    $audio_button.on('click', function(){

        toggleAudio();

    })

    var toggleAudio = function () {

        var $audio = $("#bg-video-wrapper audio");

        if($audio[0].paused) {
            $audio_button.attr('data-icon','u');
            $audio[0].play();
            // $('#icon-toggle').toggleClass('glyphicon icon glyphicon-flash');
            $('#audio-text-toggle > b').text('Turn off');
        } else {
            $audio_button.attr('data-icon','P');
            $audio[0].pause();
            // $('#icon-toggle').toggleClass('glyphicon icon glyphicon-flash');
            $('#audio-text-toggle > b').text('Turn on');
        }
    }


    var $video = $("#bg-video-wrapper video");

    //if (window.matchMedia('(prefers-reduced-motion)').matches) {


        $video.append("<source src=\"/media/bg-video-compressed.mp4\" type=\"video/mp4\">");

        var $video_button = $('<button class="bg-video-control tooltip" data-icon="P"><span id="motion-icon-toggle" class="glyphicon icon glyphicon-flash"></span><span id="motion-text-toggle" class="tooltiptext"><b>Turn off</b><br>background motion</span></button>');
        $video_button.appendTo($("#icon-bar"));

        $video_button.on('click', function(){

            toggleVideo();

        })

        var toggleVideo = function () {

            var $video = $("#bg-video-wrapper video");

            if($video[0].paused) {
                $video_button.attr('data-icon','u');
                $video[0].play();
               // $('#icon-toggle').toggleClass('glyphicon icon glyphicon-volume-up');
                $('#motion-text-toggle > b').text('Turn off');
            } else {
                $video_button.attr('data-icon','P');
                $video[0].pause();
               // $('#icon-toggle').toggleClass('glyphicon icon glyphicon-flash');
                $('#motion-text-toggle > b').text('Turn on');
            }
        }

    //}
});






