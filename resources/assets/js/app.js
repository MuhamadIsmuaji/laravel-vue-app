import Vue from 'vue';
import axios from 'axios';

import Main from './core/Main'
import Example from './components/Example'

new Vue({
	el: '#app',
	components: {
		Example,
	},
	data() {
		return {
			message: 'Hello world',
		}
	}
});