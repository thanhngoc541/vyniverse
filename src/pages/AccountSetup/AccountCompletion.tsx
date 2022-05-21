import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonButton, IonIcon, IonContent, IonGrid, IonRow, IonCol, IonCardTitle, IonFooter, IonText } from "@ionic/react";
import { arrowBack, shapesOutline } from "ionicons/icons";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Action } from "../../components/Action";
import CustomField from "../../components/CustomField";
import { Wave } from "../../components/Wave";
import { validateForm } from "../../data/utils";


const AccountCompletion: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton icon={arrowBack} text="" className="custom-back" />
                    </IonButtons>
                    <div className="ion-text-center ion-padding-horizontal">
                        <p className="title ion-text-wrap">
                            Account Completion
                        </p>
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className="ion-text-center animate__animated animate__bounce">
                    <img src="assets/imgs/bird.svg" />
                </div>
                <div className="ion-text-center ion-padding-horizontal">
                    <p className="title ion-text-wrap text-primary">
                        Thanh Ngoc
                    </p>
                </div>
                <div className="ion-text-center animate__animated animate__faster animate__fadeInRight">
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <div>
                                    <img src="assets/imgs/discord.png" />
                                    <img style={{
                                        marginTop: -30,
                                        marginLeft: 20
                                    }} className="vertical-middle" src="assets/icon/checked-icon.png" />
                                </div>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </div>
                <div className="ion-padding-horizontal">
                    <IonButton className="ion-margin-vertical" routerLink="/account-complete" expand="block" shape="round" >
                        Continue
                    </IonButton>
                </div>
            </IonContent >
        </IonPage >);
};

export default AccountCompletion;
