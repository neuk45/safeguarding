import React from 'react'
import {AzureMap, AzureMapsProvider} from 'react-azure-maps'
import {AuthenticationType} from 'azure-maps-control'

const option = {
    authOptions: {
        authType: AuthenticationType.subscriptionKey,
        subscriptionKey: 'VWpVILVqqcnRZ-bpNXdJkNNaQMYh7k9n2UYiCQ8t4I8'
	},
	center: [-100.01, 45.01],
	zoom: 2,
	view: 'Auto',
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
