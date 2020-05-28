<template>
  <div class="container">
    <header>
      <h1 class="pageTitle">商品一覧</h1>
      <product-search :condition="condition" :result="result"></product-search>
    </header>
    <div v-if="result.list.length > 0" class="list">
      <product v-for="product in result.list" :product="product" :key="product.id"></product>
    </div>
  </div>
</template>

<script>
import productSearch from "./product-search.vue";
import product from "./product.vue";
export default {
  components: {
    "product-search": productSearch,
    product: product
  },
  data: function() {
    return {
      condition: {
        showSaleItem: false,
        showDelvFree: false,
        sortOrder: 1
      },
      result: {
        list: [],
        isError: false,
        message: ""
      }
    };
  },
  computed: {
    match: function() {
      return this.condition.showSaleItem && this.condition.showDelvFree
        ? function(product) {
            return product.isSale && product.delv == 0;
          }
        : this.condition.showSaleItem
        ? function(product) {
            return product.isSale;
          }
        : this.condition.showDelvFree
        ? function(product) {
            return product.delv == 0;
          }
        : function() {
            return true;
          };
    },
    computedCondition: function() {
      return JSON.stringify(this.condition);
    }
  },
  methods: {
    search: function() {
      var self = this;
      self.result.isError = false;
      global.$.ajax({
        url: "/api/products.json",
        type: "GET",
        dataType: "json"
      })
        .done(function(products) {
          self.result.list = [];
          for (var i = 0; i < products.length; i++) {
            if (self.match(products[i])) {
              self.result.list.push(products[i]);
            }
          }
          switch (self.condition.sortOrder) {
            case 2:
              self.result.list.sort(function(a, b) {
                return a.price - b.price;
              });
              break;
          }
        })
        .fail(function(jqXHR, status, ex) {
          self.result.isError = true;
          self.result.message =
            "商品一覧の読み込みが失敗しました。" + ex.toString();
        });
    }
  },
  created: function() {
    this.search();
  },
  watch: {
    computedCondition: function() {
      this.search();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 960px;
  margin: 0 auto;
}

.pageTitle {
  font-weight: normal;
  border-bottom: 2px solid;
}

.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.list::after {
  content: "";
  display: block;
  width: 250px;
}

.error {
  display: inline-block;
  border-radius: 2px;
  padding: 0.5em 1em;
  background: #999;
  color: #e00;
}
</style>
