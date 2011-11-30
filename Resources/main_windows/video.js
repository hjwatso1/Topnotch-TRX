var win = Titanium.UI.currentWindow;

var options = {
	contentURL:'../movie.mp4',
	backgroundColor:'#111',
	scalingMode:Titanium.Media.VIDEO_SCALING_ASPECT_FIT,
	mediaControlStyle:Titanium.Media.VIDEO_CONTROL_FULLSCREEN
};

var activeMovie = Titanium.Media.createVideoPlayer(options);

// if (parseFloat(Titanium.Platform.version) >= 3.2)
// {
// //	activeMovie.mediaControlStyle = Titanium.Media.VIDEO_CONTROL_EMBEDDED;
// //	activeMovie.mediaControlStyle = Titanium.Media.VIDEO_CONTROL_FULLSCREEN;
	// activeMovie.mediaControlStyle = Titanium.Media.VIDEO_CONTROL_NONE;
	
	win.add(activeMovie);
// }

activeMovie.addEventListener('fullscreen', function (e) {
    if (!e.entering) {
        activeMovie.stop();
        activeMovie.release();
        win.close();
    }
});

activeMovie.addEventListener('complete',function(e){
    win.close();
});

activeMovie.play();

win.addEventListener('close', function() {
	activeMovie.stop();
});