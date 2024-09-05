<?php

namespace App\Http\Resources;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Category;
use App\Models\Planer;
use Illuminate\Http\Resources\Json\JsonResource;
use Laravel\Sanctum\Http\Controllers\CsrfCookieController;

class PlanerResource extends JsonResource
{
/**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
       public static $wrap='planer';
    public function toArray(Request $request): array
    {
        return [
            'id'=>$this->resource->id,
            'name'=>$this->resource->name,
            'page_number'=>$this->resource->page_number,
            'body'=>$this->resource->body,
            'user'=>new UserResource($this->resource->user),
            'category'=>$this->resource->category,
            'image'=>$this->resource->image,
            'amount'=>$this->resource->amount,
            'price'=>$this->resource->price,
            'size'=>$this->resource->size,
            'stickers'=>$this->resource->stickers,
            'notes'=>$this->resource->notes,

        ];
    }
}
