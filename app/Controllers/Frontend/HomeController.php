<?php

namespace App\Controllers\Frontend;

use App\Models\ProductCategoryModel;
use App\Models\ProductModel;

class HomeController extends BaseController
{
    public function index()
    {
        // config
        $product_category = new ProductCategoryModel();
        $data['product_categories'] = $product_category->get()->getResult();
        // config menu
        $product = new ProductModel();
        $data['products'] = $product->get()->getResult();
        
        return view('frontend/home/index', $data);
    }

    public function show($code)
    {
        // config
        $product_category = new ProductCategoryModel();
        $product_category_data = $product_category->where('code', $code)->get()->getFirstRow();
        $data['product_category'] = $product_category_data;
        // config menu
        $product = new ProductModel();
        $data['products'] = $product->where('product_category_id', $product_category_data->id)->get()->getResult();
        
        return view('frontend/home/show', $data);
    }
}
