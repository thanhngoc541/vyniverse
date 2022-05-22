import React from "react";
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonBadge, IonIcon } from "@ionic/react";
import { Route } from "react-router";
import Home from "../Home/Home";
import { Redirect } from "react-router-dom";
import { calendar, personCircle, map, informationCircle } from "ionicons/icons";
import Verification from '../OnBoarding/Verifivation';
import Login from "../AccountSetup/Login";
import CreateProfile from '../AccountSetup/CreateProfile';

const MainTabs: React.FC = () => {
    return (

        <IonTabs  >
            <IonRouterOutlet>
                <Route exact path="/tab1">
                    <Login />
                </Route>
                <Route exact path="/tab2">
                    <Verification />
                </Route>
                <Route path="/tab3">
                    <CreateProfile />
                </Route>
                <Route exact path="/">
                    <Redirect to="/tab2" />
                </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">

                <IonTabButton tab="schedule">
                    <IonIcon icon={calendar} />
                    <IonLabel>Schedule</IonLabel>
                    <IonBadge>6</IonBadge>
                </IonTabButton>

                <IonTabButton tab="speakers">
                    <IonIcon icon={personCircle} />
                    <IonLabel>Speakers</IonLabel>
                </IonTabButton>

                <IonTabButton tab="map">
                    <IonIcon icon={map} />
                    <IonLabel>Map</IonLabel>
                </IonTabButton>

                <IonTabButton tab="about">
                    <IonIcon icon={informationCircle} />
                    <IonLabel>About</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
};

export default MainTabs;
