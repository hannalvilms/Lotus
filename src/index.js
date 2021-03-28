import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import AddHabit from './screens/AddHabit';
import ViewHabit from './screens/ViewHabit';
import { DeleteHabit } from './components/DeleteHabit';
import Notes from "./screens/Notes";
import Habits from './screens/Habits';
import MoneyHabits from "./screens/MoneyHabits";
import AddMoneyHabit from "./screens/AddMoneyHabit";
import PlanExpenses from "./screens/PlanExpenses";
import SaveIcons from "./screens/SaveIcons";
import Icons from "./screens/Icons";
import ExpensesIcons from "./screens/ExpensesIcons";
import IconView from "./screens/IconView";
const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
    },
  },
  AddHabit: {
    screen: AddHabit,
    navigationOptions: {
      headerTitleAlign: 'center',
      headerFontSize: 25,
      headerTitle: 'New Habit',
      headerStyle: {
        backgroundColor: '#C3E6E2',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerTintColor: '#343434',
    },
  },
  AddMoneyHabit: {
    screen: AddMoneyHabit,
    navigationOptions: {
      headerTitleAlign: 'center',
      headerFontSize: 25,
      headerTitle: 'New Habit1',
      headerStyle: {
        backgroundColor: '#C3E6E2',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerTintColor: '#343434',
    },
  },
  Habits: {
    screen: Habits,
    navigationOptions: {
      headerTitleAlign: 'center',
      headerFontSize: 25,
      headerTitle: 'Add Habit',
      headerStyle: {
        backgroundColor: '#C3E6E2',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerTintColor: '#343434',
    },
  },
  MoneyHabits: {
    screen: MoneyHabits,
    navigationOptions: {
      headerTitleAlign: 'center',
      headerFontSize: 25,
      headerTitle: 'Money Habits',
      headerStyle: {
        backgroundColor: '#C3E6E2',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerTintColor: '#343434',
    },
  },
  PlanExpenses: {
    screen: PlanExpenses,
    navigationOptions: {
      headerTitleAlign: 'center',
      headerFontSize: 25,
      headerTitle: 'New Habit',
      headerStyle: {
        backgroundColor: '#C3E6E2',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerTintColor: '#343434',
    },
  },
  Icons: {
    screen: Icons,
    navigationOptions: {
      headerTitleAlign: 'center',
      headerFontSize: 25,
      headerTitle: 'Icons',
      headerStyle: {
        backgroundColor: '#C3E6E2',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerTintColor: '#343434',
    },
  },
  SaveIcons: {
    screen: SaveIcons,
    navigationOptions: {
      headerTitleAlign: 'center',
      headerFontSize: 25,
      headerTitle: 'Save Icons',
      headerStyle: {
        backgroundColor: '#C3E6E2',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerTintColor: '#343434',
    },
  },
  ExpensesIcons: {
    screen: ExpensesIcons,
    navigationOptions: {
      headerTitleAlign: 'center',
      headerFontSize: 25,
      headerTitle: 'Icons',
      headerStyle: {
        backgroundColor: '#C3E6E2',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerTintColor: '#343434',
    },
  },
  Notes: {
    screen: Notes,
    navigationOptions: {
      headerTitleAlign: 'center',
      headerFontSize: 25,
      headerTitle: 'Notes',
      headerStyle: {
        backgroundColor: '#C3E6E2',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerTintColor: '#343434',
      headerTitleStyle: {
       // marginTop: 10
      },
    },
  },
  ViewHabit: {
    screen: ViewHabit,
    navigationOptions: {
      headerTitleAlign: 'center',
      headerFontSize: 25,
      headerTitle: 'View Habit',
      headerStyle: {
        backgroundColor: '#C3E6E2',
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerTintColor: '#343434',
    },
  },
  DeleteHabit: {
    screen: DeleteHabit,
  }
});
export default createAppContainer(HomeStack);
