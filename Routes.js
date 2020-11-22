import Blogs from './Blogs';
import Post from './Post';
import Edit from './Edit';

import {createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';


const NavStack =createStackNavigator({
    Blogs:{
        screen:Blogs,
        navigationOptions:() => ({
            headerTitle:"Menu"
        })
    },
    Edit:{
        screen:Edit,
        navigationOptions:() => ({
            headerTitle:"Edit"
        })
    },
},{
    headerLayoutPreset:"center"
})

const BottomTab = createBottomTabNavigator({
    NavStack:{
        screen:NavStack
    },
    Post:{
        screen:Post,

    }
})

let Routes;
export default Routes =createAppContainer(BottomTab)
