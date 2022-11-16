<script setup lang="ts">
const h3 = await useFetch('/api/h3')
const fastify = await useFetch('/api/fastify')
const express = await useFetch('/api/express')
</script>

<template>
  <div>
    {{ fastify.data }}
  </div>
</template>
