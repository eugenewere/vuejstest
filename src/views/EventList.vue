<template>
  <div>
    <h1>Event Listing {{ user.id }}</h1>
    <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
    ></EventCard>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard'
import EventService from '@/services/EventService'
import { mapState } from 'vuex'

export default {
  name: 'EventList',
  components: { EventCard },
  computed: mapState(['user', 'categories']),
  data() {
    return {
      events: [],
    }
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        this.events = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>

<style scoped></style>
