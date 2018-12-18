import Vue from 'vue'
import Router from 'vue-router'
import AddProduct from './components/AddProduct.vue'
import Home from './components/Home.vue'
import Edit from './components/Edit.vue'
import Delete from './components/Delete.vue'
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/add-product',
			component: AddProduct
		},
		{
			path: '/product/:product_id/edit',
			name: 'product-edit',
			component: Edit
		},
		{
			path: '/product/:product_id/delete',
			name: 'product-delete',
			component: Delete
		}
	]
})