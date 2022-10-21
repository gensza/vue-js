<template>
    <div class="page-header">
        <h3 class="page-title"> Basic Tables </h3>
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
            <h4 class="card-title">Basic Table</h4>
            <router-link :to="{name: 'AddProduct'}" class="btn btn-info">Add</router-link>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in products" :key="product.id">
                            <td>{{ product.title }}</td>
                            <td>{{ product.price }}</td>
                            <td>
                                <button class="btn btn-danger" @click="deleteProduct(product.id)">delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Product",
    data(){
        return {
            products: []
        }
    },
    created(){
        this.getProducts();
    },
    methods:{
        async getProducts(){
            try {
                const response = await axios.get('product');
                this.products = response.data.data;
            } catch (error) {
                console.log(error);
            }
        },
        async deleteProduct(id){
            try {
                await axios.delete(`product?id=${id}`);
                this.getProducts();
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style>

</style>