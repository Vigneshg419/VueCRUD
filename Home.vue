<template>
	<div class="Home">
		<div class="container">
		<div class="row">
		<div class="form-group col-sm-6">
			<br />
			<a class="btn btn-default">
				<router-link :to="{path: '/add-product'}">
					<span class="glyphicon glyphicon-plus"></span>
					
					Add product
				</router-link>
			</a>
		</div>
		<div class="filters row col-sm-6">
			<div class="form-group col-sm-6">
				<label for="search-element">Product name</label>
				<input v-model="searchKey" class="form-control" id="search-element" required />
			</div>
		</div>
		</div>
			</div>
		<table class="table">
			<thead>
				<tr>
					<th>Name</th>
					<th>Description</th>
					<th>Price</th>
					<th class="col-sm-2">Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="product in filteredProducts">
					<td>
						{{product.name}}
					</td>
					<td>{{product.description}}</td>
					<td>
						{{product.price}}
						<span class="fa fa-inr" aria-hidden="true"></span>
					</td>
					<td>
						<a class="btn btn-warning btn-xs"><router-link :to="{ name: 'product-edit', params: {product_id: product.id} }">Edit</router-link></a>
						<a class="btn btn-danger btn-xs"><router-link :to="{ name: 'product-delete',params:{product_id: product.id }}">Delete</router-link></a>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>


<script>
	import AddProduct from './AddProduct';
	import Edit from './Edit';
	import Delete from './Delete';
	export default {
		name: 'Home',
		components: {
			AddProduct,
			Edit,
			Delete
		},
		data: function () {
			return { products: this.$products, searchKey: '' };
		},
		computed: {
			filteredProducts() {
				return this.$products.filter((product) => {
					return product.name.indexOf(this.searchKey) > -1 || product.description.indexOf(this.searchKey) > -1
					//return !product.name.indexOf(this.searchKey)
				})
			}
		}
	};

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
