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
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" />
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
                    <div data-card-height="90" class="card card-style mb-0 mt-2 rounded-s" style="background-image: url(<?= base_url('assets/images/product_category/' . $product_category->image) ?>);">
                        <div class="card-center">
                            <a href="<?= $product_category->code ?>">
                                <button class="btn accordion-btn">
                                    <h4 class="text-center color-white text-uppercase"><?= $product_category->code ?></h4>
                                    <p class="text-center color-white opacity-70 mb-0 mt-n2"><?= $product_category->name ?>uff</p>
                                </button>
                            </a>
                        </div>
                        <div class="card-overlay rounded-s bg-black opacity-70"></div>
                    </div>
                </div>
            </div>
            <div class="search-page">
                <div class="search-box search-header bg-theme card-style me-3 ms-3">
                    <i class="fa fa-search"></i>
                    <input type="text" id="code" onkeyup="search()" class="border-0" placeholder="Cari nomor berapa?">
                    <a href="#" class="disabled mt-0"><i class="fa fa-times color-red-dark"></i></a>
                </div>
                <div class="search-results card card-style shadow-l">
                    <div class="content" id="result"></div>
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

<script>
    function load_data(query) {
        $.ajax({
            url: "<?= base_url('search/fetch'); ?>",
            method: "POST",
            data: {
                query: query
            },
            success: function(data) {
                $('#result').html(data);
            }
        })
    }

    function search() {
        let text = document.getElementById("code");
        if (text != '') {
            load_data(text.value);
        } else {
            load_data();
        }
    }

    $(document).ready(function() {

        load_data();

        function load_data(query) {
            $.ajax({
                url: "<?= base_url('search/fetch'); ?>",
                method: "POST",
                data: {
                    query: query
                },
                success: function(data) {
                    $('#result').html(data);
                }
            })
        }
    });
</script>