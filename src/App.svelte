<script>
  import { setContext } from "svelte";
  import { PoiService } from "./services/poi-service";
  import Main from "./pages/Main.svelte"
  import AllPois from "./pages/AllPois.svelte";
  import Login from "./pages/Login.svelte";
  import AddPoi from "./pages/AddPoi.svelte"
  import Navigator from "./components/Navigator.svelte";
  import Router from "svelte-spa-router";

  setContext("PoiService", new PoiService("http://localhost:4000"));

  let routes = {
    "/" : Main,
    "/login": Login,
    "/pois": AllPois,
    "/logout": Main,
    "/addpoi": AddPoi,
  }

</script>

<div class="uk-container">
  <Navigator/>
  <Router {routes}/>
</div>