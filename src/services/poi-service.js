import axios from "axios";
import {user} from "../stores";
import {poi} from "../stores";


export class PoiService {
    poiList = [];
    baseUrl = "";

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        if (localStorage.user) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.user);
        }
        if (localStorage.poi) {
           localStorage.setItem("poi", localStorage.poi);
        }
    }

    async getPois() {
        try {
            const response = await axios.get(this.baseUrl + "/api/pois")
            this.poiList = await response.data;
            return this.poiList;
        } catch (error) {
            return [];
        }
    }

    async getPoi(id){
        try {
            //const response = await axios.get(this.baseUrl + "/api/pois/" + id);
            const response = await axios.get(`${this.baseUrl}/api/pois/` +id, {id});
            poi.set(response.data);
            console.log(response.data);
            localStorage.poi = JSON.stringify(response.data);
            return response.data;
        } catch (error) {
            return null;
        }
    }

    async clearPoi(){
        try {
            poi.set({
                name: "",
                category: "",
                description:"",
                lat: "",
                long: "",
                rating: "",
                user: "",
                _id: ""
            })
            console.log(poi);
            localStorage.poi = null;
    } catch (error) {
        return null;
    }
    }

    async getPoiImages(id) {
        try {
            const response = await axios.get(this.baseUrl + "/api/images/" + id);
            return response.data;
        } catch (e) {
            return null;
        }
    }

    async getMountains() {
        try {
            const response = await axios.get(this.baseUrl + "/api/pois")
            this.poiList = await response.data;
            //const mountains = this.poiList.find({category: "Mountain"}, function (err, doc){});
            const mountains = [];
            for (let i = 0; i < this.poiList.length; i++) {
                if(this.poiList[i].category === "Mountain"){
                    mountains.push(this.poiList[i])
                }
            }
            return mountains;
        } catch (error) {
            return [];
        }
    }

    async getNatMons() {
        try {
            const response = await axios.get(this.baseUrl + "/api/pois")
            this.poiList = await response.data;
            //const mountains = this.poiList.find({category: "Mountain"}, function (err, doc){});
            const natMons = [];
            for (let i = 0; i < this.poiList.length; i++) {
                if(this.poiList[i].category === "National Monument"){
                    natMons.push(this.poiList[i])
                }
            }
            return natMons;
        } catch (error) {
            return [];
        }
    }

    async getIslands() {
        try {
            const response = await axios.get(this.baseUrl + "/api/pois")
            this.poiList = await response.data;
            //const mountains = this.poiList.find({category: "Mountain"}, function (err, doc){});
            const islands = [];
            for (let i = 0; i < this.poiList.length; i++) {
                if(this.poiList[i].category === "Island"){
                    islands.push(this.poiList[i])
                }
            }
            return islands;
        } catch (error) {
            return [];
        }
    }

    async getForests() {
        try {
            const response = await axios.get(this.baseUrl + "/api/pois")
            this.poiList = await response.data;
            const forests = [];
            for (let i = 0; i < this.poiList.length; i++) {
                if(this.poiList[i].category === "Forest"){
                    forests.push(this.poiList[i])
                }
            }
            return forests;
        } catch (error) {
            return [];
        }
    }

    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
            if (response.data.success) {
                user.set({
                    email: email,
                    token: response.data.token
                });
                localStorage.user = JSON.stringify(response.data.token);
                return true;
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async logout() {
        user.set({
            email: "",
            token: ""
        });
        axios.defaults.headers.common["Authorization"] = "";
        localStorage.user = null;
    }

    async createPoi(name, category, description, lat, long, rating) {
        try {
            const newPoi = {
                name: name,
                category: category,
                description: description,
                lat: lat,
                long: long,
                rating: rating,
                comments: []
            };
            const response = await axios.post(this.baseUrl + "/api/pois", newPoi);
            console.log(response)
            console.log(newPoi)
            return response.status === 200;
        } catch (error) {
            return false;
        }
    }

    async addComment(name, dateTime, text, id){
        try{
            const newComment = {
                name: name,
                dateTime: dateTime,
                text: text
            };
            //const id = localStorage.poi._id;
            const response = await axios.post(this.baseUrl + "/api/pois/" +id, newComment);
            return response.status === 200;
        }catch (error) {
            return false;
        }
    }

    async signup(firstName, lastName, email, password) {
        try {
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            };
            const response = await axios.post(this.baseUrl + "/api/users", userDetails);
            const newUser = await response.data;
            console.log(newUser);
            user.set(newUser);
            return true;
        } catch (error) {
            return false;
        }
    }

    async getUser(id) {
        try {
            const response = await axios.get(this.baseUrl + "/api/users/" + id);
            return response.data;
        } catch (error) {
            return null;
        }
    }

    async getWeatherInfo(lat, long){
        try {
            const API = "979ff9585ac147c62cce65ca76081689";
            const response = await self.fetch("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=" + API);
            let weather = await response.json();
            //console.log(weather);

            const weatherInfo = {
                weather: weather.weather[0].main,
                temp: Math.round(weather.main.temp - 273.15) + "\u00B0C",
                feelTemp: Math.round(weather.main.feels_like - 273.15) + "\u00B0C",
                windspeed: weather.wind.speed + "km/hr",
            }
            console.log(weatherInfo.feelTemp)
            return weatherInfo
        }
        catch (error) {
            return null;
        }
    }
}