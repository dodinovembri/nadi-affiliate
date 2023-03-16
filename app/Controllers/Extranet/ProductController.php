<?php

namespace App\Controllers\Extranet;

use App\Models\ConfigModel;
use App\Models\AppModel;
use App\Models\AppTypeModel;

class AppController extends BaseController
{
    public function index()
    {
        // config
        $config = new ConfigModel();
        $data['config'] = $config->get()->getFirstRow();
        // app
        $app = new AppModel();
        $data['apps'] = $app->get()->getResult();

        return view('extranet/app/index', $data);
    }

    public function create()
    {
        // config
        $config = new ConfigModel();
        $data['config'] = $config->get()->getFirstRow();
        // app type
        $app_type = new AppTypeModel();
        $data['app_types'] = $app_type->get()->getResult();        

        return view('extranet/app/create', $data);
    }

    public function store()
    {
        $app = new AppModel();

        $image = $this->request->getFile('image');
        $image_name = $image->getRandomName();
        $image->move('assets/images/apps/', $image_name);

        $app->insert([
            'created_at' => date('Y-m-d H:i:s'),
            'creator_id' => session()->get('id'),
            'app_type_id' => $this->request->getPost('app_type_id'),
            'name' => $this->request->getPost('name'),
            'image' => $image_name,
            'url' => $this->request->getPost('url'),
            'status' => $this->request->getPost('status')
        ]);

        session()->setFlashdata('success', 'Success create new data');
        return redirect()->to(base_url('extranet/app'));
    }

    public function show($id)
    {
        // config
        $config = new ConfigModel();
        $data['config'] = $config->get()->getFirstRow();
        // app
        $app_model = new AppModel();
        $app = $app_model->where('id', $id)->get()->getFirstRow();
        $data['app'] = $app;
        // app type
        $app_type = new AppTypeModel();        
        $data['app_type'] = $app_type->where('id', $app->app_type_id)->get()->getFirstRow();
        $data['app_types'] = $app_type->get()->getResult();           

        return view('extranet/app/show', $data);
    }

    public function edit($id)
    {
        // config
        $config = new ConfigModel();
        $data['config'] = $config->get()->getFirstRow();
        // app
        $app_model = new AppModel();
        $app = $app_model->where('id', $id)->get()->getFirstRow();
        $data['app'] = $app;
        // app type
        $app_type = new AppTypeModel();        
        $data['app_type'] = $app_type->where('id', $app->app_type_id)->get()->getFirstRow();
        $data['app_types'] = $app_type->get()->getResult();  

        return view('extranet/app/edit', $data);
    }

    public function update($id)
    {
        $app = new AppModel();

        $app_image = $this->request->getFile('image');
        if ($app_image != '') {
            $app_image_name = $app_image->getRandomName();
            $app_image->move('assets/images/apps/', $app_image_name);

            $app->update($id, [
                'modified_at' => date('Y-m-d H:i:s'),
                'modifier_id' => session()->get('id'),
                'image' => $app_image_name
            ]);
        }

        $app->update($id, [
            'modified_at' => date('Y-m-d H:i:s'),
            'modifier_id' => session()->get('id'),
            'app_type_id' => $this->request->getPost('app_type_id'),
            'name' => $this->request->getPost('name'),
            'url' => $this->request->getPost('url'),
            'status' => $this->request->getPost('status')
        ]);

        session()->setFlashdata('success', 'Success update data');
        return redirect()->to(base_url('extranet/app'));
    }

    public function destroy($id)
    {
        $app = new AppModel();
        $app->delete($id);

        session()->setFlashdata('success', 'Success delete data');
        return redirect()->to(base_url('extranet/app'));
    }
}
