<script setup lang="ts">
import Icons from '@/components/icons';
import IconButton from '@/components/IconButton.vue';


</script>
<template>
    <aside class="h-full">
        <div class="h-[3.6rem] flex justify-center ">
            <IconButton :icon="Icons.Menu"></IconButton>
        </div>
        <!-- <IconMenu /> -->
        
        <menu class="w-full h-full flex flex-col justify-center items-center space-y-5 relative -top-10">   
            <IconButton @click="$emit('pressed')" :icon="Icons.GridViewMenu"></IconButton>
            <IconButton @click="$emit('pressed')" :icon="Icons.Statistic"></IconButton>
            <IconButton @click="$emit('pressed')" :icon="Icons.FolderShared"></IconButton>
            <IconButton @click="$emit('pressed')" :icon="Icons.PasteContentSearch"></IconButton>
            <IconButton @click="$emit('pressed')" :icon="Icons.TextSms"></IconButton>
            <IconButton @click="$emit('pressed')" :icon="Icons.Wallet"></IconButton>
        </menu>
    </aside>
</template>