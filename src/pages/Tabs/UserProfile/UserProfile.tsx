import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonButton, IonIcon, IonContent, IonGrid, IonRow, IonCol, IonCardTitle, IonFooter, IonText, IonProgressBar, IonAvatar, IonItem, IonLabel, IonImg, IonList, IonRouterLink } from "@ionic/react";
import { arrowBack, camera, discOutline, golfSharp, happy, infinite, people, personAdd, shapesOutline } from "ionicons/icons";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import GameList from "../../../components/GameList";
import { useGamingOverview } from '../../../data/data';


const UserProfile: React.FC = () => {
    var games = useGamingOverview();
    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="ion-text-center ion-padding-horizontal">
                    <p className="title ion-text-wrap margin-bottom-no">
                        BEGINNER
                    </p>
                    <p className="font-regular ion-text-wrap text-primary margin-top-sm">
                        Thanh Ngoc
                    </p>
                    <div className="relative-inline-block">
                        <img src="assets/imgs/avatar.png" />
                        <IonIcon className="right-bottom-icon" src="assets/icons/CameraCircle.svg"></IonIcon>
                    </div>
                    <div className="ion-text-center progress-bar-container ">
                        <p className="title margin-bottom-sm">Level 2</p>
                        <IonProgressBar className="progress-bar" color="fourth" value={0.5}></IonProgressBar>
                    </div>
                </div>
                <div className="ion-padding-horizontal" >
                    Gaming
                    <IonRouterLink slot="end" className="custom-link float-right" routerLink="/tabs/user-profile/gaming">
                        See All
                    </IonRouterLink>
                </div>
                <GameList games={games}></GameList>
                <div className="ion-padding-horizontal" >
                    Achievements
                    <IonRouterLink slot="end" className="custom-link float-right" routerLink="/tabs/user-profile/archievements">
                        See All
                    </IonRouterLink>
                </div>
                <IonGrid>
                    <IonRow>
                        <IonCol size="2.4" className="ion-text-center">
                            <IonIcon size="large" icon={infinite} color="fourth"></IonIcon>
                            <p className="sub-title font-regular">Novice</p>
                        </IonCol>
                        <IonCol size="2.4" className="ion-text-center">
                            <IonIcon size="large" icon={happy} color="fourth"></IonIcon>
                            <p className="sub-title font-regular">Apprentice</p>
                        </IonCol>
                        <IonCol size="2.4" className="ion-text-center">
                            <IonIcon size="large" icon={golfSharp} color="fourth"></IonIcon>
                            <p className="sub-title font-regular">Disciple</p>
                        </IonCol>
                        <IonCol size="2.4" className="ion-text-center">
                            <IonIcon size="large" icon={personAdd} color="fourth"></IonIcon>
                            <p className="sub-title font-regular">Beginner</p>
                        </IonCol>
                        <IonCol size="2.4" className="ion-text-center">
                            <IonIcon size="large" icon={people} color="fourth"></IonIcon>
                            <p className="sub-title font-regular">Student</p>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent >
        </IonPage >);
};

export default UserProfile;
