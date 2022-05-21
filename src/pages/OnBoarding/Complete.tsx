import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonPage, IonRow, IonToolbar } from "@ionic/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import { useState, useEffect } from "react";
import "./Complete.css";

import "@ionic/react/css/ionic-swiper.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { arrowBack } from "ionicons/icons";

const Complete: React.FC = () => {
    return (
        <IonPage>
            <IonHeader className="ion-no-border">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton icon={arrowBack} text="" className="custom-back" />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding get-started-page">
                <div className="img-holder ion-text-center animate__animated animate__bounce">
                    <img src="assets/imgs/illus.png" />
                </div>
                <div className="ion-text-center ion-padding-horizontal">
                    <p className="title ion-text-wrap">
                        Congratulation
                    </p>
                    <h3>Welcome to Vyniverse</h3>
                </div>
                <IonGrid className="ion-align-self-center">
                    <IonRow>
                        <IonCol>
                            <IonButton routerLink="/" shape="round" expand="block">Start Now</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent >
        </IonPage >
    );
};

export default Complete;
