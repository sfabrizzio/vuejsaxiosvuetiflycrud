import http from "@/core/http-common"
class TutorialsService {
    endPoint='/frameworks';

    getAll() {
        return http.get(this.endPoint);
    }
     getById(id){
        return http.get(`${this.endPoint }/${id } `);
    } 
    create(CreateTutorialDto) {
        return http.post(this.endPoint,CreateTutorialDto)
    }

    delete(id) {

        return http.delete(`${this.endPoint }/${id } `);
    
    }

    update(id,updateTutorialDto) {
/*put actualiza*/
        return http.put(`${this.endPoint }/${id } `,updateTutorialDto);
    
    }
}

export default new TutorialsService();