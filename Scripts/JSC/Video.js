var videoContainer = document.querySelector('.c-Video');
var btnPlayPause = document.getElementById('Play-Pause');
var btnScreen = document.getElementById('Full-Compress');
var currentTimeElement = document.getElementById('current');
var durationElement = document.getElementById('duration');
var video = document.querySelector('.Video');
var progress = document.querySelector('.Control-Bar')
var progressBar = document.querySelector('.Control-Bar-Progress');
var btnSetting = document.getElementById('Settings');
var settingmenu = document.querySelector('.Setting-Menu');
var controler = document.querySelector('.Controls');
var volume = document.querySelector('.volume');
//video loading
$('#video').on('loadstart', function (event) {
    $(this).addClass('background');
  $(this).attr("poster", "Images/img/loading.gif");
});

$('#video').on('canplay', function (event) {
    $(this).removeClass('background');
    $(this).removeAttr("poster");
});

//video menu
var vidIndex = 0;
var srcVid1 = document.querySelector(".srcVid1");
var srcVid2 = document.querySelector(".srcVid2");
var srcVid3 = document.querySelector(".srcVid3");
var srcVid4 = document.querySelector(".srcVid4");
var srcVid5 = document.querySelector(".srcVid5");
function menu() {
    vidIndex = $(this).attr('data-index');
    video.src = videoLib[vidIndex];
    ChangebtnQualityData(videoLib1440p[vidIndex], vidLib1080p[vidIndex], vidLib720p[vidIndex], vidLib540p[vidIndex], vidLib360p[vidIndex], vidLib240p[vidIndex]);



    video.load();
    video.currentTime = 0;
    qualitytext.textContent = "Auto 360p";

    speedFill.style.width = `${0.5 * 100}%`;
    playSpeed.innerHTML = video.playbackRate + 'X';
    btnPlayPause.className = 'pause';

    video.play();
}
srcVid1.addEventListener('click', menu);
srcVid2.addEventListener('click', menu);
srcVid3.addEventListener('click', menu);
srcVid4.addEventListener('click', menu);
srcVid5.addEventListener('click', menu);
//prev next vid
var btnPrevious = document.getElementById('btnPrevious');
var btnNext = document.getElementById('btnNext');

