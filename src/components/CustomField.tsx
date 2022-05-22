import { IonInput, IonLabel } from '@ionic/react';
import { IonItem } from '@ionic/react';

const CustomField = ({ field, errors }) => {
    const error = errors && errors.filter((e) => e.id === field.id)[0];
    const errorMessage = error && errors.filter((e) => e.id === field.id)[0].message;

    return (
        <>
            <p className="fieldLabel">
                {field.label}
            </p>
            <div>
                <IonItem lines="none" color='tertiary' className="border-round">
                    <IonInput {...field.input.props} {...field.input.state} />
                </IonItem>
                {error && <p className="animate__animated animate__bounceIn">{errorMessage}</p>}
            </div>

        </>
    );
};

export default CustomField;
