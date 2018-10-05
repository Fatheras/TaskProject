import UserService from '../services/user-service';


export class UserController {

    static getUser(req, res) {
        let user = UserService.getUser();

        res.send(user);
    }
    
}