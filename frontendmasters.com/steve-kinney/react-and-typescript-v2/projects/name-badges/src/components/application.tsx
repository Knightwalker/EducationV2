import { useState } from "react";

import ControlPanel from "./controls";
import NameBadge from "./name-badge";

const Application = () => {
    const [name, setName] = useState("Steve");

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    }

    return (
        <main className="application">
            <NameBadge name={name} />
            <ControlPanel
                name={name}
                onChange={onChange}
            />
        </main>
    )
};

export default Application;
