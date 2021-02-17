<template>

    <b-container fluid  >
        <b-row class="justify-content-center">
            <b-col cols="12" class="p-md-0" >
                <Header/>
            </b-col>
            <b-col col  sm="11" lg="10" >
                <Welcome/>
            </b-col>
            <b-col cols="12" class="p-md-0">
                <Footer />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'
import Welcome from  './components/views/Welcome'

export default {
    components: {
    Header,
    Footer,
    Welcome
    }
}
</script>

<style>

</style>
