<template>
  <div class="container">
    <header>Restaurant finder <div class="themeSwitch"><themeSwitch /></div></header>
    <SidebarNavigation>list of restaurant</SidebarNavigation>
     <router-view />
   </div>
</template>

<script>
import SidebarNavigation from "@/components/SidebarNavigation";
import themeSwitch from "@/components/common/themeSwitch";
export default {
  name: 'App',
  components: {
    SidebarNavigation,
    themeSwitch
  }
}
</script>

<style lang="scss" >
@import "assets/styles/common.scss";
:root {
  --background-color-primary: #ebebeb;
  --background-color-secondary: #fafafa;
  --accent-color: #cacaca;
  --text-primary-color: #222;
  --element-size: 4rem;
}

:root.dark-theme {
  --background-color-primary: #1e1e1e;
  --background-color-secondary: #2d2d30;
  --accent-color: #3f3f3f;
  --text-primary-color: #ddd;
}

.themeSwitch {
  float: right;
}

p, span, div {
  color: var(--text-primary-color);
}

.container {
  background-color: var(--background-color-primary);
  text-align: left;
}

</style>
