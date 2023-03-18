<?php

namespace App\Controllers\Extranet;

use App\Models\ProductCategoryModel;
use App\Models\ProductModel;

class HomeExtranetController extends BaseController
{
    public function index()
    {
        // product category
        $product_category = new ProductCategoryModel();
        $data['product_categories'] = $product_category->get()->getResult();

        return view('extranet/home/index', $data);
    }

    public function store()
    {
        $app = new ProductModel();

        $image = $this->request->getFile('image');
        $image_name = $image->getRandomName();
        $image->move('assets/images/product/', $image_name);

        $app->insert([
            'created_at' => date('Y-m-d H:i:s'),
            'product_category_id' => $this->request->getPost('product_category_id'),
            'code' => $this->request->getPost('code'),
            'name' => $this->request->getPost('name'),
            'image' => $image_name,
            'url' => $this->request->getPost('url'),
            'status' => $this->request->getPost('status')
        ]);

        session()->setFlashdata('success', 'Success create new data');
        return redirect()->to(base_url('extranet'));
    }
}
