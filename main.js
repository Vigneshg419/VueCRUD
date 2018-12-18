import Vue from 'vue';
import router from './router.js'
import App from './App.vue';

Vue.config.productionTip = true;

Vue.prototype.$products = [
	{ id: 1, name: 'Boast', description: 'Secret of my energy.', price: 110 },
	{ id: 2, name: 'Complane', description: 'Infinity and beyond.', price: 99 },
	{ id: 3, name: 'Copigo', description: 'Coffee in your pocket.', price: 60 }
];
new Vue({
	router,
    render: h => h(App)
}).$mount('#app');
