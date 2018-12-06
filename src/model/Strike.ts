function strike(text: string, canStrike = (char: string) => true): string {
    return text.split('')
        .map(char => canStrike(char) ? char + '\u0336' : char)
        .join('')
}

function strikeAll(text: string): string {
    return strike(text)
}

function strikeNonWhitespaceOnly(text: string): string {
    return strike(
        text
        ,(char: string) => Boolean(char.match(/\S/))
    )
}

function removeStrike(text: string): string {
    return text.replace(/\u0336/g, '')
}

export function toggleStrike(text: string, {strikeWhitespace = true} = {}): string {
    const isTextStriked = Boolean(
        text.split('')
            .map(char => char === '\u0336')
            .find(isStriked => isStriked)
    )

    const doStrikeFunction = strikeWhitespace ? strikeAll : strikeNonWhitespaceOnly

    return isTextStriked 
        ? removeStrike(text)
        : doStrikeFunction(text)
}
