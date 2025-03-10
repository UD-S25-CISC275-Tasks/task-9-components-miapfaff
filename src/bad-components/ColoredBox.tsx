import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

function ColorPreview({
    colorIndex,
}: {
    colorIndex: number;
}): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex], // Use colorIndex here
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

function ChangeColor(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    return (
        <div>
            <Button
                onClick={() => {
                    setColorIndex((colorIndex + 1) % COLORS.length); // Update color index
                }}
            >
                Next Color
            </Button>
            <ColorPreview colorIndex={colorIndex} />
        </div>
    );
}

export function ColoredBox(): React.JSX.Element {
    return (
        <div>
            <h3>Colored Box</h3>
            <ChangeColor /> 
        </div>
    );
}
