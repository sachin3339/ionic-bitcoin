import React from 'react';
import{IonApp,IonHeader,IonToolbar,IonTitle,IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle,IonSkeletonText}from '@ionic/react';
import './Bitcoincard.css';

const Bitcoincard=(props)=>(
    <IonCard>
        <IonCardHeader>
            <IonCardSubtitle>
                {props.data.code}
            </IonCardSubtitle>
            {props.data.rate_float}
        </IonCardHeader>
    </IonCard>
)
export default Bitcoincard