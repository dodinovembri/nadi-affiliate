<!DOCTYPE html>
<html lang="en" dir="">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
	<meta name="keywords" content="Inspirasi Stuff" />
	<meta name="description" content="Inspirasi Stuff" />  
      
    <title>Home | Inspirasi Stuff</title>
    <?= $this->include('extranet/components/styles') ?>
</head>

<body class="text-left">
    <div class="app-admin-wrap layout-sidebar-large">
        <?= $this->include('extranet/components/header') ?>
        <?= $this->include('extranet/components/sidebar') ?>
        <!-- =============== Left side End ================-->
        <div class="main-content-wrap sidenav-open d-flex flex-column">
            <!-- ============ Body content start ============= -->
            <div class="main-content">
                <div class="breadcrumb">
                    <h1 class="mr-2">Dashboard</h1>
                    <ul>
                        <li>Dashboard</li>
                    </ul>
                </div>
                <div class="separator-breadcrumb border-top"></div>
                <div class="row">
                    <!-- ICON BG-->
                    <div class="col-lg-6 col-md-6 col-sm-6">
                        <div class="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                            <div class="card-body text-center"><i class="i-Checkout-Basket"></i>
                                <div class="content">
                                    <p class="text-muted mt-2 mb-0">Product Catgegory</p>
                                    <p class="text-primary text-16 line-height-1 mb-2"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6">
                        <div class="card card-icon-bg card-icon-bg-primary o-hidden mb-4">
                            <div class="card-body text-center"><i class="i-Financial"></i>
                                <div class="content">
                                    <p class="text-muted mt-2 mb-0">Product</p>
                                    <p class="text-primary text-16 line-height-1 mb-2"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <?= $this->include('extranet/components/footer') ?>
        </div>
    </div>
	<?= $this->include('extranet/components/scripts') ?>
</body>
</html>