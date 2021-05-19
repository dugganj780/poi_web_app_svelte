import { writable } from "svelte/store";

export const mainBar = [{
    title: "Pois",
    icon: "fas fa-hand-holding-usd fa-3x",
    colour: "color:rgb(153, 196, 74)",
    link: "/#/pois",
},
    {
        title: "Add a POI",
        icon: "fas fa-hand-holding-usd fa-3x",
        colour: "color:rgb(153, 196, 74)",
        link: "/#/addpoi",
    },
    {
    title: "Logout",
    icon: "fas fa-sign-out-alt fa-3x",
    colour: "color:rgb(156, 70, 128)",
    link: "/#/logout",
}];

export const welcomeBar = [
    {
        title: "Sign Up",
        icon: "fas fa-user-cog fa-3x",
        colour: "color:rgb(63, 160, 155)",
        link: "/#/signup",
    },
    {
        title: "Log In",
        icon: "fas fa-user-edit fa-3x",
        colour: "color:green",
        link: "/#/login",
    },
];

export const navBar = writable({
    bar: [],
});
export const title = writable("");