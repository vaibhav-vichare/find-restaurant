<script>
import SidebarLink from './SidebarLink'
import restaurantData from '../assets/data.json';

export default {
  name: 'SidebarNavigation',
  props: {},
  components: { SidebarLink },
  data() {
    return {
      total: restaurantData.data.search.total,
      restaurants: restaurantData.data.search.business,
    };
  },

}
</script>

<template>
  <div class="sidebar">
    <div class="total">{{total}} Restaurants</div>
    <SidebarLink v-for="restaurant in restaurants" :key="restaurant.id" :to="`/RestaurantDetails/${restaurant.id}`" :details="restaurant">Home</SidebarLink>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/common.scss";

.total {
  font-family: Avenir;
  font-size: $font-size-20;
  color: $black;
  background-color: #aaaaaa;
  padding: $building-unit-x5;
}

:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
</style>

<style lang="scss" scoped>

@import "../assets/styles/common.scss";

.sidebar {
  color: white;
  float: left;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  border-right: solid 1px $brand-color;
  width: 20%;
  height: 100vh;
  overflow: auto;
}

.sidebar h1 {
  height: 2.5em;
}

</style>