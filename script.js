$(document).ready(function(){

	var mq = window.matchMedia('screen and (min-width : 0px) and (max-width: 640px)');

	var AboutClick = 0;
	var HomeClick = 0;
	var SkillsClick = 0;
	var GithubClick = 0;
	var ContactClick = 0;
	var ProjectsClick = 0;
	var Clicker = 0;

	function setClick(){
		AboutClick = 0;
	  HomeClick = 0;
	  SkillsClick = 0;
	  GithubClick = 0;
	  ContactClick = 0;
	  ProjectsClick = 0;
	}

	if (mq.matches) {

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
				$('.home-content').delay(500).fadeIn(1000);
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
				$('.about-content').delay(500).fadeIn(1000);
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


		$('#expand-projects').click(function() {
			if (ProjectsClick==0){
				ProjectsClick=1;
				$('.projects').animate({height:'90vh', width:'100%'});
				$('.projects-title').addClass('fixed-title');
				$('.github, .contact, .skills, .home, .about').fadeOut();
				$('.project').delay(500).fadeIn(1000);
			}
			else{
				ProjectsClick = 0;
				$('.project').fadeOut();
				$('.projects-title').removeClass('fixed-title');
				original()
			}
		});

		$('.html-project').click(function(){
			if (Clicker == 0){
				Clicker = 1;
				$('.html-project').animate({height:'500px'});
				$('.html-img').css('display', 'block');
			}
			else{
				Clicker = 0;
				$('.html-project').animate({height:'60px'});
				$('.html-img').css('display', 'none');
			}
		});
		$('.clock-project').click(function(){
			if (Clicker == 0){
				Clicker = 1;
				$('.clock-project').animate({height:'500px'});
				$('.clock-img').css('display', 'block');
			}
			else{
				Clicker = 0;
				$('.clock-project').animate({height:'60px'});
				$('.clock-img').css('display', 'none');
			}
		});

		$('.modal-project').click(function(){
			if (Clicker == 0){
				Clicker = 1;
				$('.modal-project').animate({height:'500px'});
				$('.modal-img').css('display', 'block');
			}
			else{
				Clicker = 0;
				$('.modal-project').animate({height:'60px'});
				$('.modal-img').css('display', 'none');
			}
		});

		$('.darin-project').click(function(){
			if (Clicker == 0){
				Clicker = 1;
				$('.darin-project').animate({height:'500px'});
				$('.darin-img').css('display', 'block');
			}
			else{
				Clicker = 0;
				$('.darin-project').animate({height:'60px'});
				$('.darin-img').css('display', 'none');
			}
		});

		$('.rails-project').click(function(){
			if (Clicker == 0){
				Clicker = 1;
				$('.rails-project').animate({height:'500px'});
				$('.rails-img').css('display', 'block');
			}
			else{
				Clicker = 0;
				$('.rails-project').animate({height:'60px'});
				$('.rails-img').css('display', 'none');
			}
		});


		$('.skills').click(function() {
			if (SkillsClick==0){
				setClick();
				SkillsClick=1;
				original();
				$('.about-content, .home-content, .contact-content, .github-content').css('display', 'none');
				$('.projects').animate({width:'0'}, 100);
				$('.projects').fadeOut();
				$('.skills').animate({width:'100%', height:'64vh'}, 300)
				$('.about, .home, .contact, .github').animate({height:'10vh'}, 300);
				$('.skills-content').delay(500).fadeIn(1000);
				$('.title').addClass('titleTwo');
			}
			else{
				SkillsClick=0;
				$('.content').fadeOut();
				$('.skills').animate({width: skillsWidth, height:'28vh'});
				original();
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
				$('.github-content').delay(500).fadeIn(1000);
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
				$('.contact-content').delay(500).fadeIn(1000);
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











		function originalTwo (){
			$('.about').fadeIn().animate({width: '50%', height:'36vh'},200);
			$('.projects').fadeIn().animate({width: '100%', height: '20vh'},200);
			$('.skills').fadeIn().animate({width: '33.3%', height: '36vh'},200);
			$('.home').fadeIn().animate({width: '50%', height: '36vh'},200);
			$('.contact').fadeIn().animate({width: '33.3%', height: '36vh'},200);
			$('.github').fadeIn().animate({width: '33.3%', height: '36vh'},200);
		};



		$('.block').mouseover(function(){
			$(this).css({'color':'black','font-size':'1.2em'});
		});

		$('.block').mouseout(function(){
			$(this).css({'color':'white','font-size':'1em'});
		});


		$('.home').click(function() {
			if (HomeClick==0){
				if(SkillsClick == 1){
					originalTwo();
				};
				setClick();
				HomeClick=1;
				$('.projects-content').css('display','none');
				$(this).animate({width: '100%', height: '95vh'});
				$('.contact, .about, .projects, .skills, .github').toggle();
				$('.home-content').delay(500).fadeIn(1000);
			}
			else{
				HomeClick=0;
				$(this).animate({width: '50%', height: '36vh'});
				originalTwo();
				$('.content').fadeOut();
			}
		});

		$('.about').click(function() {
			if (AboutClick==0){
				if ((ProjectsClick == 1)||(SkillsClick == 1)){
					originalTwo();
				};
				setClick();
				AboutClick=1;
				$('.projects-content').css('display','none');
				$('.about').css('float','right');
				$('.projects').animate({width:'50%'});
				$('.about').animate({height: '56vh'});
				$('.about-content').delay(500).fadeIn(1000);
			}
			else{
				AboutClick=0;
				$('.projects').animate({width:'100%'});
				$('.about').animate({height: '36vh'});
				$('.content').fadeOut();
			}
		});

		$('.projects, .projects-content, #expand-projects, .projects-title').mouseover(function(){
			$('#expand-projects').finish().animate({ "opacity": 1 });
		}).mouseout(function(){
			$('#expand-projects').finish().animate({ "opacity": 0 }, 0);
		})

		$('#expand-projects').click(function() {
			if (ProjectsClick==0){
				if ((SkillsClick == 1) || (AboutClick ==1)){
					originalTwo();					
				};
				setClick();
				ProjectsClick=1;
				$('.projects').animate({height:'100%'});
				$('.github, .contact, .skills').fadeOut();
				$('.home, .about').animate({height: '10vh'});
				$('.projects-content').delay(500).fadeIn(1000);
			}
			else{
				ProjectsClick=0;
				originalTwo();
				$('#expand-projects').finish().animate({ "opacity": 0 }, 1);
				$('.projects').delay(300).animate({height: '20vh'}, 300);
				$('.github, .contact, .skills').fadeIn();
				$('.home, .about, .skills').delay(300).animate({height: '36vh'}, 300);
				$('.content').fadeOut();
			}
		});

		$('.skills').click(function() {
			if (SkillsClick==0){
				if (AboutClick == 1){
					originalTwo();		
				}
				setClick();
				SkillsClick=1;
				$('.skills').animate({height:'80vh'});
				$('.github, .contact').animate({width:'66.7%'});
				$('.home, .about, .projects').animate({height: '10vh'});
				$('.skills-content').delay(500).fadeIn(1000);
			}
			else{
				SkillsClick=0;
				$('.github, .contact').animate({width:'33.3%'});
				$('.home, .about, .skills').animate({height: '36vh'});
				$('.projects').animate({height: '20vh'});
				$('.content').fadeOut();
			}
		});

		$('.contact').click(function() {
			if (ContactClick==0){
				if ((SkillsClick == 1) || (AboutClick ==1)){
					originalTwo();					
				};				
				setClick();
				ContactClick=1;
				$(this).addClass('fixed');
				$(this).animate({width: '100%', height: '95vh'});
				$('.home, .about, .projects, .skills, .github').toggle();
				$('.contact-content').delay(500).fadeIn(1000);
			}
			else{
				ContactClick=0;
				$(this).animate({width: '33.3%', height: '36vh'});
				originalTwo();
				$('.content').fadeOut();
				setTimeout(function() {
					$('.contact').removeClass('fixed');
				}, 500);
			}
		});



	};

});

