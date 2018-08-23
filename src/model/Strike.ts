export function strike(text: string) {
    return text.split('')
        .map(char => char + '\u0336')
        .join('')
}