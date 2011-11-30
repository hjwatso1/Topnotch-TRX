var win 			= Ti.UI.currentWindow;

//-- Our instructor views
var gem 		= Ti.UI.createView({width:282,height:380,backgroundImage:'../assets/images/instructors/gem.png'});
var emma 		= Ti.UI.createView({width:282,height:380,backgroundImage:'../assets/images/instructors/emma.png'});
var charlie 	= Ti.UI.createView({width:282,height:380,backgroundImage:'../assets/images/instructors/charlie.png'});
var clair 		= Ti.UI.createView({width:282,height:380,backgroundImage:'../assets/images/instructors/clair.png'});
var charlie 	= Ti.UI.createView({width:282,height:380,backgroundImage:'../assets/images/instructors/charlie.png'});

//-- Crust title
var titleText = Ti.UI.createLabel({
	text:'Choose an instructor',
	font:{
		fontFamily:'Arial',
		fontWeight:'bold',
		fontSize:18
	},
	color:'#A90329',
	shadowColor:'#333',
	shadowOffset:{x:1,y:1},
	textAlign:'left',
	width:Ti.Platform.displayCaps.platformWidth,
	height:30,
	left:10
});
//-- Crust title background
var instructorTitleView = Ti.UI.createView({
	width:Ti.Platform.displayCaps.platformWidth,
	height:30,
	top:20,
	left:-6,
	opacity:0
});
instructorTitleView.add(titleText);

var scrollView = Ti.UI.createScrollableView({
	views:[gem,emma,charlie,clair,charlie],
	showPagingControl:true,
	clipViews:false,
	top:63,
	left:30,
	right:30,
	height:380,
	opacity:0
});

win.add(instructorTitleView);
win.add(scrollView)

//-- Fade the crust title in
instructorTitleView.animate({
	opacity:1,
	duration:500
});
scrollView.animate({
	opacity:1,
	duration:500
});