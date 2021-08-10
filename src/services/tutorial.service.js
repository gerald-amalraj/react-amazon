import http from "../http-common";

class TutorialDataService {
  formulate(data) {
	    return http.post("/user/path", data);
	  }
}

export default new TutorialDataService();