<template>
  <section>
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2
        class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900"
      >
        Do you need help getting over a stumbling block?
      </h2>
      <p
        class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl"
      >
        Drop me a line, I'd be delighted to hear from you!.
        <br />
        Let's talk over a 🍵
      </p>
      <form class="space-y-8 form" ref="formRef">
        <div>
          <label
            for="name"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Name</label
          >
          <input
            type="text"
            id="name"
            name="name"
            class="block p-3 w-full sm:text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
            placeholder="Sushil Sharma"
            autocomplete="off"
            required
          />
        </div>
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Your email</label
          >
          <input
            type="email"
            id="email"
            name="email"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="name@sushilsharma.com"
            autocomplete="off"
            required
          />
        </div>
        <div>
          <label
            for="subject"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Subject</label
          >
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Feel free to let me know how I can help."
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            required
          />
        </div>
        <div class="sm:col-span-2">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Your message</label
          >
          <textarea
            id="message"
            rows="6"
            name="message"
            class="block p-2.5 w-full sm:text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Whether you wish to discuss new ideas or have a project for me, simply fill this form and I&rsquo;ll get back to you soon."
          ></textarea>
        </div>
        <button
          type="submit"
          class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          <span
            class="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0"
          >
            Let's talk
          </span>
        </button>
      </form>
      <div
        v-if="isFormSubmitted"
        class="mt-4 text-2xl font-bold tracking-tight text-gray-900"
      >
        Form submitted!
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const formRef = ref(null);
const isFormSubmitted = ref(false);

onMounted(() => {
  const form = formRef.value as HTMLFormElement | null;
  if (!form) return;

  form.addEventListener("submit", async (event: Event) => {
    event.preventDefault();

    try {
      const res = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });

      const resData = await res.json();
      console.log(resData);
      form.reset();
      isFormSubmitted.value = true;
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message);
      } else {
        console.log("An unknown error occurred.");
      }
    }
  });
});
</script>
