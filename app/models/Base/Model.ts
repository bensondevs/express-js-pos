import {PrismaClient} from '@prisma/client'

class Model
{
    /**
     * Prisma instance container property.
     *
     * @protected
     */
    protected prisma: PrismaClient = new PrismaClient();

    /**
     * Table name of the model.
     *
     * @protected
     */
    protected _table: String = this.getTable();

    /**
     * Attributes set in the model.
     *
     * @protected
     */
    protected attributes = {};

    /**
     * Where condition logic container.
     *
     * @protected
     */
    protected wheres = {};

    /**
     * Relationship included when model is querying.
     *
     * @protected
     */
    protected includes = {};

    /**
     * Model constructor method.
     *
     * @return Void
     */
    constructor()
    {
        //
    }

    /**
     * Get table name of the model.
     *
     * If the table name not set this method will identify
     * the name of the model class.
     *
     * @return string
     */
    protected getTable(): string
    {
        return this.constructor.name;
    }

    /**
     * Set attribute of the class.
     *
     * @param name
     * @param value
     * @return self
     */
    public setAttribute(name: string, value)
    {
        this.attributes[name] = value;

        return this;
    }

    /**
     * Add where condition to the query of the model.
     *
     * @param column
     * @param condition
     */
    public addWhere(column: string, condition: Object)
    {
        this.wheres[column] = condition;

        return this;
    }

    /**
     * Set multiple "wheres" at once to the class property.
     *
     * @param wheres
     */
    public setWheres(wheres: Object)
    {
        this.wheres = {
            ...this.wheres,
            ...wheres
        };

        return this;
    }

    /**
     * Get where condition of the model.
     *
     * @return Object
     */
    public getWheres()
    {
        return this.wheres;
    }

    /**
     * Get attributes of the model.
     *
     * @return Object
     */
    public getAttributes(): Object
    {
        return this.attributes;
    }

    /**
     * Set multiple items to the attributes' properties.
     *
     * @param attributes
     * @return self
     */
    public fill(attributes: Object)
    {
        this.attributes = {
            ...this.attributes,
            ...attributes
        };

        return this;
    }

    /**
     * Execute certain action and handling it safely.
     *
     * @protected
     * @param callback
     * @return mixed
     */
    protected executeDatabase(callback: Function)
    {
        try {
            this.prisma.$connect(); // Connect to database

            return callback(); // Execute the method
        } catch (error) {
            throw error;
        } finally {
            this.prisma.$disconnect(); // Disconnect from database
        }
    }

    /**
     * Save the data attached to the model instance.
     *
     * @return boolean
     */
    public save(): boolean
    {
        return this.executeDatabase(() => {
            this.prisma[this.getTable()].create({
                data: this.getAttributes()
            });

            return true;
        });
    }

    /**
     * Get one result of the database record based on the query params.
     *
     * @return Model
     */
    public getOne(): Model
    {
        return this.executeDatabase(() => {
            return this.prisma[this.getTable()].findFirst({
                where: this.getWheres(),
            })
        });
    }

    /**
     * Delete the data based set in the parameter
     *
     * @return boolean
     */
    public delete(): boolean
    {
        return this.executeDatabase(() => {
            this.prisma[this.getTable()].delete({
                where: this.getWheres()
            })

            return true;
        });
    }
}

export default Model;
