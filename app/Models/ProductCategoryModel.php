<?php

namespace App\Models;
use CodeIgniter\Model;

class ProductCategoryModel extends Model {
    protected $table = 'product_category';
    protected $primaryKey = 'id';
    protected $allowedFields = ['status', 'created_at', 'modified_at', 'code', 'name', 'description', 'image'];
}

