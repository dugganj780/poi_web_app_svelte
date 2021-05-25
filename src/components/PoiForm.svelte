<script lang="ts">
    import { onMount, getContext } from "svelte";
    import {user} from "../stores";

    let poiList = [];
    let name = "";
    let category = ["National Monument", "Mountain", "Forest", "Island"];
    let categoryChoice = 0;
    let description = "";
    let lat = 0;
    let long = 0;
    let rating = 0;
    let errorMessage = "";

    const poiService = getContext("PoiService");

    onMount(async () => {
        poiList = await poiService.getPois();
        console.log($user);
    });

    async function createPoi() {
        const success = await poiService.createPoi(name, category[categoryChoice], description, lat, long, rating, $user)
        if (success) {

        } else {
         //   console.log(error.response.data)
            errorMessage = "POI not created - some error occurred";
        }
    }
</script>

<form on:submit|preventDefault={createPoi} class="uk-form-stacked uk-text-left">
    <div class="uk-margin">
        <div class="uk-margin">
            <input bind:value={name} class="uk-input" id="form-stacked-text" type="text" name="name" placeholder="Name" />
        </div>
        <div class="uk-margin">
            <div class="uk-form-label">Category </div>
            <div class="uk-form-controls">
                <label><input bind:group={categoryChoice} value={0} class="uk-radio" type="radio" name="method"> National Monument </label><br>
                <label><input bind:group={categoryChoice} value={1} class="uk-radio" type="radio" name="method"> Mountain </label><br>
                <label><input bind:group={categoryChoice} value={2} class="uk-radio" type="radio" name="method"> Forest </label><br>
                <label><input bind:group={categoryChoice} value={3} class="uk-radio" type="radio" name="method"> Island </label>
            </div>
        </div>
    </div>

        <div class = "uk-margin">
            <textarea bind:value={description} class="uk-textarea" rows="5" name="description" placeholder="Description" ></textarea>
        </div>
        <div class ="uk-margin">
            <input bind:value={lat} class="uk-input" id="form-stacked-text" type="text" name="lat" placeholder="Latitude (-90 to 90)" />
        </div>
        <div class ="uk-margin">
            <input bind:value={long} class="uk-input" id="form-stacked-text" type="text" name="long" placeholder="Longitude (-180 to 180)" />
        </div>
        <div class="uk-margin">
            <input bind:value={rating} class="uk-input uk-form-width-medium" type="number" min="1" max="5" name="rating" placeholder="Rating (1 to 5)">
        </div>
        <div class="uk-margin" uk-margin>
        </div>
        <div class=" uk-width-1-2@m">
            <div class="uk-margin">
                <button class="submit uk-button uk-button-primary uk-button-large uk-width-1-1">Add</button>
            </div>
        </div>
</form>