var win 			= Ti.UI.currentWindow;

var instrusctorWin		= Ti.UI.createWindow({
	url:'instructor.js',
	height:Ti.Platform.displayCaps.platformHeight,
	width:Ti.Platform.displayCaps.platformWidth,
	fullscreen:true,
	navBarHidden:true

});
var workoutWin		= Ti.UI.createWindow();
var exersizeWin	= Ti.UI.createWindow({
	url:'exersizes.js',
	height:Ti.Platform.displayCaps.platformHeight,
	width:Ti.Platform.displayCaps.platformWidth,
	fullscreen:true,
	navBarHidden:true	
});
var aboutWin		= Ti.UI.createWindow();

var navTab =  Ti.UI.createTabGroup();

var instructorTab = Titanium.UI.createTab({
	title:'Instructor',
	icon:'../assets/icons/instructors.png',
	 window:instrusctorWin
});
var workoutTab = Titanium.UI.createTab({
	title:'Workout',
	icon:'../assets/icons/workouts.png'
});
var exersizeTab = Titanium.UI.createTab({
	title:'Exersizes',
	icon:'../assets/icons/exersizes.png',
	window:exersizeWin
});
var aboutTab = Titanium.UI.createTab({
	title:'About',
	icon:'../assets/icons/about.png'
});
//-- Add tabs to nav Group
navTab.addTab(instructorTab);
navTab.addTab(workoutTab);
navTab.addTab(exersizeTab);
navTab.addTab(aboutTab);

win.add(navTab);
navTab.open();	

