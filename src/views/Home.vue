<template>
  <div id="home">
    <h1>Agile History</h1>
    <p>It all started in the spring of 2000, when a group of 17 software developers, including Martin Fowler, Jim
      Highsmith, Jon Kern, Jeff Sutherland, Ken Schwaber, and Bob Martin met in Oregon to discuss how they could speed
      up development times in order bring new software to market faster. They recognized two key opportunities that
      achieving this goal would make possible:
    </p>
    <ol>
      <li>Shortening the delay of benefits to users in order to resolve the product-market fit and development graveyard
        problems
      </li>
      <li>Getting feedback from users quickly to confirm the usefulness of new software and continue to improve on it
        accordingly.
      </li>
    </ol>
    <p>
      While this meeting did not result in the Agile methodology we know today, it was a critical milestone in the
      history of Agile, as speed to market, rapid feedback and continuous improvement are hallmarks of the Agile
      methodology. A Manifesto is Born, Agile Comes into Focus.
    </p>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss">
#home {
  margin: 5px 10px;
}

p {
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  max-width: 90%;
}
</style>