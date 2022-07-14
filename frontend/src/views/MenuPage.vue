<template>
  <ion-page>
    <ion-content>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
      <div class="top-section"> 
        <h1>Menu</h1>
        <img src="../assets/menu.png">
      </div>

      <div class="grid">
        <ion-grid router-link="/vocabulary">
          <ion-row>
            <ion-col size="12">
              <h1 class="text">Vocabulary</h1>
              <img class="cardvocab" src="../assets/icon-vocab.png">
              
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid router-link="/sentence">
          <ion-row>
            <ion-col size="12">
              <h1 class="text">Sentence</h1>
              <img class="cardsentence" src="../assets/icon-sentence.png">
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid router-link="/game">
          <ion-row>
            <ion-col size="12">
              <h1 class="text">Game</h1>
              <img class="cardgame" src="../assets/icongame.png">
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonGrid, IonRow, IonCol } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuPage",
  components: {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
  },
});
</script>

<style scoped>
ion-content {
  --ion-background-color: rgba(1, 36, 53, 1);
}

.top-section{
    max-height: 180px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    background-color: #FF8A00;
    padding-top: 90px;
  }

h1 {
  font-size: 2.5rem;
  transform: translateX(6.5vh);
  font-family: "Tangerine", serif;
  font-style: normal;
  font-weight: 600;
  margin-top: -25px;
}

img {
    width: 30vh;
    height: 28vh;
    transform: translateY(-16vh);
    margin-left: 8rem;
  }

.grid {
  margin-top: 5px;
}

ion-col {
  border-radius: 20px;
  height: 140px;
  background-color: rgba(48, 50, 58, 1);
}

.cardgame {
  max-width: 86px;
  max-height: 86px;
  margin-top: 117px;
  margin-left: 30px;
}

.cardsentence {
  max-width: 85px;
  max-height: 85px;
  margin-top: 117px;
  margin-left: 30px;
}

.cardvocab {
  max-width: 85px;
  max-height: 85px;
  margin-top: 117px;
  margin-left: 30px;
}

.text {
  font-size: 20px;
  color: aliceblue;
  transform: translateY(12vh);
  margin-left: 140px;
}
</style>
