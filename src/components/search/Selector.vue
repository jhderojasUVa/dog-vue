<script>
/**
 * This component is responsible for feeding
 * a simple select (DOM element).
 * The trick is that I didn't use the model way of vue
 * but a manual one to make it interesting.
 * It gets the list and fill the select.
 * This emits (bubble up) to the parent when you change
 * the index on the select.
 * 
 * Is a simple view.
 */
export default {
    props: {
        options: Array, 
    },
    data() {
        return {
            selected: undefined,
        }
    },
    methods: {
        sendToSearch() {
            // this contains the index selected on the select
            // for showing on the DOM (not really needed but for test is nice)
            this.selected = this.$el.selectedIndex
            // emit event to parent with the value
            this.$emit('seleted', this.$el.selectedIndex)
        }
    }
}
</script>

<template>
    <select v-on:change="sendToSearch()" :selected="selected">
        <option>Random...</option>
        <option :key="option" v-for="option in options">{{ option }}</option>
    </select>
</template>

<style>
select {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1em;
    padding-right: 0.5em;
    border: 1px solid black;
    margin-right: 0.5em;
    margin-bottom: 5px;

    transition: width 0.25s;
}

select:focus {
    outline: none;
}
</style>