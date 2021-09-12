<template>
  <router-link :to="{ name: 'event-show', params: { id: '1' } }">
    <div class="event-card">
      <span>@{{ event.title }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
      <BaseIcon name="users"></BaseIcon>
      <span>{{ event.attendees.length }}</span>
    </div>
  </router-link>
</template>

<script>
import BaseIcon from './BaseIcon'

export default {
  name: 'EventCard',
  components: { BaseIcon },
  data() {
    return {
      event: {
        id: 1,
        title: 'Park Clean Up',
        date: 'Tue Aug 19 ,2018',
        time: '6:00am',
        attendees: [
          { id: 'abc11', name: 'Eugene Were' },
          { id: 'abc12', name: 'Eugene Were 2' },
        ],
      },
    }
  },
}
</script>

<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
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
