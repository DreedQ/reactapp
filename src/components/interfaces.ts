export interface IStyle {
    display?: string;
    align?: string;
    justify?: string;
    width?: string;
    height?: string;
    min_height?: string | null;
    margin?: string;
    padding?: string;
    font_size?: string;
    relative?: string;
    flex?: string;
    children?: React.ReactNode;
    css?: string;
    maxWidth?: string;
    flexWrap?: string;
    background?: string;
    direction?: string;
    border?: string;
    border_radius?: string;
    box_shadow?: string;
    visibility?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
}
