import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    }
  },
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   component: function() {
  //     return import(
  //       /* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"
  //     );
  //   }
  // },
  {
    path: "/dashboard",
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ "../views/dashboard/Dashboard.vue"
      ),
    children: [
      {
        path: "overview",
        component: () =>
          import(
            /* webpackChunkName: "overview" */ "../views/dashboard/Overview.vue"
          )
      },
      {
        path: "symptoms",
        component: () =>
          import(
            /* webpackChunkName: "symptoms" */ "../views/dashboard/Symptoms.vue"
          )
      },
      {
        path: "countries",
        component: () =>
          import(
            /* webpackChunkName: "countries" */ "../views/dashboard/Countries.vue"
          )
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
