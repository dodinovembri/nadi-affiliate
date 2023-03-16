<div class="side-content-wrap">
    <div class="sidebar-left open rtl-ps-none" data-perfect-scrollbar="" data-suppress-scroll-x="true">
        <ul class="navigation-left">
            <li class="nav-item"><a class="nav-item-hold" href="<?= base_url('extranet') ?>"><i class="nav-icon i-Bar-Chart"></i><span class="nav-text">Dashboard</span></a><div class="triangle"></div></li>
            <li class="nav-item" data-item="config"><a class="nav-item-hold" href="#"><i class="nav-icon i-Library"></i><span class="nav-text">Config CMS</span></a><div class="triangle"></div></li>
            <li class="nav-item" data-item="masterdata"><a class="nav-item-hold" href="#"><i class="nav-icon i-Suitcase"></i><span class="nav-text">Master Data</span></a><div class="triangle"></div></li>
            <li class="nav-item" data-item="transaction"><a class="nav-item-hold" href="#"><i class="nav-icon i-Suitcase"></i><span class="nav-text">Transactions</span></a><div class="triangle"></div></li>
        </ul>
    </div>
    <div class="sidebar-left-secondary rtl-ps-none" data-perfect-scrollbar="" data-suppress-scroll-x="true">
        <ul class="childNav" data-parent="config">
            <li class="nav-item"><a href="<?= base_url('extranet/config') ?>"><i class="nav-icon i-Crop-2"></i><span class="item-name">General Config</span></a></li>
            <li class="nav-item"><a href="<?= base_url('extranet/config-menu') ?>"><i class="nav-icon i-Crop-2"></i><span class="item-name">Label & Menu Config</span></a></li>
            <li class="nav-item"><a href="<?= base_url('extranet/brand') ?>"><i class="nav-icon i-Crop-2"></i><span class="item-name">Brands</span></a></li>   
            <li class="nav-item"><a href="<?= base_url('extranet/feature') ?>"><i class="nav-icon i-Crop-2"></i><span class="item-name">Features</span></a></li>            
            <li class="nav-item"><a href="<?= base_url('extranet/service') ?>"><i class="nav-icon i-Crop-2"></i><span class="item-name">Services</span></a></li>            
        </ul>
        <ul class="childNav" data-parent="masterdata">
            <li class="nav-item"><a href="<?= base_url('extranet/app-type') ?>"><i class="nav-icon i-Crop-2"></i><span class="item-name">App Types</span></a></li>
            <li class="nav-item"><a href="<?= base_url('extranet/app') ?>"><i class="nav-icon i-Crop-2"></i><span class="item-name">Apps</span></a></li>
        </ul>
        <ul class="childNav" data-parent="transaction">
            <li class="nav-item"><a href="<?= base_url('extranet/client') ?>"><i class="nav-icon i-Crop-2"></i><span class="item-name">Clients</span></a></li>
            <li class="nav-item"><a href="<?= base_url('extranet/task') ?>"><i class="nav-icon i-Crop-2"></i><span class="item-name">Task Management</span></a></li>
        </ul>
    </div>
    <div class="sidebar-overlay"></div>
</div>