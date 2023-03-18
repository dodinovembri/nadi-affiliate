<!DOCTYPE HTML>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover" />
    <title>Inspirasi Stuff</title>
    <link rel="stylesheet" href="<?= base_url('assets/frontend/styles/bootstrap.css') ?>">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i|Source+Sans+Pro:300,300i,400,400i,600,600i,700,700i,900,900i&amp;display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<?= base_url('assets/frontend/fonts/css/fontawesome-all.min.css') ?>">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" />
</head>

<body class="theme-light" data-gradient="body-default">
    <div id="page">
        <div class="page-content header-clear-small">
            <!-- <div class="card card-style pb-3"> -->
                <div class="accordion mb-2">
                    <?php foreach ($product_categories as $key => $value) { ?>
                        <div data-card-height="90" class="card card-style mb-0 mt-2 rounded-s" style="background-image: url(<?= base_url('assets/images/product_category/' . $value->image) ?>);">
                            <div class="card-center">
                                <button class="btn accordion-btn">
                                    <h4 class="text-center color-white text-uppercase"><?= $value->code ?></h4>
                                    <p class="text-center color-white opacity-70 mb-0 mt-n2"><?= $value->name ?></p>
                                </button>
                            </div>
                            <div class="card-overlay rounded-s bg-black opacity-70"></div>
                        </div>
                    <?php } ?>
                </div>
            <!-- </div> -->
            <div class="search-page" style="margin-top: 20px;">
                <div class="search-box search-header bg-theme card-style me-3 ms-3">
                    <i class="fa fa-search"></i>
                    <input type="text" id="code" onkeyup="search()" class="border-0" placeholder="Cari nomor berapa?">
                    <a href="#" class="disabled mt-0"><i class="fa fa-times color-red-dark"></i></a>
                </div>
                <div class="search-results card card-style shadow-l">
                    <div class="content" id="result"></div>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="<?= base_url('assets/frontend/scripts/bootstrap.min.js') ?>"></script>
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