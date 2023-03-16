<?php

namespace App\Controllers\Extranet;

use App\Models\ConfigModel;
use App\Models\AppTypeModel;

class AppTypeController extends BaseController
{
    public function index()
    {
        // config
        $config = new ConfigModel();
        $data['config'] = $config->get()->getFirstRow();
        // app type
        $app_type = new AppTypeModel();
        $data['app_types'] = $app_type->get()->getResult();

        return view('extranet/app_type/index', $data);
    }

    public function create()
    {
        // config
        $config = new ConfigModel();
        $data['config'] = $config->get()->getFirstRow();

        return view('extranet/app_type/create', $data);
    }

    public function store()
    {
        $app_type = new AppTypeModel();

        $image = $this->request->getFile('image');
        $image_name = $image->getRandomName();
        $image->move('assets/images/app_types/', $image_name);

        $app_type->insert([
            'created_at' => date('Y-m-d H:i:s'),
            'creator_id' => session()->get('id'),
            'code' => $this->request->getPost('code'),
            'name' => $this->request->getPost('name'),
            'image' => $image_name,
            'status' => $this->request->getPost('status')
        ]);

        session()->setFlashdata('success', 'Success create new data');
        return redirect()->to(base_url('extranet/app-type'));
    }

    public function show($id)
    {
        // config
        $config = new ConfigModel();
        $data['config'] = $config->get()->getFirstRow();
        // app type
        $app_type = new AppTypeModel();
        $data['app_type'] = $app_type->where('id', $id)->get()->getFirstRow();

        return view('extranet/app_type/show', $data);
    }

    public function edit($id)
    {
        // config
        $config = new ConfigModel();
        $data['config'] = $config->get()->getFirstRow();
        // app type
        $app_type = new AppTypeModel();
        $data['app_type'] = $app_type->where('id', $id)->get()->getFirstRow();

        return view('extranet/app_type/edit', $data);
    }

    public function update($id)
    {
        $app_type = new AppTypeModel();

        $app_type_image = $this->request->getFile('image');
        if ($app_type_image != '') {
            $app_type_image_name = $app_type_image->getRandomName();
            $app_type_image->move('assets/images/app_types/', $app_type_image_name);

            $app_type->update($id, [
                'modified_at' => date('Y-m-d H:i:s'),
                'modifier_id' => session()->get('id'),
                'image' => $app_type_image_name
            ]);
        }

        $app_type->update($id, [
            'modified_at' => date('Y-m-d H:i:s'),
            'modifier_id' => session()->get('id'),
            'code' => $this->request->getPost('code'),
            'name' => $this->request->getPost('name'),
            'status' => $this->request->getPost('status')
        ]);

        session()->setFlashdata('success', 'Success update data');
        return redirect()->to(base_url('extranet/app-type'));
    }

    public function destroy($id)
    {
        $app_type = new AppTypeModel();
        $app_type->delete($id);

        session()->setFlashdata('success', 'Success delete data');
        return redirect()->to(base_url('extranet/app-type'));
    }
}
