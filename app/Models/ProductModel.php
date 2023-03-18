<?php

namespace App\Models;
use CodeIgniter\Model;

class ProductModel extends Model {
    protected $table = 'product';
    protected $primaryKey = 'id';
    protected $allowedFields = ['status', 'created_at', 'modified_at', 'product_category_id', 'code', 'name', 'image', 'url'];
}

