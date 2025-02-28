<!DOCTYPE html>
<html lang="uk">

<head>

	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<meta name="author" content="SemiColonWeb" />

	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Raleway:wght@400;500;700&display=swap"
		rel="stylesheet">

	<!-- Stylesheets
	============================================= -->
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<link rel="stylesheet" href="css/bootstrap.css" type="text/css" />
	<link rel="stylesheet" href="style.css" type="text/css" />
	<link rel="stylesheet" href="css/font-icons.css" type="text/css" />

	<link rel="stylesheet" href="css/common.css" type="text/css" />
	<link rel="stylesheet" href="css/block.courses.css" type="text/css" />
	<link rel="stylesheet" href="css/block.feedback.css" type="text/css" />
	<link rel="stylesheet" href="css/footer.css" type="text/css" />
	<link rel="stylesheet" href="css/header.css" type="text/css" />
	<link rel="stylesheet" href="css/block.hero-image.css" type="text/css" />
	<link rel="stylesheet" href="css/block.why_we.css" type="text/css" />
	<link rel="stylesheet" href="css/block.write_to_us.css" type="text/css" />
	<link rel="stylesheet" href="css/block.courses_detailes.css" type="text/css" />
	<link rel="stylesheet" href="css/block.courses_detailes.accordion.css" type="text/css" />
	<link rel="stylesheet" href="css/block.about_us.css" type="text/css" />
	<link rel="stylesheet" href="css/intlTelInput.css">


	<!-- Document Title
	============================================= -->
	<title>QAX Camp - About Us</title>
	<link rel="icon" type="image/png" href="favicon.png">

	<script>
		function readTextFile(file, callback) {
			var rawFile = new XMLHttpRequest();
			rawFile.overrideMimeType("application/json");
			rawFile.open("GET", file, true);
			rawFile.onreadystatechange = function () {
				if (rawFile.readyState === 4 && rawFile.status == "200") {
					callback(rawFile.responseText);
				}
			}
			rawFile.send(null);
		}

		//usage:
		readTextFile("env.json",
			function (text) {
				var data = JSON.parse(text);
				/* console.log(data); */
				sessionStorage.setItem('facebookLink', data.facebookLink);
				sessionStorage.setItem('envName', data.envName);
				sessionStorage.setItem('tokenID', data.telega.tokenID);
				sessionStorage.setItem('chatID', data.telega.chatID);
			});
	</script>

</head>

