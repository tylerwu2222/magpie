// Helper to convert hex to RGB
export const hexToRgb = (hex: string) => {
    const bigint = parseInt(hex.slice(1), 16);
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255,
    };
};

// Helper to convert RGB back to hex
export const rgbToHex = (r: number, g: number, b: number) => {
    return (
        '#' +
        [r, g, b]
            .map((x) => {
                const hex = x.toString(16);
                return hex.length === 1 ? '0' + hex : hex;
            })
            .join('')
    );
};

export const timeToHex = (
    timeUpdated: string | Date,
    hex: string,
    maxDays = 21) => {

    if (typeof timeUpdated === 'string') {
        timeUpdated = new Date(timeUpdated);
    }

    // Calculate the difference in weeks from the given date to now
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - timeUpdated.getTime());
    const diffDays = Math.min(diffTime / (1000 * 60 * 60 * 24), maxDays);
    const normalized = diffDays / maxDays;

    // Convert the hex to RGB
    const { r, g, b } = hexToRgb(hex);

    // Interpolate towards grey (#808080)
    const grey = 128;
    const newR = Math.round(r + normalized * (grey - r));
    const newG = Math.round(g + normalized * (grey - g));
    const newB = Math.round(b + normalized * (grey - b));

    // Convert the new RGB values back to hex
    return rgbToHex(newR, newG, newB);
};