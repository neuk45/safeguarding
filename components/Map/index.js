import React from 'react'
import {AzureMap, AzureMapsProvider} from 'react-azure-maps'
import {AuthenticationType} from 'azure-maps-control'

const option = {
    authOptions: {
        authType: AuthenticationType.subscriptionKey,
        subscriptionKey: 'eb30ba0e-e39d-4f50-bcd7-410f41f7fe08'
	}
}


const Map = () => (
    <div style={{height: '300px'}}>
        <AzureMapsProvider>
            <AzureMap options={option}>
            </AzureMap>
        </AzureMapsProvider>
    </div>
)
export default Map
