<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    //phpinfo();
//    $count ="";
//    $count = DB::table("users")->$count();
//    dump($count);
//    exit();
//    return view('welcome');
//});

Route::view('/{path?}', 'app');