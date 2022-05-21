import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonButton, IonIcon, IonContent, IonGrid, IonRow, IonCol, IonCardTitle, IonFooter, IonText } from "@ionic/react";
import { arrowBack, shapesOutline } from "ionicons/icons";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Action } from "../../components/Action";
import CustomField from "../../components/CustomField";
import { Wave } from "../../components/Wave";
import { useLoginFields } from "../../data/fields";
import { validateForm } from "../../data/utils";


const Login: React.FC = () => {
    const params = useParams();
    const fields = useLoginFields();
    const [errors, setErrors] = useState<any[]>([]);

    const createAccount = () => {
        const errors = validateForm(fields);
        setErrors(errors);

        if (!errors.length) {
            //  Submit your form here
        }
    };

    useEffect(() => {
        return () => {
            fields.forEach((field) => field.input.state.reset(''));
            setErrors([]);
        };
    }, [params]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton icon={arrowBack} text="" className="custom-back" />
                    </IonButtons>
                    <div className="ion-text-center ion-padding-horizontal">
                        <p className="title ion-text-wrap">
                            Login
                        </p>
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid className="ion-padding-horizontal ion-no-padding">
                    {fields.map((field) => {
                        return (
                            <IonRow >
                                <IonCol>
                                    <CustomField field={field} errors={errors} />
                                </IonCol>
                            </IonRow>)
                    })}

                </IonGrid>
                <div className="ion-padding-horizontal">
                    <div className="ion-text-left">
                        <p className="sm-detail ion-text-wrap">
                            Forgot password
                        </p>
                    </div>
                    <IonButton routerLink="/create-profile" expand="block" shape="round" onClick={createAccount}>
                        Log In
                    </IonButton>
                </div>
            </IonContent >
        </IonPage >);
};

export default Login;
