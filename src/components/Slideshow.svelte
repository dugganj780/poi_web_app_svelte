<script lang="ts">
    //Could not implement Images in the app so this component is used to get weather information

    import { onMount, getContext } from "svelte";
    import { poi } from "../stores";

    const poiService = getContext("PoiService");

    let weather;
    const lat = $poi.lat;
    const long = $poi.long;

    onMount(async () => {
        //if statement and while loop used as a delay in case weather does not load the first time
        weather = await poiService.getWeatherInfo(lat,long);
        if (weather===null){
            while (weather===null) {
                weather = await poiService.getWeatherInfo($poi.lat, $poi.long);
            }
        }

        console.log(weather);
        return weather;
    });

</script>

<div class="uk-card uk-card-default">
    <div class="uk-card-body">
        <h3 class="uk-card-title uk-text-center">Weather Conditions</h3>
        <dl class="uk-description-list uk-description-list-divider">
            {#if weather}
            <dt>Weather</dt>
            <dd>{weather.weather}</dd>
            <dt>Temperature</dt>
            <dd>{weather.temp}</dd>
            <dt>Feels Like</dt>
            <dd>{weather.feelTemp}</dd>
            <dt>Wind Speed</dt>
            <dd>{weather.windspeed}</dd>
            {/if}
        </dl>
    </div>
</div>