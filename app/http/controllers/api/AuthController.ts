import { 
    request as Request, 
    response as Response 
} from 'express';
import AuthenticationService from '../../../services/AuthenticationService';
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
     * @return void
     */
    public login(request: LoginRequest, response: Response): void
    {
        let credentials = request.validated();
        const user = this.authService.login(credentials);

        response.send({
            status: 'success',
            message: 'Succesfully logged in',
            user: user,
        });
    }

    /**
     * Execute register with validation.
     *
     * @param request
     * @param response
     */
    public register(
        request: Request,
        response: Response
    ): void
    {
        //
    }

    /**
     * Send reset password mail.
     *
     * @param request
     * @param response
     */
    public sendResetPasswordMail(
        request: Request,
        response: Response
    ): void
    {
        //
    }
}

export default AuthController;