var videoLib = ['Videos/1/production_id-3973313 (360p).mp4', 'Videos/2/production_id-4549682 (360p).mp4', 'Videos/3/video (360p).mp4', 'Videos/4/production_id-4464847 (360p).mp4', 'Videos/5/production_id-4884242 (360p).mp4'];
var videoLib1440p = ['Videos/1/production_id-3973313 (1440p).mp4', 'Videos/2/production_id-4549682 (1080p).mp4', 'Videos/3/video (1440p).mp4', 'Videos/4/production_id-4464847 (1440p).mp4', 'Videos/5/production_id-4884242 (1440p).mp4'];
var vidLib1080p = ['Videos/1/production_id-3973313 (1080p).mp4', 'Videos/2/production_id-4549682 (1080p).mp4', 'Videos/3/video (1080p).mp4', 'Videos/4/production_id-4464847 (1080p).mp4', 'Videos/5/production_id-4884242 (1080p).mp4'];
var vidLib720p = ['Videos/1/production_id-3973313 (720p).mp4', 'Videos/2/production_id-4549682 (720p).mp4', 'Videos/3/video (720p).mp4', 'Videos/4/production_id-4464847 (720p).mp4', 'Videos/5/production_id-4884242 (720p).mp4'];
var vidLib540p = ['Videos/1/production_id-3973313 (540p).mp4', 'Videos/2/production_id-4549682 (540p).mp4', 'Videos/3/video (540p).mp4', 'Videos/4/production_id-4464847 (540p).mp4', 'Videos/5/production_id-4884242 (540p).mp4'];
var vidLib360p = ['Videos/1/production_id-3973313 (360p).mp4', 'Videos/2/production_id-4549682 (360p).mp4', 'Videos/3/video (360p).mp4', 'Videos/4/production_id-4464847 (360p).mp4', 'Videos/5/production_id-4884242 (360p).mp4'];
var vidLib240p = ['Videos/1/production_id-3973313 (240p).mp4', 'Videos/2/production_id-4549682 (240p).mp4', 'Videos/3/video (240p).mp4', 'Videos/4/production_id-4464847 (240p).mp4', 'Videos/5/production_id_4884242 (240p).mp4'];
function prevVid() {
    vidIndex--

    if (vidIndex < 0) {
        vidIndex = videoLib.length - 1;
     
    }
    ChangebtnQualityData(videoLib1440p[vidIndex], vidLib1080p[vidIndex], vidLib720p[vidIndex], vidLib540p[vidIndex], vidLib360p[vidIndex], vidLib240p[vidIndex]);
    qualitytext.textContent = "Auto 360p";
    video.src = videoLib[vidIndex];

    video.load();
    video.currentTime = 0;
    speedFill.style.width = `${0.5 * 100}%`;
    playSpeed.innerHTML = video.playbackRate + 'X';
    btnPlayPause.className = 'pause';

    video.play();

    
}
btnPrevious.addEventListener('click', prevVid);
function nextVid() {
    vidIndex++

    if (vidIndex > videoLib.length - 1) {
        vidIndex = 0;
    }
    ChangebtnQualityData(videoLib1440p[vidIndex], vidLib1080p[vidIndex], vidLib720p[vidIndex], vidLib540p[vidIndex], vidLib360p[vidIndex], vidLib240p[vidIndex]);
    qualitytext.textContent = "Auto 360p";

    video.src = videoLib[vidIndex];
    video.load();
    video.currentTime = 0;
    speedFill.style.width = `${0.5 * 100}%`;
    playSpeed.innerHTML = video.playbackRate + 'X';

    btnPlayPause.className = 'pause';

    video.play();

}
btnNext.addEventListener('click', nextVid)
//vol var
let lastVolume = 1;
let isMouseDown = false;
var volumeBtn = document.querySelector('.volume-btn');
var volumeSlider = document.querySelector('.volume-slider');
var volumeFill = document.querySelector('.volume-filled');
//volume
function toggleMute() {
    if (video.volume) {
        lastVolume = video.volume;
        video.volume = 0;
        volumeBtn.classList.add('muted');
        volumeFill.style.width = 0;
    } else {
        video.volume = lastVolume;
        volumeBtn.classList.remove('muted');
        volumeFill.style.width = `${lastVolume * 100}%`;
    }
}
volumeBtn.addEventListener('click', toggleMute);

function changeVolume(e) {
    volumeBtn.classList.remove('muted');
    let volume = e.offsetX / volumeSlider.offsetWidth;
    volume < 0.1 ? volume = 0 : volume = volume;
    volumeFill.style.width = `${volume * 100}%`;
    video.volume = volume;
    if (volume > 0.7) {
        volumeBtn.classList.add('loud');
    } else if (volume < 0.7 && volume > 0) {
        volumeBtn.classList.remove('loud');
    } else if (volume == 0) {
        volumeBtn.classList.add('muted');
    }
    lastVolume = volume;
}
volumeSlider.addEventListener('click', changeVolume);
//speed var

var speedSlider = document.querySelector('.speed-slider');
var speedFill = document.querySelector('.speed-filled');
var playSpeed = document.querySelector('.playSpeed');
//speed func slider
function changeSpeed(e) {
    let speed = e.offsetX / speedSlider.offsetWidth;
    
    if (0.875 < speed && speed<= 1) {
        video.playbackRate = 2.0;
    }
    else if (0.75 < speed && speed<= 0.875) {
        video.playbackRate = 1.75;
    }
    else if (0.625 < speed && speed<= 0.75){
        video.playbackRate = 1.5;
    }
    else if (0.5 < speed && speed<= 0.625){
        video.playbackRate = 1.25;
    }
    else if (0.375 < speed && speed<= 0.5){
        video.playbackRate =1.0;
    }
    else if (0.25 < speed && speed<= 0.375) {
        video.playbackRate = 0.75;
    }
    else if (0.125 < speed && speed<= 0.25){
        video.playbackRate = 0.5;
    }
    else if (0.1 <= speed && speed<= 0.125){
        video.playbackRate = 0.25;
    }

    speed < 0.1 ? speed = 0 : speed = speed;

    speedFill.style.width = `${speed * 100}%`;

    playSpeed.innerHTML = video.playbackRate + 'X';
}
speedSlider.addEventListener('click', changeSpeed);
//change Speed on  list
var speed = document.getElementById('Speed');
var selectSpeed = document.querySelector(".Speed-Menu-Items");
var pd05 = document.querySelector(".pd05");
var pd075 = document.querySelector(".pd075");
var pd1 = document.querySelector(".pd1");
var pd15 = document.querySelector(".pd15");
var pd175 = document.querySelector(".pd175");
var pd2 = document.querySelector(".pd2");

