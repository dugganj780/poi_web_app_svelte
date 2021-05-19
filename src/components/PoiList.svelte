<script>
    import {onMount, getContext } from 'svelte'

    const poiService = getContext("PoiService");

    let poiList;
    onMount(async () => {
        poiList = await poiService.getPois();
    })
    let mountains;
    onMount(async () => {
        mountains = await poiService.getMountains();
    })

    let natMons;
    onMount(async () => {
        natMons = await poiService.getNatMons();
    })

    let islands;
    onMount(async () => {
        islands = await poiService.getIslands();
    })

    let forests;
    onMount(async () => {
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
                    <td> <button class="uk-button uk-button-secondary"> <a href="/poiview/{mountain._id}"> View </a></button> </td>
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
                            <td> <button class="uk-button uk-button-secondary"> <a href="/poiview/{natMon._id}"> View </a></button> </td>
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
                            <td> <button class="uk-button uk-button-secondary"> <a href="/poiview/{forest._id}"> View </a></button> </td>
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
                            <td> <button class="uk-button uk-button-secondary"> <a href="/poiview/{island._id}"> View </a></button> </td>
                        </tr>
                    {/each}
                {/if}
                </tbody>
            </table>
        </div>
    </li>
</ul>