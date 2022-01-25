const app = Vue.createApp({
	data() {
		return {
			product: 'Sandals',
			description: 'nice socks',
			image: './assets/images/socks_green.jpg',
			inventory: 1,
			onSale: false,
			details: ['50% cotton', '30% wool', '20% polyester'],
			variants: [
				{ id: 2234, color: 'green'},
				{ id: 2235, color: 'blue'}
			]
		}
	},
});
