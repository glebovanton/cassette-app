const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("pages/Index.vue")
  },
  {
    path: "/students",
    name: "students",
    component: () => import("pages/Students.vue")
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
