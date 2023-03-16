<!DOCTYPE HTML>
<html lang="en">

<meta http-equiv="content-type" content="text/html;charset=UTF-8" />

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover" />
    <title>Inspirasi Stuff</title>
    <link rel="stylesheet" type="text/css" href="<?= base_url('assets/frontend/styles/bootstrap.css') ?>">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i|Source+Sans+Pro:300,300i,400,400i,600,600i,700,700i,900,900i&amp;display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="<?= base_url('assets/frontend/fonts/css/fontawesome-all.min.css') ?>">
    <link rel="manifest" href="_manifest.json" data-pwa-version="set_in_manifest_and_pwa_js">
    <link rel="apple-touch-icon" sizes="180x180" href="<?= base_url('assets/frontend/app/icons/icon-192x192.html') ?>">
</head>

<body class="theme-light" data-highlight="highlight-red" data-gradient="body-default">
    <div id="preloader">
        <div class="spinner-border color-highlight" role="status"></div>
    </div>
    <div id="page">
        <div id="footer-bar" class="footer-bar-1">
            <a href="<?= base_url('/') ?>"><i class="fa fa-home"></i><span>Home</span></a>
            <a href="<?= base_url('/') ?>" class="active-nav"><i class="fa fa-search"></i><span>Search</span></a>
        </div>
        <div class="page-content header-clear-small">
            <div class="card card-style pb-3">
                <div class="content">
                </div>
                <div class="accordion mb-2">
                    <?php foreach ($product_categories as $key => $value) { ?>
                        <div data-card-height="90" class="card card-style mb-0 mt-2 rounded-s" style="background-image: url(<?= base_url('assets/images/product_category/' . $value->image) ?>);">
                            <div class="card-center">
                                <a href="<?= base_url('category/' . $value->code) ?>">
                                    <button class="btn accordion-btn">
                                        <h4 class="text-center color-white text-uppercase"><?= $value->name ?></h4>
                                        <p class="text-center color-white opacity-70 mb-0 mt-n2"><?= $value->description ?>uff</p>
                                    </button>
                                </a>
                            </div>
                            <div class="card-overlay rounded-s bg-black opacity-70"></div>
                        </div>
                    <?php } ?>
                </div>
            </div>
            <div class="search-page">
                <div class="search-box search-header bg-theme card-style me-3 ms-3">
                    <i class="fa fa-search"></i>
                    <input type="text" class="border-0" placeholder="Cari nomor berapa?" data-search>
                    <a href="#" class="disabled mt-0"><i class="fa fa-times color-red-dark"></i></a>
                </div>
                <div class="search-results card card-style shadow-l">
                    <div class="content">
                        <?php foreach ($products as $key => $value) { ?>
                            <div class="search-result-list">
                                <img class="shadow-l preload-img" src="<?= base_url('assets/images/product/' . $value->image) ?>" data-src="<?= base_url('assets/images/product/' . $value->image) ?>" alt="img">
                                <h1><?= $value->code ?></h1>
                                <p><?= $value->name ?></p>
                                <a href="<?= $value->url ?>" target="_blank" class="bg-highlight">VIEW</a>
                            </div>
                        <?php } ?>
                        <div class="search-no-results disabled">
                            <h3 class="bold top-10">Nothing found...</h3>
                            <span class="under-heading font-11 opacity-70 color-theme">There's nothing matching the
                                description you're looking for, try a different keyword.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer card card-style">
                <p class="footer-text"><span>Made with <i class="fa fa-heart color-highlight font-16 ps-2 pe-2"></i> by
                        Inspirasi Stuff</span></p>
                <div class="text-center mb-3">
                    <a href="#" class="icon icon-xs rounded-sm shadow-l me-1 bg-facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="icon icon-xs rounded-sm shadow-l me-1 bg-twitter"><i class="fab fa-twitter"></i></a>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="<?= base_url('assets/frontend/scripts/bootstrap.min.js') ?>"></script>
    <script type="text/javascript" src="<?= base_url('assets/frontend/scripts/custom.js') ?>"></script>
</body>