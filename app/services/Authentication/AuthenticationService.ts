import AuthenticationRepository from '../../repositories/Authentication/AuthenticationRepository';
import EncryptionService from "../Utility/EncryptionService";
import User from "../../models/User";
import {response} from "express";

class AuthenticationService
{
    /**
     * Repository instance container property.
     *
     * @private
     */
    private repository;

    /**
     * Encryption service container property.
     *
     * @private
     */
    private encryptionService;

    /**
     * Authentication service class constructor.
     *
     * @return void
     */
    public constructor()
    {
        this.repository = new AuthenticationRepository;
        this.encryptionService = new EncryptionService();
    }

    /**
     * Execute authentication using given credentials.
     *
     * @param credentials
     * @return boolean
     */
    public login(credentials): User | boolean
    {
        let { identity, password } = credentials;

        let user = this.repository.findUser(identity);
        if (!user) {
            response.send({
                status: 'error',
                message: 'User not found',
            })

            return false;
        }

        let hashedPassword = user.password;
        if (!this.comparePassword(hashedPassword, password)) {
            response.send({
                status: 'error',
                message: 'Mismatched password given',
            });

            return false;
        }

        this.repository.generateToken(user);

        return user;
    }

    /**
     * Compare hashed password and plain password to
     * determine whether they are matched or not, if yes
     * then this method will return true.
     *
     * @param hashed
     * @param plain
     */
    public comparePassword(
        hashed: string,
        plain: string
    ): boolean
    {
        return ;
    }
}

export default AuthenticationService;
