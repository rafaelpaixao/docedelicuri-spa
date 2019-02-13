const BASE_URL = "https://docedelicuri.firebaseio.com/";

class FirebaseProvider {
  get(path) {
    var request = new XMLHttpRequest();
    return new Promise(function(resolve, reject) {
      request.onreadystatechange = function() {
        if (request.readyState !== 4) return;
        if (request.status >= 200 && request.status < 300) {
          resolve(JSON.parse(request.response));
        } else {
          reject({
            status: request.status,
            statusText: request.statusText
          });
        }
      };
      request.open("GET", BASE_URL + path, true);
      request.send();
    });
  }
  getMonthReport({ city, entity, year, month }) {
    return this.get(
      `payments_reports_month/${city}/${entity}/${year}/${month}.json`
    );
  }
  getMonthPayments({ city, entity, year, month }) {
    return this.get(`payments/${city}/${entity}/${year}/${month}.json`);
  }
}

export default new FirebaseProvider();
