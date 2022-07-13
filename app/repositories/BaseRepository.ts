import Model from '../models/Base/Model';

class BaseRepository
{
    /**
     * Repository class model instance container.
     *
     * @var Model
     */
    public model;

    /**
     * Set model of the repository.
     *
     * @param model
     * @return self
     */
    public setModel(model: Model): this
    {
        this.model = model;

        return this;
    }
}

export default BaseRepository;
