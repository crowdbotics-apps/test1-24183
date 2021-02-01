import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile199276Navigator from '../features/UserProfile199276/navigator';
import Settings199275Navigator from '../features/Settings199275/navigator';
import Settings199273Navigator from '../features/Settings199273/navigator';
import SignIn2199271Navigator from '../features/SignIn2199271/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile199276: { screen: UserProfile199276Navigator },
Settings199275: { screen: Settings199275Navigator },
Settings199273: { screen: Settings199273Navigator },
SignIn2199271: { screen: SignIn2199271Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
