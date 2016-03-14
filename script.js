$(document).ready(function(){

	var mq = window.matchMedia('screen and (min-width : 0px) and (max-width: 640px)');
	
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
		
		function setClick(){
			AboutClick = 0;
		  HomeClick = 0;
		  SkillsClick = 0;
		  GithubClick = 0;
		  ContactClick = 0;
		}

		function original (){
			$('.about').fadeIn().animate({width: aboutWidth, height:'33.3vh'});
			$('.projects').fadeIn().animate({width: projectsWidth, height: '33.3vh'});
			$('.skills').fadeIn().animate({width: skillsWidth, height: '33.3vh'});
			$('.home').fadeIn().animate({width: homeWidth, height: '33.3vh'});
			$('.contact').fadeIn().animate({width: contactWidth, height: '33.3vh'});
			$('.github').fadeIn().animate({width: githubWidth, height: '33.3vh'});
		};


		$('.home').click(function() {
			if (HomeClick==0){
				setClick();
				HomeClick=1;
				original();
				$('.about-content, .contact-content, .skills-content, .github-content').css('display', 'none');
				$('.about').animate({width:'0'}, 300);
				$('.about').fadeOut();
				$('.home').animate({width:'100%', height:'80vh'}, 300);
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
				$('.about').animate({width:'100%', height:'80vh'}, 300);
				$('.projects, .skills, .contact, .github').animate({height:'10vh'}, 300);
				$('.about-content').fadeIn();
				$('.title').addClass('titleTwo');
			}
			else{
				AboutClick=0;
				original();
				$('.content').fadeOut();
				$('.about').animate({width: aboutWidth, height:'33.3vh'}, 300);
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
				$('.skills').animate({width:'100%', height:'80vh'}, 300)
				$('.about, .home, .contact, .github').animate({height:'10vh'}, 300);
				$('.skills-content').fadeIn();
				$('.title').addClass('titleTwo');
			}
			else{
				SkillsClick=0;
				original();
				$('.content').fadeOut();
				$('.skills').animate({width: skillsWidth, height:'33.3vh'}, 300);
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
				$('.github').animate({width:'100%', height:'80vh'}, 300);
				$('.about, .home, .projects, .skills').animate({height:'10vh'}, 300);
				$('.github-content').fadeIn(400);
				$('.title').addClass('titleTwo');
			}
			else{
				GithubClick=0;
				original();
				$('.content').fadeOut();
				$('.github').animate({width: githubWidth, height:'33.3vh'}, 300);
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
				$('.contact').animate({width:'100%', height:'80vh'}, 300);
				$('.about, .home, .projects, .skills').animate({height:'10vh'}, 300);
				$('.contact-content').fadeIn(400);
				$('.title').addClass('titleTwo');
			}
			else{
				ContactClick=0;
				original();
				$('.content').fadeOut();
				$('.contact').animate({height:'33.3vh'}, 300);
				$('.github').fadeIn();
				$('.title').removeClass('titleTwo');
			}
		});

	} else {

	}g;

});

