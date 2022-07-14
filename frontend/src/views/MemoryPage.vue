<template>
  <ion-page>
    <ion-content>
      <div>
        <ion-icon
          :src="chevronBack"
          class="icon"
          @click="$router.push('/game')"
        ></ion-icon>
      </div>
      <h1>Game Memory</h1>

      <div class="time_score">

        <div class="time">
          <img class="img_clock" src="../assets/clock.png"/> <span id="time">{{ time }}</span>
        </div>

        <ion-button class="btn_reset" @click="reset()">reset</ion-button>
        
        <div class="score">
          <img class="img_score" src="../assets/score.png"/> <span id="score">{{ score }}</span>
        </div>

      </div>

      <div class="cards">
        <div
          v-for="(card, index) in memoryCards"
          :key="index"
          class="col-auto mb-3 flip-container"
          :class="{ flipped: card.isFlipped }"
          @click="flipCard(card)"
        >
          <div>
            <div class="front"></div>
            <div class="back">
              <img class="img-black"
                :src="card.image"
                :class="{ flipped: card.isFlipped, matched: card.isMatched }"
              />
            </div>
          </div>
        </div>
      </div>
    
      <diV class="popup" v-if="open">
          <div class="time_popup">
          <img class="img_clock_popup" src="../assets/clock.png"/> <span id="time">{{ time }}</span>
        </div>

        <div class="score_popup">
          <img class="img_score_popup" src="../assets/score.png"/> <span id="score">{{ score }}</span>
        </div>

        <ion-button class="btn_play" @click="reset()">play</ion-button>
        <ion-button class="btn_back" @click="$router.push('/game')">back</ion-button>
      </diV>

    </ion-content>
  </ion-page>
</template>

<script>
import axios from "axios";
import { chevronBack} from "ionicons/icons";

export default {
  name: "HelloWorld",
  setup() {
    return {
      chevronBack,
    };
  },
  data() {
    return {
      time: 90,
      memoryCards: [],
      flippedCards: [],
      finish: false,
      start: false,
      score: 0,
      data: [],
      cards: [],
      open: false,
      greetingSpeech: new SpeechSynthesisUtterance(),
    };

  },

  created() {
    this.reset();
    this.countDownTimer();
    setTimeout(() => {
      this.flippedCards.forEach((card) => (card.isMatched = true));
      this.flippedCards = [];

      //All cards matched ?
      if (this.memoryCards.every((card) => card.isMatched === true)) {
        this.finish = true;
      }
    }, 400);
  },
  methods: {
    countDownTimer() {
      if (this.time > 0) {
        setTimeout(() => {
          if (this.start == true) {
            this.time -= 1;
          }
          this.countDownTimer();
        }, 1000);
        
      }else{
        console.log("TimeOUt")
        this.open=true;
        this.start = false;
      }
    },
    flipCard(card) {
      if (card.isMatched || card.isFlipped || this.flippedCards.length === 2)
        return;

      card.isFlipped = true;
      if (!this.start) {
        this.start = true;
        console.log("start");
      }

      if (this.flippedCards.length < 2) this.flippedCards.push(card);
      if (this.flippedCards.length === 2) this._match(card);
    },

    _match(card) {
      if (this.memoryCards.every((card) => card.isMatched === true)) {
        clearInterval(this.interval);
        this.finish = true;
      }
      if (this.flippedCards[0].name === this.flippedCards[1].name) {
        this.score +=1;
        this.greetingSpeech.text = this.flippedCards[0].name;
        speechSynthesis.speak(this.greetingSpeech);
        if (this.score == 9) {
          this.start = false;
          this.open=true;
          console.log("จบเกม")
          
        }
        setTimeout(() => {
          this.flippedCards.forEach((card) => (card.isMatched = true));
          this.flippedCards = [];
        }, 400);
      } else {
        setTimeout(() => {
          this.flippedCards.forEach((card) => {
            card.isFlipped = false;
          });
          this.flippedCards = [];
        }, 800);
      }
    },

    async reset() {
      this.open=false;
      this.time = 90;
      this.score = 0;
      this.data = [];
      this.cards = [];
      await axios.get("http://localhost:8000/memory").then((response) => {
        response.data.forEach((data) => {
          this.cards.push({ image: data["image"], name: data["name"] });
          this.data.push({ image: data["imagetext"], name: data["name"] });
        });
      });

      this.cards.forEach((card) => {
        // eslint-disable-next-line no-undef
        Vue.set(card, "isFlipped", false);
        // eslint-disable-next-line no-undef
        Vue.set(card, "isMatched", false);
      });

      setTimeout(() => {
        this.memoryCards = [];
        // eslint-disable-next-line no-undef
        this.memoryCards = _.shuffle(
          this.memoryCards.concat(
            // eslint-disable-next-line no-undef
            _.cloneDeep(this.cards),
            // eslint-disable-next-line no-undef
            _.cloneDeep(this.data)
          )
        );
        this.start = false;
        this.finish = false;
        this.flippedCards = [];
      }, 600);
    },
  },
};
</script>
<style scoped>
ion-content {
  --ion-background-color: rgba(1, 36, 53, 1);
}
.score {
  color: #FF8A00;
  font-size: 1.3rem;
  margin-left: 203px;
  margin-top: -40px;
}

