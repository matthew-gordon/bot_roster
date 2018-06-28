import LandingScreen from '../screens/LandingScreen';
import HomeScreen from '../screens/HomeScreen';
import NewTeamScreen from '../screens/NewTeamScreen';
import TeamScreen from '../screens/TeamScreen';
import TeamDetailScreen from '../screens/TeamDetailScreen';
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
    path: '/team/:id/roster',
    exact: true,
    name: 'teams',
    component: TeamDetailScreen,
  },
  {
    path: '/logout',
    exact: true,
    name: 'logout',
    component: LogoutScreen,
  },
];
