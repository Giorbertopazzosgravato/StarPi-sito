<script setup>

</script>

<template>
    <div class="container">
        <div class="text-content">
            <h1><b>IL NOSTRO OBIETTIVO</b></h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>

        <img src="/home_page/placeholder.png" alt="placeholder" class="objective-img"/>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        align-items: flex-start;
        color: white;
        margin-top: 5vh;
        padding: 0 10vw;
        font-family: Calibri, sans-serif;
    }

    .text-content {
        flex: 1;
    }

    h1 {
        font-size: 4.5rem;
        margin-bottom: 2rem;
    }

    p {
        max-width: 45vw;
        font-size: 20px;
        line-height: 1.6;
        text-align: justify;
    }

    .objective-img {
        width: 350px; 
        height: auto; 
        margin-top: 2vh;
        margin-left: 5vw; 
        border-radius: 8px; 
        object-fit: cover;
    }

    @media (max-width: 1024px) {
        .container {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
        p {
            max-width: 100%;
        }
        .objective-img {
            margin-left: 0;
            margin-top: 4vh;
            width: 80%;
        }
    }
</style>