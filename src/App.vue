<script setup>
import NavBar from "@/components/common/NavBar.vue";

import NewsPage from "@/components/news_page/NewsPage.vue";
import HomePage from "@/components/home_page/HomePage.vue";
import {reactive} from "vue";
import {createMemoryHistory, createRouter} from "vue-router";


</script>

<template>
	<NavBar/>

	<RouterView/>

</template>

<style scoped>

</style>
