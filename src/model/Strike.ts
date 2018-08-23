function strike(text: string): string {
    return text.split('')
        .map(char => char + '\u0336')
        .join('')
}

function removeStrike(text: string): string {
    return text.replace(/\u0336/g, '')
}

export function toggleStrike(text: string): string {
    const isTextStriked = Boolean(
        text.split('')
            .map(char => char === '\u0336')
            .find(isStriked => isStriked)
    )

    return isTextStriked 
        ? removeStrike(text)
        : strike(text)
}
