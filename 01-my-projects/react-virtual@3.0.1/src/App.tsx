import { useState, useRef, useEffect } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

const listArr = new Array(100).fill("").map((value, idx) => {
    const randomString = (Math.random() + 1).toString(36).substring(7);
    return idx + "___" + randomString;
});

const App = () => {
    const [list, setList] = useState(listArr);
    const scrollElementRef = useRef<HTMLDivElement>(null);

    const virtualizerInstance = useVirtualizer({
        count: list.length,
        getScrollElement: () => scrollElementRef.current,
        estimateSize: () => 50,
        overscan: 5
    });

    const virtualItems = virtualizerInstance.getVirtualItems();
    const virtualItemsSize = virtualizerInstance.getTotalSize();

    useEffect(() => {
        virtualizerInstance.scrollToIndex(0);
    }, []);
    
    return (
        <div className="App">
            <div
                ref={scrollElementRef}
                style={{
                    height: 400,
                    width: 400,
                    overflowY: "auto",
                    border: "5px solid red"
                }}
            >
                <div
                    style={{
                        height: virtualItemsSize,
                        position: "relative",
                        width: "100%"
                    }}
                >
                    {virtualItems.map((virtualItem) => {
                        return (
                            <div
                                key={virtualItem.key}
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: `${virtualItem.size}px`,
                                    transform: `translateY(${virtualItem.start}px)`,
                                }}
                            >
                                Item {listArr[virtualItem.index]}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default App;