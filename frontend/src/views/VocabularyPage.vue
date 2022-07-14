<template>
  <ion-page>
    <ion-content>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
      <div class="top-section">
        <ion-icon :src = "chevronBack" size = "large" @click="$router.push('/menu')"></ion-icon>
        <h1 class="text">Vocabulary</h1>
      </div>

      <div class="coll">
        <ion-grid router-link="/animal">
          <ion-row>
            <ion-col size="12">
              <img src="../assets/animal.png" />
              <h2>Animal</h2>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid router-link="/thing">
          <ion-row>
            <ion-col size="12">
              <img src="../assets/thing.png" />
              <h2>Thing</h2>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid router-link="/place">
          <ion-row>
            <ion-col size="12">
              <img src="../assets/place.png" />
              <h2>Place</h2>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid router-link="/occupation">
          <ion-row>
            <ion-col size="12">
              <img  style="margin-left: 140px" src="../assets/occupation.png" />
              <h2>Occupation</h2>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid router-link="/activity">
          <ion-row>
            <ion-col size="12">
              <img src="../assets/activity.png" />
              <h2>Activity</h2>
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
import { chevronBack } from 'ionicons/icons';

export default defineComponent({
  name: "VocabularyPage",
  components: {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
  },  setup () {
    return {
      chevronBack
    }
  }
});
</script>

<style scoped>
ion-content {
  --ion-background-color: rgba(1, 36, 53, 1);
}

.top-section {
  min-height: 200px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  background-color: #ff8a00;
  padding-top: 100px;
}

ion-icon {
  width: 2.5rem;
  height: 2.5rem;
  transform: translateY(-11.5vh);
  margin-left: 5px;
  font-weight: 800;
}

.text {
  font-size: 2.3rem;
  font-family: serif;
  text-align: center;
  transform: translateY(-20vh);
  font-weight: 80;
}

.coll {
  margin-top: -105px;
}

ion-row {
  margin-top: -32px;
}

ion-col{
    max-width: auto;
    height: 160px;
    background-color: rgba(48, 50, 58, 1);
    border-radius: 20px;
    display: block;
    margin: 18px 0;
}

img {
       width: 128px;
       height: 143px;
       align-items: center;
       margin-left: 128px;
   }

h2 {
     font-size: 26px;
     font-family: serif;
     color: #FFFFFF;
     margin-left: 1.8rem;
     margin-top: -100px;
     font-weight: 90;
   }

   

</style>
