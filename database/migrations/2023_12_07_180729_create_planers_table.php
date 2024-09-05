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
        Schema::create('planers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('page_number');
            $table->timestamps();
            $table->foreignId('category_id');
            $table->string('image');
            $table->integer('amount');
            $table->string('price');
            $table->string('size');
            $table->string('notes');
            $table->string('stickers');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('planers');
    }
};
