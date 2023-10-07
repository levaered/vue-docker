<script setup>
import { ref, onMounted } from 'vue'; // Импорт необходимых функций из Composition API
import axios from 'axios'; // Импортируем библиотеку Axios

const msg = ref('');

onMounted(() => {
  // Выполняем HTTP-запрос после монтирования компонента
  axios.get('http://localhost:3001/api/data')
    .then(response => {
      msg.value = response.data; // Обновляем реактивную переменную msg с полученными данными
    })
    .catch(error => {
      console.error(error);
    });
});
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
