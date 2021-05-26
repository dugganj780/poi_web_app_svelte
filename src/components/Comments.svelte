<script lang="ts">
    import { onMount, getContext } from "svelte";
    import { poi } from "../stores";

    const poiService = getContext("PoiService");
    let comments;

    onMount(async () => {
        if ($poi.comments.length>0){
            comments = $poi.comments;
        }
        console.log(comments);

    });
</script>

<div class="uk-card uk-card-default uk-card-body uk-padding">
    {#if comments}
{#each comments as comment}
<article class="uk-comment">
    <header class="uk-comment-header">
        <div class="uk-grid-medium uk-flex-middle" uk-grid>
            <div class="uk-width-auto">
                <img class="uk-comment-avatar" uk-icon="user" width="60" height="60" alt="">
            </div>
            <div class="uk-width-expand">
                <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">{comment.name}</a></h4>
                <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                    <li><a href="#">{comment.dateTime}</a></li>
                </ul>
            </div>
        </div>
    </header>
    <div class="uk-comment-body">
        <p>{comment.text}</p>
    </div>
    <br>
</article>
    {/each}
        {/if}
</div>