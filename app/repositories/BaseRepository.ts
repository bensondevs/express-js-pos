class BaseRepository
{
    /**
     * Repository class model instance container.
     * 
     * @var Model
     */
    public model;

    public setModel(): this
    {
        return this;
    }
}

export default BaseRepository;