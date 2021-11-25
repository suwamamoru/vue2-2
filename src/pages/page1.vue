<template>
  <div class="page1">
    <p>STEP1</p>
    <p>お客様の情報を入力してください</p>
    <p>性別</p>
    <input type="radio" name="sex" value="man" v-model="pickedSex" @change="sexChange">男性
    <input type="radio" name="sex" value="woman" v-model="pickedSex" @change="sexChange">女性
    <p>生年月日</p>
    <form>
      <select v-model="dateYear" @change="getDays">
        <option v-for="n in 100" v-bind:value="n + 1921" v-bind:key="n">{{(n + 1921) | era}}</option>
      </select>年
      <select v-model="dateMonth" @change="getDays">
        <option v-for="n in 12" v-bind:key="n">{{n}}</option>
      </select>月
      <select v-model="dateDay" @change="getDays">
        <option v-for="n in daysMax" v-bind:key="n">{{n}}</option>
      </select>日
    </form>
    <router-link to="/page2">次へ進む</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateYear: 2000,
      dateMonth: 1,
      dateDay: 1,
      daysMax: '',
      pickedSex: []
    }
  },
  created() {
    this.getDays()
    this.sexChange()
  },
  computed: {
    year: {
      get() {
        return this.$store.getters.year
      },
      set(value) {
        this.$store.dispatch("getYear", value)
      }
    },
    month: {
      get() {
        return this.$store.getters.month
      },
      set(value) {
        this.$store.dispatch("getMonth", value)
      }
    },
    day: {
      get() {
        return this.$store.getters.day
      },
      set(value) {
        this.$store.dispatch("getDay", value)
      }
    }
  },
  methods: {
    getDays: function() {
      this.year = this.dateYear;
      this.month = this.dateMonth;
      this.day = this.dateDay;
      this.daysMax = new Date(this.dateYear, this.dateMonth, 0).getDate();
    },
    sexChange: function() {
      if (this.pickedSex === 'man') {
        this.$store.dispatch("sexChangeManAction")
      } else if (this.pickedSex === 'woman') {
        this.$store.dispatch("sexChangeWomanAction")
      }
    }
  },
  filters: {
    era(y) {
      let result;
      if (y > 2018) {
        result = `${y} (令和${y-2018})`;
      } else if (y > 1988) {
        result = `${y} (平成${y-1988})`;
      } else if (y > 1925) {
        result = `${y} (昭和${y-1925})`;
      } else if (y > 1911) {
        result = `${y} (大正${y-1911})`;
      }
      return result;
    }
  }
};
</script>
