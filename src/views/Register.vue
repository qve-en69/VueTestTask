<template>
  <div class="home">
    <form @submit.prevent="submit">
      <div class="shadow overflow-hidden sm:rounded-md">
        <div class="px-4 py-2 bg-white sm:p-6">
          <div class="grid grid-cols-12 gap-6">
            <div class="col-span-12 sm:col-span-12">
              <p class="text-left font-sans font-semibold mt-2">
                Информация об организаторе
              </p>
            </div>
            <div class="col-span-12 sm:col-span-12">
              <label
                for="first_name"
                class="text-left block text-sm font-medium text-gray-700"
                >Организатор</label
              >
              <input
                v-model.trim="data.params.owner"
                required
                type="text"
                name="first_name"
                id="first_name"
                autocomplete="off"
                placeholder="Coca-Cola"
                class="
                  mt-1
                  focus:ring-purple-500
                  focus:border-purple-200
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  border border-purple-200
                  rounded-sm
                "
              />
            </div>
            <div class="col-span-12 sm:col-span-12">
              <p class="text-left font-sans font-semibold mt-2">
                Контактные данные
              </p>
            </div>
            <div class="col-span-12 sm:col-span-4">
              <label
                for="second_name"
                class="text-left block text-sm font-medium text-gray-700"
                >Телефон</label
              >
              <input
                v-model.trim="data.params.phone"
                required
                type="text"
                name="second_name"
                id="second_name"
                autocomplete="off"
                placeholder="+7 (999) 555-33-22"
                class="
                  mt-1
                  focus:ring-purple-500
                  focus:border-purple-200
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  sborder
                  border-purple-200
                  rounded-sm
                "
              />
            </div>

            <div class="col-span-12 sm:col-span-4">
              <label
                for="family-name"
                class="text-left block text-sm font-medium text-gray-700"
                >E-mail</label
              >
              <input
                v-model.trim="data.params.email"
                required
                type="text"
                name="additional-name"
                id="additional-name"
                autocomplete="email"
                placeholder="ivanov@mail.ru"
                class="
                  mt-1
                  focus:ring-purple-500
                  focus:border-purple-200
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  sborder
                  border-purple-200
                  rounded-sm
                "
              />
            </div>

            <div class="col-span-12 sm:col-span-4">
              <label
                for="email_address"
                class="text-left block text-sm font-medium text-gray-700"
                >Город организатора</label
              >
              <input
                v-model.trim="data.params.city"
                required
                type="email"
                name="email_address"
                id="email_address"
                autocomplete="off"
                placeholder="Казань"
                class="
                  mt-1
                  focus:ring-purple-500
                  focus:border-purple-200
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  sborder
                  border-purple-200
                  rounded-sm
                "
              />
            </div>
            <div class="col-span-12 sm:col-span-12">
              <p class="text-left font-sans font-semibold mt-2">
                Общая информация
              </p>
            </div>
            <div class="col-span-12">
              <label for="user" class="text-left block text-sm font-medium text-gray-700"
                >Название</label
              >
              <input
                v-model.trim="data.params.name"
                required
                type="text"
                name="user"
                id="user"
                autocomplete="off"
                placeholder=""
                class="
                  mt-1
                  focus:ring-purple-500
                  focus:border-purple-200
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  sborder
                  border-purple-200
                  rounded-sm
                "
              />
            </div>
   
            <div class="col-span-12">
              <label for="photo" class="text-left block text-sm font-medium text-gray-700"
                >Фотография
              </label>
              <input
                v-model.trim="data.params.discription"
                required
                type="text"
                name="photo"
                id="photo"
                autocomplete="off"
                placeholder=""
                class="
                  mt-1
                  focus:ring-purple-500
                  focus:border-purple-200
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  sborder
                  border-purple-200
                  rounded-sm
                "
              />
            </div>

            <div class="col-span-12 sm:col-span-12">
              <label for="phone" class="text-left block text-sm font-medium text-gray-700"
                >Подробное описание</label
              >
              <input
                v-model.trim="data.params.rating"
                required
                autocomplete="off"
                type="tel"
                name="phone"
                id="phone"
                placeholder=""
                class="
                  mt-1
                  focus:ring-purple-500
                  focus:border-purple-200
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  sborder
                  border-purple-200
                  rounded-sm
                "
              />
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label for="login" class="text-left block text-sm font-medium text-gray-700"
                >Рейтинг мероприятия</label
              >

              <input
                v-model.trim="data.params.address"
                required
                autocomplete=""
                type="text"
                name="login"
                id="login"
                placeholder="16+"
                class="
                  mt-1
                  focus:ring-purple-500
                  focus:border-purple-200
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  sborder
                  border-purple-200
                  rounded-sm
                "
              />
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label
                for="password"
                class="text-left block text-sm font-medium text-gray-700"
                >Адрес мероприятия</label
              >
              <input
                v-model.trim="data.params.address"
                required
                type="password"
                name="password"
                id="password"
                autocomplete="off"
                placeholder=""
                class="
                  mt-1
                  focus:ring-purple-500
                  focus:border-purple-200
                  block
                  w-full
                  shadow-sm
                  sm:text-sm
                  sborder
                  border-purple-200
                  rounded-sm
                "
              />
            </div>
          </div>
        </div>
        <div class="px-4 py-3 bg-gray-50 text-left sm:px-6">
          <button
            type="submit"
            class="
              transition
              hover:shadow-2xl
              inline-flex
              justify-center
              mr-15
              py-2
              px-12
              border border-purple-500
              shadow-sm
              text-sm
              font-medium
              rounded-sm
              text-black
              hover:bg-purple-500
              hover:text-white
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
            "
          >
            Отменить
          </button>
          <button
            type="submit"
            class="
              transition
              hover:shadow-2xl
              mt-4
              sm:mt-0
              inline-flex
              justify-center
              ml-5
              py-2
              px-16
              border border-transparent
              shadow-sm
              text-sm
              font-medium
              rounded-sm
              text-white
              bg-purple-500
              hover:bg-purple-700
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
            "
          >
            Далее
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";
import useValidate from "@vuelidate/core";
import { required, minLength,} from "@vuelidate/validators";
let router = null;
async function sendForm(data) {
  const res = await fetch("http://89.22.181.54:5500/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  console.log(result);
  if (result.error) {
    alert(result.data);
  } else {
    document.cookie = `sessionKey=${result.sessionKey}`;

    router.push("/");
  }
}
export default {
  name: "Register",
  setup() {
    const data = reactive({
      params: {
        owner: "",
        phone: "",
        email: "",
        city: "",
        name: "",
        discription: "",
        rating: "",
        address: "",
      },
    });
    router = useRouter();
    const rules = computed(() => {
      return {
        owner: {
          required,
          minLength: minLength(4),
        },
        phone: {  
           required
        },
      };
    });

    const v$ = useValidate(rules, data);
    return {
      data,
      // submit,
      v$,
    };
  },
  methods: {
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("Форма успешно прошла валидацию");
        return true;
      } else {
        alert("Проверейте валидацию формы");
        return false;
      }
    },
    submit() {
      if (!this.submitForm()) {
        return;
      }
      sendForm(this.data);
    },
  },
};
</script>