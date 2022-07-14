<template>
  <ion-page>
    <ion-content>
      <div align="center">
        <img src="../assets/logo01.png">
      </div>

      <div align="center">
        <ion-button size="large" expand="block" shape="round" router-link="/menu">
        <ion-text>Next</ion-text>
      </ion-button>
  </div> 
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonButton,IonText } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "StartPage",
  components: {
    IonPage,
    IonContent, IonButton ,IonText
  },
});
</script>

<style scoped>
ion-content {
  --ion-background-color: rgba(1, 36, 53, 1);
}

img {
    width: 38vh;
    height: 48vh;
    transform: translateY(16vh);
  }

ion-button {
    transform: translateY(30vh);
    width: 38vh;
    height: 9vh;
    --background: #FF8A00;
  }

  ion-text {
    font-size: 1.5em;
  }

</style>
