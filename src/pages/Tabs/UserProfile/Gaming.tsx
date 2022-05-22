import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonPage, IonRow, IonToolbar } from "@ionic/react";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper";

import "@ionic/react/css/ionic-swiper.css";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';
import { useGaming } from "../../../data/data";
import GameList from "../../../components/GameList";


const Gaming: React.FC = () => {
    const [controlledSwiper, setControlledSwiper] = useState(useSwiper());
    const [activeIndex, setActiveIndex] = useState(0);
    var games = useGaming();

    return (
        <IonPage>
            <IonContent className="" fullscreen>
                <div className="ion-text-center">
                    <p className="title">Gaming</p>
                </div>
                <Swiper
                    modules={[]}
                    onSlideChange={(s) => { setActiveIndex(s.activeIndex); console.log(controlledSwiper) }}
                    spaceBetween={50}
                    onSwiper={(s) => { setControlledSwiper(s) }}
                >
                    <IonGrid className="swiper-label" slot="container-start">
                        <IonRow>
                            <IonCol onClick={() => controlledSwiper.slideTo(0)} >
                                <IonLabel color={activeIndex == 0 ? "primary" : "#ABABB0"}>First</IonLabel>
                            </IonCol>
                            <IonCol onClick={() => controlledSwiper.slideTo(1)} >
                                <IonLabel color={activeIndex == 1 ? "primary" : "#ABABB0"}>Second</IonLabel>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <SwiperSlide >
                        <GameList games={games}></GameList>
                    </SwiperSlide>
                    <SwiperSlide>
                        <GameList games={games}></GameList>
                    </SwiperSlide>
                </Swiper>
            </IonContent >
        </IonPage >
    );
};

export default Gaming;
