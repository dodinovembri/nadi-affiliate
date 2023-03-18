<?php

namespace App\Controllers\Frontend;

use App\Models\ProductCategoryModel;
use App\Models\ProductModel;
use App\Models\AjaxSearchModel;

class HomeController extends BaseController
{
    public function index()
    {
        // config
        $product_category = new ProductCategoryModel();
        $data['product_categories'] = $product_category->get()->getResult();
        // config menu
        $product = new ProductModel();
        $data['products'] = $product->where('status', 1)->get()->getResult();

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
        $data['products'] = $product->where('product_category_id', $product_category_data->id)->where('status', 1)->get()->getResult();

        return view('frontend/home/show', $data);
    }

    function fetch()
    {
        $output = '';
        $query = '';
        $search = new AjaxSearchModel();
        if ($this->request->getPost('query')) {
            $query = $this->request->getPost('query');
        }
        $data = $search->fetch_data($query);

        if ($data->getNumRows() > 0) { $i = 0;
            foreach ($data->getResult() as $row) { $i++;
                $output .= '
                            <div class="search-result-list">
                                <img class="shadow-l preload-img" src="'.base_url("assets/images/product/" . $row->image) .'" data-src="'. base_url("assets/images/product/" . $row->image) .'" alt="img">
                                <h1>' . $row->code .'</h1>
                                <p>' . $row->name . '</p>
                                <a href="' . $row->url. '" target="_blank" class="bg-highlight">BUKA</a>
                            </div>
                            ';
                if ($i == 25) {
                    break;
                }
            }
        } else {
            $output .= '
                        <div class="search-no-results">
                            <h3 class="bold top-10">Nothing found...</h3>
                            <span class="under-heading font-11 opacity-70 color-theme">Theres nothing matching the
                                description youre looking for, try a different keyword.</span>
                        </div>
                        ';
        }
        echo $output;
    }
}
