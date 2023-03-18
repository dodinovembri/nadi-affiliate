<?php

namespace App\Models;

use CodeIgniter\Model;

class AjaxSearchModel extends Model
{
    function fetch_data($query)
    {
        $db = \Config\Database::connect();
        if ($query != '') {
            return $db->query(" SELECT * FROM product WHERE code LIKE '%$query%' OR name LIKE '%$query%' AND status != 0 ");
        } else {
            return $db->query(" SELECT * FROM product WHERE status != 0 ");
        }
    }
}
