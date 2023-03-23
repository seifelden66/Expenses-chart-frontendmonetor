<template lang="pug">
.index 
  .top
    .left
      p My balance
      h4 $921.48
    .right 
      .circle1 
      .circle2
  .bottom 
    .first
      h4 Spending - Last 7 days
    .sec
      BarChart/
    .third
      p Total this month
      .footer
        .le
          h1 $478.33
        .rig
          h6 +2.4%
          p from last month

    

</template>

<script setup lang="ts"></script>

<style lang="scss">
.index {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .top {
    display: flex;
    justify-content: space-between;
    background: hsl(10, 79%, 65%);
    width: 50vh;
    padding: 1em;
    border-radius: 10px;
    color: hsl(27, 66%, 92%);
    .left {
      display: flex;
      flex-direction: column;
      gap: 10px;
      p {
        margin: 0;
      }
      h4 {
        margin: 0;
      }
    }
    .right {
      display: flex;
      align-items: center;
      .circle1 {
        border: white solid 1px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: -5px;
        z-index: 999;
      }
      .circle2 {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: hsl(25, 47%, 15%);
        margin-left: -5px;
      }
    }
  }
  .bottom {
    background: hsl(33, 100%, 98%);
    margin-top: 1em;
    border-radius: 10px;
    padding: 1em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    p {
      margin: 0;
      font-weight: 400;
      color: rgb(102, 102, 102);
    }
    .third {
      .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h1 {
          margin-top: 5px;
          font-weight: 700;
          color: hsl(25, 47%, 15%);
        }
        .rig {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: right;
          p {
            margin: 0;
          }
          h6 {
            font-size: 16px;
            font-weight: 600;
            margin: 0;
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .index {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 50px;
    transform: translate(0, 0);
    width: 320px;
    margin: 0 auto;
    .top {
      width: 100%;
    }
    .bottom {
      width: 100%;
    }
  }
}
</style>
