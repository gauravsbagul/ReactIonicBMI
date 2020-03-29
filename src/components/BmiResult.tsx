/** @format */

import { IonCard, IonCardContent, IonCol, IonRow } from "@ionic/react";
import React from "react";

const BmiResult: React.FC<{ calculatedBmi: number }> = props => {
  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <IonCardContent className="ion-text-center">
            <h2>Your Body Mass index</h2>
            <h3>{props.calculatedBmi.toFixed(2)}</h3>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default BmiResult;
