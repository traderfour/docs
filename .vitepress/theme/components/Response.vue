<template>
  <div
    class="grid gap-6 md:grid-cols-2 grid-cols-1 my-5"
    :style="dir === 'rtl' ? 'direction:rtl' : ''"
  >
    <section class="mx-2 col-span-1 text-sm">
      <h2>Schema</h2>
      <span class="text-xs schema">
        <ul>
          <li>
            <code>succeed</code> <span>Boolean</span>
            <p>The status of request.</p>
          </li>
          <li>
            <code>message</code> <span>String</span>
            <p>The message of request.</p>
          </li>
          <li>
            <code>result</code> <span>JSON Array</span>
            <p>The result of request.</p>
          </li>
          <slot name="result"/>
          <li>
            <code>meta</code> <span>JSON Array</span>
            <p>The meta of request.</p>
            <slot name="meta"/>
          </li>
        </ul>
      </span>
    </section>
    <section
      class="col-span-1 bg-gray-50 dark:bg-gray-800 rounded-lg min-w-full max-w-sm max-h-screen overflow-auto overflow-x-auto"
    >
      <div
        class="bg-gray-200 title text-black dark:bg-gray-700 dark:text-white text-white p-2 rounded-t-lg mb-4 sticky top-0 z-1"
      >
        RESPONSE
      </div>
      <vue-json-pretty
        :data="mockData"
        style="direction: ltr"
        class="p-3"
        showLength
        :showLine="false"
      />
    </section>
  </div>
</template>
<script>
import { ref } from "@vue/reactivity";
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";
import { useData } from "vitepress";

export default {
  name: "Response",
  components: {
    VueJsonPretty,
  },
  props: {
    jfile: { type: String },
  },
  setup(props) {
    const { dir } = useData();
    let mockData = ref("NO CONTENT");

    import('../../../public/'+props.jfile+'.json').then(
      (module) => {
        mockData.value = module.default;
      }
    );
    return {
      mockData,
      dir,
    };
  },
};
</script>
<style>
.vjs-tree-node.is-highlight,
.vjs-tree-node:hover {
  background-color: rgba(255, 255, 255, 0.26);
}
.title{
  font-family: monospace, monospace, sans-serif;
  font-size: 0.9em;
  color: #858585;
  font-weight: bolder;
}
.schema ul li span, .datatype{
  font-family: monospace, monospace, sans-serif;
  font-size: 0.82em;
  color: #858585;
  font-weight: bolder;
}
.schema p{
  line-height: 0.01em !important;
}

</style>
