<script>
    import {navBar, mainBar, title} from "../stores";
    import PoiCard from "../components/PoiCard.svelte";
    import Slideshow from "../components/Slideshow.svelte";


    title.set("Points of Interest");
    navBar.set({
        bar: mainBar
    });


</script>

<div class="uk-background-top-left uk-panel uk-padding" style="background-image: url(src/assets/moher.jpg);">
    <div class="uk-child-width-expand@s uk-text-left" uk-grid uk-height-match="target: > div > .uk-card">
        <div>
            <PoiCard />
        </div>
        <div>
            <!--{{>slideshow}}--><Slideshow />
        </div>
    </div>
</div>