<script>
    import BlogCard from "../components/BlogCard.svelte";
    const data = [
        {
            title: "Introduction to Svelte",
            description:
                "Learn the basics of Svelte, a modern JavaScript framework for building user interfaces.",
            url: "https://example.com/introduction-to-svelte",
        },
        {
            title: "Getting Started with SvelteKit",
            description:
                "A comprehensive guide to getting started with SvelteKit, the framework for building web applications with Svelte.",
            url: "https://example.com/getting-started-with-sveltekit",
        },
        {
            title: "Advanced Svelte Techniques",
            description:
                "Explore advanced techniques in Svelte to build powerful and efficient web applications.",
            url: "https://example.com/advanced-svelte-techniques",
        },
        {
            title: "Building Dynamic Web Apps with Svelte",
            description:
                "Learn how to build dynamic and interactive web applications using Svelte.",
            url: "https://example.com/building-dynamic-web-apps-with-svelte",
        },
        {
            title: "Svelte vs. React: A Comparison",
            description:
                "Compare Svelte and React to understand the differences and decide which one suits your project better.",
            url: "https://example.com/svelte-vs-react-comparison",
        },
        {
            title: "State Management in Svelte",
            description:
                "Understand the state management techniques in Svelte and how to effectively manage state in your applications.",
            url: "https://example.com/state-management-in-svelte",
        },
        {
            title: "SEO Optimization in SvelteKit",
            description:
                "Learn how to optimize your SvelteKit applications for better search engine performance.",
            url: "https://example.com/seo-optimization-in-sveltekit",
        },
        {
            title: "Building Components with Svelte",
            description:
                "A step-by-step guide to building reusable components in Svelte.",
            url: "https://example.com/building-components-with-svelte",
        },
        {
            title: "Deploying Svelte Applications",
            description:
                "Learn the best practices for deploying Svelte applications to various platforms.",
            url: "https://example.com/deploying-svelte-applications",
        },
        {
            title: "SvelteKit Plugins and Tools",
            description:
                "Discover the plugins and tools available for SvelteKit to enhance your development workflow.",
            url: "https://example.com/sveltekit-plugins-and-tools",
        },
    ];
</script>

<svelte:head>
    <title>ARed</title>
</svelte:head>

<h1> Ajin Varghese Chandy. </h1>
<p> dev stuff 👇 </p>
<main>
    <div class="blog-list">
        {#each data as blog}
            <BlogCard cardInfo={blog} />
        {/each}
    </div>
    <div class="side-card"></div>
</main>

<style>
    .blog-list {
        width: 60%;
    }
</style>
