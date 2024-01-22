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

        return Inertia::render('Posts/Show', [
            'post'=> $post,
            'posts'=> self::getPosts($post->id, $post->language)
        ]);
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

    public function edit(Post $post)
    {
        if ($post->user->id !== auth()->id()) return abort(403);

        return Inertia::render('Posts/Edit', [
            'post'=> $post,
            'posts'=> self::getPosts($post->id, $post->language)
        ]);
    }

    public function update(Request $request, Post $post)
    {
        if ($post->user->id !== auth()->id()) return abort(403);

        $request->validate([
            'content'=> ['required', 'string', 'max:1000'],
            'language'=> ['required', 'string', 'max:15'],
            'code'=> ['required', 'string'],
        ]);

        $post->update([
            'user_id'=> $request->user()->id,
            'content'=> $request->content,
            'language'=> $request->language,
            'code'=> $request->code
        ]);

        return to_route('post.show', $post->id);
    }

    static function getPosts(int $current_id, string $language)
    {
        return Post::with('user')
            ->where('language', $language)
            ->where('id', '!=', $current_id)
            ->latest()
            ->limit(3)
            ->get();
    }
}
