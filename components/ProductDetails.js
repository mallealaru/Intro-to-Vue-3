app.component("product-details", {
	props: {
		details: {
			type: Array,
			required: true
		}
	},
	template:
	/*html*/
	`<ul>
		<li v-for="detail in details">{{ detail }}</li>
  	</ul>`,
//   data() {
//     return {
//       onSale: true,
//       product: "Socks",
//       brand: "Vue Mastery",
//       selectedVariant: 0,
//       details: ["50% cotton", "30% wool", "20% polyester"],
//       variants: [
//         {
//           id: 2234,
//           color: "green",
//           image: "./assets/images/socks_green.jpg",
//           quantity: 50,
//         },
//         {
//           id: 2235,
//           color: "blue",
//           image: "./assets/images/socks_blue.jpg",
//           quantity: 0,
//         },
//       ],
//     };
//   },
//   methods: {
//     addToCart() {
//       this.cart += 1;
//     },
//     updateVariant(index) {
//       this.selectedVariant = index;
//     },
//   },
//   computed: {
//     title() {
//       return this.brand + " " + this.product;
//     },
//     image() {
//       return this.variants[this.selectedVariant].image;
//     },
//     inStock() {
//       return this.variants[this.selectedVariant].quantity;
//     },
//     displaySale() {
//       if (this.onSale) {
//         return this.brand + this.product + " is on sale";
//       }
//       return "";
//     },
// 	shipping() {
// 		if (this.premium) {
// 			return 'Free'
// 		}
// 		return '2.99'
// 	}
//   },
});