function SpeedToggleClose() {
    $(".Speed-Menu").css('z-index', '0');
    $('.Speed-Menu').animate({ opacity: '0' }, 500);
    $('.Speed-Menu').css('display', 'none');
}
selectSpeed.addEventListener('click', SpeedToggleClose);
function SpeedToggleOpen() {
    if (window.innerWidth < 767) {
        $(".Speed-Menu").css('z-index', '998');
        $('.Speed-Menu').animate({ opacity: '1' }, 500);
        $('.Speed-Menu').css('display', 'block');
        pd05.addEventListener('click', ChangeSpeedList);
        pd075.addEventListener('click', ChangeSpeedList);
        pd1.addEventListener('click', ChangeSpeedList);
        pd15.addEventListener('click', ChangeSpeedList);
        pd175.addEventListener('click', ChangeSpeedList);
        pd2.addEventListener('click', ChangeSpeedList);
    }
    
   
}
speed.addEventListener('click', SpeedToggleOpen);
function ChangeSpeedList() {
    video.playbackRate = parseFloat($(this).attr('data-speed'));
    playSpeed.innerHTML = $(this).attr('data-txt') + "X";
        speed = video.playbackRate;
        speed < 0.1 ? speed = 0 : speed = speed;

        speedFill.style.width = `${speed * 100 /2}%`;

    
}


//Quality var
var qualitymenu = document.querySelector('.quality-Menu');
var btnQuality = document.getElementById('Quality');
var btnSelectedQuality = document.querySelector('.quality-Menu-Items');

//toggle
var checkQuality = true;

function QualityToggleOpen() {
        $('.quality-Menu').css("z-index", "998");
    $('.quality-Menu').animate({ opacity: "1" }, 500);
    $('.quality-Menu').css("display", "block");
    btn1080p.addEventListener('click', changeQuality);
    btn720p.addEventListener('click', changeQuality);
    btn480p.addEventListener('click', changeQuality);
    btn360p.addEventListener('click', changeQuality);
    btn240p.addEventListener('click', changeQuality);
    btn144p.addEventListener('click', changeQuality);
}
btnQuality.addEventListener('click', QualityToggleOpen);
function QualityToggleClose() {
    $('.quality-Menu').css("z-index", "0");
    $('.quality-Menu').css("display", "none");
    $('.quality-Menu').animate({ opacity: "0" }, 500);
}
btnSelectedQuality.addEventListener('click', QualityToggleClose);

var btn1080p= document.querySelector('.src1080');
var btn720p = document.querySelector('.src720');
var btn480p = document.querySelector('.src480');
var btn360p = document.querySelector('.src360');
var btn240p = document.querySelector('.src240');
var btn144p = document.querySelector('.src144');
var qualitytext = document.querySelector('.currentQuality');

function changeQuality() {
    curtime = video.currentTime;
    video.src = $(this).attr('data-src');
    qualitytext.textContent = $(this).attr('data-txt');
    video.load();
    video.currentTime = curtime;
    speedFill.style.width = `${0.5 * 100}%`;

    playSpeed.innerHTML = video.playbackRate + 'X';
    btnPlayPause.className = 'pause';

    video.play();
    QualityToggleClose();
    settingtoggle();
};

function ChangebtnQualityData(vid1080, vid720, vid480, vid360, vid240, vid144) {
    $(btn1080p).removeAttr('data-src');
    $(btn720p).removeAttr('data-src');
    $(btn480p).removeAttr('data-src');
    $(btn360p).removeAttr('data-src');
    $(btn240p).removeAttr('data-src');
    $(btn144p).removeAttr('data-src');
    $(btn1080p).attr('data-src',vid1080);
    $(btn720p).attr('data-src',vid720 ) ;
    $(btn480p).attr('data-src',vid480 ) ;
    $(btn360p).attr('data-src',vid360 ) ;
    $(btn240p).attr('data-src',vid240 ) ;
    $(btn144p).attr('data-src', vid144 ) ;
}



