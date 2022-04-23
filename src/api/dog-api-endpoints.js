/**
 * This contains a simple definitions
 * 
 * Is because sometimes I'm lazy
 * and I don't want to have copy/paste url problems
 * and, in case of change, you change once for everything
 */

// base
const baseUrl = 'https://dog.ceo/api';
// random
const randomImage = '/breeds/image/random';
// breed
const listBreeds = '/breeds/list/all';
// show bread if any
const subBreed = '/breed/{BREED}/list';
// images
const byBreed = '/breed/{BREED}/images/random';
const byBreedandSubBreed = '/breed/{BREED}/{SUBBREED}/images/random';

export const RESPONSE_STATUS_MESSAGES = {
    ok: 'success',
};

// never use default
export const API_ENDPOINTS = {
    baseUrl,
    randomImage,
    listBreeds,
    subBreed,
    byBreed,
    byBreedandSubBreed,
}