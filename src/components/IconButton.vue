
<script setup lang="ts">
import Icons, {
    IconFolderShared,
    IconGridViewMenu,
    IconMenu,
    IconChatBubble,
    IconLupSearch,
    IconPasteContentSearch,
    IconPasteSearch,
    IconStatistic,
    IconTextSms,
    IconTooling,
    IconWallet,
    IconBell,
    IconChat,
    IconAdd
} from '@/components/icons';

const componentIcons: { [key: string]: any } = {
    IconFolderShared: IconFolderShared,
    IconGridViewMenu: IconGridViewMenu,
    IconMenu: IconMenu,
    IconChatBubble: IconChatBubble,
    IconLupSearch: IconLupSearch,
    IconPasteContentSearch: IconPasteContentSearch,
    IconPasteSearch: IconPasteSearch,
    IconStatistic: IconStatistic,
    IconTextSms: IconTextSms,
    IconTooling: IconTooling,
    IconWallet: IconWallet,
    IconBell: IconBell,
    IconChat: IconChat,
    IconAdd: IconAdd
}

defineProps({
    icon: {
        type: String,
        default: Icons.Menu,
    },
    customClass: {
        type: String,
        require: false
    },
});

</script>
<template>
    <button @click="$emit('pressed')">
        <div class>
            <component :is="componentIcons[icon]" :customClass="customClass"></component>
        </div>
    </button>
</template>