import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
	routes: [
		{
			path: "/",
			name: "YmbDesktop",
			component: () => import("@/ui/desktop/YmbDesktop")
		}
	]
});

export default router;
