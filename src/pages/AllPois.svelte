<script>
    import PoiList from "../components/PoiList.svelte";
    import blarneycastle02 from "/src/assets/blarney-castle02.jpg";
    import {navBar, mainBar, title} from "../stores";

    title.set("Points of Interest");
    navBar.set({
        bar: mainBar
    });
</script>



<div class="uk-background-top-center uk-panel uk-padding" style="background-image: url(/src/assets/scelligs.jpg);">
    <div class="uk-margin uk-margin-left uk-margin-right uk-text-center ">
        <div>
            <h1 class ="uk-heading-line uk-text-center uk-text-emphasis"><span>All Points of Interest</span></h1>
            <div class="uk-card uk-card-default uk-card-body uk-align-centre">
            <PoiList/>
            </div>
        </div>
    </div>
</div>