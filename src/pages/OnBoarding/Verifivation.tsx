import { IonAvatar, IonButton, IonButtons, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import { useState, useEffect } from "react";

import "@ionic/react/css/ionic-swiper.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Verification: React.FC = () => (
    <IonPage>
        <IonHeader className="ion-no-border">
            <IonToolbar>
                <div className="ion-text-center ion-padding-horizontal">
                    <p className="title ion-text-wrap">
                        ID Verification
                    </p>
                </div>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className="ion-padding get-started-page">
            <div className="ion-text-center  sub-title">
                Before you start, please:
            </div>
            <IonGrid className="ion-align-self-center">
                <IonRow>
                    <IonCol>
                        <IonItem routerLink="/sign-up" button lines="none">
                            <IonAvatar className="ion-margin-end sm-icon">
                                <img sizes="small" src="assets/imgs/verified.png" />
                            </IonAvatar>
                            <p className="ion-text-wrap ion-text-left verification-item "> Membership Program</p>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem routerLink="/sign-up" lines="none">
                            <IonAvatar className="ion-margin-end sm-icon">
                                <img sizes="" src="assets/imgs/verified.png" />
                            </IonAvatar>
                            <p className="ion-text-wrap ion-text-left verification-item">Scholarship Program</p>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem routerLink="/sign-up" lines="none">
                            <IonAvatar className="ion-margin-end sm-icon">
                                <img sizes="small" src="assets/imgs/verified.png" />
                            </IonAvatar>
                            <p className="ion-text-wrap ion-text-left verification-item">Investor Program</p>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonButton routerLink="/scan-id-front" shape="round" expand="block">Scan Now</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    </IonPage>
);

export default Verification;
