<script>
/**
 * This is the app that work as a controller (not a real MVC, but some)
 * 
 * It's the responsible of all the logic, meaning
 * get the list and a random dog at start,
 * send the list to the search component and the image to the dog component
 * if receives from the child search, an index, it will do the call
 * to the API changing the id to the name, receiving the response
 * and sending it to dog component to show it
 * 
 * So, this act as controller of the app
 */
// API
import API from './api/dog-api';
// Components
import Dog from './components/dog/Dog.vue'
import Search from './components/search/Search.vue';
import Error from './components/error/Error.vue';

export default {
  data() {
    return {
      currentDog: undefined,
      currentBreeds: undefined,
      sucess: true, // for errors from the backend (trigger error setting to false if you want)
    }
  },
  async mounted() {
    // when mounted load the data
    // get the dog (if empty knows that api return random)
    this.currentDog = await API.getDog();
    // get the breeds list
    this.currentBreeds = await API.getBreedList();

    // is there's an error 
    if (!this.currentDog || !this.currentBreeds) {
      this.sucess = false;
    }
  },
  methods: {
    /**
     * selectedBreed
     * Will take the index of the breed list, get the content
     * and make the search on the API
     * Then put the response into Dog component to show
     * 
     * If, for any reason, fails the response, sets sucess to false and
     * will show the error on the screen
     * @param {number} index 
     */
    async selectedBreed(index) {
      // reset error
      this.sucess = true;
      // search by index the name
      const breedToSearch = Object.keys(this.currentBreeds)[index - 1]; // remember the choose one... is index 0, you need to remove 1
      // search the dog
      this.currentDog = await API.getDog(breedToSearch);

      // is there's an error on the backend (this case only retrieve the dog)
      if (!this.currentDog) {
        this.sucess = false;
      }
    },
  },
  components: { Dog, Search, Error }
}
</script>

<template>
  <div v-if="sucess" >
    <Dog :currentDog="currentDog" />
  </div>
  <div v-else>
    <Error />
  </div>
  <Search :currentBreeds="currentBreeds" @breedSelected="selectedBreed" />
</template>


<style>
@import './assets/base.css';

#app {
  width: 100%;
  height: 100%;
}

div {
  width: 100%;
  height: 100%;
}
</style>
