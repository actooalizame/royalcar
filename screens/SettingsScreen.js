import React from 'react';
import Meteor , {createContainer} from 'react-native-meteor';
import CarListComponent from '../components/CarListComponent';

Meteor.connect('ws://192.168.1.85:3000/websocket');

/*export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };*/

export default LinksScreen = createContainer(props => {
    const carsHandle = Meteor.subscribe('cars');
    return {
        carsReady: carsHandle.ready()
    };
 }, CarListComponent);
