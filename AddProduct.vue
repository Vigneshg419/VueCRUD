<template>
	<div id="add-product">
		<h2>Add new product</h2>
		<form v-on:submit="createProduct">
			<div class="form-group">
				<label for="add-name">Name</label>
				<input class="form-control" id="add-name" v-model="product.name" required />
			</div>
			<div class="form-group">
				<label for="add-description">Description</label>
				<textarea class="form-control" id="add-description" rows="10" v-model="product.description"></textarea>
			</div>
			<div class="form-group">
				<label for="add-price">
					Price,
					<span class="glyphicon glyphicon-euro"></span>
				</label>
				<input type="number" class="form-control" id="add-price" v-model="product.price" />
			</div>
			<button type="submit" class="btn btn-primary">Create</button>
			<a class="btn btn-default">
				<router-link to="/">Cancel</router-link>
			</a>
		</form>
	</div>
</template>
<script>
	export default{
		name: 'add-product',
		data: function () {
			return {
				product: { name: '', description: '', price: '' }
			}
		},
		methods: {
			createProduct: function () {
				//Obsolete, product is available directly from data...
				let product = this.product;
				this.$products.push({
					id: Math.random().toString().split('.')[1],
					name: product.name,
					description: product.description,
					price: product.price
				});
				this.$router.push('/');
			}
		}
	}
</script>