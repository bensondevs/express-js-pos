import { 
    request as Request, 
    response as Response 
} from 'express';
import BaseController from '../BaseController';

class UserController extends BaseController
{
    /**
     * User controller constructor method.
     * 
     * @return void
     */
    public constructor()
    {
        super();
    }

    /**
     * Get currently authenticated user instance.
     * 
     * @return void
     */
    public authenticated(): void
    {
        //
    }

    /**
     * Update current authenticated user instance.
     * 
     * @param request 
     * @param response 
     */
    public update(request: Request, response: Response): void
    {
        //
    }
}

export default UserController;