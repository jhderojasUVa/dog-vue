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
        };
    },
    watch: {
        currentBreeds(newValue, oldValue) {
            // change object to array with the keys
            // to send to child via properties
            this.breed = Object.keys(newValue);
        },
    },
    components: { Selector }
}
</script>

<template>
    <div id="search">
        <Selector :options="breed" @seleted="$emit('breedSelected', index)" />
    </div>
</template>

<style>
#search {
    z-index: 9;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 185px;
    height: 25px;
    padding: 0.5em;
    background-color: white;
    text-align: right;
    border: 1px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.8);
}
</style>