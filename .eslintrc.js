module.exports = {
  root: false,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/no-use-v-if-with-v-for": "off",
    "vue/multi-word-component-names": "off"
  },
  parserOptions: {
    parser: "@babel/eslint-parser"
  }
};
