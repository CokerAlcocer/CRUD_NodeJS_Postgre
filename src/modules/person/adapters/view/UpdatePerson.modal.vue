<template>
    <div>
        <b-modal id="modal-2" centered hide-footer hide-header title="BootstrapVue">
            <div>
                <h3>Modificar persona</h3>
                {{personSelected}}
                <form class="my-4" action="">
                    <div class="form-group">
                        <label for="">Nombre: <span class="text-danger">*</span></label>
                        <input v-model="personSelected.name"  placeholder="Nombre" type="text" class="form-control">
                    </div>
                    <label for="">Apellidos: <span class="text-danger">*</span></label>
                    <div class="row">
                        <div class="col-6">
                            <input v-model="personSelected.surname"  placeholder="Paterno" type="text" class="form-control">
                        </div>
                        <div class="col-6">
                            <input v-model="personSelected.lastname"  placeholder="Materno" type="text" class="form-control">
                        </div>
                    </div>
                </form>
            </div>
            <div class="text-right">
                <button class="btn btn-secondary mr-2" @click="$bvModal.hide('modal-2')">Cerrar</button>
                <button class="btn btn-primary" @click="updatePerson()">Modificar</button>
            </div>
        </b-modal>
    </div>
</template>

<script lang="ts">
 /* eslint-disable no-console */
import Vue from 'vue';
import { PersonController } from '../people.controller';

export default Vue.extend({
    name: 'UpdatePersonModal',
    props: {
        personSelected: {
            type: Object,
            required: true
        }
    },
    methods: {
        async updatePerson() {
            const controller = new PersonController();
            const response = await controller.update(this.personSelected);
            
            this.$bvModal.hide("modal-2");
            this.$emit("findAll");

        }
    }
})
</script>