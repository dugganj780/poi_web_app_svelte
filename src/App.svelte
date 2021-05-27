<script>
  import { setContext } from "svelte";
  import { PoiService } from "./services/poi-service";
  import Main from "./pages/Main.svelte"
  import AllPois from "./pages/AllPois.svelte";
  import Login from "./pages/Login.svelte";
  import Signup from "./pages/Signup.svelte";
  import AddPoi from "./pages/AddPoi.svelte"
  import Navigator from "./components/Navigator.svelte";
  import Router from "svelte-spa-router";
  import PoiView from "./pages/PoiView.svelte";
  import {poi} from "./stores";

  setContext("PoiService", new PoiService("https://intense-badlands-00597.herokuapp.com"));

  let routes = {
    "/" : Main,
    "/login": Login,
    "/signup" : Signup,
    "/pois": AllPois,
    "/logout": Main,
    "/addpoi": AddPoi,
    "/poiview/:id": PoiView,
  }

</script>

<div class="uk-container">
  <Navigator/>
  <Router {routes}/>
</div>