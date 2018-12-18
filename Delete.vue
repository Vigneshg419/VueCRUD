<template id="product-delete">
	<div>
		<h2>Delete product {{ product.name }}</h2>
		<form v-on:submit="deleteProduct">
			<p>The action cannot be undone.</p>
			<button type="submit" class="btn btn-danger">Delete</button>
			<a class="btn btn-default">
				<router-link to="/">Cancel</router-link>
			</a>
		</form>
	</div>
</template>

<script>
	export default {
		template: '#product-delete',
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
			deleteProduct: function () {
				this.$products.splice(this.findProductKey(this.$route.params.product_id), 1);
				this.$router.push('/');
			}
		}
	}
</script>

<style scoped>
</style>