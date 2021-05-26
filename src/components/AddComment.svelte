<script lang="ts">
    import { onMount, getContext } from "svelte";
    import {user} from "../stores";
    import { poi } from "../stores";
    import { push } from "svelte-spa-router";


    const poiService = getContext("PoiService");

    let text ="";
    let name = "";
    let dateTime = new Date().toLocaleString();
    let errorMessage



    async function addComment() {
        console.log($user)
        console.log($poi)
        if ($user){
            name = $user.email;
            }

        const success = await poiService.addComment(name, dateTime, text, $poi._id)
        if (success) {
            push("/#/poiview/"+ $poi)

        } else {
            //   console.log(error.response.data)
            errorMessage = "Comment Unsuccessful - some error occurred";
        }
    }

</script>


<form on:submit|preventDefault={addComment} class="uk-form-horizontal">
    <div class="uk-margin">
        <div class="uk-margin">
            <textarea bind:value={text} class="uk-textarea" rows="5" placeholder="Add a Comment" type="text" name="text"></textarea>
        </div>
    </div>
    <p uk-margin>
        <input type="submit" value="Comment" class="uk-button uk-button-default">
    </p>
</form>