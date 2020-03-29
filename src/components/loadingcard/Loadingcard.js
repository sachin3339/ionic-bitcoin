import React from 'react';
import{IonApp,IonHeader,IonToolbar,IonTitle,IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle,IonSkeletonText}from '@ionic/react';
import './Loadingcard.css';

const Loadingcard=()=>(
    <IonCard>
        <IonCardHeader>
            <IonCardSubtitle>
                <IonSkeletonText animated className='loading_Cname'></IonSkeletonText>
            </IonCardSubtitle>
            <IonCardTitle><IonSkeletonText animated className='loading_Cvalue'></IonSkeletonText></IonCardTitle>
        </IonCardHeader>
    </IonCard>
)
export default Loadingcard