import React, { Component } from 'react';
import {  Text, ScrollView, FlatList} from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { PARTNERS} from '../shared/partners';

//task3
 function Mission() {   
        return (
            <Card title='Our Mission'>
                <Text>
                We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.       
                </Text>
            </Card>
        );
   
} 

//task1 n task 2
class About extends Component {

      //constructor
     constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS
        };
    } 

//navgation options, you click on this link sidebar
   static navigationOptions = {
    title: 'About'
} 
    //task3
    render() 
    {     
        const renderPartner = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{source: require('./images/bootstrap-logo.png')}}
                />
                );
            };

        //task3
        return (
            <ScrollView>
            <Mission />
            <Card title='Community Partners'>
                 <FlatList
                     data={this.state.partners}
                     renderItem={renderPartner}
                     keyExtractor={item => item.id.toString()}
                 />
            </Card>
         </ScrollView> 
        )
    }; 
}

export default About;