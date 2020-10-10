<template>
  <div class="mb-wrap mb-style-1">
    <div class="mb-thumb"></div>

    <blockquote>
      <p v-html="text"></p>
    </blockquote>
  </div>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        required: true
      }
    },
    watch: {
      text (newValue, oldValue) {
        if (newValue === '') {
          return
        }

        document.querySelector('.game-main-container').scrollTo(0,0)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* Let's set and reset some common styles */
  .mb-wrap {
    width: 300px;
    margin: 20px auto;
    padding: 20px;
    position: relative;
  }

  .mb-wrap p {
    margin: 0;
    padding: 0;
  }

  .mb-wrap blockquote {
    margin: 0;
    padding: 0;
    position: relative;
  }

  .mb-style-1 {
    background: #363738 url('../../assets/dark_leather.jpg') repeat top left;
    margin-top: 70px;
    padding-top: 100px;
    width: 100%;
    color: #fff;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    border-top: 10px solid #fff;
  }

  .mb-style-1 .mb-thumb {
    display: block;
    width: 180px;
    height: 180px;
    /*border: 10px solid rgba(255, 255, 255, 0.5);*/
    border-radius: 50%;
    background: url('../../assets/bible.png') no-repeat center center;
    background-size: 150px 155px;
    position: absolute;
    left: 50%;
    top: -90px;
    margin: 0 0 0 -90px;
    /*box-shadow: inset 1px 1px 4px rgba(0, 0, 0, 0.5), 0 2px 3px rgba(0, 0, 0, 0.6);*/
  }

  .mb-style-1 blockquote:before,
  .mb-style-1 blockquote:after {
    position: absolute;
    font-size: 70px;
    top: -95px;
    color: #242526;
    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.1);
  }

  .mb-style-1 blockquote:before {
    content: '\275d';
  }

  .mb-style-1 blockquote:after {
    right: 0;
    content: '\275d';
  }

  .mb-style-1 blockquote p {
    font-family: Cambria, Georgia, serif;
    font-style: italic;
    font-size: 1.2em;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1);
    padding: 10px 10px 10px 10px;
    text-align: left;
    margin: 0 0 20px 0;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  }
</style>
