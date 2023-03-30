<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><img src="https://www.freepnglogos.com/uploads/samsung-logo-text-png-1.png"
                                                  alt="" style="max-height:80px"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <RouterLink class="nav-link active" aria-current="page" to="/">Главная</RouterLink>
                    <RouterLink class="nav-link" to="#">Акции</RouterLink>
                    <RouterLink class="nav-link" to="#">Специалисты</RouterLink>
                    <RouterLink class="nav-link" to="/profile">Личный кабинет</RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>

</style>
