<script lang="ts">
    import {onMount, getContext } from 'svelte'
    import {poi} from "../stores";

    const poiService = getContext("PoiService");

    let poiList;
    let mountains;
    let natMons;
    let islands;
    let forests;

    onMount(async () => {
        poiList = await poiService.getPois();
        mountains = await poiService.getMountains();
        natMons = await poiService.getNatMons();
        islands = await poiService.getIslands();
        forests = await poiService.getForests();

    })


</script>



<ul uk-accordion>
    <li>
        <a class="uk-accordion-title" href="#">Mountains</a>
        <div class="uk-accordion-content">
            <table class="uk-table">
                <thead>
                <tr>
                    <th>Point of Interest</th>
                    <th>View POI</th>
                </tr>
                </thead>
                <tbody class="uk-text-left">
                {#if mountains}
                {#each mountains as mountain}
                <tr>
                    <td>{mountain.name}</td>
                    <td> <a class="uk-button uk-button-default" on:click={ async () => {await poiService.getPoi(mountain._id);} } href="/#/poiview/{mountain._id}"> View </a></td>
                </tr>
                {/each}
                    {/if}
                </tbody>
            </table>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href="#">National Monuments</a>
        <div class="uk-accordion-content">
            <table class="uk-table">
                <thead>
                <th>Point of Interest</th>
                <th>View POI</th>
                </thead>
                <tbody class="uk-text-left">
                {#if natMons}
                    {#each natMons as natMon}
                        <tr>
                            <td>{natMon.name}</td>
                            <td> <a class="uk-button uk-button-default" on:click={async () => {await poiService.getPoi(natMon._id);} } href="/#/poiview/{natMon._id}"> View </a></td>
                        </tr>
                    {/each}
                {/if}
                </tbody>
            </table>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href="#">Forests</a>
        <div class="uk-accordion-content">
            <table class="uk-table">
                <thead>
                <th>Point of Interest</th>
                <th>View POI</th>
                </thead>
                <tbody class="uk-text-left">
                {#if forests}
                    {#each forests as forest}
                        <tr>
                            <td>{forest.name}</td>
                            <td> <a class="uk-button uk-button-default" on:click={async () => {await poiService.getPoi(forest._id);} } href="/#/poiview/{forest._id}"> View </a></td>
                        </tr>
                    {/each}
                {/if}
                </tbody>
            </table>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href="#">Islands</a>
        <div class="uk-accordion-content">
            <table class="uk-table">
                <thead>
                <th>Point of Interest</th>
                <th>View POI</th>
                </thead>
                <tbody class="uk-text-left">
                {#if islands}
                    {#each islands as island}
                        <tr>
                            <td>{island.name}</td>
                            <td> <a class="uk-button uk-button-default" on:click={async () => {await poiService.getPoi(island._id);} } href="/#/poiview/{island._id}"> View </a></td>
                        </tr>
                    {/each}
                {/if}
                </tbody>
            </table>
        </div>
    </li>
</ul>