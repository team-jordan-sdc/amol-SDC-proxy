import http from "k6/http";
import { sleep } from "k6";

export let options = {
  vus: 10,
  duration: "1s",
};

export default function() {
  http.get(`http://${__ENV.HOST}:${__ENV.PORT}/api/reviews/?id=1`);
  var postUrl = `http://${__ENV.HOST}:${__ENV.PORT}/api/reviews`;
  var payLoad = JSON.stringify({
      "name": "labore nisi elit",
      "length": 143,
      "rating": 31,
      "released": "2002-03-16",
      "studio": "consectetur",
      "language": "ad",
      "uhd": "eiusmod deserunt nostrud nisi",
      "hdx": "et eu magna dolor",
      "sd": "consectetur labore laboris id",
      "cc": "reprehenderit",
      "reviews": [
          {
              "id": 1,
              "content": "Excepteur minim. Ullamco laborum.",
              "author": "cillum eu",
              "rating": 61,
              "source": "excepteur",
              "createdat": "2019-07-05"
          },
          {
              "id": 2,
              "content": "Reprehenderit consectetur. Commodo nulla.",
              "author": "enim veniam",
              "rating": 55,
              "source": "anim",
              "createdat": "2019-07-04"
          },
          {
              "id": 3,
              "content": "Esse nulla ex. Cillum cillum non incididunt.",
              "author": "non adipisicing",
              "rating": 20,
              "source": "eu",
              "createdat": "2019-06-10"
          }
        ]
      });
  var params =  { headers: { "Content-Type": "application/json" } };
  http.post(postUrl, payLoad, params);
};
