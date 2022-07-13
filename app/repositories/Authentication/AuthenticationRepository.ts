import BaseRepository from '../BaseRepository';
import User from '../../models/User';
import {random_alphabeth} from "../../helpers/string-helpers";

class AuthenticationRepository extends BaseRepository
{
    /**
     * Repository constructor method.
     *
     * @return void
     */
    constructor()
    {
        super();

        this.setModel(new User);
    }

    /**
     * Find user based on identity given (either username or email)
     *
     * @param identity
     */
    public findUser(identity: string): User
    {
        return this.model.addWhere('email', identity)
            .addWhere('username', identity)
            .getOne();
    }

    /**
     * Generate token for user.
     *
     * @param user
     */
    public generateToken(user: User): string
    {
        this.setModel(user);

        let token = random_alphabeth(25, true);

        user.setAttribute('token', token);
        user.save();

        return token;
    }
}

export default AuthenticationRepository;
