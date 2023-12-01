import React from "react";
import { View, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

const CustomDrawer = props => {
    return (
      <View style={{flex: 1}}>
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={{backgroundColor: '#343a40'}}>
          <View
            style={{padding: 30}}>
            <Text
              style={{
                color: '#F7EBFD',
                fontSize: 30,
                fontWeight: 'bold',
                marginBottom: 5,
              }}>
              Quiz app
            </Text>
          </View>
          <View style={{ borderTopWidth: 4, borderTopColor: '#FFDBDA'}}></View>
          <View style={{flex: 1, backgroundColor: '#9d8189', paddingTop: 10, paddingBottom: 540}}>
            <DrawerItemList {...props} />
          </View>
        </DrawerContentScrollView>
      </View>
    );
  };
  
  export default CustomDrawer;