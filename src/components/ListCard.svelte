<script>
    export let list;
</script>

<article>
    {#each list as item}
        <a href={item.url}><h6>{item.title}</h6></a>
    {/each}
</article>

<style>
    article {
        width: 40%;
    }
</style>
