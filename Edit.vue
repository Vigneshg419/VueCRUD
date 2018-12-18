<template id="product-edit">
	<div>
		<h2>Edit product</h2>
		<form v-on:submit="updateProduct">
			<div class="form-group">
				<label for="edit-name">Name</label>
				<input class="form-control" id="edit-name" v-model="product.name" required />
			</div>
			<div class="form-group">
				<label for="edit-description">Description</label>
				<textarea class="form-control" id="edit-description" rows="3" v-model="product.description"></textarea>
			</div>
			<div class="form-group">
				<label for="edit-price">
					Price
					<span class="fa fa-inr"></span>
				</label>
				<input type="number" class="form-control" id="edit-price" v-model="product.price" />
			</div>
			<button type="submit" class="btn btn-primary">Save</button>
			<a class="btn btn-default">
				<router-link to="/">Cancel</router-link>
			</a>
		</form>
	</div>
</template>

<script>
	import Home from './Home';

	export default {
		template: '#product-edit',
		components: {
			Home
		},
		data: function () {
			return { product: this.findProduct(this.$route.params.product_id) };
		},
		methods: {
			findProduct: function (productId) {
				return this.$products[this.findProductKey(productId)];
			},
			findProductKey: function (productId) {
				for (var key = 0; key < this.$products.length; key++) {
					if (this.$products[key].id == productId)
						return key;
				}
			},
			updateProduct: function () {
				//Obsolete, product is available directly from data...
				let product = this.product; //var product = this.$get('product');
				this.$products[this.findProductKey(this.$route.params.product_id)] = {
					id: product.id,
					name: product.name,
					description: product.description,
					price: product.price
				};
				this.$router.push('/');
			}
		}
	}
</script>

<style scoped>
</style>