var product = {
    template: `
        <div class="item">
            <figure class="image">
                <div class="status" v-show="product.isSale">SALE</div>
                <img v-bind:src="product.image" alt="">
                <figcaption style="white-space: pre;">{{product.name}}</figcaption>
            </figure>
            <div class="detail">
                <div class="price"><span>{{product.price|number_format}}</span>円（税込）</div>
                <div v-if="product.delv == 0" class="shipping-fee none">送料無料</div>
                <div v-else class="shipping-fee">＋送料{{product.delv|number_format}}円（税込）</div>
            </div>
        </div>
    `,
    props: ['product']
}