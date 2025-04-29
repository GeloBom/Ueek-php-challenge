<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('testimonials', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->string('name'); // Name of the person giving the testimonial
            $table->string('headerMensage');  // Short message or title
            $table->string('image')->nullable(); //URL or path to an image
            $table->unsignedBigInteger('rating')->default(5); // Assuming rating is out of 5
            $table->text('message'); // Full testimonial message
            $table->timestamps(); // Created at and updated at timestamps
        });
    }
    public function down(): void
    {
        Schema::dropIfExists('testimonials');
    }
};
