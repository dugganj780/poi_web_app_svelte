<script>
    import scelligs from "/src/assets/scelligs.jpg";
    import {navBar, mainBar, title} from "../stores"
    import PoiForm from "../components/PoiForm.svelte";

    title.set("Points of Interest");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <img width="300" src="{scelligs}" alt="homer">
        </div>
    </div>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <PoiForm/>
        </div>
    </div>
</div>