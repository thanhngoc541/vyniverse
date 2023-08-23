import { IonButton, IonButtons, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonRow, IonToolbar } from "@ionic/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import { useState, useEffect } from "react";

import { isPlatform } from '@ionic/react';
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
import { useHistory } from "react-router-dom";
import { platform } from 'os';


const ScanQRCode: React.FC = () => {
    var qr = new QrcodeDecoder();
    var video;
    const history = useHistory();
    const scale = isPlatform('ios') ? 1.5 : 1
    setInterval(() => {
        if (!!video) {
            qr.decodeFromVideo(video).then(async (res) => {
                console.log(res);
                await stopCamera()
                history.push('/get-started');
            });
        } else {
            video = document.getElementById('video')
        }
    }, 2000);
    let sideLength = Math.min(490, window.innerWidth - 42 - 10);
    const cameraPreviewOptions: CameraPreviewOptions = {
        position: 'rear',
        parent: 'camera-qr',
        x: Math.ceil((window.innerWidth - sideLength) * scale / 2),
        y: Math.ceil((window.innerHeight * 0.45 - sideLength / 2) * scale),
        height: sideLength,
        width: sideLength,
    };

    const startCamera = async () => {
        await CameraPreview.start(cameraPreviewOptions);
        console.log("start qr scan");
    }

    const stopCamera = async () => {
        await CameraPreview.stop();
    }

    useEffect(() => {
        console.log("useEffect")
        startCamera();
        return () => {
            stopCamera();
        }
    }, [])
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <div className="ion-text-center ion-padding-horizontal">
                        <p className="title ion-text-wrap">
                            Scan QR Code

                        </p>
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-no-padding ion-no-padding-top ion-text-center">


                <div className="camera-container">
                    <div id="camera-qr" className="camera-content"></div>
                </div>
                <div className="bottom-holder">
                    <div className="ion-text-center ion-padding-horizontal">
                        <p className="ion-text-wrap">
                            If you have already went through a interview just scan your QR code to Continue
                        </p>
                    </div>
                    <IonGrid class="ion-text-center">

                        <IonRow>
                            <IonCol>
                                <IonButton onClick={stopCamera} routerLink="/get-started" color="secondary" shape="round" expand="block">Skip</IonButton>
                            </IonCol>
                            <IonCol>
                                <IonButton onClick={stopCamera} routerLink="/get-started" shape="round" expand="block">Continue</IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </div>
            </IonContent>
        </IonPage >
    );
};

export default ScanQRCode;
