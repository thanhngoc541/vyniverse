import { IonButton, IonButtons, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonRow, IonToolbar } from "@ionic/react";
import { Swiper, SwiperSlide } from 'swiper/react';
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



const ScanQRCode: React.FC = () => {
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

    const cameraPreviewOptions: CameraPreviewOptions = {
        position: 'front',
        parent: 'camera-qr',
        x: 0,
        y: 0,
        height: 200
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
            <IonHeader className="ion-no-border">
                <IonToolbar>
                    <div className="ion-text-center ion-padding-horizontal">
                        <p className="title ion-text-wrap">
                            Scan QR Code
                        </p>
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding ion-text-center">
                <div className="camera-container">
                    <div id="camera-qr" className="camera-content"></div>
                </div>
                <div className="bottom-holder">
                    <div className="ion-text-center ion-padding-horizontal">
                        <p className="ion-text-wrap">
                            If you have already went through a interview just scan your QR code to Continue
                        </p>
                    </div>
                    <IonGrid>
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
        </IonPage>
    );
};

export default ScanQRCode;