//setting var
var settingmenuIN = true;
//setting
function settingtoggle() {
    if (settingmenuIN) {
        $(settingmenu).animate({ opacity: "1" }, 500);
        $(settingmenu).css("display", "block");
        checkQuality = false;
        settingmenuIN = false;
    } else {
        $(settingmenu).animate({ opacity: "0" }, 500);
        $(settingmenu).css("display", "none");
        checkQuality = true;
        settingmenuIN = true;
        QualityToggleClose();
        SpeedToggleClose();

    }
}
btnSetting.addEventListener('click', settingtoggle);
//cotroler hover
function controlHoverOpen() {
    $(controler).css("transform", "translateY(0)");

}
function controlHoverClose() {
    if (settingmenuIN && checkQuality) {

        $(controler).css("transform", "translateY(100%) translateY(-4px)");
    }

}
videoContainer.addEventListener("mouseover", controlHoverOpen);
videoContainer.addEventListener("mouseout", controlHoverClose);
//Screen
function launchIntoFullscreen(e) {

    btnScreen.className = 'compress Right-controls-xs Right-controls-sm';

    if (e.requestFullscreen) {
        e.requestFullscreen();
    } else if (e.mozRequestFullScreen) {
        e.mozRequestFullScreen();
    } else if (e.webkitRequestFullscreen) {
        e.webkitRequestFullscreen();
    } else if (e.msRequestFullscreen) {
        e.msRequestFullscreen();
    }
}
function exitFullscreen() {
   
    btnScreen.className = 'fullscreen Right-controls-xs Right-controls-sm';

    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}
var fullscreen = false;
function toggleFullscreen() {
    fullscreen ? exitFullscreen() : launchIntoFullscreen(videoContainer)
    fullscreen = !fullscreen;
}
btnScreen.addEventListener('click', toggleFullscreen);
$(document).bind('webkitfullscreenchange mozfullscreenchange fullscreenchange', function (e) {
    var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
    var event = state ? 'FullscreenOn' : 'FullscreenOff';

    if (event === 'FullscreenOff') {
        btnScreen.className = 'fullscreen Right-controls-xs Right-controls-sm';
      
    } else {
        btnScreen.className = 'compress Right-controls-xs Right-controls-sm';

    }
});

//PalyPause
function TogglePlayPause() {
    if (video.paused) {
        btnPlayPause.className = 'pause';
        video.play();
    }
    else {
        btnPlayPause.className = 'play';

        video.pause();
    }
}
btnPlayPause.onclick = function () {
    TogglePlayPause();
}
function updateProgress() {
    //Progress Bar
    var barPosVid = video.currentTime / video.duration;
    progressBar.style.width = barPosVid * 100 + "%";


    if (video.ended) {
        btnPlayPause.className = "play";
    }
    // current Time & Duration
    var currentHours = Math.floor(video.currentTime / 3600);
    var currentMinutes = Math.floor(video.currentTime / 60 - currentHours * 60);
    var currentSecconds = Math.floor(video.currentTime - currentMinutes * 60);


    var durationHours = Math.floor(video.duration / 3600);
    var durationMinutes = Math.floor(video.duration / 60 - durationHours * 60);
    var durationSecconds = Math.floor(video.duration - durationMinutes * 60);

    if (currentHours < 10) { currentHours = "0" + currentHours; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (currentSecconds < 10) { currentSecconds = "0" + currentSecconds; }
    if (durationHours < 10) { durationHours = "0" + durationHours; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
    if (durationSecconds < 10) { currentSecconds = "0" + currentSecconds; }



    currentTimeElement.innerHTML = currentHours + ":" + currentMinutes + ":" + currentSecconds;
    durationElement.innerHTML = durationHours + ":" + durationMinutes + ":" + durationSecconds;
}

video.addEventListener("timeupdate", updateProgress);
  