<script>
/**
 * This component is responsible for changing
 * the object of the list of breed and transform to the
 * child view (the selector, aka a simple select)
 * the object transformed into an array.
 * 
 * Also, the changes from the selector (events) when
 * changing the breed (as an index)
 * are emitted (bubbled up) to the parent controller
 * to do what is needed.
 * 
 * Is a simple view, but this work as a translator.
 * This translator can be on the controller but on this way
 * we put something here ;)
 */
import Selector from './Selector.vue'

export default {
    props: {
        currentBreeds: Object
    },
    data() {
        return {
            breed: [],
            secondbreed: [],
            currentFistBreed: null,
        };
    },
    watch: {
        currentBreeds(newValue, oldValue) {
            // change object to array with the keys
            // to send to child via properties

            // bulldog has two
            this._breed = newValue;
            this.breed = Object.keys(newValue);
        },
    },
    methods: {
        changeSelected(index) {
            // set the choosed one
            this.currentFistBreed = this.breed[index - 1];
            const second = Object.entries(this._breed);

            if (second[index - 1] && second[index - 1][1].length > 0 ) {
                // we have second breed
                this.secondbreed = second[index - 1][1];
            } else {
                this.secondbreed = [];
                this.currentFistBreed = this.breed[index - 1];
                this.$emit('breedSelected', this.currentFistBreed);
            }
        },
        changeSelectedSecond(index) {
            // emit to app the breed and sub breed
            this.$emit('secondBreedSelected', this.currentFistBreed, this.secondbreed[index]);
        }
    },
    components: { Selector }
}
</script>

<template>
    <div id="search" :class="[secondbreed.length > 0 ? 'maxSize' : '', 'standarSize']">
        <Selector :options="breed" @seleted="changeSelected" />
        <Selector v-if="secondbreed.length > 0"  :options="secondbreed" @seleted="changeSelectedSecond" />
    </div>
</template>

<style>
#search {
    z-index: 9;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 185px;
    padding: 0.5em;
    background-color: white;
    text-align: right;
    border: 1px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.8);
    transition: height 0.25s;
    overflow: hidden;
}

.standarSize {
    height: 25px;
}

.maxSize {
    height: 55px;
}
</style>