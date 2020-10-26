Vue.component('product', {
    props: {
       premium :{
           type: Boolean,
           required: true
       } 
    },
    template: `
        <div class="product">
            <div class="product-image">
                <img v-bind:src="image" alt="Green image" />
            </div>
            <div class="product-info">
                <h1>{{title}}</h1>
                <p v-show="inventory > 10"> In Stock</p>
                <p v-show="inventory<=10 && inventory>0">Almost out of stock</p>
                <p v-show="inventory===0">Out of stock</p>
                <p>Shipping: {{shipping}}</p>
                <p> User is premium: {{ premium }}</p>

                <ul>
                    <li v-for="detail in details">
                        {{detail}}
                    </li>
                </ul>
                <div v-for="(variant, index) in variants" :key="variant.variantId" class="color-box"
                    :style="{backgroundColor: variant.variantColor}" @mouseover="updateProduct(index)">
                </div>

                <button v-on:click="addToCart" 
                        :disabled="inventory===0"
                        :class="{disabledButton: inventory===0}">

                    Add to Cart</button>

            </div>
        </div>`,
    data() {
        return {
            brand: "Big Brand Name",
            product: 'Socks',
            selectedVariant: 0,
            details: ["80% cotton", "20% polyester", "Gender-neutral"],
            variants:
                [
                    {
                        variantId: 2234,
                        variantColor: "green",
                        variantImage: './assets/vmSocks-green-onWhite.jpg',
                        variantQuantity: 10
                    },
                    {
                        variantId: 2235,
                        variantColor: "blue",
                        variantImage: './assets/vmSocks-blue-onWhite.jpg',
                        variantQuantity: 0
                    }
                ],
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId);
        },
        updateProduct(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inventory() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        shipping(){
            return this.premium? "Free": "2.99"
        }
    }
})
var app = new Vue({
    el: '#app',
    data: {
        premium:true,
        cart: []
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        }
    }

})