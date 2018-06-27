import LandingScreen from '../screens/LandingScreen';
import HomeScreen from '../screens/HomeScreen';

export default [
  {
    path: '/',
    exact: true,
    name: 'landing',
    component: LandingScreen,
  },
  {
    path: '/home',
    exact: true,
    name: 'home',
    component: HomeScreen,
  },
];
