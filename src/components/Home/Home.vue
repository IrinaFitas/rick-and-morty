<template>
  <el-row>
    <el-col :span="24">
      <h1>Home</h1>
    </el-col>
  </el-row>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['setAllCharacters'])
  },
  mounted() {
    this.setAllCharacters();
  }
}
</script>