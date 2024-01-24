<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Roast My Code') }}</title>
    <link rel="shortcut icon" href="{{ asset('favicon.png') }}" type="image/x-icon">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased bg-[#282A36] text-white">
    @inertia

    <div class="top-0 right-0 left-0 bottom-0 fixed flex items-center justify-center z-50" id="initial_loading">
        <div class="flex flex-col items-center gap-5">
            <span class="loading mx-auto"></span>
            <span class="text-2xl">Loading</span>
        </div>
    </div>

    <script src="https://tinylytics.app/embed/{{ env('TINYLYTICS_EMBED_CODE') }}" defer></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var loadingElement = document.getElementById('initial_loading');

            if (loadingElement) {
                loadingElement.remove();
            }
        });
    </script>
</body>

</html>
