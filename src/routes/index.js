import LandingScreen from '../screens/LandingScreen';
import HomeScreen from '../screens/HomeScreen';
import NewTeamScreen from '../screens/NewTeamScreen';
import TeamScreen from '../screens/TeamScreen';
import LogoutScreen from '../screens/LogoutScreen';

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
  {
    path: '/teams/new',
    exact: true,
    name: 'new-team',
    component: NewTeamScreen,
  },
  {
    path: '/teams',
    exact: true,
    name: 'teams',
    component: TeamScreen,
  },
  {
    path: '/logout',
    exact: true,
    name: 'logout',
    component: LogoutScreen,
  },
];
