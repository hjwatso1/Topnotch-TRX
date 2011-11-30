var win 			= Ti.UI.currentWindow;
win.backgroundColor = '#666666';

//-- Our instructor views
var move1 		= Ti.UI.createView({width:282,height:380,backgroundImage:'../assets/images/exersizes/move1.png'});
var move2 		= Ti.UI.createView({width:282,height:380,backgroundImage:'../assets/images/exersizes/move2.png'});
var move3 		= Ti.UI.createView({width:282,height:380,backgroundImage:'../assets/images/exersizes/move3.png'});
var move4 		= Ti.UI.createView({width:282,height:380,backgroundImage:'../assets/images/exersizes/move4.png'});
var move5 		= Ti.UI.createView({width:282,height:380,backgroundImage:'../assets/images/exersizes/move5.png'});

var scrollView = Ti.UI.createScrollableView({
	views:[move1,move2,move3,move4,move5],
	showPagingControl:true,
	clipViews:false,
	top:10,
	left:10,
	right:10,
	height:Ti.Platform.displayCaps.platformHeight-50,
	opacity:1
});

var infoButton =  Ti.UI.createButton({
	 width:24,  
    height:26,  
    backgroundImage:'../assets/icons/info.png',  
    top:5,  
    right:5,  
    opacity:1
})
var playVideoButton =  Ti.UI.createButton({
	width:100,  
    height:30,
    title:'Watch Video',  
    bottom:5,  
    opacity:1
});

// Back Button
var backBtn = Titanium.UI.createButton({
   title:'Back',
   width:75,
   height:20,
   top:5,
   left:5,
   opacity:1
});

var videoWin =  Ti.UI.createWindow({
	url:'video.js',
	height:Ti.Platform.displayCaps.platformHeight,
	width:Ti.Platform.displayCaps.platformWidth,
	fullscreen:true,
	navBarHidden:false
});

backBtn.addEventListener('click', function(e){
		Ti.App.fireEvent('backToExersizeList');  
});

playVideoButton.addEventListener('click', function(e){
		Ti.App.fireEvent('watchVideo');  
});

function watchExersizeVideo(e){
	videoWin.open();  
    //exersize.open(); 
}


win.add(scrollView);
win.add(infoButton);
win.add(playVideoButton);
win.add(backBtn);

Ti.App.addEventListener('watchVideo',watchExersizeVideo);
