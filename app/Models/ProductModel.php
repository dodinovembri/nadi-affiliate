<?php

namespace App\Models;
use CodeIgniter\Model;

class ProductModel extends Model {
    protected $table = 'product';
    protected $primaryKey = 'id';
    protected $allowedFields = ['status', 'created_at', 'modified_at', 'creator_id', 'modifier_id', 'app_type_id', 'name', 'image', 'url'];
}

