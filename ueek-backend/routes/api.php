<?php

use app\Http\Controllers\Api\TestimonialController;
use Illuminate\Support\Facades\Route;

Route::apiResource('testimonials', TestimonialController::class);

Route::get('/test-cors', function() {
    return response()->json(['message' => 'CORS funcionando!']);
});