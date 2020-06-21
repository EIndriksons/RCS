<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TodoController extends Controller
{
    // to make sure that only the user that is authenticated can view the task
    public function __construct() {
        $this->middleware('auth');
    }
}
