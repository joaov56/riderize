import React, {useEffect, useState, useRef} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Location from 'expo-location'




export function Map(){
    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);



    useEffect(()=>{
        (async function(){
            let { status } = await Location.requestForegroundPermissionsAsync();

    
            if (status === 'granted') {
                let location = await Location.getCurrentPositionAsync({});
                setOrigin(
                    {
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.001000,
                        longitudeDelta: 0.001000 ,

                    }
                )

            } else {
                throw new Error('Location permission not granted');
            }
        })();
    }, [])
    return(
        <MapView
        style={{height: "100%", width: "100%"}}
        initialRegion={origin}
        showsUserLocation={true}
        loadingEnabled={true}

        
    />

    )
}