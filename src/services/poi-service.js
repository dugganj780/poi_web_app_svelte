import axios from "axios";
import {user} from "../stores";


export class PoiService {
    poiList = [];
    baseUrl = "";

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
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
            return response.status == 200;
        } catch (error) {
            return false;
        }
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
            };
            const response = await axios.post(this.baseUrl + "/api/pois", newPoi);
            console.log(response)
            return response.status === 200;
        } catch (error) {
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
}