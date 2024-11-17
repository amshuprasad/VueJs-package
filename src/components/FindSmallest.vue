<template>
    <div>
        <div class="flex justify-content-center">
            <div class="card pt-6 mt-6 min-w-min w-30rem">
                <div class="shadow-8">
                    <Card class="px-3 py-3">
                        <template #header>
                            <h1 class="text-center">Find the smallest number</h1>
                            <Divider />
                        </template>
                        <template #content>
                            <div class="flex grid p-fluid p-component">
                                <div class="col-12 w-full justify-content-center">
                                    <label for="numbersInput">Enter comma-separated values: </label>
                                    <br>
                                    <br>
                                    <InputText id="numbersInput" v-model="inputValues" placeholder="e.g., 5, 3, 8, 1">
                                    </InputText>
                                </div>
                                <div class="col-12 w-full pb-3 justify-content-center text-center">
                                    <Button label="Submit" icon="pi pi-check" @click="findSmallestValue()"
                                        :disabled="!inputValues.trim()" />
                                </div>
                                <div v-if="smallestValue !== null" class="p-field p-col-12">
                                    <p>Smallest Value: {{ smallestValue }}</p>
                                </div>
                            </div>
                        </template>
                    </Card>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Button, Card, Divider, InputText } from 'primevue';
import { ref } from 'vue';

const inputValues = ref("");
const smallestValue = ref(null);

const findSmallestValue = () => {
    const values = inputValues.value
        .split(",")
        .map(Number)
        .filter((num) => !isNaN(num));

    smallestValue.value = values.length ? Math.min(...values) : "Invalid input";
};
</script>
