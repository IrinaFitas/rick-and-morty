import Home from './components/Home/Home.vue';
import Favourites from './components/Favourites/Favourites.vue';
import Test1 from './components/Favourites/Test1.vue';
import Test2 from './components/Favourites/Test2.vue';

export const routes = [
  { path: '/', component: Home, title: 'Home' },
  { path: '/favourites',
    component: Favourites,
    title: 'Favourites',
     children: [
      { path: 'test1',
        component: Test1,
        title: 'Test1'
      },
      { path: 'test2',
        component: Test2,
        title: 'Test2'
      }
  ] }
]; 