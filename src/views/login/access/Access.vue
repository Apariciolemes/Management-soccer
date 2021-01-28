<template>
  <v-container class="custom-container">
    <v-row :align="'center'" class="h-100" :justify="'center'">
      <v-col md="12">
        <form>
          <v-text-field
            v-model="user.login"
            :error-messages="nameErrors"
            :counter="10"
            label="Login"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="user.password"
            :error-messages="emailErrors"
            label="Senha"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>

          <v-btn class="mr-4" @click="submit"> Acessar </v-btn>
          <v-btn @click="clearForm"> Limpar </v-btn>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { loginUser } from "@/views/login/service/service";
export default Vue.extend({
  data() {
    return {
      user: {
        login: "",
        password: ""
      }
    };
  },
  methods: {
    submit(): void {
      loginUser(this.parseUserAcess()).then(() => this.clearForm());
    },
    clearForm() {
      this.user.login = "";
      this.user.password = "";
    },
    parseUserAcess(): object {
      return {
        login: this.user.login,
        password: this.user.password
      };
    }
  }
});
</script>
.<style lang="scss">
.custom-container {
  height: 100%;
  max-width: 500px;
}
@media (max-width: 992px) {
  .custom-container {
    max-width: 300px;
  }
}
</style>
