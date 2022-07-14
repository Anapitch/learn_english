import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import MenuPage from '../views/MenuPage.vue';
import StartPage from '../views/StartPage.vue';
import SentencePage from '../views/SentencePage.vue';
import VocabularyPage from '../views/VocabularyPage.vue';
import GamePage from '../views/GamePage.vue';
import AnimalPage from '../views/AnimalPage.vue';
import MemoryPage from '../views/MemoryPage.vue';
import QuizPage from '../views/QuizPage.vue';
import ThingPage from '../views/ThingPage.vue';
import PlacePage from '../views/PlacePage.vue';
import OccupationPage from '../views/OccupationPage.vue';
import ActivityPage from '../views/ActivityPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Start',
  },
  {
    path: '/start',
    name: 'Start',
    component: StartPage,
  },
  {
    path: '/menu',
    name: 'Menu',
    component: MenuPage,
  },
  {
    path: '/sentence',
    name: 'Sentence',
    component: SentencePage,
  },
  {
    path: '/vocabulary',
    name: 'Vocabulary',
    component: VocabularyPage,
  },
  {
    path: '/game',
    name: 'Geme',
    component: GamePage,
  },
  {
    path: '/animal',
    name: 'Animal',
    component: AnimalPage,
  },
  {
    path: '/memory',
    name: 'Memory',
    component: MemoryPage,
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: QuizPage,
  },
  {
    path: '/thing',
    name: 'Thing',
    component: ThingPage,
  },
  {
    path: '/place',
    name: 'Place',
    component: PlacePage,
  },
  {
    path: '/occupation',
    name: 'Occupation',
    component: OccupationPage,
  },
  {
    path: '/activity',
    name: 'Activity',
    component: ActivityPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
