<script>
/**
 * This component is responsible for getting the dog
 * as a property attribute tag
 * And show it on the component.
 * 
 * Is a simple view.
 */
export default {
    // comes from the parent
    props: {
        currentDog: String,
    },
}
</script>

<template>
    <div id="dog" :style="`background-image: url(${currentDog})`"></div>
</template>

<style>
#dog {
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>