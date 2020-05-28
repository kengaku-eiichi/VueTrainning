<template>
  <div class="search">
    <div class="result">
      <div v-if="result.isError" class="error">{{result.message}}</div>
      <template v-else>
        検索結果
        <span class="count">{{result.list.length}}件</span>
      </template>
    </div>
    <div class="condition">
      <div class="target">
        <label>
          <input type="checkbox" v-model="condition.showSaleItem" /> セール対象
        </label>
        <label>
          <input type="checkbox" v-model="condition.showDelvFree" /> 送料無料
        </label>
      </div>
      <div class="sort">
        <label for="sort">並び替える</label>
        <select id="sort" class="sorting" v-model.number="condition.sortOrder">
          <option value="1">標準</option>
          <option value="2">価格が安い順</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["condition", "result"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search {
  display: flex;
  justify-content: space-between;
}
.search .target {
  display: inline-block;
}
.search .target label {
  margin-right: 15px;
}
.search .sort {
  display: inline-block;
}
</style>
