<template>
  <v-table fixed-header>
    <thead>
      <tr>
        <th class="text-left">Serial No</th>
        <th class="text-left">Name</th>
        <th class="text-left">E-mail</th>
        <th class="text-left">Username</th>
        <th class="text-left">Calories</th>
        <th class="text-left">Calories</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, i) in desserts" :key="item.name">
        <td>{{ i + 1 }}</td>
        <td>
          <v-avatar>
            <v-img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
            ></v-img>
          </v-avatar>
          {{ item.name }}
        </td>
        <td>{{ item.calories }}</td>
        <td>{{ item.calories }}</td>
        <td>{{ item.calories }}</td>
        <td>{{ item.calories }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
        },
        {
          name: "Eclair",
          calories: 262,
        },
        {
          name: "Cupcake",
          calories: 305,
        },
        {
          name: "Gingerbread",
          calories: 356,
        },
        {
          name: "Jelly bean",
          calories: 375,
        },
        {
          name: "Lollipop",
          calories: 392,
        },
        {
          name: "Honeycomb",
          calories: 408,
        },
        {
          name: "Donut",
          calories: 452,
        },
        {
          name: "KitKat",
          calories: 518,
        },
      ],
    };
  },
};
</script>
