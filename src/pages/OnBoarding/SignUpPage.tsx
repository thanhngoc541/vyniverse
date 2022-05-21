import { IonPage, IonHeader, IonToolbar, IonButtons, IonBackButton, IonButton, IonIcon, IonContent, IonGrid, IonRow, IonCol, IonCardTitle, IonFooter, IonText } from "@ionic/react";
import { arrowBack, shapesOutline } from "ionicons/icons";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Action } from "../../components/Action";
import CustomField from "../../components/CustomField";
import { Wave } from "../../components/Wave";
import { useSignupFields } from "../../data/fields";
import { validateForm } from "../../data/utils";
import "./SignUpPage.css";


const SignUpPage: React.FC = () => {
    const params = useParams();
    const fields = useSignupFields();
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
                            Sign Up
                        </p>
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid className="ion-padding">
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
                    <div className="ion-text-left ion-padding-horizontal">
                        <p className="sm-detail ion-text-wrap  text-white">
                            By clicking Join now, you agree to our <span className="text-blue">
                                User Agreement Privacy Policy
                                and Cookie Policy
                            </span>
                        </p>
                    </div>
                    <IonButton routerLink="/sign-up-scan" expand="block" shape="round" onClick={createAccount}>
                        Join Now
                    </IonButton>
                </div>
            </IonContent >

            {/* <IonFooter >
                <IonGrid className=" ion-no-padding">
                    <div className="ion-padding-horizontal">
                        <div className="ion-text-left ion-padding-horizontal">
                            <p className="sm-detail ion-text-wrap  text-white">
                                By clicking Join now, you agree to our <span className="text-blue">
                                    User Agreement Privacy Policy
                                    and Cookie Policy
                                </span>
                            </p>
                        </div>
                        <IonButton routerLink="/sign-up-scan" expand="block" shape="round" onClick={createAccount}>
                            Join Now
                        </IonButton>
                    </div>
                </IonGrid>
            </IonFooter> */}
        </IonPage >);
};

export default SignUpPage;
