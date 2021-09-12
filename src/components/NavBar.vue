<template>
  <div id="nav">
    <router-link class="brand" to="/">Real World Events</router-link>

    <nav>
      <router-link :to="{ name: 'event-list' }">List</router-link>
      |
      <router-link :to="{ name: 'event-create' }">Create</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
#nav {
  display: flex;
  justify-content: space-between;
}
</style>
