<template>
    <div class="page-header">
        <h3 class="page-title"> Add Form</h3>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Tables</a></li>
                <li class="breadcrumb-item active" aria-current="page">Basic tables</li>
            </ol>
        </nav>
    </div>
    <div class="row">
        <div class="col-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Add Form</h4>
                    <form action="" @submit.prevent="saveProduct">
                        <div class="field">
                            <label for="" class="label">Title</label>
                            <div class="control">
                                <input type="text" v-model="title" class="form-control" placeholder="Title">
                            </div>
                        </div>
                        <div class="fielld">
                            <label for="" class="label">Price</label>
                            <div class="control">
                                <input type="text" v-model="price" class="form-control" placeholder="Price">
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <button class="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "AddForm",
    data(){
        return {
            title:'',
            price:''
        }
    },
    methods: {
        async saveProduct(){
            let formData = new FormData();
            formData.append('title', this.title);
            formData.append('price', this.price);
            
            try {
                await axios.post('product', formData);
                this.title = ""
                this.price = ""
                this.$router.push("/")

            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style>

</style>