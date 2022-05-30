import BaseRepository from './BaseRepository';

class AuthenticationRepository extends BaseRepository
{
    /**
     * Execute login by checking to database.
     *
     * @param data
     */
    public login(data): boolean
    {
        return true;
    }
}