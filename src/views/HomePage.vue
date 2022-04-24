<template>
  <div class="content">
    <div class="Menu" id="Menu">
      <div class="brand">
        <img src="../assets/castle.png" />
      </div>

      <div class="leftMain" id="box2">
        <div class="titlebox" id="Castlebox" onclick="">
          <div class="titletext" id="Castletitle">Castle</div>

          <el-select v-model="value1" clearable placeholder="-Select a Castle-">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>

        <div class="titlebox" id="visitorbox" onclick="">
          <div class="titletext" id="visitortitle">Guest</div>

          <el-select v-model="value2" clearable placeholder="-Guest Number-">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>

        <!-- Time  -->
        <div class="titlebox" id="timebox" onclick="">
          <div class="titletext" id="timetitle">Time</div>
          <div class="textStyle">
            <el-date-picker
              v-model="time"
              type="datetime"
              placeholder="Pick Date"
              align="center"
            >
            </el-date-picker>
          </div>
        </div>
        <!-- Search -->
        <div class="titlebox2" id="submit">
          <button type="button" class="Sbotton" id="search" value="" onclick="">
            <img src="../assets/search.png" />
          </button>
        </div>
      </div>

      <div class="rightMain" id="box1">
        <el-carousel
          :autoplay="true"
          interval="3000"
          height="100%"
          style="width: 850px"
        >
          <el-carousel-item v-for="item in imgs" :key="item.link">
            <a :href="item.link" target="_blank">
              <img class="castle" :src="item.src" :alt="item.alt" />
              <div class="mask">
                <div class="text">{{ item.alt }}</div>
              </div>
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="UserHelp" id="usebox">
        <router-link to="../MyAccount">
          <div class="box2" id="middle">
            <img src="../assets/me.png" />
          </div>
        </router-link>
        <div class="box2" id="middle" href="">Find A Castle</div>
        <router-link class="box2" id="middle" to="../MyTickets"
          >My Booking</router-link
        >
        <div class="box2" href="">Help</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomePage",
  data() {
    return {
      options1: [
        {
          value: "option1",
          label: "Alnwick Castle",
        },
        {
          value: "option2",
          label: "Auckland Castle",
        },
        {
          value: "option3",
          label: "Bamburgh Castle",
        },
        {
          value: "option4",
          label: "Barnard Castle",
        },
      ],
      options2: [
        {
          value: "option1",
          label: "1",
        },
        {
          value: "option2",
          label: "2",
        },
        {
          value: "option3",
          label: "3",
        },
      ],
      value1: "",
      value2: "",
      time: "",
      imgs: [
        {
          src: require("@/assets/AlnwickCastle1.png"),
          link: "https://www.alnwickcastle.com/",
          alt: "Alnwick Castle",
        },
        {
          src: require("@/assets/AucklandCastle2.png"),
          link: "https://aucklandproject.org/",
          alt: "Auckland Castle",
        },
        {
          src: require("@/assets/BamburghCastle.png"),
          link: "https://www.bamburghcastle.com/",
          alt: "Bamburgh Castle",
        },
        {
          src: require("@/assets/BarnardCastle.png"),
          link: "https://www.english-heritage.org.uk/visit/places/barnard-castle/",
          alt: "Barnard Castle",
        },
      ],
    };
  },
  methods: {
    clickBtn() {
      console.log(this.$router);
    },
  },
};
</script>

<style>
@import "../style/homepage.css";

.el-input__inner {
  border-radius: 30px !important;
}

.el-carousel__container {
  height: 800px;
}
</style>
