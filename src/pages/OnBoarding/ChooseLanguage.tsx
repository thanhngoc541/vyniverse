import { IonAvatar, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonPage, IonRow, IonThumbnail, IonToolbar } from "@ionic/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";

import "./ChooseLanguage.css";

import "@ionic/react/css/ionic-swiper.css";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { star } from "ionicons/icons";


const ChooseLanguage: React.FC = () => (
    <IonPage>
        <IonHeader className="ion-no-border">
            <IonToolbar>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding choose-language" fullscreen>
            <div className="logo-container ion-text-center ion-padding-horizontal">

                <h1 className="title ion-text-wrap">
                    Welcome to
                </h1>
                <div className="img-holder ion-text-center animate__animated animate__bounce">
                    <img src="assets/imgs/bird.svg" />
                </div>
                <h2 className=" ion-text-wrap">
                    Vyniverse
                </h2>
            </div>

            <IonGrid className="bottom-holder">
                <IonRow>
                    <IonCol>
                        <h4 className="ion-text-wrap ion-text-center">
                            Select language
                        </h4>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonButton routerLink="/scan-qr" shape="round" color="primary" fill="solid" expand="block">
                            English
                        </IonButton>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonButton routerLink="/scan-qr" shape="round" color="primary" fill="outline" expand="block">
                            Vietnamese
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    </IonPage>
);

export default ChooseLanguage;
