import { mapState } from 'vuex';
export default {
	components: {
		'base-menu': () => import('../base/base-menu'),
	},
	computed: {
		...mapState({ curComponentIndex: state => state.curComponentIndex }),
	},
};
