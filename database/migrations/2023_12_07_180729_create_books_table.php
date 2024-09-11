<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('title');  // Updated from 'name' to 'title'
            $table->string('author'); // Added column for book author
            $table->integer('page_count'); // Updated from 'page_number' to 'page_count'
            $table->timestamps();
            $table->foreignId('category_id'); // Assumes 'category_id' references 'id' on 'categories'
            $table->string('cover_image'); // Updated from 'image' to 'cover_image'
            $table->decimal('price', 8, 2); // Updated 'price' to decimal type for better currency handling
            $table->string('publisher'); // Added column for book publisher
            $table->integer('amount');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books'); // Drops the 'books' table
    }
};
