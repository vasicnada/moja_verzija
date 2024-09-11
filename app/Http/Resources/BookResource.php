<?php

namespace App\Http\Resources;

use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    /**
     * The resource collection wrapper.
     *
     * @var string|null
     */
    public static $wrap = 'book';

    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->resource->id,
            'title' => $this->resource->title, // Updated from 'name' to 'title'
            'author' => $this->resource->author, // New field
            'page_count' => $this->resource->page_count, // Updated from 'page_number' to 'page_count'
            'category'=>$this->resource->category,
            'cover_image' => $this->resource->cover_image, // Updated from 'image' to 'cover_image'
            'price' => $this->resource->price,
            'publisher' => $this->resource->publisher, // New field
            'amount'=>$this->resource->amount,
            'user' => new UserResource($this->resource->user),
        ];
    }
}


