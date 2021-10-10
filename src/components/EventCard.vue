<template>
  <router-link
    :to="{ name: 'event-show', params: { id: event.id } }"
    class="event-link"
  >
    <div class="event-card">
      <span>@{{ event.title }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
      <BaseIcon name="users">
        <span>{{ event.attendees.length }}</span>
        <!--        <span slot="two">{{ event.attendees.length }}</span>-->
      </BaseIcon>
    </div>
  </router-link>
</template>

<script>
import BaseIcon from './BaseIcon'

export default {
  name: 'EventCard',
  components: { BaseIcon },
  props: {
    event: {
      type: Object,
    },
  },
}
</script>

<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
  border: 1px solid #a7a7a7;
  border-radius: 5px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}

.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
