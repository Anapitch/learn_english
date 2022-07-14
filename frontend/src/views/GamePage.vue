<template>
  <ion-page>
    <ion-content>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
      <div class="top-section">
        <ion-icon :src = "chevronBack" class="icon" @click="$router.push('/menu')"></ion-icon>
        <h1 class="text">Game</h1>
      </div>

      <ion-grid class="grid">
      <ion-row >
        <ion-col size="12" router-link="/memory">
            <section class="game-board">
              <div class="card_back"><img src="../assets/pig.png" class="imgcard"></div>
              <div class="card_back"><p class="textcard">run</p></div>
              <div class="card_back"><img src="../assets/bag.png" class="imgcard"></div>
              <div class="card"></div>
              <div class="card_back"><p class="textcard">bag</p></div>
              <div class="card"></div>
              <div class="card_back"><img src="../assets/run.png" class="imgcard"></div>
              <div class="card_back"><img src="../assets/cat.png" class="imgcard"></div>
              <div class="card_back"><p class="textcard">pig</p></div>
              <div class="card"></div>
              <div class="card_back"><p class="textcard">cat</p></div>
              <div class="card"></div>
            </section>
            <h2>Memory Game</h2>
        </ion-col>
      </ion-row>

      <ion-row style="margin-top: -15px;">
        <ion-col size="12" router-link="/quiz">
            <p class="textquiz">Be my guest แปลอย่างไรให้ถูกต้อง</p>
            <img src="../assets/sent01.png">
            <ion-button class="btn"  expand="block" shape="round">A:เป็นแขกของฉันนะ</ion-button><br>
            <ion-button class="box"  expand="block" shape="round">B:เชิญตามสบายเลยนะ</ion-button>
            <h2>Quiz Game</h2>
        </ion-col>
      </ion-row>
    </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonGrid, IonRow, IonCol } from '@ionic/vue';
import { defineComponent } from 'vue';
import { chevronBack, volumeMediumOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'GamePage',
  components: {
    IonPage,
    IonContent,
    IonGrid, 
    IonRow, 
    IonCol,
  }, setup () {
    return {
      chevronBack,
      volumeMediumOutline
    }
  },

});
</script>

<style scoped>
  ion-content {
  --ion-background-color: rgba(1, 36, 53, 1);
}

.top-section{
  min-height: 200px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  background-color: #FF8A00;
  padding-top: 100px;
}

.icon{
  width: 2.5rem;
  height: 2.5rem;
  transform: translateY(-12vh);
  margin-left: 5px;
  font-weight: 600;
}

.text
{
  font-size: 2.3rem;
  text-align: center;
  font-family: serif;
  transform: translateY(-20.5vh);
  font-weight: 100;
}

.grid {
  margin-top: -150px;
}

ion-col{
    max-width: auto;
    max-height: auto;
    background-color: rgba(48, 50, 58, 1);
    border-radius: 20px;
    display: block;
    margin: 15px 0;
}

.card {
  background:#FF8A00;
  border-radius: 5px;
}

.card_back {
  background: #FFFFFF;
  border-radius: 5px;
}
.game-board {
  display: grid;
  grid-template-columns: 55px 55px 55px 55px;
  grid-template-rows: 55px 55px 55px;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  justify-content: center;
  margin-top: 10px;
}
    .imgcard {
      margin-top: 2px;
      width: 48px;
      height: 50px;
      margin-left: 3px;
    }

     h2 {
       color: #FFFFFF;
       margin-top: 10px;
       text-align: center;
     }

     img {
       width: 190px;
       height: 150px;
       margin-left: 40px;
       margin-top: -5px;
       position: absolute;

     }

     .btn {
      --background: #FF8A00;
      margin-top: 145px;
      margin-left: 40px;
      font-size: 14px;
      width: 185px;
      height: 40px;
      color: #FFFFFF;
    }

    .box {
      --background: #FF8A00;
      margin-top: 5px;
      margin-left: 58px;
      font-size: 14px;
      width: 160px;
      height: 30px;
      color: #FFFFFF;
    }

     .textquiz {
      color: #FFFFFF;
      margin-top: 10px;
      text-align: center;
      font-size: auto;
     }
    
    .textcard {
      color: #050505;
      text-align: center;
      font-weight: 300;
      font-size: 20px;
      margin-top: 12px;
    }

</style>

