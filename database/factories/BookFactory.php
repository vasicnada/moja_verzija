<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Category;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // Get a random category and user for the book
        $category = Category::inRandomOrder()->first();
        $user = User::inRandomOrder()->first();

        return [
            'name' => $this->faker->sentence(3), // Generate a random book title
            'page_number' => $this->faker->numberBetween(50, 1000), // Generate a random page number
            'category_id' => $category ? $category->id : null, // Assign a random category
            'body' => $this->faker->paragraph(3), // Generate a random description
            'user_id' => $user ? $user->id : null, // Assign a random user
            'image' => $this->faker->imageUrl(), // Generate a random image URL
            'amount' => $this->faker->numberBetween(0, 100), // Generate a random amount
            'price' => $this->faker->currencyCode().' '.$this->faker->numberBetween(1000, 5000), // Generate a random price
            'size' => $this->faker->randomElement(['A4', 'A5', 'A6']), // Randomly choose a size
            'notes' => $this->faker->sentence(5), // Generate random notes
            'stickers' => $this->faker->sentence(5), // Generate random stickers info
        ];
    }
}
