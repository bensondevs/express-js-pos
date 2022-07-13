import {
    request as Request,
    response as Response
} from 'express';
import AuthenticationService from '../../../services/Authentication/AuthenticationService';
import BaseController from '../BaseController';
import LoginRequest from '../../requests/Authentication/LoginRequest';

class AuthController extends BaseController
{
    /**
     * Authentication service class instance container
     *
     * @var AuthenticationService
     */
    private authService = new AuthenticationService;

    /**
     * Execute login with validation.
     *
     * @param request
     * @param response
     */
    public async login(request: LoginRequest, response: Response)
    {
        let credentials = request.validated();

        let user = await this.authService.login(credentials);
        if (user) {
            response.send({
                status: 'success',
                message: 'Successfully logged in',
                user: user,
            });
        }
    }

    /**
     * Execute register with validation.
     *
     * @param request
     * @param response
     */
    public async register(
        request: Request,
        response: Response
    )
    {
        //
    }

    /**
     * Send reset password mail.
     *
     * @param request
     * @param response
     */
    public async sendResetPasswordMail(
        request: Request,
        response: Response
    )
    {
        //
    }
}

export default AuthController;
