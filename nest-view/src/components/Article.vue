<template>
  <div>
    <div>記事id:{{$route.params.id}}</div>
    <span v-for="page in 2" :key="page">
      <router-link :to="'/articles/'+$route.params.id+'/pages/'+page">{{page}}ページ目</router-link>
    </span>
    <hr />
    <router-view />
  </div>
</template>