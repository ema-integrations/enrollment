// Add the current selector to the on-demand menu item if in these directories

$(document).ready(function() {
    if (window.location.href.indexOf("member-schools") > -1) {
		setTimeout(function(){
			let myFirstLink = document.getElementById('about');
            myFirstLink.className += (" w--current");
		  }, 100);
	} 
    if (window.location.href.indexOf("meet-our-team") > -1) {
		setTimeout(function(){
			let mySecondLink = document.getElementById('about');
			mySecondLink.className += (" w--current");
		  }, 100);
	} 	
    if (window.location.href.indexOf("who-we-are") > -1) {
		setTimeout(function(){
			let mySecondLink = document.getElementById('about');
			mySecondLink.className += (" w--current");
		  }, 100);
	} 	
    // if (window.location.href.indexOf("tips") > -1) {
	// 	setTimeout(function(){
	// 		let mySecondLink = document.getElementById('nav-advice');
	// 		mySecondLink.className += (" w--current");
	// 	  }, 100);
	// } 	
	// if (window.location.href.indexOf("events") > -1) {
	// 	setTimeout(function(){
	// 		let myThirdLink = document.getElementById('nav-events');
    //         myThirdLink.className += (" w--current");
	// 	  }, 100);
    // }
    // if (window.location.href.indexOf("services") > -1) {
	// 	setTimeout(function(){
	// 		let myFourthLink = document.getElementById('nav-services');
	// 		myFourthLink.className += (" nav-current");
	// 	  }, 100);
    // }
    // if (window.location.href.indexOf("help") > -1) {
	// 	setTimeout(function(){
	// 		let myFifthLink = document.getElementById('nav-help');
    //         myFifthLink.className += (" w--current");
	// 	  }, 100);
    // }
    // if (window.location.href.indexOf("hc") > -1) {
	// 	setTimeout(function(){
	// 		let myFifthLink = document.getElementById('nav-help');
    //         myFifthLink.className += (" w--current");
	// 	  }, 100);
    // }

    else {
		// nothing to do here, intentionally left blank
	}
  });

  