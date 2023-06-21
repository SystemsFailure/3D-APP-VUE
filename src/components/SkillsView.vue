<template lang="html">
<div class="main-div-Resume-comp">
    <img class="img_close" @click="store.commit('cv_visible_skills_window', false)" width="30" height="30" src="https://img.icons8.com/material/48/ffffff/delete-sign--v1.png" alt="delete-sign--v1"/>

    <div class="content-resume-comp">

      <div class="inner">

        <div class="onesection">

          <div class="title-section">
            <span>SOFTWARE SKILLS</span>
          </div>

          <div class="lst-software-skills">

            <div class="it" v-for="it in list_software_skills" :key="it.id">
              <img class="img_icons" :src="require('@/assets/uidesign' + it.icon)">
              <span class="title">{{ it.tit }}</span>
              <div class="progress-it">
                <div class="progress" :style="{'width' : it.count + '%'}"></div>
              </div>
            </div>

          </div>

          <div class="title-section sec2">
            <span>languages</span>
          </div>

          <div class="lst-software-skills">

            <div class="it" style="margin-right: auto;">
              <span class="title">Russian</span>
              <div class="progress-it">
                <div class="progress" :style="{'width' : '100%'}"></div>
              </div>
            </div>

            <div class="it">
              <span class="title">English</span>
              <div class="progress-it">
                <div class="progress" :style="{'width' : '63%'}"></div>
              </div>
            </div>

          </div>

        </div>

        <div class="twosection">

          <div class="wrapper-inner-content">

            <div class="titile-what-cn-i-do" v-for="it in list_do" :key="it.id">
              <span>{{ it.title }}</span>
              <h6>
                {{ it.content }}
              </h6>
            </div>

          </div>

        </div>


      </div>

    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();


const list_software_skills = ref(
    [
        {id: 0, icon: '/icons8-graphql-an-open-source-data-query-and-manipulation-language-for-api-96.png', tit: 'GraphQL', count: 70},
        {id: 1, icon: '/icons8-c-plus-plus-100.png', tit: 'C ++', count: 89},
        {id: 2, icon: '/icons8-nodejs-96.png', tit: 'Nodejs', count: 72},
        {id: 3, icon: '/icons8-typescript-96.png', tit: 'Type Script', count: 43},
        {id: 4, icon: '/icons8-python-90.png', tit: 'Python', count: 93},
        {id: 5, icon: '/icons8-firebase-96.png', tit: 'Firebase', count: 94},
        {id: 5, icon: '/icons8-postgresql-100.png', tit: 'Postgresql', count: 81},
        {id: 5, icon: '/icons8-sql-100.png', tit: 'SQL', count: 69},
        {id: 5, icon: '/icons8-tensorflow-96.png', tit: 'Tensorflow', count: 32},
    ]
)

const list_do = ref(
    [
        {id: 0, title: 'What can i do', content: 'Web Development & Design || ML & DML & AI || Robotics'},
        {id: 1, title: 'Back-end', content: ' In terms of server development I can develop a server from scratch using various popular tools: python - FastApi, Django & DRF, ORM & CORE SqlAlchemy, Sql native, Nodejs - Express, NextJs, sequalize ORM, SocketIO, WebSockets and others'},
        {id: 2, title: 'Fron-end', content: 'Regarding the client side - I can develop a site from scratch. Core Web Framework : Vue(3 version and all related technologies), TypeScript, JS native, main http-client - Axios, also have some experience with GraphQL.'},
        {id: 3, title: 'Others', content: 'Figma design, Statistics & Analytics, 2D/3D data graphs in applicationsMachine Learning/DSP/AI (under study)Raspberry pi, Renegade Elite,orange pi,and others'},
    ]
)
</script>
<style lang="scss" scoped>
$background-color: rgb(0, 0, 0);
$text-handler-color: #00ccff;

.main-div-Resume-comp{
    position: absolute;
    height: 90%;
    width: 80%;

    border-radius: 0.5em;
    background-color: rgba($color: $background-color, $alpha: .3);
    backdrop-filter: blur(5px);
    z-index: 3;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);

    
    .img_close {
        position: absolute;
        right: 0;
        transform: translateX(40px);
        &:hover {
            cursor: pointer;
            opacity: .5;
            transition: .3s;
        }
    }

    .img_icons {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
}

.content-resume-comp
{
    width: 100%;
    height: 100%;
  .inner {
    
    display: flex;
    backdrop-filter: blur(7px);

    .twosection {
      .wrapper-inner-content {
        width: 100%;
        height: 100%;
        position: relative;
        .titile-what-cn-i-do {
          color: #fff;
          margin-top: 40px;
          margin-left: 50px;
          span {
            text-align: start;

            width: 350px;
            word-wrap: break-word;
            color: #fff;
            font-size: 20px;
            font-weight: bold;
            text-transform: uppercase;
            font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            border-bottom: 1px solid #00ccff;
          }

          h6 {
            width: 350px;
            font-size: 16px;
            margin-top: 5px;
            text-align: start;
            height: auto;
            word-wrap: break-word;
            font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-weight: 500;

          }
        }

      }

      // background-color: rgba($color: #000, $alpha: .7);      
    }

    .onesection {
        width: 60%;
        height: 100%;
        background-color: rgba($color: #000000, $alpha: .8);
        padding: 20px;

      .lst-software-skills {
        overflow: auto;
        width: 100%;
        height: 100%;

        .it {
          width: 100%;
          height: 100%;
          padding: 10px;
          display: flex;
          align-items: center;
          padding-left: 30px;
          margin-top: 10px;

          img {
            width: 30px;
            height: 30px;
          }

          .title {
            margin-left: 40px;
            color: #fff;
          }

          .progress-it {
            margin-left: auto;
            margin-right: 70px;
            width: 60%;
            background-color: #666;
            height: 2px;
            .progress {
              // width: 34%;
              height: 100%;
              background-color: #00ccff;
              height: 1px;
            }
          }
        }
      }

      .sec2 {
        margin-top: 10px;
      }

      .title-section {
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px;
        span {
          color: #fff;
          font-size: 20px;
          font-weight: bold;
          text-transform: uppercase;
          font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          border-bottom: 1px solid #00ccff;
        }
      }
    }
  }
}
</style>