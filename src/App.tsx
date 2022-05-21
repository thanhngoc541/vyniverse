import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact, } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "./theme/variables.css";
import Intro from "./pages/Intro/Intro";
import MainTabs from "./pages/Tabs/MainTabs";
import React from "react";
import ChooseLanguage from "./pages/OnBoarding/ChooseLanguage";
import ScanQRCode from "./pages/OnBoarding/ScanQRCode";
import GetStarted from "./pages/OnBoarding/GetStarted";
import SignUpPage from "./pages/OnBoarding/SignUpPage";
import ApplicationScan from "./pages/OnBoarding/ApplicationScan";
import Verification from "./pages/OnBoarding/Verifivation";
import './App.css';
import ScanIDFront from "./pages/OnBoarding/ScanIDFront";
import ScanIDBack from "./pages/OnBoarding/ScanIDBack";
import TakeSelfie from "./pages/OnBoarding/TakeSelfie";
import Complete from "./pages/OnBoarding/Complete";

setupIonicReact({
    mode: "md",
});

const App: React.FC = () => {
    // const {testState} = React.useContext(UIContext);
    return (
        <IonApp>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route exact path="/"><Intro /></Route>
                    <Route path="/tabs" render={() => <MainTabs />} />
                    <Route path="/choose-language" render={() => <ChooseLanguage />} />
                    <Route path="/scan-qr" render={() => <ScanQRCode />} />
                    <Route path="/get-started" render={() => <GetStarted />} />
                    <Route path="/sign-up" render={() => < SignUpPage />} />
                    <Route path="/sign-up-scan" render={() => <ApplicationScan />} />
                    <Route path="/verification" render={() => <Verification />} />
                    <Route path="/scan-id-front" render={() => <ScanIDFront />} />
                    <Route path="/scan-id-back" render={() => <ScanIDBack />} />
                    <Route path="/take-selfie" render={() => <TakeSelfie />} />
                    <Route path="/complete" render={() => <Complete />} />


                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
    );
};

export default App;
