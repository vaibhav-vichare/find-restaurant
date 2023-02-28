<template>
<div class="detailsContainer" v-if="store.name">
  <div class="intro">
    <div class="restaurantDetails">
      <div class="restaurantName">{{store.name}}</div>
      <div class="sections"><span class="title">Rating: </span>{{store.rating}}</div>
      <div class="sections"><span><img src="../assets/marker-icon.svg"> </span>{{store.address}}</div>
      <div class="sections"><span><img src="../assets/phone-icon.svg"> </span>{{store.phone}}</div>
    </div>
    <div class="imgContainer"><img :src="store.photos" width="400"></div>
  </div>
  <div class="reviewsContainer">
      <div class="restaurantName">Reviews</div>
      <ul>
        <li v-for="(review, index) in store.reviews" :key="index" > <span class="title">Rating: </span> {{review.rating}} <br /> <p>{{review.text}} </p></li>
      </ul>
  </div>
</div>
</template>

<script>
import { store } from '../store/store.js';
export default {
  name: "RestaurantDetails",

  data() {
    return {
      store
    }
  }

}
</script>

<style lang="scss" scoped>
@import "../assets/styles/common.scss";

.detailsContainer {
  display: flex;
  flex-direction: column;
  padding: $building-unit-x10;
  font-size: $font-size-20;
}

.intro {
  display: flex;
  flex-direction: row;
}

.restaurantName {
  font-size: $font-size-40;
  font-weight: bolder;
  text-decoration: underline;
  margin-bottom: $building-unit-x10;
}

.title {
  font-weight: bold;
  font-size: $font-size-20;
}

.sections {
  margin-bottom: $building-unit-x5;
}
.restaurantDetails {
  width: 50%;
}

.imgContainer {
  float: right;
}

.reviewsContainer {
  width: 100%;
  float: left;
}

</style>