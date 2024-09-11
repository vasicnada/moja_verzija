<?php

namespace App\Http\Resources;
use App\Http\Resources\BookResource;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public static $wrap='user';
    public function toArray(Request $request): array
    {
        return [
           'id'=>$this->resource->id,
           'name'=>$this->resource->name,
           'email'=>$this->resource->email
        ];
    }
}
