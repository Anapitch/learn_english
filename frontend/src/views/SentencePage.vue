<template>
  <ion-page>
    <ion-content>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
      <div class="top-section">
        <ion-icon :src = "chevronBack" size = "large" @click="$router.push('/menu')"></ion-icon>
        <h1 class="text">Sentence</h1>
      </div>

      <div>
        <ion-grid fixed>
          <ion-row v-for="(infonew, index) in info" :key="index">
            <ion-col size="12" >
              <img :src="infonew.image"><br>
              <div class="btn">
                <ion-icon :src = "volumeMediumOutline" class="volume" @click="active(infonew)"></ion-icon>
              </div>
              <div><p class="sentence">{{ infonew.sentence }}</p>
              <p class="translate1">แปลตรงตัวคือ {{ infonew.translate1 }}</p>
              <p class="translate2">แปลถูกต้องคือ {{ infonew.translate2 }}</p>

              <p class="text_ex">ยกตัวอย่างเช่น</p></div>

              <div class="btnA">
                <ion-icon :src = "volumeMediumOutline" class="volumeA" @click="activeA(infonew)"></ion-icon>
              </div>
              <div>
                <p class="exampleA">A : {{ infonew.ex_eng_A }}</p><br>
                <p class="exampleA">{{ infonew.ex_thai_A }}</p>
              </div>
              
              <div class="btnB">
                <ion-icon :src = "volumeMediumOutline" class="volumeB" @click="activeB(infonew)"></ion-icon>
              </div>
              <div>
                <p class="exampleB">B : {{ infonew.ex_eng_B }}</p><br>
                <p class="exampleB">{{ infonew.ex_thai_B }}</p>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonGrid, IonRow, IonCol } from '@ionic/vue';
import { defineComponent } from 'vue';
import { chevronBack, volumeMediumOutline } from 'ionicons/icons';
import axios from 'axios';

export default defineComponent({
  name: 'SentencePage',
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
   data() {
    return {
      greetingSpeech: new SpeechSynthesisUtterance(),
      info: []
    };
  },
  mounted (){
    axios.get('http://localhost:8000/sentence')
    .then(response => {
        this.info = response.data
        console.log(response)
      })
  },
  methods: {
    active(infonew: { sentence: string;},) {
      console.log("infonew", infonew);
      this.greetingSpeech.text = infonew.sentence;
      speechSynthesis.speak(this.greetingSpeech);
    },
    activeA(infonew: { ex_eng_A: string;},) {
      console.log("infonew", infonew);
      this.greetingSpeech.text = infonew.ex_eng_A;
      speechSynthesis.speak(this.greetingSpeech);
    },
    activeB(infonew: { ex_eng_B: string;},) {
      console.log("infonew", infonew);
      this.greetingSpeech.text = infonew.ex_eng_B;
      speechSynthesis.speak(this.greetingSpeech);
    },
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

ion-icon {
  width: 2.5rem;
  height: 2.5rem;
  transform: translateY(-11.5vh);
  margin-left: 5px;
  font-weight: 600;
}

.text
{
  font-size: 2.3rem;
  text-align: center;
  font-family: serif;
  transform: translateY(-20vh);
  font-weight: 100;
}

ion-grid {
  margin-top: -130px;
}


ion-col{
    max-width: auto;
    height: auto;
    background-color: rgba(48, 50, 58, 1);
    border-radius: 20px;
    display: block;
    margin-top: 10px;
}

img {
       width: 19rem;
       height: 17rem;
       margin-top: 5px;
       display: block;
       margin-left: auto;
       margin-right: auto;
}


.btn {
    background-color: #FF8A00;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    margin-left: 5px;
    margin-top: -5px;
   }

.volume {
    margin-left: -8px;
    margin-top: 73px;
    width: 22px;
    height: 22px;
}


.sentence {
     font-size: 18px;
     color: aliceblue;
     margin-top: -29px;
     transform: translateX(6vh);
   }

.translate1 {
    font-size: 16px;
    color: aliceblue;
    margin-top: 18px;
    transform: translateX(1vh);
}


.translate2 {
    font-size: 16px;
    color: aliceblue;
    margin-top: 13px;
    transform: translateX(1vh);
}

.text_ex{
  font-size: 20px;
  color: aliceblue;
  margin-top: 28px;
  transform: translateX(1vh);
}

.btnA {
    background-color: #FF8A00;
    border: none;
    width: 27px;
    height: 27px;
    border-radius: 50px;
    margin-left: 5px;
    margin-top: 10px;
   }

.volumeA {
    margin-left: 4px;
    margin-top: 79px;
    width: 20px;
    height: 20px;
}

.exampleA {
  font-size: 15px;
  color: aliceblue;
  margin-top: -25px;
  margin-left: 38px;

}

.btnB {
    background-color: #FF8A00;
    border: none;
    width: 27px;
    height: 27px;
    border-radius: 50px;
    margin-left: 5px;
    margin-top: 15px;
   }

.volumeB {
    margin-left: 4px;
    margin-top: 79px;
    width: 20px;
    height: 20px;
}

.exampleB {
  font-size: 15px;
  color: aliceblue;
  margin-top: -25px;
  margin-left: 38px;

}

</style>

