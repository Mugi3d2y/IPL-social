export default {
  spec_dir: "spec",
  spec_files: [
    "**/*[tT]est.js",
  ],
  helpers: [
    "helpers/**/*.?(m)js"
  ],
  env: {
    stopSpecOnExpectationFailure: false,
    random: true,
    forbidDuplicateNames: true
  }
}