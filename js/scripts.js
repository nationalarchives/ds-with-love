// -- CHECK AND SET COOKIE -- //

// Check to see if a cookie exists
if (document.cookie.split(';').some((item) => item.trim().startsWith('motion='))) {

    // If so, log the value of existing cookie
    console.log(document.cookie);
}
else {

    // Otherwise, set it's default value to 'play'
    document.cookie = "motion=play";
}

$(function() {

    // -- AUDIO -- //

    // Set and append audio tag
    var $audio = $("#bg-video-wrapper audio");
    $audio.append("<source src=\"/media/bg-audio.mp3\" type=\"audio/mpeg\">");

    // Set and append audio button
    var $audio_button = $('<li><button class="bg-audio-control tooltip"><span id="audio-icon-toggle" class="glyphicon glyphicon-volume-off" aria-hidden="true"></span><span id="audio-text-toggle" class="tooltiptext"><b>Turn on</b> ambient music</span></button></li>');
    $audio_button.appendTo($("#icon-bar ul"));

    // If audio button is clicked, run the toggleAudio function
    $audio_button.on('click', function(){
        toggleAudio();
    })

    var toggleAudio = function () {

        // Set audio tag as local variable
        var $audio = $("#bg-video-wrapper audio");

        // If audio is paused, set audio to play and change data-attr, text and icon
        if($audio[0].paused) {
            $audio_button.attr('data-icon','u');
            $audio[0].play();
            $('#audio-text-toggle > b').text('Turn off');
            $('#audio-icon-toggle').removeClass();
            $('#audio-icon-toggle').addClass('glyphicon icon glyphicon-volume-up');
        }

        // If audio is playing, set audio to pause and change data-attr, text and icon
        else {
            $audio_button.attr('data-icon','P');
            $audio[0].pause();
            $('#audio-text-toggle > b').text('Turn on');
            $('#audio-icon-toggle').removeClass();
            $('#audio-icon-toggle').addClass('glyphicon icon glyphicon-volume-off');
        }
    }

    // -- VIDEO -- //

    // Set and append video tag
    var $video = $("#bg-video-wrapper video");
    $video.append("<source src=\"/media/bg-video-compressed.mp4\" type=\"video/mp4\">");

    // Set empty video button variable
    var $video_button = $('');

    // On first load, if the cookie value is set to 'play'...
    if (document.cookie.split(';').some((item) => item.includes('motion=play'))) {

        // Add the play button and set the video playing
        $video_button = $('<li><button class="bg-video-control tooltip" data-icon="P"><span id="motion-icon-toggle" class="glyphicon glyphicon-eye-open" aria-hidden="true"></span><span id="motion-text-toggle" class="tooltiptext"><b>Turn off</b> background motion</span></button></li>');
        $video_button.appendTo($("#icon-bar ul"));
        $video[0].play();

    }

    // Otherwise...
    else  {

        // Add the pause button and set the video to 'pause'
        $video_button = $('<li><button class="bg-video-control tooltip" data-icon="u"><span id="motion-icon-toggle" class="glyphicon glyphicon-eye-close" aria-hidden="true"></span><span id="motion-text-toggle" class="tooltiptext"><b>Turn on</b> background motion</span></button></li>');
        $video_button.appendTo($("#icon-bar ul"));
        $video[0].pause();

    }

    // If video button is clicked, run the toggleAudio function
    $video_button.on('click', function(){
        toggleVideo();
    })

    var toggleVideo = function () {

        // Set video tag as local variable
        var $video = $("#bg-video-wrapper video");

        // If video is paused, set video to play and change data-attr, text and icon. Also set the cookie value to play.
        if($video[0].paused) {
            $video_button.attr('data-icon','u');
            $video[0].play();
            $('#motion-text-toggle > b').text('Turn off');
            $('#motion-icon-toggle').removeClass();
            $('#motion-icon-toggle').addClass('glyphicon icon glyphicon-eye-open');
            document.cookie = "motion=play";

        }

        // If video is playing, set video to pause and change data-attr, text and icon. Also set the cookie value to stop.
        else {
            $video_button.attr('data-icon','P');
            $video[0].pause();
            $('#motion-text-toggle > b').text('Turn on');
            $('#motion-icon-toggle').removeClass();
            $('#motion-icon-toggle').addClass('glyphicon icon glyphicon-eye-close');
            document.cookie = "motion=stop";
        }
    }
});

var audio = document.getElementById("bg-audio");
audio.volume = 0.1;


var tnaSetThisCookie = function (name, days) {
    var d = new Date();
    d.setTime(d.getTime() + 1000 * 60 * 60 * 24 * days);
    document.cookie = name + "=true;path=/;expires=" + d.toGMTString() + ';';
};

var tnaCheckForThisCookie = function (name) {
    if (document.cookie.indexOf(name) === -1) {
        return false;
    } else {
        return true;
    }
};


$(function () { // All content must be placed within this IIFE.
    if (!tnaCheckForThisCookie("dontShowCookieNotice")) {
        $('<div class="cookieNotice">We use cookies to improve services and ensure they work for you. Read our <a title="Our cookie policy" href="https://www.nationalarchives.gov.uk/legal/cookies.htm">cookie policy</a>. <a title="Close cookie policy notice" href="#" id="cookieCutter">Close</a></div>').css({
            padding: '5px',
            "text-align": "center",
            backgroundColor: '#FCE45C',
            position: 'fixed',
            bottom: 0,
            'font-size': '14px',
            width: '100%',
            display: 'none'
        }).appendTo('body');

        setTimeout(function () {
            $('.cookieNotice').show(1000);
        }, 1000);
    }
});

// 2.4 Binding to document (event delegation)
$(document).on('click', '#cookieCutter', function (e) {
    e.preventDefault();
    tnaSetThisCookie('dontShowCookieNotice', 365);
    $('.cookieNotice').hide();
});





