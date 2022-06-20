
export default {
  data() {
    return {
      add1: '',
      add2: '',
      add3: '',
      add4: '',
      sub1: '',
      sub2: '',
      sub3: '',
      sub4: '',
      mul1: '',
      mul2: '',
      mul3: '',
      mul4: '',
      div1: '',
      div2: '',
      div3: '',
      div4: '',
      mod1: '',
      mod2: '',
      mod3: '',
      mod4: '',
      str1: '',
      str2: '',
      str3: '',
      str4: '',
    }
  },
  computed: {
    addCp() {
      return this.add1 + this.add2
    },
    subCp() {
      return this.sub1 - this.sub2
    },
    mulCp() {
      return this.mul1 * this.mul2
    },
    divCp() {
      return this.div1 / this.div2
    },
    modCp() {
      return this.mod1 % this.mod2
    },
    conCP() {
      return this.str1 + this.str2
    }
  },
  methods: {
    calc: (calcType, item1, item2) => {
      switch (calcType) {
        case 'add':
          return item1 + item2
        case 'sub':
          return item1 - item2
        case 'mul':
          return item1 * item2
        case 'div':
          return item1 / item2
        case 'mod':
          return item1 % item2;
        case 'con':
          return item1 + item2
        default:
          return null
      }
    },
  },
}