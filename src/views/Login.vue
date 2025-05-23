<script setup lang="ts">
import { ref } from 'vue'


const title = ref('登录')


const ws = new WebSocket("ws://localhost:8001/websockets");


ws.onopen = function () {
  // Web Socket 已连接上，使用 send() 方法发送数据
  ws.send("发送数据");
  console.log("数据发送中...");
};

ws.onmessage = function (evt) {
  let received_msg = evt.data;
  console.log(`数据已接收${received_msg}`);
};

ws.onclose = function () {
  // 关闭 websocket
  console.log("连接已关闭...");
};
</script>

<template>
  <h1 class=" flex">
    <span>{{ title }}</span>
    <span>{{ title }}</span>
  </h1>
</template>

<style scoped></style>
