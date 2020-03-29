/** @format */

import { IonButton, IonCol, IonIcon, IonRow } from "@ionic/react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";
import React from "react";

const BmiControls: React.FC<{
  calculateBmi: () => void;
  resetInputs: () => void;
}> = props => {
  return (
    <IonRow>
      <IonCol className="ion-text-left">
        <IonButton onClick={props.calculateBmi}>
          <IonIcon slot="start" icon={calculatorOutline} color="#ffffff" />
          Calculate
        </IonButton>
      </IonCol>
      <IonCol className="ion-text-right">
        <IonButton onClick={props.resetInputs}>
          <IonIcon slot="start" icon={refreshOutline} color="#ffffff" />
          Reset
        </IonButton>
      </IonCol>
    </IonRow>
  );
};

export default BmiControls;
