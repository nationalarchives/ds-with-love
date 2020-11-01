

$(function() {

    var $audio = $("#bg-video-wrapper audio");

    $audio.append("<source src=\"/media/bg-audio.mp3\" type=\"audio/mpeg\">");

    var $audio_button = $('<li><button class="bg-audio-control tooltip"><span id="audio-icon-toggle" class="glyphicon glyphicon-volume-off" aria-hidden="true"></span><span id="audio-text-toggle" class="tooltiptext"><b>Turn on</b> ambient music</span></button></li>');
    $audio_button.appendTo($("#icon-bar ul"));

    $audio_button.on('click', function(){

        toggleAudio();

    })

    var toggleAudio = function () {

        var $audio = $("#bg-video-wrapper audio");

        if($audio[0].paused) {
            $audio_button.attr('data-icon','u');
            $audio[0].play();
            $('#audio-text-toggle > b').text('Turn off');
            $('#audio-icon-toggle').removeClass();
            $('#audio-icon-toggle').addClass('glyphicon icon glyphicon-volume-up');
        } else {
            $audio_button.attr('data-icon','P');
            $audio[0].pause();
            $('#audio-text-toggle > b').text('Turn on');
            $('#audio-icon-toggle').removeClass();
            $('#audio-icon-toggle').addClass('glyphicon icon glyphicon-volume-off');
        }
    }


    var $video = $("#bg-video-wrapper video");

    //if (window.matchMedia('(prefers-reduced-motion)').matches) {


        $video.append("<source src=\"/media/bg-video-compressed.mp4\" type=\"video/mp4\">");

        var $video_button = $('<li><button class="bg-video-control tooltip" data-icon="P"><span id="motion-icon-toggle" class="glyphicon glyphicon-eye-open" aria-hidden="true"></span><span id="motion-text-toggle" class="tooltiptext"><b>Turn off</b> background motion</span></button></li>');
        $video_button.appendTo($("#icon-bar ul"));

        $video_button.on('click', function(){

            toggleVideo();

        })

        var toggleVideo = function () {

            var $video = $("#bg-video-wrapper video");

            if($video[0].paused) {
                $video_button.attr('data-icon','u');
                $video[0].play();
                $('#motion-text-toggle > b').text('Turn off');
                $('#motion-icon-toggle').removeClass();
                $('#motion-icon-toggle').addClass('glyphicon icon glyphicon-eye-open');


            } else {
                $video_button.attr('data-icon','P');
                $video[0].pause();
                $('#motion-text-toggle > b').text('Turn on');
                $('#motion-icon-toggle').removeClass();
                $('#motion-icon-toggle').addClass('glyphicon icon glyphicon-eye-close');
            }
        }


    //}
});






