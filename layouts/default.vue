<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
html {
  box-sizing: border-box;
  font-size: 16px;
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  padding: 10px 30px;
  border: 1px solid #3b8070;
  border-radius: 4px;
  color: #3b8070;
  text-decoration: none;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  margin-left: 15px;
  padding: 10px 30px;
  border: 1px solid #35495e;
  border-radius: 4px;
  color: #35495e;
  text-decoration: none;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
