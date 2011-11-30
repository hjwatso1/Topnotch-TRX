Titanium.UI.setBackgroundColor('#2178fa');

//-- Create our main window that will contain all our sub windows
var main = Ti.UI.createWindow({
	url:'main_windows/main.js',
	height:Ti.Platform.displayCaps.platformHeight,
	width:Ti.Platform.displayCaps.platformWidth,
	fullscreen:true,
	navBarHidden:true
});

main.open();

