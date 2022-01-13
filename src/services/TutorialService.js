import http from "@/core/http-common"
class TutorialsService {
    endPoint='/frameworks';

    getAll() {
        return http.get(this.endPoint);
    }
    /* getById(id){
        return http.get( "${this.endPoint }/${id }" );
    } */
}

export default new TutorialsService();