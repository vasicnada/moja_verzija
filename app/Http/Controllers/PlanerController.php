<?php

namespace App\Http\Controllers;
use App\Http\Resources\PlanerResource;
use App\Models\Planer;
use App\Models\User;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\Http\Controllers\CsrfCookieController;

class PlanerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $planers=Planer::all();
        return $planers;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name'=>'required|string|max:255',
            'page_number'=>'string|max:100',
            'category_id'=>'required',
            'body'=>'required|string|max:255',
            'image'=>'required',
            'amount'=>'required',
            'price'=>'required',
            'size'=>'required',
            'stickers'=>'required',
            'notes'=>'string|max:100'

        ]);

        if($validator->fails()){
        return resposne()->json($validator->errors());
        
        }

        $planer = Planer::create([
        'name'=>$request->name,
        'page_number'=>$request->page_number,
        'category_id'=>$request->category_id,
        'body'=>$request->body,
        'user_id'=>Auth::user()->id,
        'image'=>$request->image,
        'amount'=>$request->amount,
        'price'=>$request->price,
        'size'=>$request->size,
        'stickers'=>$request->stickers,
        'notes'=>$request->notes
        ]);

        return response()->json([
            'Planer is created successfully.', new PlanerResource($planer)
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Planer $planer)
    {
        return new PlanerResource($planer);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Planer $planer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Planer $planer)
    {
        $validator = Validator::make($request->all(),[
            'name'=>'required|string|max:255',
            'page_number'=>'string|max:100',
            'category_id'=>'required',
            'body'=>'required|string|max:255',
            'image'=>'required',
            'amount'=>'required',
            'price'=>'required',
            'size'=>'required',
            'stickers'=>'required',
            'notes'=>'required'
        ]);

        if($validator->fails())
        return resposne()->json(
               $validator->errors());


        $planer->name = $request->name;
        $planer->page_number = $request->page_number;
        $planer->category_id = $request->category_id;
        $planer->body = $request->body;
        $planer->user_id = $request->user_id;
        $planer->image = $request->image;
        $planer->amount = $request->amount;
        $planer->price = $request->price;
        $planer->size = $request->size;
        $planer->stickers = $request->stickers;
        $planer->notes = $request->notes;
        $planer->save();

        return response()->json([
            'Planer is updated successfully.', new PlanerResource($planer)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Planer $planer)
    {
        $planer->delete();
        return response()->json([
            'Planer is deleted successfully.'
        ]);
    }
}
