import axios from "axios";
import { API_ENDPOINTS, RESPONSE_STATUS_MESSAGES } from "./dog-api-endpoints";

/**
 * This contains the API calls
 * 
 * Not too much to say :)
 */

/**
 * getDog
 * returns a string with the url of the dog image
 * always return a randome image
 * @param {string} dog
 * @returns string / false if error
 */
const getDog = async(dog = undefined, subdog = undefined) => {
    // common vars
    let response;

    // failsafe!
    // check if you send an string
    if (!typeof dog === "string") {
        console.log("[getDog]: Feeded with a bad type");
        return false;
    }

    // if no dog, get random dog
    if (!dog) {
        try {
            // use axios
            response = await (await axios.get(`${API_ENDPOINTS.baseUrl}${API_ENDPOINTS.randomImage}`)).data;

            if (response.status === RESPONSE_STATUS_MESSAGES.ok) {
                // return the image
                return response.message;
            }

            // something happens on the server side (meaning it will respond something bad)
            return false;
        } catch (err) {
            // here comes network errors
            // there's always a better way to show this to the user
            console.error("[getDog]: There was an error retrieving the image: ", err);
            return false;
        }
    }

    // standar response if there's a breed and you want one dog
    // because it returns an array of dogs, let's take one in random
    // so replace the {BREED} with the dog breed on the url
    // again a try/catch is your friend
    if (dog && !subdog) {
        try {
            response = await (
                await axios.get(`${API_ENDPOINTS.baseUrl}${API_ENDPOINTS.byBreed.replace("{BREED}", dog)}`)
            ).data;

            if (response.status === RESPONSE_STATUS_MESSAGES.ok) {
                // take one "randomly"
                return response.message;
            }

            // if no, something has happens on the server side, return false
            return false;
        } catch (err) {
            // network errors!
            console.error("[getDog]: There was an error retrieving the image: ", err);
            return false;
        }
    }

    // you have a dog, and a sub dog
    if (dog && subdog) {
        try {
            response = await (
                await axios.get(`${API_ENDPOINTS.baseUrl}${API_ENDPOINTS.byBreedandSubBreed.replace("{BREED}", dog).replace("{SUBBREED}", subdog)}`)
            ).data;

            if (response.status === RESPONSE_STATUS_MESSAGES.ok) {
                // take one "randomly"
                return response.message;
            }

            // if no, something has happens on the server side, return false
            return false;
        } catch (err) {
            // network errors!
            console.error("[getDog]: There was an error retrieving the image: ", err);
            return false;
        }
    }

    // if you got here, you have a problem
    return false;
};

/**
 * getBreedList
 * returns the breed list by breed or all if there's no breed
 * @param {string} breed
 * @returns [] array / false if error
 */
const getBreedList = async(breed = undefined) => {
    // common vars
    let response;

    // failsafe!
    // always check that you have what you need
    if (!typeof breed === "string") {
        console.log("[getBreedList]: Feeded with a bad type content");
        return false;
    }

    // no breed get fully list
    if (!breed) {
        try {
            // use axios
            response = (await axios.get(`${API_ENDPOINTS.baseUrl}${API_ENDPOINTS.listBreeds}`)).data;

            if (response.status === RESPONSE_STATUS_MESSAGES.ok) {
                // return the array of the breeds
                return response.message;
            }

            // if there's an error on the response, return false
            return false;
        } catch (err) {
            // server side errorsÍ
            console.error("[getBreedList]: There was an error retrieving the list");
            return false;
        }
    }

    try {
        response = (
            await axios.get(`${API_ENDPOINTS.baseUrl}${API_ENDPOINTS.subBreed.replace("{BREED}", breed)}`)
        ).data;

        if (response.status === RESPONSE_STATUS_MESSAGES.ok) {
            return response.message;
        }

        return false;
    } catch (err) {
        console.error("[getBreedList]: There was an error retrieving the list");
        return false;
    }
};

export default {
    getDog,
    getBreedList,
}