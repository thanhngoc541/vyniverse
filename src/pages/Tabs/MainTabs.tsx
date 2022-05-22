import React from "react";
import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonBadge, IonIcon } from "@ionic/react";
import { Route } from "react-router";
import { Redirect } from "react-router-dom";
import { calendar, personCircle, map, informationCircle, personCircleOutline, walkOutline, walletSharp, warning, wallet } from "ionicons/icons";
import Verification from '../OnBoarding/Verifivation';
import Login from "../AccountSetup/Login";
import CreateProfile from '../AccountSetup/CreateProfile';
import UserProfile from "./UserProfile/UserProfile";
import Gaming from "./UserProfile/Gaming";

const MainTabs: React.FC = () => {
    return (

        <IonTabs  >
            <IonRouterOutlet>
                <Route exact path="/tabs/user-profile">
                    <UserProfile />
                </Route>
                <Route exact path="/tabs/user-profile/gaming">
                    <Gaming />
                </Route>
                <Route exact path="/tabs/challenges">
                    <Verification />
                </Route>
                <Route path="/tabs/alearts">
                    <CreateProfile />
                </Route>
                <Route exact path="/tabs/wallet">
                    <Login />
                </Route>
                <Route exact path="/tabs/leaderboard">
                    <Verification />
                </Route>
                <Route path="/tabs/referrals">
                    <CreateProfile />
                </Route>
                <Route path="/tabs/guildlist">
                    <CreateProfile />
                </Route>
                <Route exact path="/tabs">
                    <Redirect to="/tabs/user-profile" />
                </Route>
            </IonRouterOutlet>
            <IonTabBar slot="top">
                <IonTabButton tab="user-profile" href="/tabs/user-profile">
                    <IonIcon />
                </IonTabButton>

                <IonTabButton tab="challenges" href="/tabs/challenges">
                    <IonIcon />
                </IonTabButton>

                <IonTabButton tab="wallet" href="/tabs/wallet">
                    <IonIcon />
                </IonTabButton>

                <IonTabButton tab="alearts" href="/tabs/alearts">
                    <IonIcon />
                </IonTabButton>

                <IonTabButton tab="leaderboard" href="/tabs/leaderboard">
                    <IonIcon />
                </IonTabButton>

                <IonTabButton tab="referrals" href="/tabs/referrals">
                    <IonIcon />
                </IonTabButton>

                <IonTabButton tab="guildlist" href="/tabs/guildlist">
                    <IonIcon />
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
};

export default MainTabs;
