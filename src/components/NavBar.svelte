<script>
    import { onMount } from "svelte";

    let theme = "dark";
    let html_tag;
    onMount(() => {
        html_tag = document.querySelector("html");
    });

    html_tag?.setAttribute("data-theme", theme);
    function handleThemeSwitch() {
        if (theme === "dark") {
            html_tag?.setAttribute("data-theme", "light");
            theme = "light";
        } else {
            html_tag?.setAttribute("data-theme", "dark");
            theme = "dark";
        }
    }
</script>

<nav>
    <ul>
        <li class="title"
            ><strong on:click={handleThemeSwitch}>A<span>R</span>ed</strong></li
        >
    </ul>
    <ul>
        <li><a href="/" class="contrast">Home</a></li>
        <li><a href="/projects" class="contrast">Projects</a></li>
        <li><a href="/repos" class="contrast">Github repos I use</a></li>
        <li><a href="/about" class="contrast">About</a></li>
    </ul>
</nav>

<style>
    nav {
        margin: 20px;
    }
    .title strong {
        font-stretch: extra-expanded;
        font-size: 2.3rem;
    }
    .title strong span {
        color: red;
    }
</style>
