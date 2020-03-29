import React,{Component} from 'react';
import{getbitcoinprice} from './Api/Bitcoinprice'
import{IonApp,IonImg,IonLabel,IonItem,IonHeader,IonToolbar,IonIcon,IonTitle,IonContent}from '@ionic/react';
import Loadingcard from './loadingcard/Loadingcard'
import Bitcoincard from './Bitcoincard/Bitcoincard'
import'./Bitcoin.css';
//import logobitcoin from './logo-bitcoin.svg'


class Bitcoin extends Component{
    state={
        bitcoininfo:{},
        loading:true
    }

    async componentDidMount ()
    {
        const bitcoininfo=await getbitcoinprice();
        this.setState({
            bitcoininfo,
            loading:false

        },()=>console.log(this.state))
    }

    createLoadingCards(){
        return(
            <>
           <Loadingcard/>
           <Loadingcard/>
           <Loadingcard/>
            </>
        )
    }

    render(){
        const {bitcoininfo,loading}=this.state;

        return(
           <IonApp>
               <IonHeader>
                   <IonToolbar color='secondary'>
                       <IonTitle>
                           Bitcoin Price Tracker
                       </IonTitle>
                      
                   </IonToolbar>
               </IonHeader>
               <IonContent>


               <ion-icon name="heart"></ion-icon>
     { loading===true ? this.createLoadingCards():Object.keys(bitcoininfo.bpi)
     .map((item,index) =><Bitcoincard data={bitcoininfo.bpi[item]}/>)}
            <section className="bitcoin_disclaimer"><p>  {bitcoininfo.disclaimer}  </p></section>
               </IonContent>
           </IonApp>
        )
    }
}
export default Bitcoin;