import React from 'react';
import { ScrollView, StyleSheet,View,Text,Image} from 'react-native';
import {RkCard,rkCardHeader,rkCardContent,rkCardImg} from 'react-native-ui-kitten';


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <RkCard rkType='shadowed'>
          <View rkCardHeader>
            <Text>Header</Text>
          </View>
          <Image rkCardImg source={{uri: 'http://merchandiser-szcel9eb49h.stackpathdns.com/wp-content/uploads/2016/09/hv1-ch.jpg'}}/>
          <View rkCardContent>
            <Text> quick brown fox jumps over the lazy dog</Text>
          </View>
          <View rkCardFooter>
            <Text>Footer</Text>
          </View>
        </RkCard>
        <RkCard rkType='shadowed'>
          <View rkCardHeader>
            <Text>Header</Text>
          </View>
          <Image rkCardImg source={{uri: 'http://merchandiser-szcel9eb49h.stackpathdns.com/wp-content/uploads/2016/09/hv1-ch.jpg'}}/>
          <View rkCardContent>
            <Text> quick brown fox jumps over the lazy dog</Text>
          </View>
          <View rkCardFooter>
            <Text>Footer</Text>
          </View>
        </RkCard>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
