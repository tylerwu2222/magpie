export type textComponentColorDict = {
    default: string,
    ripple: string,
    toggle?: string,
    text?: string
}

export type basicButtonType = {
    isDisabled?: boolean;
    contentSize?: number;
    borderRadius?: number;
    buttonColorDict?: textComponentColorDict
}

export type TextPosition = 'bottom' | 'left' | 'top' | 'right';

export type FlexDirection = 'column' | 'row-reverse' | 'column-reverse' | 'row';