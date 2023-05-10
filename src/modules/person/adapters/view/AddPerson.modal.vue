<template>
    <div>
        <b-modal id="modal-1" centered hide-footer hide-header title="BootstrapVue">
            <div>
                <h3>Agregar persona</h3>
                <form class="my-4" action="">
                    <div class="form-group">
                        <label for="">Nombre: <span class="text-danger">*</span></label>
                        <input v-model="person.name" placeholder="Nombre" type="text" class="form-control">
                    </div>
                    <label for="">Apellidos: <span class="text-danger">*</span></label>
                    <div class="row">
                        <div class="col-6">
                            <input v-model="person.surname" placeholder="Paterno" type="text" class="form-control">
                        </div>
                        <div class="col-6">
                            <input v-model="person.lastname" placeholder="Materno" type="text" class="form-control">
                        </div>
                    </div>
                </form>
            </div>
            <div class="text-right">
                <button class="btn btn-secondary mr-2" @click="$bvModal.hide('modal-1')">Cerrar</button>
                <button class="btn btn-primary" @click="saveUser()">Guardar</button>
            </div>
        </b-modal>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PersonController } from '../people.controller';
import { SavePersonDto } from '../dto/save-person';
export default Vue.extend({
    name: 'AddPersonModal',
    data() {
        return {
            person: {} as SavePersonDto
        }
    },
    methods: {
        async saveUser() {
            const controller = new PersonController();
            const response = await controller.save(this.person); 
            
            this.$bvModal.hide("modal-1");
            this.$emit("findAll");
        }
    }
})
</script>