$(document).ready(function(){

	var mq = window.matchMedia('screen and (min-width : 0px) and (max-width: 640px)');
	


	function setClick(){
		AboutClick = 0;
	  HomeClick = 0;
	  SkillsClick = 0;
	  GithubClick = 0;
	  ContactClick = 0;
	  ProjectsClick = 0;
	}

	if (mq.matches) {

		var AboutClick = 0;
		var HomeClick = 0;
		var SkillsClick = 0;
		var GithubClick = 0;
		var ContactClick = 0;

		var aboutWidth = '57%';
		var homeWidth = '40%';
		var projectsWidth = '67%';
		var skillsWidth = '30%';
		var githubWidth = '35%';
		var contactWidth = '62%';
		


		function original (){
			$('.about').fadeIn().animate({width: aboutWidth, height:'28vh'});
			$('.projects').fadeIn().animate({width: projectsWidth, height: '28vh'});
			$('.skills').fadeIn().animate({width: skillsWidth, height: '28vh'});
			$('.home').fadeIn().animate({width: homeWidth, height: '28vh'});
			$('.contact').fadeIn().animate({width: contactWidth, height: '28vh'});
			$('.github').fadeIn().animate({width: githubWidth, height: '28vh'});
		};


		$('.home').click(function() {
			if (HomeClick==0){
				setClick();
				HomeClick=1;
				original();
				$('.about-content, .contact-content, .skills-content, .github-content').css('display', 'none');
				$('.about').animate({width:'0'}, 300);
				$('.about').fadeOut();
				$('.home').animate({width:'100%', height:'64vh'}, 300);
				$('.projects, .skills, .contact, .github').animate({height:'10vh'}, 300);
				$('.home-content').fadeIn();
				$('.title').addClass('titleTwo');
			}
			else{
				HomeClick=0;
				original();
				$('.content').fadeOut();
				$('.about').fadeIn();
				$('.title').removeClass('titleTwo');
			}
		});

		$('.about').click(function() {
			if (AboutClick==0){
				setClick();
				AboutClick=1;
				original();
				$('.contact-content, .home-content, .skills-content, .github-content').css('display', 'none');
				$('.home').animate({width:'0'},300);			
				$('.home').fadeOut();
				$('.about').animate({width:'100%', height:'64vh'}, 300);
				$('.projects, .skills, .contact, .github').animate({height:'10vh'}, 300);
				$('.about-content').fadeIn();
				$('.title').addClass('titleTwo');
			}
			else{
				AboutClick=0;
				original();
				$('.content').fadeOut();
				$('.about').animate({width: aboutWidth, height:'28vh'}, 300);
				$('.home').fadeIn();
				$('.home').animate({width: homeWidth});
				$('.title').removeClass('titleTwo');
			}
		});

		$('.skills').click(function() {
			if (SkillsClick==0){
				setClick();
				SkillsClick=1;
				original();
				$('.about-content, .home-content, .contact-content, .github-content').css('display', 'none');
				$('.projects').animate({width:'0'}, 300);
				$('.projects').fadeOut();
				$('.skills').animate({width:'100%', height:'64vh'}, 300)
				$('.about, .home, .contact, .github').animate({height:'10vh'}, 300);
				$('.skills-content').fadeIn();
				$('.title').addClass('titleTwo');
			}
			else{
				SkillsClick=0;
				original();
				$('.content').fadeOut();
				$('.skills').animate({width: skillsWidth, height:'28vh'}, 300);
				$('.projects').fadeIn();
				$('.projects').animate({width:projectsWidth});
				$('.title').removeClass('titleTwo');
			}
		});

		$('.github').click(function() {
			if (GithubClick==0){
				setClick();
				GithubClick=1;
				original();
				$('.about-content, .home-content, .skills-content, .contact-content').css('display', 'none');
				$('.contact').animate({width:'0'}, 200)
				$('.contact').fadeOut();
				$('.github').animate({width:'100%', height:'64vh'}, 300);
				$('.about, .home, .projects, .skills').animate({height:'10vh'}, 300);
				$('.github-content').fadeIn(400);
				$('.title').addClass('titleTwo');
			}
			else{
				GithubClick=0;
				original();
				$('.content').fadeOut();
				$('.github').animate({width: githubWidth, height:'28vh'}, 300);
				$('.contact').fadeIn();
				$('.title').removeClass('titleTwo');
			}
		});

		$('.contact').click(function() {
			if (ContactClick==0){
				setClick();
				ContactClick=1;
				original();
				$('.about-content, .home-content, .skills-content, .github-content').css('display', 'none');
				$('.github').animate({width:'0'}, 200)
				$('.github').fadeOut();
				$('.contact').animate({width:'100%', height:'64vh'}, 300);
				$('.about, .home, .projects, .skills').animate({height:'10vh'}, 300);
				$('.contact-content').fadeIn(400);
				$('.title').addClass('titleTwo');
			}
			else{
				ContactClick=0;
				original();
				$('.content').fadeOut();
				$('.contact').animate({height:'28vh'}, 300);
				$('.github').fadeIn();
				$('.title').removeClass('titleTwo');
			}
		});











	} else {











		// function originalTwo (){
			// $('.about').fadeIn().animate({width: '50%', height:'36vh'});
			// $('.projects').fadeIn().animate({width: '100%', height: '20vh'});
			// $('.skills').fadeIn().animate({width: '33.3%', height: '36vh'});
			// $('.home').fadeIn().animate({width: '50%', height: '36vh'});
			// $('.contact').fadeIn().animate({width: '33.3%', height: '36vh'});
			// $('.github').fadeIn().animate({width: '33.3%', height: '36vh'});
		// };




		var SkillsClick = 0;
		var ProjectsClick = 0;
		var AboutClick = 0;
		var HomeClick = 0;
		var ContactClick = 0;

		$('.block').mouseover(function(){
			$(this).css({'color':'black','font-size':'1.2em'});
		});

		$('.block').mouseout(function(){
			$(this).css({'color':'white','font-size':'1em'});
		});

		$('.skills').click(function() {
			if (SkillsClick==0){
				setClick();
				SkillsClick=1;
				// originalTwo();
				$('.skills').animate({height:'80vh'});
				$('.github, .contact').animate({width:'66.7%'});
				$('.home, .about, .projects').animate({height: '10vh'});
			}
			else{
				SkillsClick=0;
				// originalTwo();
				$('.github, .contact').animate({width:'33.3%'});
				$('.home, .about, .skills').animate({height: '36vh'});
				$('.projects').animate({height: '20vh'});
			}
		});

		$('.projects').mouseover(function(){
			$('#expand-projects').stop().animate({ "opacity": 1 });
		}).mouseout(function(){
			$('#expand-projects').stop().animate({ "opacity": 0 }, 1);
		})

		$('#expand-projects').click(function() {
			if (ProjectsClick==0){
				setClick();
				ProjectsClick=1;
				// originalTwo();
				$('#expand-projects').html("<h1>X</h1>");
				$('.projects').animate({height:'100%'});
				$('.github, .contact, .skills').fadeOut();
				$('.home, .about').animate({height: '10vh'});
				$('.projects-content').fadeIn();
			}
			else{
				ProjectsClick=0;
				// originalTwo();
				$('#expand-projects').animate({ "opacity": 0 }, 1);
				$('.projects').delay(300).animate({height: '20vh'}, 300);
				$('.github, .contact, .skills').fadeIn();
				$('.home, .about, .skills').delay(300).animate({height: '36vh'}, 300);
				$('.projects-content').fadeOut();
				$('#expand-projects').html("<h3>Click me to expand!</h3>");
			}
		});




	};

});

