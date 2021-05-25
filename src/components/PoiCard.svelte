<script lang="ts">
    import { onMount, getContext } from "svelte";
    import { poi } from "../stores";

    //let poi = poi;
    /*let category = $poi.category;
    let description = $poi.description;
    let lat = $poi.lat;
    let long = $poi.long;
    let rating = $poi.rating;*/


    const poiService = getContext("PoiService");

    onMount(async () => {
        console.log("this is" + $poi);
    });

</script>

<div class="uk-card uk-card-default uk-card-body">
    <dl class="uk-description-list uk-description-list-divider">
        {#if $poi}
        <dt>Point of Interest</dt>
        <dd>{$poi.name}</dd>
        <dt>Category</dt>
        <dd>{$poi.category}</dd>
        <dt>Latitude</dt>
        <dd>{$poi.lat}</dd>
        <dt>Longitude</dt>
        <dd>{$poi.long}</dd>
        <dt>Description</dt>
        <dd>{$poi.description}</dd>
        <dt>Rating</dt>
        <dd>{$poi.rating}</dd>
            {/if}
        <!--<dt>Upload Image</dt>
        <dd>{{>addimage}}</dd>
        {#if poi.user.isOwner}
        <dd>
            <div class="uk-button-group">
                <button class="uk-button uk-button-secondary" ><a href ="/updatepoi">Edit</a></button>
                <button class="uk-button uk-button-secondary"><a href ="/deletepoi">Delete</a></button>
            </div>
        </dd>
        {{/if}}-->
    </dl>
</div>