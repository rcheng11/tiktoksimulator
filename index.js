var username = ""
var followers = 0;
var videos = [];
var playing = true;

function play(){
  username = prompt("Welcome to Tiktok Simulator! Enter a username:");
  while(playing == true){
      var input = prompt("Welcome " + username + ". What would you like to do? Type 'video' to post a video, type 'info' to get account stats, type 'feed' to see your past videos, and type 'stop' to stop playing");
      if(input.toLowerCase() == "video"){
  		addVideo();
  	}
  	else if(input.toLowerCase() == "stop"){
  		info();
  		playing = false
  	}
  	else if(input.toLowerCase() == "feed"){
  		feed();
  	}
  	else if(input.toLowerCase() == "info"){
          info();
       }
  	else{
  		alert("Sorry I did not understand. Try again.")
  	}
  }
}

function randomPercent(lower,upper){
    return Math.floor(Math.random()*(upper-lower+1)+lower)/100;
}
function chance(percent){
  return Math.floor(Math.random()*101) <= percent;
}
function addVideo(){
  var title = prompt("What is your video about?");
  var followerViews = Math.floor(followers*randomPercent(1,40));
  var additionalViews = Math.floor(Math.random()*(3*followers+100));
  var views = followerViews + additionalViews;
  if(chance(5)){
    views += Math.floor(Math.random()*(2000000-5000) + 5000);
  }
  var likes = Math.floor(views*randomPercent(10,50));
  var newFollowers = Math.floor(likes*randomPercent(5,15));
  followers += newFollowers;
  videos.push([title, views, likes]);
  alert("Your video got " + views + " views and " + likes + " likes. You got " + newFollowers + " new followers");
}
function feed(){
  var videoString = ""
  for(var i = 0; i < videos.length;i++){
    var title = videos[i][0];
    var views = videos[i][1];
    var likes = videos[i][2];
    videoString += title + " | " + views + " ▶️ | " + likes + " ♥️\n";
  }
  alert(videoString)
}
function info(){
  var totalViews = 0;
  var totalLikes = 0;
  for(var i = 0; i < videos.length; i++){
    var views = videos[i][1];
    var likes = videos[i][2];
    totalViews += views;
    totalLikes += likes;
  }
  alert("Analytics for " + username + ":\n - " + followers + " followers\n - " + totalViews + " lifetime views\n - " + totalLikes + " total likes")
}
