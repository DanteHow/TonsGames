<template>
    <div
        v-if="show"
        class="fixed insert-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        @click.self="close"
    >
        <div>
            <slot />
            <div>
                <button @click="close" class="bg-blue-500 text-white px-4 py-2 rounded">
                    close
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    show: boolean
}>()

const emit = defineEmits(['close'])

function close() {
    emit('close')
}
</script>