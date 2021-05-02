<template>
  <div id="risks-eng">
    <h1>Wish-list risks</h1>
    <table>
      <tbody>
      <tr>
        <td>Risk №</td>
        <td>Risk description</td>
        <td>Likelihood of the risk occurring</td>
      </tr>
      <tr>
        <td>1</td>
        <td>Project schedule is not clearly defined or understood</td>
        <td class="medium">Medium</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Estimating/or scheduling errors</td>
        <td class="low">Low</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Unplanned work that must be accommodated</td>
        <td class="low">Low</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Risks-eng"
}
</script>

<style scoped lang="scss">
p {
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  max-width: 90%;
}

table, td {
  border: 1px solid;
  border-collapse: collapse;
  letter-spacing: 2px;
  text-align: center;
  padding: 20px;
  .low{
    background: #00b400;
  }
  .medium{
    background: #ffff00;
  }
}
</style>