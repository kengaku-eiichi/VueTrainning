<template>
  <div class="item">
    <figure class="image">
      <div class="status" v-show="product.isSale">SALE</div>
      <img v-bind:src="product.image" alt />
      <figcaption style="white-space: pre;">{{product.name}}</figcaption>
    </figure>
    <div class="detail">
      <div class="price">
        <span>{{product.price|number_format}}</span>円（税込）
      </div>
      <div v-if="product.delv == 0" class="shipping-fee none">送料無料</div>
      <div v-else class="shipping-fee">＋送料{{product.delv|number_format}}円（税込）</div>
    </div>
  </div>
</template>

<script>
import "./filter.js";

export default {
  props: ["product"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  flex: 0 1 250px;
  margin-bottom: 30px;
}
.item .image {
  position: relative;
  text-align: center;
}
.item .image img {
  width: 100%;
  height: auto;
}
.item .status {
  position: absolute;
  border-radius: 50%;
  width: 4em;
  height: 4em;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #bf0000;
  color: #fff;
}
.item .detail {
  text-align: center;
}
.item .price {
  display: inline-block;
}
.item .price span {
  font-size: 180%;
}
.item .shipping-fee {
  display: inline-block;
  background: #f7cd12;
  color: #000;
}
.item .shipping-fee.none {
  background: #bf0000;
  color: #fff;
}
</style>
