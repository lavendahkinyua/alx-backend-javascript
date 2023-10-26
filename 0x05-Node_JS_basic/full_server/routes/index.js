import AppController from "../controllers/AppController";
import StudentsController from "../controllers/StudentsController";

const mapRoutes = (app) => {
    app.get("/", (request, response) => {
        AppController.getHomepage(request, response);
    });
    app.get("/students", (request, response) => {
        StudentsController.getAllStudents(request, response);
    });
    app.get("/students/:major", (request, response) => {
        StudentsController.getAllStudentsByMajor(request, response);
    });
    }

export default mapRoutes;
module.exports = mapRoutes;