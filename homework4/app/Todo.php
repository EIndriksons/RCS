<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    // laravel.com/docs/5.1/eloquent
    // db attribute that is mass assignable
    protected $fillable = ['description'];

    // to get user
    // we use belongsTo() because we check for user_id and link to a user
    public function user() {
        return $this->belongsTo(User::class);
    }
}
