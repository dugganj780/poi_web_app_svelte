import { writable } from "svelte/store";

export const mainBar = [{
    title: "Pois",
    icon: "fas fa-mountain fa-3x",
    colour: "color:rgb(75, 20, 200)",
    link: "/#/pois",
},
    {
        title: "Add a POI",
        icon: "fas fa-plus fa-3x",
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

export const user = writable({
    email: "",
    token: ""
});

export const poi = writable({
    name: "",
    category: "",
    description:"",
    lat: "",
    long: "",
    rating: "",
    user: "",
    _id: "",
    comments: []
});