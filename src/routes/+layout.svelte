<script>
    import { dev } from "$app/environment";
    import "@picocss/pico/css/pico.slate.min.css";
    import { inject } from "@vercel/analytics";
    import NavBar from "../components/NavBar.svelte";
    inject({ mode: dev ? "development" : "production" });
</script>

<svelte:head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <meta name="title" content="ARed" />
    <meta name="description" content="Simple programming tutorials." />
    <meta
        name="keywords"
        content="Programming tutorials,Coding tips,Software development,Learn to code,Programming languages,Code examples,Beginner programming,Advanced coding techniques,Debugging code,Code optimization,Python programming,JavaScript tutorials,Java development,C++ coding,Ruby on Rails,Go programming,Swift for iOS,Kotlin for Android,Rust language,PHP development,Frontend development,Backend development,Full-stack development,HTML and CSS,React.js tutorials,svelte,svelte kit,Vue.js development,Node.js coding,Django web framework,Web development projects,Responsive web design,"
    />
    <meta name="robots" content="index, follow" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="language" content="English" />
    <meta name="author" content="AJin Varghese Chandy" />
    <meta property="og:title" content="ARed" />
    <meta property="og:type" content="text" />
    <meta property="og:url" content="https://ared.dev/" />
    <meta property="og:image" content="https://ared.dev/ared.png" />
</svelte:head>
<NavBar />
<div class="container">
    <slot />
</div>
