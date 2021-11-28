<template>
  <div class="page1">
    <p>STEP1</p>
    <p>お客様の情報を入力してください</p>
    <p>性別</p>
    <input type="radio" name="sex" value="男性" v-model="sex">男性
    <input type="radio" name="sex" value="女性" v-model="sex">女性
    <p>生年月日</p>
    <form>
      <select v-model="year" @change="getDays">
        <option v-for="n in 100" v-bind:value="n + 1921" v-bind:key="n">{{(n + 1921) | era}}</option>
      </select>年
      <select v-model="month" @change="getDays">
        <option v-for="n in 12" v-bind:key="n">{{n}}</option>
      </select>月
      <select v-model="day" @change="getDays">
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
      dateYear: '',
      dateMonth: '',
      dateDay: '',
      daysMax: '',
    }
  },
  created() {
    this.getDays()
  },
  computed: {
    sex: {
      get() {
        return this.$store.getters.sex
      },
      set(value) {
        this.$store.dispatch("getSex", value)
      }
    },
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
      this.dateYear = this.year
      this.dateMonth = this.month
      this.dateDay = this.day
      this.daysMax = new Date(this.dateYear, this.dateMonth, 0).getDate()
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
