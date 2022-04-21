<script>
export default {
    methods: {
        reload() {
            window.location.reload();
        }
    }
}
</script>

<template>
    <div class="card">
        <span>
            <h1>We are sorry!</h1>
            <p>We feel really sorry, but there was an error.</p>
            <p><a v-on:click="reload">Please, try again</a></p>
        </span>
    </div>
</template>

<style>
.card {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 50%;
    height: 200px;
    margin: auto;
    margin-top: 3em;
    padding: 2em;
    border: 1px solid black;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.6);
    background-color: rgba(227, 118, 93, 0.9);
}

.card h1 {
    font-size: 2.3em;
    margin-top: -0.5em;
    color: white;
    text-shadow: 0px 0px 3px black;
    font-family: Arial, Helvetica, sans-serif;
}

.card p {
    font-size: 1.3em;
    color: white;
    text-shadow: 0px 0px 2px black;
    font-family: Arial, Helvetica, sans-serif;
}

.card a {
    cursor: pointer;
    color: rgba(80, 180, 230, 1);
}

.card a:hover {
    border-bottom: 3px solid rgba(80, 180, 230, 1);
}
</style>