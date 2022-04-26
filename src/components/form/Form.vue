<script>

export default {
    data() {
        return {
            fileUrl: '',
            description: '',
            responseSuccess: false,
        }
    },
    props: {
        fileUploadSuccess: Boolean,
    },
    methods: {
        sendData() {
            this.$emit('sendEverything', {
                fileUrl: this.fileUrl,
                description: this.description,
            })
        }
    }
}
</script>

<template>
    <div id="form">
        <input v-model="fileUrl" />
        <textarea v-model="description" name="description"></textarea>
        <button @click="sendData">Send it!</button>
        <div v-if="fileUploadSuccess" class="response">OKOKOKOK</div>
    </div>
</template>

<style scoped>
#form {
    background-color: white;
    height: 50px;
    float: right;
    display: inline-block;
    vertical-align: top;
}
</style>