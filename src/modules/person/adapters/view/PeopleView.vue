<template>
    <div>
        <Topnav />
        <div class="mx-5 mt-5">
            <div class="d-flex align-items-center">
                <h1>Gestión de personal</h1>
                <button v-b-modal.modal-1 class="btn btn-success ml-auto">Añadir</button>
            </div>
            <hr>
            <b-table striped hover :items="people" :fields="fields" >
                <template #cell(actions)="data">
                    <button class="btn btn-primary" @click="findPerson(data.item.id)" v-b-modal.modal-2>info</button>
                </template>
            </b-table>
        </div>
        <AddModal @findAll="findAll"/>
        <UpdateModal :personSelected="person" @findAll="findAll"/>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Topnav from '../../../../components/Top-Nav.vue';
import AddModal from './AddPerson.modal.vue';
import UpdateModal from './UpdatePerson.modal.vue';
import { PersonController } from '../people.controller';
import { Person } from '../../entities/person';

export default Vue.extend({
    name: 'PeopleView',
    components: {
        Topnav, AddModal, UpdateModal
    },
    data() {
        return {
            fields: [
                {key: 'name', label: 'Nombre', sortable: true,},
                {key: 'actions', label: 'Acciones'}
            ],
            people: [] as Person[],
            person: {} as Person
        }
    },
    methods: {
        async findAll() {
            const controller = new PersonController();
            const response = await controller.findAllPeople();
            this.people = response.entities!;
        },
        async findPerson(payload: number) {
            const controller = new PersonController();
            const response = await controller.findPerson(payload);
            this.person = response.entity!;
        }
    },
    mounted () {
        this.findAll();
    } 
});
</script>