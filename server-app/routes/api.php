<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/get', 'App\Http\Controllers\ContactController@index');
Route::post('/create', 'App\Http\Controllers\ContactController@store');
Route::delete('/delete/{id}', 'App\Http\Controllers\ContactController@destroy');
Route::put('/update/{id}', 'App\Http\Controllers\ContactController@update');


