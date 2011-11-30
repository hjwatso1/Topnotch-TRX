var win 			= Ti.UI.currentWindow;

var tv = Ti.UI.createTableView({
	minRowHeight:50,
	top:50,
	height:Ti.Platform.displayCaps.platformHeight-50,
});

var text1 = 'Name of Exersize';
var text2 = 'Area';
var text3 = 'Reps/Time';

var data = [];

var introTextView =  Ti.UI.createView({
		width:Ti.Platform.displayCaps.platformWidth,
		top:0,
		height:30,
		opacity:1
});
var introText = Ti.UI.createLabel({
		text:'Choose an Exersize',
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
		height:'auto',
		left:10
		
})

introTextView.add(introText);


for (var i=0;i<50;i++)
{
	var row = Ti.UI.createTableViewRow({height:'auto',className:"row"});
	
	var textView = Ti.UI.createView({
		height:'auto',
		layout:'vertical',
		left:70,
		top:10,
		bottom:10,
		right:10
	});
	
	var l1 = Ti.UI.createLabel({
		text:text1,
		height:'auto'
		
	});
	textView.add(l1);

	var l2 = Ti.UI.createLabel({
		text:text2,
		top:10,
		height:'auto'
	});
	textView.add(l2);

	var l3 = Ti.UI.createLabel({
		text:text3,
		top:10,
		height:'auto'
	});
	textView.add(l3);
	
	row.add(textView);
	
	var imageView = Ti.UI.createImageView({
		image:'../images/custom_tableview/user.png',
		left:10,
		top:10,
		height:50,
		width:50
	});
	
	row.add(imageView);
	
	row.addEventListener('click', function(e){
		Ti.App.fireEvent('showStep');  
	})
	
	data.push(row);
}
tv.setData(data);

win.add(tv);
win.add(introTextView);

//-- other windows
var stepByStep =  Ti.UI.createWindow({
	url:'stepbystep.js',
	height:Ti.Platform.displayCaps.platformHeight,
	width:Ti.Platform.displayCaps.platformWidth,
	fullscreen:true,
	navBarHidden:false
});



function openStepByStep(e){
	//exersize.close();  
    stepByStep.open();
   
  
}
function backToExersizeList(e){
	stepByStep.close();  
    //exersize.open(); 
}

//-- Navigational EventListeners
Ti.App.addEventListener('showStep',openStepByStep);
Ti.App.addEventListener('backToExersizeList',backToExersizeList);

