<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { store } from '../store/store.js';
export default {
  props: {
    to: { type: String, required: true },
    details: { type: Object, required: true},
  },

  data() {
    return {
      store
    }
  },

  setup(props) {
    const route = useRoute();
    const isActive = computed(() => route.path === props.to);
    return { isActive }
  },

  methods: {
    updateStore() {
      store.name = this.details.name;
      store.address = this.details.location.address1;
      store.phone = this.details.phone;
      store.rating = this.details.rating;
      store.photos = this.details.photos[0];
      store.reviews = this.details.reviews;
    }
  }
}
</script>

<template>
  <router-link :to="{ name: 'RestaurantDetails', params: {id: details.id }}" class="link" :class="{ active: isActive }" @click="updateStore" exact>
    <div class="title">{{details.name}}</div>
    <div class="address"><img src="@/assets/marker-icon.svg" width="20" height="20"> {{ details.location.address1 }}</div>
  </router-link>
</template>

<style lang="scss" scoped>
@import "../assets/styles/common.scss";

.link {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  position: relative;
  user-select: none;
  padding: $building-unit-x5;
  border-bottom: solid 1px $label-colors;
  text-decoration: none;
  font-family: Avenir;
}

.link:hover {
  background-color:$card-color;
}

.link.active {
  background-color: $card-color;
}

.link .title {
  font-size: $font-size-20;
  font-weight: bold;
}

.link .address {
  font-size: $font-size-16;
  display: flex;
  padding-top: 4px;
}
</style>