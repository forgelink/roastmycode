<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class PostController extends Controller
{
    public function show(int $post)
    {
        $post = Post::with('user')
            ->withCount('replies', 'likes')
            ->find($post);

        return Inertia::render('Posts/Show', [
            'post'=> $post,
            'posts'=> self::getPosts($post->id, $post->language),
            'replies'=> self::getLatestReplies($post->id, $post->language),
        ]);
    }

    public function submit(Request $request)
    {
        $request->validate([
            'parent_id'=> ['nullable', 'integer', 'exists:posts,id'],
            'content'=> ['required', 'string', 'max:1000'],
            'language'=> ['required', 'string', 'max:15'],
            'code'=> ['required', 'string'],
        ]);

        Post::create([
            'user_id'=> $request->user()->id,
            'parent_id'=> $request->parent_id,
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

    public function like(Post $post)
    {
        if ($post->user_id === auth()->id()) {
            throw ValidationException::withMessages([
                'post' => "You can't like your own post.",
            ]);
        }

        $liked = $post->likes()->where('user_id', auth()->id())->first();

        if ($liked) {
            $liked->delete();
            return;
        }

        $post->likes()->create([
            'user_id'=> auth()->id()
        ]);
    }

    static function getPosts(int $current_id, string $language)
    {
        return Post::with('user')
            ->where('parent_id', null)
            ->where('language', $language)
            ->where('id', '!=', $current_id)
            ->latest()
            ->limit(3)
            ->get();
    }

    static function getLatestReplies(int $current_id, string $language)
    {
        return Post::with('user')
            ->where('parent_id', $current_id)
            ->where('language', $language)
            ->latest()
            ->limit(30)
            ->get();
    }
}
