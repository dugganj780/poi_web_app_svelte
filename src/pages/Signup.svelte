<script lang="ts">
    import moher05 from "/src/assets/moher05.jpg";
    import {title, navBar, welcomeBar} from "../stores"
    import SignupForm from "../components/SignupForm.svelte"

    title.set("Points of Interest");

    navBar.set({
        bar: welcomeBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
        <img width="300" src="{moher05}" alt="homer">
    </div>
    <div class="uk-width-1-2@m">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge">
            <h3 class="uk-card-title uk-text-center">Fill in your details below</h3>
            <SignupForm />
        </div>
    </div>
</div>