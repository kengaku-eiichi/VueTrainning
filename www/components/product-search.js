var productSearch = {
    template: `
        <div class="search">
            <div class="result">
                <div v-if="result.isError" class="error">{{result.message}}</div>
                <template v-else>検索結果 <span class="count">{{result.list.length}}件</span></template>
            </div>
            <div class="condition">
                <div class="target">
                    <label><input type="checkbox" v-model="condition.showSaleItem"> セール対象</label>
                    <label><input type="checkbox" v-model="condition.showDelvFree"> 送料無料</label>
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
    `,
    props: ['condition', 'result']
}