h1 {
  color: aliceblue;
  font-size: 1.3rem;
  text-align: center;
  margin-top: -37px;
}

.icon {
  color: aliceblue;
  font-size: 2em;
  margin-top: 20px;
}

.time_score {
  display: grid;
}

.time {
  color: #FF8A00;
  font-size: 1.3rem;
  margin-left: 16px;
  margin-top: 15px;
}

.btn_reset {
  width: 50px;
  height: 30px;
  margin-left: 120px;
  margin-top: -35px;
  --background: #FF8A00;
}

.img_clock {
  width: 45px;
  height: 45px;
}

.img_score {
  width: 45px;
  height: 45px;
  margin-top: -5px;
}

.popup {
  width: 240px;
  height: 240px;
  background-color: aliceblue;
  margin-left: 20px;
  margin-top: -400px;
  margin-bottom: 10px;
  border-radius: 5px;
  position: fixed;
}

.time_popup {
  color: #FF8A00;
  font-size: 3rem;
}

.img_clock_popup {
  width: 60px;
  height: 60px;
  margin-left: 50px;
}

.score_popup {
  color: #FF8A00;
  font-size: 3rem;
}

.img_score_popup {
  width: 60px;
  height: 60px;
  margin-left: 50px;
}

.btn_play {
  width: 100px;
  height: 50px;
  margin-left: 10px;
  margin-top: 30px;
  --background: #FF8A00;
  font-size: 1.5rem;
}

.btn_back {
  width: 100px;
  height: 50px;
  margin-left: 15px;
  margin-top: 30px;
  --background: #FF8A00;
  font-size: 1.5rem;
}
.cards {
  display: grid;
  grid-template-columns: 85px 85px 85px;
  grid-template-rows: 68px 68px 68px 68px 68px 68px;
  grid-gap: 6px;
  justify-content: center;
  margin-top: 20px;
}


.front{
  width: 60px;
  height: 60px;
  border-radius: 5px;
  background-color: #FF8A00;
}

.img-black {
  border-radius: 5px;
  background-color: aliceblue;
  width: 105px;
  height: 65px;
  padding: 2px;
}


.matched {
  opacity: 0.3;
}
.flip-container {
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -o-perspective: 1000;
  perspective: 1000;
  min-height: 120px;
  cursor: pointer;
}
.front,
.back {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transition: 0.6s;
  -webkit-transform-style: preserve-3d;
  -moz-transition: 0.6s;
  -moz-transform-style: preserve-3d;
  -o-transition: 0.6s;
  -o-transform-style: preserve-3d;
  -ms-transition: 0.6s;
  -ms-transform-style: preserve-3d;
  transition: 0.6s;
  transform-style: preserve-3d;
  top: 0;
  left: 0;
  width: 100%;
}
.back {
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
  -o-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  position: absolute;
}

.flip-container.flipped .back {
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  transform: rotateY(0deg);
}
.flip-container.flipped .front {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
</style>