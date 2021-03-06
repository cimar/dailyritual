function mover(d) {

  testingClick = d
 // locationMouse = [e.clientX+window.pageXOffset,e.clientY+window.pageYOffset] 
  
  locationMouse = [d3.event.pageX,d3.event.pageY]
  trans = [0,0]
  scale = 1
  
  time = d.timeZone-(d.timeZone>12 ? 12:0)  
  timeDay =  (d.timeZone>=12 ? "PM":"AM")
  if(d.timeZone == 24) timeDay = "AM"
  time = time+" "+timeDay
  
  progDisplay = d.people
  if(donutChart) {
    time = Math.round(d.percentage*100)+"%"
          progDisplay =[""]
    }
  
  
  displayOut = "<table>"
  for(i = 0; i<progDisplay.length;i++){
    temp = progDisplay[i]
    displayOut = displayOut+"<tr><td>"+temp+"</td></tr>"
  }
  displayOut = displayOut+"</table>"
  
  $("#descRightContent").html(displayOut)
  $("#pop-up").fadeOut(100,function () {
    if(scale == null){
      scale = 1
      }
   
    $("#pop-up-title").html(d.name+": "+time);
    $("#pop-desc").html(displayOut);
    // Popup position
   
    var popLeft = (locationMouse[0]-trans[0])*scale//+295;
    var popTop = (locationMouse[1]-trans[1])*scale//+220;
    
    leftChange = 50
    if(locationMouse[0]>760){
      leftChange = -300  
    }
    
    topChange = 50
    if(popTop>480){
      topChange = -100
    }
    
    popLeft = popLeft+leftChange
    popTop = popTop+topChange
  
    $("#pop-up").css({"left":popLeft,"top":popTop});
    if(progDisplay.length>0){
      $("#pop-up").fadeIn(10);
    }
  });

}

function mout(d) {
   $(".description").css("visibility","hidden")
   $("#pop-up").fadeOut(0);
  
 
}
  