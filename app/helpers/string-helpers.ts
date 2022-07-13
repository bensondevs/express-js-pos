/**
 * Generate random alphabet and number
 *
 * @param length
 * @param includeNumbers
 */
export function random_alphabeth(
    length:number = 5,
    includeNumbers:boolean = false
) {
    let upperCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerCases = 'abcdefghijklmnopqrstuvwxyz';

    let pool = upperCases + lowerCases;
    if (includeNumbers) {
        let numbers = '123456789';
        pool += numbers;
    }

    let poolLength = pool.length;
    let result = '';

    do {
        let randomIndex = Math.floor(Math.random() * poolLength);
        result += pool.charAt(randomIndex);
    } while (result.length < length);

    return result;
}
