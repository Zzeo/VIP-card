<template>
  <div class="hello box">
    <h1>{{ msg }}</h1>
    <table>
        <tr v-for="v in res">
          <td v-text="v.name"></td>
          <td v-text="v.age"></td>
          <td v-text="v.gender"></td>
        </tr>
    </table>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      res: ''
    }
  },
//  computed: {
//    data () {
//      return res.data
//    }
//  },
  created () {
    axios.get('http://localhost:3000/get').then(res => {
      this.res = res.data
      console.log(this.res)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

  .box {
    h1 {
      color: aquamarine;
    }
    table {
      border: 1px solid #ccc;
    }
  }

</style>
