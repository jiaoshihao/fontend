<template>
  <div id="Content">
    <div id="Brand">
      <router-link to="/">
        <img id="BrandImg" src="../assets/castle.png" />
      </router-link>
    </div>
    <div class="ticket-list">
      <h2>My Booking</h2>
      <div class="ticket-item-container">
        <div v-for="it in tickets" :key="random(it)" class="ticket-item">
          <div class="ticket-head">
            <p>from {{ it.departure.location }} to {{ it.arrive.location }}</p>
            <p>{{ it.price }}</p>
          </div>
          <div class="ticket-member">
            <span
              v-for="memberItem in it.passengers"
              :key="random(memberItem)"
              class="el-icon-s-custom"
            >
              {{ memberItem.sum }} {{ memberItem.type }}
            </span>
          </div>
          <el-collapse>
            <el-collapse-item name="1">
              <template slot="title">
                <div class="cus-collapse-head">
                  <span>
                    <i class="el-icon-right"></i>
                    {{ it.departure.date }}
                    <b>{{ it.departure.dayOfWeek }}</b>
                  </span>
                  <b
                    >{{ it.departure.time }} <i class="el-icon-right"></i>
                    {{ it.arrive.time }}</b
                  >
                  <span>{{ it.duration }}, 0 changes</span>
                </div>
              </template>
              <div class="ticket-context">
                <div class="ticket-steps">
                  <el-steps direction="vertical" :active="1">
                    <el-step
                      :title="it.departure.location + ' ' + it.departure.time"
                    >
                      <template v-slot:icon>
                        <span>&nbsp;</span>
                      </template>
                      <template v-slot:description>
                        <ul>
                          <li>{{ it.company }}</li>
                          <li>{{ it.duration }}</li>
                          <li>{{ it.seat }}</li>
                        </ul>
                      </template>
                    </el-step>
                    <el-step :title="it.arrive.location + ' ' + it.arrive.time">
                      <template v-slot:icon>
                        <span>&nbsp;</span>
                      </template>
                    </el-step>
                  </el-steps>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTickets",
  data() {
    return {
      tickets: [
        {
          departure: {
            location: "Edinburg(Waverley)",
            date: "Apr 7",
            dayOfWeek: "Thu",
            time: "19:58",
          },
          arrive: {
            location: "Newcastle",
            date: "April 7",
            dayOfWeek: "Thursday",
            time: "21:30",
          },
          duration: "1 hour 32 minutes",
          seat: "coach B, seat 49, window",
          price: "1.90 GBP",
          company: "Lumo",
          passengers: [
            {
              sum: "1",
              type: "adult",
            },
          ],
        },
        {
          departure: {
            location: "Edinburg(Waverley)",
            date: "Apr 7",
            dayOfWeek: "Thu",
            time: "19:58",
          },
          arrive: {
            location: "Newcastle",
            date: "April 7",
            dayOfWeek: "Thursday",
            time: "21:30",
          },
          duration: "1 hour 32 minutes",
          seat: "coach B, seat 49, window",
          price: "1.90 GBP",
          company: "Lumo",
          passengers: [
            {
              sum: "1",
              type: "adult",
            },
          ],
        },
        {
          departure: {
            location: "Edinburg(Waverley)",
            date: "Apr 7",
            dayOfWeek: "Thu",
            time: "19:58",
          },
          arrive: {
            location: "Newcastle",
            date: "April 7",
            dayOfWeek: "Thursday",
            time: "21:30",
          },
          duration: "1 hour 32 minutes",
          seat: "coach B, seat 49, window",
          price: "1.90 GBP",
          company: "Lumo",
          passengers: [
            {
              sum: "1",
              type: "adult",
            },
          ],
        },
        {
          departure: {
            location: "Edinburg(Waverley)",
            date: "Apr 7",
            dayOfWeek: "Thu",
            time: "19:58",
          },
          arrive: {
            location: "Newcastle",
            date: "April 7",
            dayOfWeek: "Thursday",
            time: "21:30",
          },
          duration: "1 hour 32 minutes",
          seat: "coach B, seat 49, window",
          price: "1.90 GBP",
          company: "Lumo",
          passengers: [
            {
              sum: "1",
              type: "adult",
            },
          ],
        },
        {
          departure: {
            location: "Edinburg(Waverley)",
            date: "Apr 7",
            dayOfWeek: "Thu",
            time: "19:58",
          },
          arrive: {
            location: "Newcastle",
            date: "April 7",
            dayOfWeek: "Thursday",
            time: "21:30",
          },
          duration: "1 hour 32 minutes",
          seat: "coach B, seat 49, window",
          price: "1.90 GBP",
          company: "Lumo",
          passengers: [
            {
              sum: "1",
              type: "adult",
            },
          ],
        },
        {
          departure: {
            location: "Edinburg(Waverley)",
            date: "Apr 7",
            dayOfWeek: "Thu",
            time: "19:58",
          },
          arrive: {
            location: "Newcastle",
            date: "April 7",
            dayOfWeek: "Thursday",
            time: "21:30",
          },
          duration: "1 hour 32 minutes",
          seat: "coach B, seat 49, window",
          price: "1.90 GBP",
          company: "Lumo",
          passengers: [
            {
              sum: "1",
              type: "adult",
            },
          ],
        },
        {
          departure: {
            location: "Edinburg(Waverley)",
            date: "Apr 7",
            dayOfWeek: "Thu",
            time: "19:58",
          },
          arrive: {
            location: "Newcastle",
            date: "April 7",
            dayOfWeek: "Thursday",
            time: "21:30",
          },
          duration: "1 hour 32 minutes",
          seat: "coach B, seat 49, window",
          price: "1.90 GBP",
          company: "Lumo",
          passengers: [
            {
              sum: "1",
              type: "adult",
            },
          ],
        },
      ],
    };
  },
  methods: {
    random() {
      var array = new Uint32Array(1);
      return window.crypto.getRandomValues(array)[0];
    },
  },
};
</script>

<style lang="less">
@import url("../style/MyTickets.less");
</style>
