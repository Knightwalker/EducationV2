import { hex } from 'color-convert';
import LabeledInput from '../shared/labeled-input';

// Types
import { AdjustColorActions } from '../../color-reducer';

type HexToRGBProps = {
    hexColor: string;
    dispatch: React.Dispatch<AdjustColorActions>
};

const HexToRGB = ({ hexColor, dispatch }: HexToRGBProps) => {
    const color = hex.rgb(hexColor);
    const [r, g, b] = color;

    const updateRGB = ({ red = r, green = g, blue = b }) => {
        dispatch({
            type: "update-rgb-color",
            payload: {
                rgb: [red, green, blue]
            }
        });
    }

    return (
        <section className="grid w-full grid-flow-col gap-2">
            <LabeledInput label="R" type="number" value={r} onChange={(e) => {
                const newR = Number(e.target.value);
                updateRGB({red: newR, green: g, blue: b})
            }} />
            <LabeledInput label="G" type="number" value={g} onChange={(e) => {
                const newG = Number(e.target.value);
                updateRGB({red: r, green: newG, blue: b})
            }}/>
            <LabeledInput label="B" type="number" value={b} onChange={(e) => {
                const newB = Number(e.target.value);
                updateRGB({red: r, green: g, blue: newB})
            }}/>
        </section>
    );
};

export default HexToRGB;
