<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\Request;

class TestimonialController extends Controller
{

    public function index()
    {
        return Testimonial::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'headerMensage' => 'required|string|max:255',
            'image' => 'nullable|url',
            'rating' => 'required|integer|min:1|max:5',
            'message' => 'required|string',
        ]);

        return Testimonial::create($validated);
    }

    public function show(Testimonial $testimonial)
    {
        return $testimonial;
    }

    public function update(Request $request, Testimonial $testimonial)
    {
        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'headerMensage' => 'sometimes|required|string|max:255',
            'image' => 'sometimes|nullable|url',
            'rating' => 'sometimes|required|integer|min:1|max:5',
            'message' => 'sometimes|required|string',
        ]);

        $testimonial->update($validated);

        return $testimonial;
    }

    public function destroy(Testimonial $testimonial)
    {
        $testimonial->delete();
        return response()->noContent();
    }
}
