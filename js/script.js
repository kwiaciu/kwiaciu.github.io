// load animations
$(window).on('load', function() {
	setTimeout(function() {	
	$('main').removeClass('hidden');
	$('.spinner').addClass('hidden');
	contactFadeHandler();
	contactOverlayHandler();
	clickProjectHandler();
	flipSkillHandler();
	scrollAnimationHandler();
	// skillClickHandler();

	$('.welcome').children().addClass('roll-left-anim').removeClass('hidden');
	$('.welcome').addClass('fade-in').removeClass('hidden');
	$('#contact').addClass('fade-in').removeClass('fade-out hidden');


	$('.projects-grid li').find('h5, footer, p').slideUp();


	// addDelaysToProjects($('.projects-grid'));
	// addDelaysToSkills($('#skills ul'));
	// addDelaysToSkillsCategories($('#skills'));
},500);


});

// 3 functions that do almost the same thing. Started with one, but then find one that making it universal would be too much pain
function addDelaysToProjects(arrayOfElements) {
	for (var i = arrayOfElements.children('li').length; i > 0; i--) {
		// console.log(arrayOfElements);
		let oneLi = arrayOfElements.children('li:nth-child('+i+')');
		let delay = 'transform 0.5s cubic-bezier(.25,.46,.45,.94) '+(0.1 * i)+'s,opacity 0.5s cubic-bezier(.25,.46,.45,.94) '+(0.1 * i)+'s, height 0.5s linear';
		oneLi.css('transition', delay);
	}
}

function addDelaysToSkillsCategories(arrayOfElements) {
	for (var i = 2; arrayOfElements.children('li').length +1>= i; i++) {
		// console.log(arrayOfElements.children('li').length);
		let oneLi = arrayOfElements.children('li:nth-child('+i+')');
		let delay = 'background-color 0.5s linear, opacity 0.1s cubic-bezier(.25,.46,.45,.94) '+(.2 * i)+'s, transform 0.7s cubic-bezier(.25,.46,.45,.94) '+(.2 * i)+'s';
		oneLi.css('transition', delay);
	}
}

function addDelaysToSkills(arrayOfElements) {
	for (var i = arrayOfElements.children('li').length; i > 0; i--) {
		let oneLi = arrayOfElements.children('li:nth-child('+i+')');
		let delay = 'background-color 0.5s linear, opacity 0.1s cubic-bezier(.25,.46,.45,.94) '+(.25 * i)+'s, transform 0.7s cubic-bezier(.25,.46,.45,.94) '+(.25 * i)+'s';
		oneLi.css('transition', delay);
	}
}





// make projects bigger on click
function clickProjectHandler() {

	// project li handle hover
	// $('.projects-grid li').hover(function() {
	// 	const element = $(this);
	// 	// element.find('h5, footer').slideDown();
	// }, function() {
	// 	const element = $(this);
	// 	if (!element.hasClass('clicked')) {
	// 		// element.find('h5, footer').slideUp();
	// 	}

	// });

	// handle click
	$('.projects-grid li').on('mousedown',function() {
		const element = $(this);
		// $('.projects-grid').children('li').find('h5, footer').addClass('hidden');
		if (element.hasClass('clicked')) {
			$('.projects-grid').children('li').removeClass('clicked');
			$('.projects-grid').children('li').find('p, h5, footer').slideUp();
		} else {
		$('.projects-grid').children('li').removeClass('clicked');
		$('.projects-grid').children('li').find('p, h5, footer').slideUp();
		element.addClass('clicked');
		element.find('p, h5, footer').slideDown();

		// element.find('h4').css('font-size', '1.5rem');
		}

});
}


function skillClickHandler() {
	$('.skill').on('click', function (event) {
		const element = $(this);
		element.css("transform","scale(0.1)").css("opacity","0");
		// $('#skills ul').children('li').css("transform","scale(1)").css("opacity","100");
		// $('#skills').children('li').css("transform","scale(1)").css("opacity","100");
	});
}
	// event.stopPropagation()
	// const elementId = $(this).attr('id');
	// console.log(elementId);


// change one div to another when hovered
function flipSkillHandler() {
	if ($('#skills').css('position') !== 'static') {
		$('.flip').hover(function(e) {
		e.stopPropagation();
		const element = $(this).first();
		// element.find('h4').addClass('flip-out-hor-top');
		element.find('.front').first().css("transform","rotateX(90DEG)");
		setTimeout(function() {	element.find('.back,.icon').first().css("transform","rotateX(0DEG)"); },100);
		setTimeout(function() {	element.find('.front').first().css("transform","rotateX(90DEG)"); },200);

		
	}, function(e) {
		e.stopPropagation();
		let element = $(this).first();
		setTimeout(function() {	element.find('.back,.icon').first().css("transform","rotateX(-90DEG)"); },100);
		setTimeout(function() {	element.find('.front').first().css("transform","rotateX(0DEG)"); },200);
	});
} else {
	$('.mobile').toggleClass('hidden');
}

}



function scrollAnimationHandler() {
	$('main').on('scroll', function() {
		let position = $('main').scrollTop();
		console.log(parseInt(position - $(window).height()));
		console.log($('.welcome').height()+$('.about').height()+$('.projects').height()+$('.skills').height());

		// 2 page
		if (position >= $('.welcome').height()*0.85) {
			// $('.about').children('aside').removeClass('hidden');
			$('.about').children('div').addClass('fade-in').removeClass('hidden');

		}	

		// 3 page
		if (position >= $('.welcome').height()+$('.about').height()*0.85) {
			$('.projects-grid').children('li').css("transform","translateY(0px)").css("opacity","100");
			$('.projects h3').css("transform","translateY(0px)").css("opacity","100");
		}	

		// 4 page
		if ((position >= $('.welcome').height()+$('.about').height()+$('.projects').height()*0.8) || parseInt(position + $(window).height()) == parseInt($('.welcome').height()+$('.about').height()+$('.projects').height()+$('.skills').height()) ){
			$('#skills ul').children('li').css("transform","scale(1)").css("opacity","100");
			$('#skills').children('li').css("transform","scale(1)").css("opacity","100");
			$('main').off('scroll');
			contactFadeHandler();
		}

	});
}


// contact fading
function contactFadeHandler() {
	$('main').on('scroll', function() {
	$('#contact').addClass('fade-out').removeClass('fade-in');
	setTimeout(function () {
		$('#contact').addClass('fade-in').removeClass('fade-out hidden');

	}, 1500);

	});
}

//  overlay control
function contactOverlayHandler() {
	//open overlay on clicking contact
	$('#contact').on('click', function() {
		$("#contact").addClass('fade-out').removeClass('fade-in');
		$('#overlay').addClass('fade-in').removeClass('fade-out hidden');
	});

	//	close overlay if click outside content
	$('#overlay').on('mouseup', function(event) {
        var isClickInside = document.getElementById('content').contains(event.target);

        if (!isClickInside) {
			$("#contact").addClass('fade-in').removeClass('fade-out');
			$('#overlay').addClass('fade-out').removeClass('fade-in');
			setTimeout(function() {
				$('#overlay').addClass('hidden')},200);
	     }
	});
}



// dragging skill
function dragElement(elmnt) {
	console.log(elmnt);
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}