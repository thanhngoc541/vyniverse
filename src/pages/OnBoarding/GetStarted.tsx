import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonPage, IonRow, IonToolbar } from "@ionic/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import { useState, useEffect } from "react";

import "@ionic/react/css/ionic-swiper.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const GetStarted: React.FC = () => {
    return (
        <IonPage>
            <IonHeader className="ion-no-border">
                <IonToolbar>
                    <div className="ion-text-center ion-padding-horizontal">
                        <p className="title ion-text-wrap">
                            Lets Get Started
                        </p>
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonGrid className="select-adventure-container ion-align-self-center">
                    <IonRow>
                        <IonCol>
                            <IonItem lines="none" color="secondary" className="border-round" shape="round">
                                <IonLabel className="ion-text-wrap ion-text-center" >Select your adventure</IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem routerLink="/sign-up" button lines="none" >
                                <IonLabel className="ion-text-wrap ion-text-center" >Membership Program</IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem routerLink="/sign-up" lines="none" >
                                <IonLabel className="ion-text-wrap ion-text-center" >Scholarship Program</IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem routerLink="/sign-up" lines="none" >
                                <IonLabel className="ion-text-wrap ion-text-center" >Investor Program</IonLabel>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                </IonGrid>

                <div className="bottom-holder">

                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonButton routerLink="/sign-up" shape="round" expand="block">Continue</IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </div>
            </IonContent >
        </IonPage >
    );
};

export default GetStarted;
