<script setup lang="ts">
const { data: elysiaData } = await useFetch("/api/elysia");
</script>

<template>
    <div>
        <pre>{{ elysiaData }}</pre>
        <!-- <NuxtRouteAnnouncer /> -->
        <!-- <NuxtWelcome /> -->
    </div>
</template>
