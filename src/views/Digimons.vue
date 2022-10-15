<template>
  <v-container>
    <h1>Digimons</h1>
    
    <v-row>
      <v-col v-for="digimon in content" v-bind:key="digimon">
        <digimon-card :name="digimon.name" :level="digimon.level" :img="digimon.img"></digimon-card>
      </v-col>
    </v-row>

    <div class="text-center">
      <v-pagination
        v-model="pagination.pageNo"
        :length="pagination.totalPages"
        :total-visible="6"
        @input="handlePageChange"
        circle
      ></v-pagination>
    </div>
  </v-container>
</template>
<script>
import axios from "axios";
import DigimonCard from "@/components/DigimonCard.vue";

export default {
  name: "digimons",
  data: () => ({
    pagination: {
      pageNo: 1,
      pageSize: 12,
      totalPages: 0,
    },
    content: [],
  }),
  methods: {
    fetchData: function (pageNo) {
      var pageRequest = {
        pageNo: pageNo,
        pageSize: this.pagination.pageSize,
      };

      axios
        .get("http://localhost:8090/api/digimons/paging", {
          params: pageRequest,
        })
        .then((response) => {
          this.content = response.data.data.content;
          this.pagination.totalPages = response.data.data.totalPages;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    handlePageChange: function (pageNo) {
      this.fetchData(pageNo);
    }
  },
  watch: {
    "pagination.pageNo": function(n) {
      this.handlePageChange(n);
    },
  },
  created: function () {
    this.fetchData(this.pagination.pageNo);
  },
  components: { DigimonCard },
};
</script>
