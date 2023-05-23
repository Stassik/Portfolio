<!DOCTYPE html>
<html lang="ru">

<head>
	<title>{$this->vars->pretitle}{$title}</title>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	
	<!--<link rel="shortcut icon" href="/assets/img/favicon.png" type="image/png" />
	<link rel="image_src" href="/assets/img/logo_big.png" />-->
</head>

<body>
	<header> <!--Здесь будут отличия с products.html-->
        <div class="menu_area row justify-content-center">
            <nav class="navbar navbar-expand-lg navbar-light col-xl-8 col-lg-10 col-12 pt-1 pb-1 p-0 justify-content-between">
                <a class="navbar-brand col-md-4 col-7 pl-lg-0 pl-3 p-0 m-0 d-flex align-items-center" href="index.html"><img src="/assets/img/logo2.png" alt=""><span class="brand_title">Шелтерс</span></a>
                <button class="navbar-toggler navbar-dark collapsed mr-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>    
                </button>
                <div class="collapse navbar-collapse col-xl-8 col-md-9 col-10 p-0 justify-content-end " id="navbarSupportedContent">
                    

                    <ul class="navbar-nav nav_wide_screen row m-0 w-100 justify-content-around">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Главная<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="products.html" id="navbarDropdown" >
                          Продукция</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Тентовые конструкции</a>
                                <a class="dropdown-item submenu" href="products.html">Тенты</a>
                                <div class="dropdown-menu submenu2" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Тент ПВХ</a>
                                    <a class="dropdown-item" href="#">Брезентовые пологи</a>
                                    <a class="dropdown-item" href="#">Утепленные тенты</a>
                                    <a class="dropdown-item" href="#">Тент синтетический Oxford</a>
                                    <a class="dropdown-item" href="#">Тент тарпаулин</a>
                                    <a class="dropdown-item" href="#">Тенты для укрытия труб</a>
                                    <a class="dropdown-item" href="#">Буровые укрытия</a>
                                    <a class="dropdown-item" href="#">Тепляк для бетона</a>
                                    <a class="dropdown-item" href="#">Тент-укрытия сварщика</a>
                                    <a class="dropdown-item" href="#">Авто-тенты</a>
                                
                                </div>
                                <a class="dropdown-item submenu" href="#">Пленки</a>
                                <div class="dropdown-menu submenu2" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Армированная пленка</a>
                                    <a class="dropdown-item" href="#">Полиэтиленовая пленка</a>
                                </div> 
                                <a class="dropdown-item submenu" href="#">Сетки</a>
                                <div class="dropdown-menu submenu2" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Сетка фасадная строительная</a>
                                    <a class="dropdown-item" href="#">Сетка затеняющая для растений</a>
                                    <a class="dropdown-item" href="#">Маскировочная сетка</a>
                                    <a class="dropdown-item" href="#">Пластиковые сетки и решетки</a>
                                </div>
                                <a class="dropdown-item" href="#">Утеплитель</a>
                                <a class="dropdown-item" href="#">Аксессуары для крепления</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Наши работы</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Прайс-лист</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Контакты</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav nav_mobile_screen mr-auto" id="navAccordion" >
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Главная</a>
                        </li>
                        <li class="nav-item row w-100 m-0">
                            <a class="nav-link nav-link-collapse col-8  d-flex align-items-center" href="products.html" >Продукция</a>
                            <i id="hasSubItems" role="button" data-toggle="collapse" data-target="#collapseSubItems1" aria-expanded="false" class="fas fa-plus col-4 d-flex align-items-center justify-content-end"></i>
                            <ul class="nav-second-level collapse container-fluid p-0" id="collapseSubItems1" data-parent="#navAccordion">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <span class="nav-link-text">Тентовые конструкции</span>
                                    </a>
                                </li>
                                <li class="nav-item row w-100 m-0">
                                    <a class="nav-link nav-link-collapse js_submenu col-8  d-flex align-items-center" href="#" >
                                        <span class="nav-link-text">Тенты</span>
                                    </a>
                                    <i data-toggle="collapse" role="button" data-target="#collapseSubItems2" aria-expanded="false" class="fas fa-plus show_hide col-4 d-flex align-items-center justify-content-end"></i>
                                    <ul class="nav-third-level collapse" id="collapseSubItems2" data-parent="#collapseSubItems1">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                <span class="nav-link-text">Тент ПВХ</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                <span class="nav-link-text">Брезентовые пологи</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                <span class="nav-link-text">Утепленные тенты</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                <span class="nav-link-text">Тент синтетический Oxford</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                <span class="nav-link-text">Тент тарпаулин</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                <span class="nav-link-text">Тенты для укрытия труб</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                <span class="nav-link-text">Буровые укрытия</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                <span class="nav-link-text">Тепляк для бетона</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                <span class="nav-link-text">Тент-укрытия сварщика</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                <span class="nav-link-text">Авто-тенты</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item row w-100 m-0">
                                    <a class="nav-link nav-link-collapse js_submenu col-8  d-flex align-items-center" href="#">
                                        <span class="nav-link-text">Пленки</span>
                                    </a>
                                    <i data-toggle="collapse" role="button" data-target="#collapseSubItems3" aria-expanded="false" class="fas fa-plus show_hide col-4 d-flex align-items-center justify-content-end"></i>
                                    <ul class="nav-third-level collapse" id="collapseSubItems3" data-parent="#collapseSubItems1">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                <span class="nav-link-text">Армированная пленка, тент из армированной пленки</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                <span class="nav-link-text">Полиэтиленовая пленка</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item row w-100 m-0">
                                    <a class="nav-link nav-link-collapse js_submenu col-8  d-flex align-items-center" href="#">
                                        <span class="nav-link-text">Сетки</span>
                                    </a>
                                    <i  data-toggle="collapse" role="button" data-target="#collapseSubItems4" aria-expanded="false"  class="fas fa-plus show_hide col-4 d-flex align-items-center justify-content-end"></i>
                                    <ul class="nav-third-level collapse" id="collapseSubItems4" data-parent="#collapseSubItems1">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                <span class="nav-link-text">Сетка фасадная строительная</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                <span class="nav-link-text">Сетка затеняющая для растений</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                <span class="nav-link-text">Маскировочная сетка</span>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                <span class="nav-link-text">Пластиковые сетки и решетки</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <span class="nav-link-text">Утеплитель</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <span class="nav-link-text">Аксессуары для крепления</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Наши работы</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Прайс-лист</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Контакты</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
	
    {$content}

	
	<footer class="row mx-0 d-flex justify-content-center align-items-center px-0">
        <div class="col-xl-8 col-lg-10 col-11 d-flex p-0 m-0 w-100 ">
            <div class="row w-100 m-0 justify-content-between">
                <div class="col-md-3 col-12 pr-md-2 p-0">
                    <div class="row w-100 m-0 footer_item ">
                        <h3>О нашей компании</h3>
                        <ul class="footer_nav m-0">
                            <li class="footer_nav_item"><a href="index.html">Главная</a></li>
                            <li class="footer_nav_item"><a href="products.html">Продукция</a></li>
                            <li class="footer_nav_item"><a href="#">Наши работы</a></li>
                            <li class="footer_nav_item"><a href="#">Прайс-лист</a></li>
                            <li class="footer_nav_item"><a href="#">Контакты</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-5 col-12 pr-md-2 pt-md-0 pt-4 p-0">
                    <div class="row w-100 m-0 footer_item ">
                        <h3>Наш адрес</h3>
                        <p>Московская область, Красногорский район, с. Дмитровское, д. 163</p>
                    </div>
                </div>
                <div class="col-md-3 col-12 pt-md-0 pt-4 p-0">
                    <div class="row w-100 m-0 footer_item ">
                        <h3>Наши контакты</h3>
                        <div class="">E-mail: <span>shelters-tent@yandex.ru</span></div>
                        <div class="footer_phone d-flex flex-column">Телефон: <span>+7 (926) 393-48-43</span><span>+7 (495) 514-37-71 </span></div>
                    </div>
                </div>
            </div>    
        </div>
    </footer>   



	{[
		"/assets/libs/fontawesome/fontawesome.css",
		"/assets/libs/fontawesome/solid.css",
		"/assets/libs/owl/owl.carousel.min.css",
		"/assets/libs/owl/owl.theme.default.min.css",
		"/assets/css/preloader.css",
		"/assets/libs/bootstrap.min.css",
		"/assets/css/rotate.css",
		"/assets/css/animate.css",
		"/assets/css/style.css",
		"/assets/css/general.css"
	]|packer:css}
	
	{[
		"/assets/libs/jquery-3.3.1.min.js",
		"/assets/libs/viewportchecker/jquery.viewportchecker.js",
		"/assets/libs/bootstrap.min.js",
		"/assets/libs/owl/owl.carousel.min.js",
		"/assets/js/script.js"
	]|packer:js}
</body>
</html>