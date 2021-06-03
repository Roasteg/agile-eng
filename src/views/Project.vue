<template>
  <div id="progress">
    <h1>Wish list progress</h1>
    <VueFaqAccordion
        :items="myItems"
        id="accordion"/>
  </div>
</template>

<script>
import VueFaqAccordion from 'vue-faq-accordion'

export default {
  name: "Project",
  components: {
    VueFaqAccordion
  },
  data() {
    return {
      myItems: [
        {
          title: 'What I did',
          value: 'In this project, I was developing front-end, where I had to build features using API and create views.'
        },
        {
          title: 'What I enjoyed',
          value: 'Mostly, I enjoyed everything, from fixing small bugs to building whole features and user interaction systems.'
        },
        {
          title: 'What I found difficult',
          value: 'This was my first time using API, so I had to learn how to interact with API throughout project development.'
        },
        {
          title: 'What really worked',
          value: 'Of course, everything we did is awesome, but the thing I like the most is our user interactions, since it was kinda challenging and fun at the same time.'
        },
        {
          title: 'Next time',
          value: 'Next time I would definitely do better since now I\'m familiar with Vuetify, Nuxt and VueX'
        }
      ]
    }
  }

}
</script>

<style scoped>

</style>