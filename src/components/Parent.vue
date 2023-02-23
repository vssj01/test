<template>
  <div>
    <h1>Task 1</h1>
    <h3>Parent Component</h3>
    <!-- Task 1 -->
    <div class="card-container" id="task1">
      <Child1 :message="message" @childMessage="childMessage($event)"></Child1>
      <Child2></Child2>
      <p>{{ childMsg }}</p>
    </div>
    <!-- Task 2 -->
    <h1>Task 2</h1>
    <div class="search">
      <label for="searchInput">Search:</label>
      <input type="text" id="searchInput" v-model="searchText" />
    </div>
    <div class="container">
      <table>
        <thead>
          <tr>
            <th @click="sort('name')">
              Name
              <span v-if="sortColumn === 'name'">{{ sortDirection }}</span>
            </th>
            <th @click="sort('username')">
              Username
              <span v-if="sortColumn === 'username'">{{ sortDirection }}</span>
            </th>
            <th @click="sort('email')">
              email
              <span v-if="sortColumn === 'email'">{{ sortDirection }}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in displayUsers" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">
        Next
      </button>
    </div>
    <!-- Task 3 -->
    <h1>Task 3</h1>
    <FormBuilder></FormBuilder>
  </div>
</template>

<script>
import Child1 from "@/components/Child1.vue";
import Child2 from "@/components/Child2.vue";
import FormBuilder from "@/components/FormBuilder.vue";
import { mapState } from "vuex";

export default {
  name: "Parent",
  components: { Child1, Child2, FormBuilder },
  data() {
    return {
      message: "Message Received from Parent",
      childMsg: "",
      sortColumn: "",
      sortDirection: "asc",
      itemsPerPage: 3,
      currentPage: 1,
      searchInput: "",
      searchText: "",
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.users.length / this.itemsPerPage);
    },
    displayUsers() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      // search functionality
      let filteredUsers = this.users.filter((user) => {
        const name = user.name.toLowerCase();
        const username = user.username.toLowerCase();
        return (
          name.includes(this.searchText) || username.includes(this.searchText)
        );
      });
      // sort functionality
      if (this.sortColumn) {
        const column = this.sortColumn;
        const direction = this.sortDirection === "asc" ? 1 : -1;
        filteredUsers = filteredUsers.sort((a, b) => {
          return a[column] > b[column] ? direction : -direction;
        });
      }
      return filteredUsers.slice(start, end);
    },
    ...mapState({
      users: (state) => state.users,
    }),
  },
  methods: {
    childMessage(msg) {
      this.childMsg = msg;
    },
    sort(column) {
      if (this.sortColumn === column) {
        this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
      } else {
        this.sortColumn = column;
        this.sortDirection = "asc";
      }
    },
    prevPage() {
      this.currentPage--;
    },
    nextPage() {
      this.currentPage++;
    },
  },
  created() {
    this.$store.dispatch("fetchData");
    this.users.sort((a, b) => {
      console.log(a, b);
    });
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(13, 13, 13, 0.2);
  border-radius: 5px;
  background-color: #fff;
  padding: 20px;
  width: 300px;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
