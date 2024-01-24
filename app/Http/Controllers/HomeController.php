<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Foundation\Application;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Index', [
            'posts' => self::getPosts()
        ]);
    }

    static function getPosts()
    {
        return Post::with('user')
            ->withCount('replies', 'likes')
            ->where('parent_id', null)
            ->latest()
            ->limit(30)
            ->get();
    }
}
