<?php

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Category;
use App\Models\Book;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::truncate();
        Category::truncate();
        Book::truncate(); // Ensure books table is also cleared

        $user = User::factory()->create();

        // Define genres
        $genres = [
            'Science Fiction',
            'Fantasy',
            'Mystery',
            'Romance',
            'Thriller',
            'Fiction',
            'Non-Fiction',
            'Historical Fiction',
            'Biography'
        ];

        // Create genres
        $categories = [];
        foreach ($genres as $genre) {
            $categories[$genre] = Category::create(['name' => $genre]);
        }

        // Define books with known titles and associated genres
        $books = [
            [
                'title' => 'Dune',
                'page_count' => '412',
                'category_id' => $categories['Science Fiction']->id,
                'body' => 'A science fiction epic set on the desert planet Arrakis, exploring themes of politics, religion, and ecology.',
                'user_id' => $user->id,
                'cover_image' => 'https://www.harryhartog.com.au/cdn/shop/products/9780340960196.jpg?v=1662056565&width=480',
                'amount' => 0,
                'price' => '2000',
                'author' => 'Frank Herbert',
                'publisher' => 'Chilton Books',
            ],
            [
                'title' => 'The Hobbit',
                'page_count' => '310',
                'category_id' => $categories['Fantasy']->id,
                'body' => 'A fantasy adventure about Bilbo Baggins and his journey to help dwarves reclaim their homeland from a dragon.',
                'user_id' => $user->id,
                'cover_image' => 'https://harpercollins.co.uk/cdn/shop/files/x9780007322602.jpg?v=1724832251',
                'amount' => 0,
                'price' => '2500',
                'author' => 'J.R.R. Tolkien',
                'publisher' => 'George Allen & Unwin',
            ],
            [
                'title' => 'Gone Girl',
                'page_count' => '422',
                'category_id' => $categories['Thriller']->id,
                'body' => 'A psychological thriller that follows the disappearance of a woman and the subsequent investigation that reveals disturbing secrets.',
                'user_id' => $user->id,
                'cover_image' => 'https://m.media-amazon.com/images/I/412mr0UWi6L._SY445_SX342_.jpg',
                'amount' => 0,
                'price' => '2200',
                'author' => 'Gillian Flynn',
                'publisher' => 'Crown Publishing Group',
            ],
            [
                'title' => 'Pride and Prejudice',
                'page_count' => '432',
                'category_id' => $categories['Romance']->id,
                'body' => 'A romantic novel that delves into themes of love, reputation, and class in 19th-century England.',
                'user_id' => $user->id,
                'cover_image' => 'https://prodimage.images-bn.com/pimages/9781499369748_p0_v2_s1200x1200.jpg',
                'amount' => 0,
                'price' => '2300',
                'author' => 'Jane Austen',
                'publisher' => 'T. Egerton',
            ],
            [
                'title' => '1984',
                'page_count' => '328',
                'category_id' => $categories['Fiction']->id,
                'body' => 'A dystopian novel set in a totalitarian society under constant surveillance, where independent thinking is a crime.',
                'user_id' => $user->id,
                'cover_image' => 'https://cdn.waterstones.com/bookjackets/large/9780/1410/9780141036144.jpg',
                'amount' => 0,
                'price' => '1800',
                'author' => 'George Orwell',
                'publisher' => 'Secker & Warburg',
            ],
            [
                'title' => 'The Da Vinci Code',
                'page_count' => '689',
                'category_id' => $categories['Mystery']->id,
                'body' => 'A mystery novel that follows a Harvard professor and a French cryptologist in their quest to uncover a hidden truth.',
                'user_id' => $user->id,
                'cover_image' => 'https://m.media-amazon.com/images/I/91FWKxNXR9L._SY466_.jpg',
                'amount' => 0,
                'price' => '2600',
                'author' => 'Dan Brown',
                'publisher' => 'Doubleday',
            ],
            [
                'title' => 'The Book Thief',
                'page_count' => '550',
                'category_id' => $categories['Historical Fiction']->id,
                'body' => 'A historical novel set in Nazi Germany, following a young girl who finds solace in stealing books and sharing them with others.',
                'user_id' => $user->id,
                'cover_image' => 'https://m.media-amazon.com/images/I/41RKGjq-XGL._SY445_SX342_.jpg',
                'amount' => 0,
                'price' => '2500',
                'author' => 'Markus Zusak',
                'publisher' => 'Knopf Publishing Group',
            ],
            [
                'title' => 'It',
                'page_count' => '1138',
                'category_id' => $categories['Thriller']->id,
                'body' => 'A horror novel about a group of children who confront an evil entity that preys on the town of Derry.',
                'user_id' => $user->id,
                'cover_image' => 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1334416842i/830502.jpg',
                'amount' => 0,
                'price' => '3200',
                'author' => 'Stephen King',
                'publisher' => 'Viking',
            ],
            [
                'title' => 'Frankenstein',
                'page_count' => '280',
                'category_id' => $categories['Fiction']->id,
                'body' => 'A gothic novel about a scientist who creates a sapient creature in a scientific experiment gone awry.',
                'user_id' => $user->id,
                'cover_image' => 'https://interactive.wttw.com/sites/default/files/frankenstein@2x.jpg',
                'amount' => 0,
                'price' => '1900',
                'author' => 'Mary Shelley',
                'publisher' => 'Lackington, Hughes, Harding, Mavor & Jones',
            ]
        ];

        // Create books
        foreach ($books as $book) {
            Book::create($book);
        }
    }
}
