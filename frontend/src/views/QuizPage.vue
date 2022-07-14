<template>
  <ion-page>
    <ion-content>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
      />
      <div class="top-section">
        <ion-icon
          :src="chevronBack"
          class="icon"
          @click="$router.push('/game')"
        ></ion-icon>
        <h1 class="text">Quiz Game</h1>
      </div>

      <ion-grid fixed>
        <ion-row>
          <ion-col size="12">
            <div class="time_score">
              <div class="time">
                <img class="img_clock" src="../assets/clock.png" />
                <span id="time"> {{ time }} </span>
              </div>

              <ion-button class="btn_reset" @click="reset()">reset</ion-button>

              <div class="score">
                <img class="img_score" src="../assets/score.png" />
                <span id="score"> {{ score }} </span>
              </div>
            </div>

            <div v-if="datas.length > 1">
              <p class="textquiz">
               {{count+1}}. {{ datas[count].sentence }} แปลอย่างไรให้ถูกต้อง
              </p>
              <img class="imgquiz" :src="datas[count].image" />
              <ion-button
                class="btn"
                shape="round"
                @click="
                  checkanswer(
                    datas[count].answer.startsWith('A'),
                    datas[count].sentence
                  )
                "
                >{{ datas[count].choice_A }}</ion-button
              ><br />
              <ion-button
                class="box"
                shape="round"
                @click="
                  checkanswer(
                    datas[count].answer.startsWith('B'),
                    datas[count].sentence
                  )
                "
                >{{ datas[count].choice_B }}</ion-button
              >
            </div>
            
          </ion-col>
        </ion-row>
      </ion-grid>
            
      <diV class="popup" v-if="open">
        <div class="time_popup">
          <img class="img_clock_popup" src="../assets/clock.png" />
          <span id="time"> {{ time }} </span>
        </div>

        <div class="score_popup">
          <img class="img_score_popup" src="../assets/score.png" />
          <span id="score"> {{ score }} </span>
        </div>

        <ion-button class="btn_play" @click="reset()">play</ion-button>
        <ion-button class="btn_back" @click="back()">back</ion-button
        >
      </diV>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonGrid, IonRow, IonCol } from "@ionic/vue";
import { defineComponent } from "vue";
import { chevronBack, volumeMediumOutline } from "ionicons/icons";
import axios from "axios";

export default defineComponent({
  name: "QuizPage",
  components: {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
  },
  setup() {
    return {
      chevronBack,
      volumeMediumOutline,
    };
  },
  data() {
    return {
      time: 90,
      finish: false,
      start: false,
      score: 0,
      open: false,
      datas: [null],
      count: 0,
      greetingSpeech: new SpeechSynthesisUtterance(),
    };
  },
  created() {
    this.countDownTimer();
    this.getData();
  },
  methods: {
    async getData() {
      this.datas = [];
      await axios.get("http://localhost:8000/sentence").then((response) => {
        response.data.forEach((data: any) => {
          this.datas.push(data);
        });
      });
    },
    checkanswer(data: any, sound: any) {
      this.start = true;
      console.log(data)
      if (data&&!this.open) {
        this.greetingSpeech.text = sound;
        speechSynthesis.speak(this.greetingSpeech);
        this.score++
      }else {
        var audio=new Audio("https://firebasestorage.googleapis.com/v0/b/seniorproject-a570a.appspot.com/o/soundeffect.mp3?alt=media&token=508f297d-ca8e-475d-9507-986011a339dc")
        audio.play()
      }
      if (this.count < 9) {
        setTimeout(() => {
          this.count++;
        }, 1000);
      } else {
        this.start = false
        this.open = true;
      }
    },

    countDownTimer() {
      if (this.time > 0) {
        setTimeout(() => {
          if (this.start == true) {
            this.time -= 1;
          }
          this.countDownTimer();
        }, 1000);
      } else {
        console.log("TimeOUt");
        this.open = true;
        this.start = false;
      }
    },

    reset(){
      this.start = false;
      this.time = 90;
      this.score = 0;
      this.count = 0;
      this.open = false;
      this.getData()
    },

    back() {
      window.location.href="/game"
    },
   },
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

.icon {
  width: 2.5rem;
  height: 2.5rem;
  transform: translateY(-12vh);
  margin-left: 5px;
  font-weight: 600;
}

.text {
  font-size: 2.3rem;
  text-align: center;
  font-family: serif;
  transform: translateY(-20.5vh);
  font-weight: 100;
}

ion-grid {
  margin-top: -153px;
}

ion-col {
  max-width: auto;
  height: 550px;
  background-color: rgba(48, 50, 58, 1);
  border-radius: 20px;
  display: block;
  margin: 18px 0;
}

.score {
  color: #ff8a00;
  font-size: 2rem;
  margin-left: 203px;
  margin-top: -40px;
}

.time_score {
  display: grid;
}

.time {
  color: #ff8a00;
  font-size: 2rem;
  margin-left: 14px;
  margin-top: 20px;
}

.btn_reset {
  width: 50px;
  height: 30px;
  margin-left: 110px;
  margin-top: -35px;
  --background: #ff8a00;
}

.img_clock {
  width: 45px;
  height: 45px;
}

.img_score {
  width: 45px;
  height: 45px;
  margin-left: -12px;
  margin-top: -5px;
}

.textquiz {
  color: #ffffff;
  margin-top: 30px;
  text-align: center;
  font-size: 1.5rem;
}

.imgquiz {
       width: 19rem;
       height: 17rem;
       margin-top: 5px;
       display: block;
       margin-left: auto;
       margin-right: auto;
}
.btn {
  --background: #ff8a00;
  margin-top: 10px;
  font-size: 1.5rem;
  width: auto;
  height: 60px;
  margin-left: -10px;
  color: #ffffff;
}

.box {
  --background: #ff8a00;
  margin-top: 10px;
  font-size: 1.5rem;
  width: auto;
  height: 50px;
  margin-left: 1px;
  color: #ffffff;
}

.popup {
  width: 240px;
  height: 240px;
  background-color: aliceblue;
  margin-left: 20px;
  margin-top: -450px;
  margin-bottom: 10px;
  border-radius: 5px;
  position: fixed;
}

.time_popup {
  color: #ff8a00;
  font-size: 3rem;
}

.img_clock_popup {
  width: 60px;
  height: 60px;
  margin-left: 50px;
  margin-top: 10px;
}

.score_popup {
  color: #ff8a00;
  font-size: 3rem;
}

.img_score_popup {
  width: 60px;
  height: 60px;
  margin-left: 50px;
  margin-top: 10px;
}

.btn_play {
  width: 100px;
  height: 50px;
  margin-left: 10px;
  margin-top: 30px;
  --background: #ff8a00;
  font-size: 1.5rem;
}

.btn_back {
  width: 100px;
  height: 50px;
  margin-left: 15px;
  margin-top: 30px;
  --background: #ff8a00;
  font-size: 1.5rem;
}
</style>

