<?php

namespace App\Controllers\Extranet;

class HomeExtranetController extends BaseController
{
    public function index()
    {
        return view('extranet/home/index');
    }
}
