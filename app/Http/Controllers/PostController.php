<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
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
