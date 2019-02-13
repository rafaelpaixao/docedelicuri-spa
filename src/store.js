import Vue from "vue";
import Vuex from "vuex";

import Firebase from "./firebase";

Vue.use(Vuex);

const makeKey = function({ city, entity, year, month }) {
  return `${city}_${entity}_${year}_${month}`;
};

export default new Vuex.Store({
  state: {
    monthReportList: {},
    monthPayments: {}
  },
  mutations: {},
  actions: {
    getMonthReport: (store, { city, entity, year, month }) => {
      return new Promise(function(resolve, reject) {
        const key = makeKey({ city, entity, year, month });
        if (store.state.monthReportList[key]) {
          resolve(store.state.monthReportList[key]);
        } else {
          Firebase.getMonthReport({
            city,
            entity,
            year,
            month
          })
            .then(result => {
              store.state.monthReportList[key] = result;
              resolve(result);
            })
            .catch(error => {
              reject(error);
            });
        }
      });
    },
    getMonthPayments: (store, { city, entity, year, month }) => {
      return new Promise(function(resolve, reject) {
        const key = makeKey({ city, entity, year, month });
        if (store.state.monthPayments[key]) {
          resolve(store.state.monthPayments[key]);
        } else {
          Firebase.getMonthPayments({
            city,
            entity,
            year,
            month
          })
            .then(result => {
              store.state.monthPayments[key] = result;
              resolve(result);
            })
            .catch(error => {
              reject(error);
            });
        }
      });
    }
  }
});
