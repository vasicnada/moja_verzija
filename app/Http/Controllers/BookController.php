<?php

namespace App\Http\Controllers;

use App\Http\Resources\BookResource;
use App\Models\Book;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $books = Book::all();
        return BookResource::collection($books); // Wrap in resource collection
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255', // Updated field name
            'author' => 'required|string|max:255', // Added field for author
            'page_count' => 'required|integer', // Updated field name and type
            'category_id' => 'required|exists:categories,id', // Ensure category exists
            'cover_image' => 'required|string', // Updated field name
            'price' => 'required|numeric', // Ensure price is numeric
            'publisher' => 'required|string|max:255', // Added field for publisher
            'amount'=>'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $book = Book::create([
            'title' => $request->title, // Updated field name
            'author' => $request->author, // New field
            'page_count' => $request->page_count, // Updated field name
            'category_id' => $request->category_id,
            'cover_image' => $request->cover_image, // Updated field name
            'price' => $request->price,
            'publisher' => $request->publisher, // New field
            'amount'=>$request->amount,
        ]);

        return response()->json([
            'message' => 'Book is created successfully.',
            'book' => new BookResource($book)
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {
        return new BookResource($book);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Book $book)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255', // Updated field name
            'author' => 'required|string|max:255', // New field
            'page_count' => 'required|integer', // Updated field name and type
            'category_id' => 'required|exists:categories,id', // Ensure category exists
            'cover_image' => 'required|string', // Updated field name
            'price' => 'required|numeric', // Ensure price is numeric
            'publisher' => 'required|string|max:255', // New field
            'amount'=>'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $book->update([
            'title' => $request->title, // Updated field name
            'author' => $request->author, // New field
            'page_count' => $request->page_count, // Updated field name
            'category_id' => $request->category_id,
            'cover_image' => $request->cover_image, // Updated field name
            'price' => $request->price,
            'publisher' => $request->publisher, // New field
            'amount'=>$request->amount,
        ]);

        return response()->json([
            'message' => 'Book is updated successfully.',
            'book' => new BookResource($book)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        $book->delete();

        return response()->json([
            'message' => 'Book is deleted successfully.'
        ]);
    }
}
