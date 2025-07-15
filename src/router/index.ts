import { createRouter, createWebHistory } from "vue-router";

import DefaultLayout from "../components/DefaultLayout.vue";
import Home from "@/views/HomeView.vue";
import Facts from "@/views/FactsView.vue";
import Contact from "@/views/ContactView.vue";
import Journal from "@/views/JournalView.vue";
import TechStack from "@/views/TechstackView.vue";
import Projects from "@/views/ProjectsView.vue";
import NotFoundPage from "@/views/NotFoundPage.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
          title: "The Sushil Sharma | Portfolio",
        },
      },
      {
        path: "/facts",
        name: "Facts",
        component: Facts,
        meta: {
            title: "The Sushil Sharma | Facts",
          },
      },
      {
        path: "/contact",
        name: "Contact",
        component: Contact,
        meta: {
            title: "The Sushil Sharma | Contact",
          },
      },
      {
        path: "/journal",
        name: "Journal",
        component: Journal,
        meta: {
            title: "The Sushil Sharma | Journal",
          },
      },
      {
        path: "/techstack",
        name: "TechStack",
        component: TechStack,
        meta: {
            title: "The Sushil Sharma | Tech Stack",
          },
      },
      {
        path: "/projects",
        name: "Projects",
        component: Projects,
        meta: {
            title: "The Sushil Sharma | Projects",
          },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFoundPage',
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const title = to.meta.title as string | undefined;

  if (title) {
    document.title = title;
  }

  next();
});


export default router;
