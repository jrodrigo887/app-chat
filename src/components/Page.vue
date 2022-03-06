
<script setup lang="ts">
interface Props {
    hidden: boolean;
}

withDefaults(defineProps<Props>(), {
    hidden: false
})

</script>
<template>
    <div
        class="w-full h-screen"
        :class="hidden ? 'overflow-hidden' : 'overflow-y-auto overflow-x-hidden'"
    >
        <slot />
    </div>
</template>