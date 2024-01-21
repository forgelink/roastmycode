<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function show(Post $post)
    {
        $post->user;

        return Inertia::render('Posts/Show', compact('post'));
    }

    public function submit(Request $request)
    {
        $request->validate([
            'content'=> ['required', 'string', 'max:1000'],
            'language'=> ['required', 'string', 'max:15'],
            'code'=> ['required', 'string'],
        ]);

        Post::create([
            'user_id'=> $request->user()->id,
            'content'=> $request->content,
            'language'=> $request->language,
            'code'=> $request->code
        ]);
    }
}
