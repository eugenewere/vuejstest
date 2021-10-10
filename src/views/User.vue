<template>
  <h1>This is {{ username }}'s page so leave</h1>
</template>

<script>
export default {
  name: 'User',

  props: ['username'],
}
</script>

<style scoped></style>
