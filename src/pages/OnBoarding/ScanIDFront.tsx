import { IonButton, IonButtons, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonToolbar } from "@ionic/react";
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
import { imageOutline } from "ionicons/icons";
import * as tfTask from '@tensorflow-models/tasks';

const ScanIDFront: React.FC = () => {
    let model;
    let video;
    let sideLength = Math.min(500, window.innerWidth - 42 - 10);
    const cameraPreviewOptions: CameraPreviewOptions = {
        position: 'front',
        parent: 'camera-id-front',
        x: 16 + 5 + 5,
        y: Math.ceil(window.innerHeight * 0.45 - sideLength / 2),
        height: sideLength,
        width: sideLength,
    };
    const startCamera = async () => {
        await CameraPreview.start(cameraPreviewOptions);
    }
    const loadModel = async () => {
        console.log("start load model")
        model = await tfTask.ObjectDetection.CocoSsd.TFJS.load();
        console.log("end load model")
    }
    const stopCamera = async () => {
        await CameraPreview.stop();
    }
    setInterval(async () => {
        console.log(video)
        if (!!video) {
            if (!!model) {
                const result = await model.predict(video, { numMaxBoxes: 5 });
                console.log(result.objects);
            }
        } else {
            video = document.getElementById('video')
        }
    }, 5000);
    useEffect(() => {
        console.log("use effect")
        startCamera();
        loadModel();
        return () => {
            stopCamera();
        }
    }, [])
    return (
        <IonPage>
            <IonContent className="ion-no-padding ion-no-padding-top ion-text-center">
                <div className="ion-text-center ion-padding-horizontal">
                    <p className="title ion-text-wrap">
                        Scan ID
                    </p>
                </div>
                <div className="ion-text-center  sub-title">
                    Front Side of the Gorvernment Issued ID
                </div>
                <div className="camera-container">
                    <div id="camera-id-front" className="camera-content"></div>
                </div>
                <div className="bottom-holder">
                    <div className="ion-text-center ion-padding-horizontal">
                        <p className="ion-text-wrap text-white">
                            <IonIcon className="image-icon vertical-middle" icon={imageOutline}></IonIcon>
                            <span className="vertical-middle" > Upload from photo Library</span>
                        </p>
                    </div>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <IonButton onClick={stopCamera} routerLink="/scan-id-back" shape="round" expand="block">Submit</IonButton>
                            </IonCol>

                        </IonRow>
                    </IonGrid>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default ScanIDFront;
