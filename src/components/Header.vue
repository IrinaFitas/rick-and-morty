<template>
  <el-menu mode="horizontal" :router="true">
    <template v-for="elem in $router.options.routes">
      <el-submenu v-if="elem.children && elem.children.length > 0"
        :index="elem.path"
        :key="elem.path">
          <template slot="title">{{ elem.title }}</template>
          <el-menu-item v-for="child in elem.children" :key="child.path" :index="elem.path + '/' + child.path">{{ child.title }}</el-menu-item>
      </el-submenu>

      <el-menu-item v-else
        :index="elem.path"
        :key="elem.path"
      >
          {{ elem.title }}
      </el-menu-item>
  </template>
  </el-menu>
</template>

<script>
export default {
}
</script>