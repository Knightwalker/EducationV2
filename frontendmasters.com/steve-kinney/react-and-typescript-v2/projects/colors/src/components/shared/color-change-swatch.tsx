import clsx from 'clsx';
import { useContext } from 'react';
import Button from './button';
import { ColorContext } from '../../context';

type ColorChangeSwatchProps = {
    hexColor: string;
    className?: string;
};

const ColorChangeSwatch = ({
    hexColor,
    className
}: ColorChangeSwatchProps) => {
    const { dispatch } = useContext(ColorContext);

    return (
        <Button
            className={clsx(
                'border-2 border-slate-900 transition-shadow duration-200 ease-in hover:shadow-xl',
                className,
            )}
            style={{ backgroundColor: hexColor }}
            onClick={() => dispatch({
                type: "update-hex-color", payload: {
                    hexColor: hexColor
                }
            })}
        >
            {hexColor}
        </Button>
    );
};

export default ColorChangeSwatch;
