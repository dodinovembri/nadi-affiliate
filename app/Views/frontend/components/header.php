<!--header start-->
<?php
$uri = new \CodeIgniter\HTTP\URI(current_url());
$segment = $uri->getSegment(2);
?>
<header class="main-header <?php if ($segment == "contact-us") { ?>w-100 z-10 <?php } else { ?>position-absolute w-100 <?php } ?>">
    <nav class="navbar navbar-expand-xl navbar-light sticky-header">
        <div class="container d-flex align-items-center justify-content-lg-between position-relative">
            <a href="<?= base_url('/') ?>" class="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none">
                <img src="<?= base_url('assets/images/logo/logo-color-nadi.png') ?>" alt="logo" class="img-fluid logo-color" />
            </a>

            <a class="navbar-toggler position-absolute right-0 border-0" href="#offcanvasWithBackdrop" role="button">
                <span class="far fa-bars" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop"></span>
            </a>
            <div class="clearfix"></div>
            <div class="collapse navbar-collapse justify-content-center">
                <ul class="nav col-12 col-md-auto justify-content-center main-menu">
                    <li><a class="nav-link" href="<?= base_url('/') ?>"><?= ucfirst($config_menu->home) ?></a></li>
                    <li><a href="#service" class="nav-link"><?= ucfirst($config_menu->service) ?></a></li>
                    <li><a href="#pricing" class="nav-link"><?= ucfirst($config_menu->pricing) ?></a></li>
                    <li><a href="<?= base_url('our-apps') ?>" class="nav-link"><?= ucfirst($config_menu->our_apps) ?></a></li>
                    <li><a href="#" class="nav-link"><?= ucfirst($config_menu->about_us) ?></a></li>
                    <li><a href="<?= base_url('contact-us') ?>" class="nav-link"><?= ucfirst($config_menu->contact_us) ?></a></li>
                </ul>
            </div>

            <div class="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
                <a href="<?= base_url('get-started') ?>" class="btn btn-primary"><?= ucfirst($config_menu->get_started) ?></a>
            </div>
        </div>
    </nav>
    <!--offcanvas menu start-->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasWithBackdrop">
        <div class="offcanvas-header d-flex align-items-center mt-4">
            <a href="index-2.html" class="d-flex align-items-center mb-md-0 text-decoration-none">
                <img src="<?= base_url('assets/images/logo/logo-color-nadi.png') ?>" alt="logo" class="img-fluid ps-2" />
            </a>
            <button type="button" class="close-btn text-danger" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="far fa-close"></i>
            </button>
        </div>
        <div class="offcanvas-body z-10">
            <ul class="nav col-12 col-md-auto justify-content-center main-menu">
                <li><a class="nav-link" href="<?= base_url('/') ?>"><?= ucfirst($config_menu->home) ?></a></li>
                <li><a href="#service" class="nav-link"><?= ucfirst($config_menu->service) ?></a></li>
                <li><a href="#pricing" class="nav-link"><?= ucfirst($config_menu->pricing) ?></a></li>
                <li><a href="<?= base_url('our-apps') ?>" class="nav-link"><?= ucfirst($config_menu->our_apps) ?></a></li>
                <li><a href="#" class="nav-link"><?= ucfirst($config_menu->about_us) ?></a></li>
                <li><a href="<?= base_url('contact-us') ?>" class="nav-link"><?= ucfirst($config_menu->contact_us) ?></a></li>
            </ul>
            <div class="action-btns mt-4 ps-3">
                <a href="<?= base_url('get-started') ?>" class="btn btn-primary"><?= ucfirst($config_menu->get_started) ?></a>
            </div>
        </div>
    </div>
    <!--offcanvas menu end-->
</header>
<!--header end-->