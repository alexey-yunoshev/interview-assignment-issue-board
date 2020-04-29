export function sleep(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

export function isDefined<T>(value: T | undefined): value is T {
    return value !== undefined;
}

export function isUndefined<T>(value: T | undefined): value is undefined {
    return value === undefined;
}