<body class="stretched">

	<!-- Document Wrapper
	============================================= -->
	<div id="wrapper" class="clearfix">

		<!-- Header
		============================================= -->
		<header class="header">
			<div class="header-menu" id="header-block">
				<a href="index.php"><img src="images/Logo_Small.svg" alt="Logo" id="logo"></a>

				<a href="courses.php?course=qa&name=qa_practice" class="header-menu header-menu-links">Курси</a>

				<a href="about_us.php"  class="header-menu header-menu-links" id="menu-link-about-us">Про нас</a>

				<a href="our_trainers.php"  class="header-menu header-menu-links">Наші Тренери</a>


				<!--
				<div><a href="#" class="language">UA|RU</a></div>
				-->

				<a href="#write_to_us">
					<!-- <a href="https://t.me/RecrutMan"> -->
					<div id="sendButtonText">Записатися</div>
				</a>


				<div id="letter-icon"><a href="#write_to_us"><img src="images/letter-icon.svg" alt="letter"></a></div>

				<div class="burger-icon" onclick="myFunction(this)">
						<div class="bar1"></div>
						<div class="bar2"></div>
						<div class="bar3"></div>
				</div>

				<div id="mobile-menu-fullscreen">
				<a href="courses.php?course=qa&name=qa_practice" class="header-menu-mobile">Курси</a>

					<a href="about_us.php" class="header-menu-mobile">Про нас</a>

					<a href="our_trainers.php" class="header-menu-mobile">Наші тренери</a>

					<a href="index.php#write_to_us">
					<!-- <a href="https://t.me/RecrutMan"> -->
					<div id="sendButtonText-mobile" onclick="goToForm()">Записатися</div></a>
		    	</div>
			</div>
		</header><!-- #header end -->

		<!-- Page Title
		============================================= -->



		<!-- Content
		============================================= -->
		<section id="content">
			<div class="content-wrap" id="about_us">
				<div class="about_us_main_block container clearfix">
					<div id="about_us_content">
						<h3 class="about_us_titles">Що таке Camp?</h3>
							<div class="about_us_text">

							Camp - це простір для розвитку, де учасники навчаються кожен своїй ролі. Ким ти хотів стати: 
							BA, PM, QA, Recruitment.. ? 
							Обирай професію, ставай частиною продуктової команди і вперед за результатом! :) <br><br>
							

							
							<div id="about_us_quotation1"><span>Томас Едісон зробив більш ніж 1000 невдалих спроб перед тим, як винайти лампочку розжарювання</span></div>
							
							<br>
							Camp - це тренувальна платформа, де ти можеш відшліфувати навички до досконалості, 
							при цьому не боячись робити помилок! 
							Camp створений саме для цього: ми заохочуємо робити їх чимбільше! :)<br><br>
								
							Camp - це реальний досвід роботи, про який ти сміливо можеш розповідати під час інтерв'ю. 
							Після Camp ти вже не “новачок”, а фахівець із досвідом роботи - це крутіше, чи не так? :)
							</div>

						<h3 class="about_us_titles">Як це працює?</h3>

							<div class="about_us_text">Ми розробляємо проєкти! <br><br>
								У нас є декілька проєктів, навколо яких тяжіє решта активностей. 
								Над проєктами працюють продуктові команди у складі 
								PO, BA, PM, Dev, UI-UX, QA.<br><br>
							
							
							<div id="about_us_quotation2" ><span>Наша ДНК  -  це практика</span></div>
							
							<br>
							Кожен відповідає за свою ділянку роботи. Тут немає “вигаданих” завдань, домашок… 
							а є лише реальні задачі на проєкті - це твоя робота, від якої залежать інші учасники команди 
							та проєкт загалом! 
							Виконуючи їх, помиляючись та виправляючи свої помилки, ми і навчаємось - as simple as that :)  <br><br>
							
							А якщо наявних знань не вистачає для виконання поточної задачі, то ми допомагаємо, пояснюємо.  <br><br>
							
							А ще, кожен учасник - це командний гравець, який може вносити свої ідеї у продукт і вчитися їх захищати 
							(так-так, твій майбутній роботодавець це оцінить ;)
							</div>

						<h3 class="about_us_titles">Як з'явився Camp?</h3>

							<div class="about_us_text">
							Camp виник як рішення на одвічне питання: 
							“Як потрапити на роботу, якщо на неї беруть тільки людей з досвідом?”.<br><br>
							
							Ще працюючи QA тренером в різних школах, засновник Camp, Денис Щолоков, вже тоді відчував, 
							що всі ці курси підготовки - це завжди якась теорія, якій не вистачало чогось важливого…<br><br>
							
							З іншої сторони, Денис постійно отримував скарги від студентів, що навіть по закінченню курсів, їм складно працевлаштуватися, 
							бо “в них немає досвіду”... Так і народився QAX Camp! <br><br>
							
							У Camp неважливий твій початок (хтось вже з базою, інший - відкриває все з нуля), 
							проте кінцева ціль у всіх одна - працевлаштування. Ми допомагаємо своїм учасникам 
							на всіх етапах цього шляху: як з опановуванням нової спеціальності, 
							так і з працевлаштуванням. Тому у нас є лише два KPI:  <br><br>
							
							1. Кількість отриманих оферів нашими учасниками  <br>
								2. Середній час отримання оферу
							</div>

						<h3 class="about_us_titles">Зв'язок з QAX</h3>
							<div class="about_us_text">

							

							QAX Camp - це дочірня компанія QAX, одним із співзасновників якої є Денис Щолоков.<br><br>
							
							<div id="about_us_quotation3" >
								<span>QAX - Quality Assurance eXperts - аутсорсингова компанія, </span>
								<span>заснована групою професійних фахівців із забезпечення якості </span>
								<span>з метою вийти за межі стандартних процесів тестування. </span>
							</div>
							
							<br>
							<img id="about_us_img" src="images/about_us.svg" alt="image">
							Ідея розмістити Camp у зв'язці з QAX полягає в тому, аби об'єднати зусилля для відповіді 
							сучасним викликам в галузі ІТ: Camp - з точки зору підготовки професійних кадрів, 
							а QAX - допомогти клієнтам з усього світу розв'язувати їх QA задачі з якістю, 
							якої вони заслуговують. <br><br>
							
							
							</div>
							
					</div>
					
				</div>
			
			</div>
		</section><!-- #content end -->

		<?php include 'components/form.html'?>

		<!-- Footer
		============================================= -->
		<?php include 'components/footer.html'?>

	</div><!-- #wrapper end -->

	<!-- Go To Top
	============================================= -->
	<div id="gotoTop" class="icon-line-chevron-up"></div>

	<!-- JavaScripts
	============================================= -->
	<script src="js/include.js"></script>

	<!-- <script src="js/jquery.js"></script> -->



	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>
	<script src="js/plugins.min.js"></script>

	<script>
		var pages=window.location.pathname.slice(1);
	var url="courses.php?course=qa&name=qa_practice";
	var link = $('a.header-menu.header-menu-links').attr('href');

	if (link==url && pages=="courses.php"){
		document.getElementById("menu-link-courses").style.color='#F66F5D';
	}else if(pages=="about_us.php"){
		document.getElementById("menu-link-about-us").style.color='#F66F5D';
	}else if(pages=="our_trainers.php"){
		document.getElementById("menu-link-our-trainers").style.color='#F66F5D';
	}else{

		document.getElementById("menu-link-courses").style.color='white';
		document.getElementById("menu-link-about-us").style.color='white';
		document.getElementById("menu-link-our-trainers").style.color='white';
	};
	</script>		

	<script>
		function footerlink() {
			let telegram_img = $("#Telegram-img");
			let telegram_link = $("#footer-telegram");
			telegram_img.mouseover(function () { telegram_link.attr({ "color": "#F66F5D" }); });
			telegram_img.mouseout(function () { telegram_link.attr({ "color": "#ffffff" }); });
			telegram_link.mouseover(function () { telegram_img.attr({ "src": "images/Telegram-hover.svg" }); });
			telegram_link.mouseout(function () { telegram_img.attr({ "src": "images/Telegram.svg" }) });
		};

		footerlink();
	</script>
	<script>
		$("#leftside-navigation .sub-menu > a").click(function (e) {
			$("#leftside-navigation ul ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
				e.stopPropagation()
		})
	</script>

	<script>
	function myFunction(x) {
  x.classList.toggle("change");
  var y = document.getElementById("header-block");
    if (y.className === "header-menu") {
        y.className += " responsive"; 
		$("#header-block").css({ "background": "#2C2A3F" });
		$("body").css({ "overflow": "hidden" });
		$("footer").css({ "display": "none" });
		$("#courses").css({ "display": "none" });
		$("#content").css({ "display": "none" });
		$("#write_to_us").css({ "display": "none" });
		
    } else {
        y.className = "header-menu";
		$("#header-block").css({ "background": "#3E3B5E" });
		$("body").css({ "overflow": "visible" });
		$("footer").css({ "display": "block" });
		$("#courses").css({ "display": "block" });
		$("#content").css({ "display": "block" });
		$("#write_to_us").css({ "display": "flex" });
    }
}
function goToForm(){
		$(".burger-icon").removeClass("change");
		$("#header-block").removeClass("responsive");
	    $("body").css({ "overflow": "visible" });
		$("footer").css({ "display": "block" });
		$("#courses").css({ "display": "block" });
		$("#content").css({ "display": "block" });
		

}
	</script>

	<!-- Footer Scripts
	============================================= -->
	<!-- for phone mask -->

	<script src="js/intlTelInput.min.js"></script>
	<script src="js/intlTelInput-jquery.min.js"></script>
	<script src="js/functions.js"></script>
	<script src="js/form.js"></script>

</body>

</html>