<script setup>
    defineProps({
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: false,
        }
    });
</script>

<template>
    <img :src="src" :alt="alt" />
</template>
