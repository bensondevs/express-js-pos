const bcrypt = require('bcrypt');

class EncryptionService
{
    /**
     * Salt Round of the encryption
     */
    static readonly SALT_ROUND = 10;

    /**
     * Hash word.
     *
     * @param word
     */
    public hash(word: string): string
    {
        let round = EncryptionService.SALT_ROUND;
        let hashedWord = '';

        bcrypt.genSalt(round, (error, salt) => {
            bcrypt.hash(word, salt, (error, hash) => {
                hashedWord = hash;
            })
        });

        return hashedWord;
    }

    /**
     * Compare hashed string and plain string.
     *
     * @param plain
     * @param hashed
     */
    public compare(plain: string, hashed: string): boolean
    {
        let match = false;

        bcrypt.compare(plain, hashed).then((comparison) => {
            match = comparison;
        });

        return match;
    }
}

export default EncryptionService;
