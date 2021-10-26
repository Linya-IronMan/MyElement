<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <BaseSelectMulti />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseSelectMulti from "baseselectmulti"

@Component({
  components: {
    BaseSelectMulti
  },
})
export default class Home extends Vue {
  created() {
  }
}
</script>
