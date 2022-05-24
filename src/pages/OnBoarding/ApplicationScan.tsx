import { IonButton, IonButtons, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonToolbar } from "@ionic/react";
import { Autoplay, Pagination } from "swiper";
import { useState, useEffect } from "react";
import "@ionic/react/css/ionic-swiper.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { CameraPreview, CameraPreviewOptions } from '@capacitor-community/camera-preview';
import '@capacitor-community/camera-preview'
import QrcodeDecoder from 'qrcode-decoder';
import { Wave } from "../../components/Wave";
import { imageOutline } from "ionicons/icons";



const ApplicationScan: React.FC = () => {
    var qr = new QrcodeDecoder();
    var video;

    setInterval(() => {
        if (!!video) {
            qr.decodeFromVideo(video).then((res) => {
                console.log(res);
            });
        } else {
            video = document.getElementById('video')
        }
    }, 5000);
    let sideLength = Math.min(500, window.innerWidth - 42 - 10);

    const cameraPreviewOptions: CameraPreviewOptions = {
        position: 'front',
        parent: 'camera-application',
        x: 16 + 5 + 5,
        y: Math.ceil(window.innerHeight * 0.45 - sideLength / 2),
        height: sideLength,
        width: sideLength,
    };

    const startCamera = async () => {
        await CameraPreview.start(cameraPreviewOptions);
        console.log("start camera-application");
    }

    const stopCamera = async () => {
        await CameraPreview.stop();
    }

    useEffect(() => {
        startCamera();
        return () => {
            stopCamera();
        }
    }, [])
    return (
        <IonPage>
            <IonHeader className="ion-no-border">
                <IonToolbar>
                    <div className="ion-text-center ion-padding-horizontal">
                        <p className="title ion-text-wrap">
                            Sign Up
                        </p>
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding ion-text-center">
                <div className="camera-container">
                    <div id="camera-application" className="camera-content"></div>
                </div>

                <div className="bottom-holder">
                    <div className="ion-text-center ion-padding-horizontal">
                        <p className="sm-detail ion-text-wrap text-white">
                            <IonIcon className="image-icon vertical-middle" icon={imageOutline}></IonIcon>
                            <span className="vertical-middle" > Upload from photo Library</span>
                        </p>
                    </div>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonButton onClick={stopCamera} routerLink="/verification" shape="round" expand="block">Join Now</IonButton>
                            </IonCol>

                        </IonRow>
                    </IonGrid>
                </div>
            </IonContent>
        </IonPage >
    );
};

export default ApplicationScan;
