import { IonAvatar, IonButton, IonImg, IonInput, IonLabel, IonList } from '@ionic/react';
import { IonItem } from '@ionic/react';

const GameList = ({ games }) => {
    return (
        <IonList className="ion-text-center list-container ion-padding-horizontal">
            {games.map((game) => {
                return (
                    <IonItem lines="none" className="game-item">
                        <IonAvatar slot="start">
                            <IonImg src={game.imgSrc} />
                        </IonAvatar>
                        <IonLabel>
                            <h3>{game.name}<span> {game.status}</span></h3>
                            <p >{game.description}</p>
                            <p >{game.player}</p>
                        </IonLabel>
                        <IonButton size="default" slot="end" shape="round">Let's Play</IonButton>
                    </IonItem>)
            })}
        </IonList>
    );
};

export default GameList;
