<template>
  <div id="manifesto">
    <h1>Agile Manifesto</h1>
    <VueFaqAccordion
        :items="myItems"
        id="accordion"/>
  </div>
</template>

<script>
import VueFaqAccordion from 'vue-faq-accordion'

export default {
  components: {
    VueFaqAccordion
  },
  data() {
    return {
      myItems: [
        {
          title: 'Early and Continuous Delivery of Valuable Software',
          value: '“Our highest priority ' +
              'is to satisfy the customer through early and continuous delivery of valuable software.”' +
              ' I agree with this, even if this manifesto makes developer a bit uncomfortable in some way, this makes the business process is better optimised.'
        },
        {
          title: 'Embrace Change',
          value: '“Welcome changing requirements, even late in development. Agile processes harness change for the customer’s competitive advantage.” ' +
              'In my opinion, developers should be able to accept changes no matter when they\'re made.'
        },
        {
          title: 'Frequent Delivery',
          value: '“Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.” ' +
              'This is all about delivering software updates within a short timescale. I think it is a great way to make customer satisfied.'
        },
        {
          title: 'Business and Developers Together',
          value: '“Business people and developers must work together daily throughout the project.” ' +
              'It\'s all about developers and business people working together. To me, this is one of the greatest principle, since it makes everything more comfortable and easier for everyone and as result, the better software comes out.'
        },
        {
          title: 'Motivated Individuals',
          value: 'Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.” ' +
              'Software comes out better, but it\'s harder to find the qualified team since team\'s knowledge has to be on one level between each one of the team members.'
        },
        {
          title: 'Face-to-Face Conversation',
          value: '“The most efficient and effective method of information to and within a development is face-to-face conversation.” ' +
              'Every aspect of development should be discussed inside and outside of team. The more is everyone aware about everything, the less is risk of unexpected expenses.'
        },
        {
          title: 'Working Software',
          value: '“Working software is the primary measure of progress.” ' +
              'Features, design and etc, does not matter if your software does not work.'
        },
        {
          title: 'Sustainable Development',
          value: '“Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.” ' +
              'To my way of thinking, that means people should work no matter what, stress, deadlines, budget cuts, everyone should sustain where they are right now.'
        },
        {
          title: 'Technical Excellence',
          value: '“Continuous attention to technical excellence and good design enhances agility.” ' +
              'Everyone should understand how your code works for further feature implementations. '
        },
        {
          title: 'Simplicity',
          value: '“Simplicity—the art of maximizing the amount of work not done—is essential.” ' +
              'Maximizing the amount of work not done can be done in several places: you can remove procedures that are no longer relevant, automate manual work, use existing libraries instead of writing your own, etc. It all saves time and money, giving us room to focus on delivering more value.'
        },
        {
          title: 'Self-Organizing Teams',
          value: '“The best architectures, requirements, and designs emerge from self-organizing teams.” ' +
              'Workflow should not stop without 1 or 2 team members. It is necessary that team is built entirely and everyone is motivated.'
        },
        {
          title: 'Regular Reflection and Adjustment',
          value: '“At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.” ' +
              'It\'s really important to support and refactor your software even after releasing it for self-improvements and better customer satisfaction.'
        }
      ]
    }
  }
};
</script>

<style>

#accordion {
  min-width: 60rem;
  padding: 0;

}

.accordion__value {
  max-width: 50rem;
}
</style>