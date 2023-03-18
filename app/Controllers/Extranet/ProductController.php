<?php

namespace App\Controllers\Extranet;

use App\Models\ProductModel;
use App\Models\ProductCategoryModel;

class ProductController extends BaseController
{
    public function index()
    {
        // product
        $app = new ProductModel();
        $data['products'] = $app->get()->getResult();

        return view('extranet/product/index', $data);
    }

    public function create()
    {
        // product category
        $product_category = new ProductCategoryModel();
        $data['product_categories'] = $product_category->get()->getResult();        

        return view('extranet/product/create', $data);
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
        return redirect()->to(base_url('extranet/product'));
    }

    public function edit($id)
    {
        // product
        $product = new ProductModel();
        $product = $product->where('id', $id)->get()->getFirstRow();
        $data['product'] = $product;
        // product category
        $product_category = new ProductCategoryModel();        
        $data['product_category'] = $product_category->where('id', $product->product_category_id)->get()->getFirstRow();
        $data['product_categories'] = $product_category->get()->getResult();  

        return view('extranet/product/edit', $data);
    }

    public function update($id)
    {
        $app = new ProductModel();

        $product_image = $this->request->getFile('image');
        if ($product_image != '') {
            $product_image_name = $product_image->getRandomName();
            $product_image->move('assets/images/product/', $product_image_name);

            $app->update($id, [
                'modified_at' => date('Y-m-d H:i:s'),
                'image' => $product_image_name
            ]);
        }

        $app->update($id, [
            'modified_at' => date('Y-m-d H:i:s'),
            'product_category_id' => $this->request->getPost('product_category_id'),
            'code' => $this->request->getPost('code'),
            'name' => $this->request->getPost('name'),
            'url' => $this->request->getPost('url'),
            'status' => $this->request->getPost('status')
        ]);

        session()->setFlashdata('success', 'Success update data');
        return redirect()->to(base_url('extranet/product'));
    }

    public function destroy($id)
    {
        $app = new ProductModel();
        $app->delete($id);

        session()->setFlashdata('success', 'Success delete data');
        return redirect()->to(base_url('extranet/product'));
    }
}
