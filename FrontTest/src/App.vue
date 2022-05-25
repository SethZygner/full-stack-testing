<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {reactive, ref} from "vue";
import http from "../http-common";

let people = reactive([]);
let name = ref();
let ID = ref();

function seePeople(){
  http.get('/').then((response)=>{
    people.length = 0;
    for(let i = 0; i < response.data.length; i++){
      people[i] = response.data[i];
    }
  })
}

function clearConsole(){
  console.clear();
}

function addPeople(){
  http.post('/add', {
    PersonID: parseInt(ID.value),
    Name: name.value
  }).then((result)=>{
    console.log(result.data);
  })

  name.value = "";
  ID.value = "";
  seePeople();
}

seePeople();


</script>







<template>

  <div>
    <button @click="seePeople">Click to make things happen</button>

    <button @click="clearConsole">Clear Console</button>
  </div>

  <div class="hold" >
    <div v-for="item in people">
      <p>{{item}}</p>
    </div>
  </div>

  <div class="input">
    <input v-model="name" type="text" placeholder="Name">
    <input v-model="ID" type="text" placeholder="ID">
    <br>
    <button @click="addPeople">ADD</button>
  </div>

</template>






<style>


button{
  width: 10em;
  height: 5em;
  background-color: #2c3e50;
  border: none;
}

.hold{
  border: 2px black solid;
  width: 10em;
  height: 10em;
  overflow: hidden;
  overflow-y: scroll;
}

.input{
  text-align: center;
}


</style>
