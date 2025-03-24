import {useState, useRef, useEffect} from "react";

const HomeTopTag1 = () => {
    const [translateXVal, setTranslateXVal] = useState(0);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const currentTranslate = useRef(0);
    const maxTranslateX = useRef(0); // Maximum negative translate value

    const containerRef = useRef(null);
    const contentRef = useRef(null);

    // Calculate the maxTranslateX based on container and content width
    useEffect(() => {
        const containerWidth = containerRef.current?.offsetWidth || 0;
        const contentWidth = contentRef.current?.offsetWidth || 0;
        maxTranslateX.current = Math.min(0, containerWidth - contentWidth); // Negative value
    }, []);

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.clientX;
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;

        const diff = e.clientX - startX.current;
        const newTranslate = currentTranslate.current + diff;

        // Allow overshoot but track it
        setTranslateXVal(newTranslate);
    };

    const handleMouseUp = () => {
        isDragging.current = false;

        // Clamp translateXVal within valid bounds
        if (translateXVal > 0) {
            setTranslateXVal(0); // Snap back to the start
        } else if (translateXVal < maxTranslateX.current) {
            setTranslateXVal(maxTranslateX.current); // Snap back to the end
        }

        currentTranslate.current = translateXVal; // Save the clamped value
    };

    return (
        <div
            className="my-8 overflow-hidden px-20 phone:pl-4"
            onMouseLeave={handleMouseUp} // Handle edge cases
            ref={containerRef} // Reference for the container
        >
            <div className="w-full">
                <div
                    className="relative overflow-visible touch-pan-y flex justify-start"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    style={{
                        cursor: isDragging.current ? "grabbing" : "grab",
                    }}
                >
                    <div
                        className="h-12 flex-row gap-4 inline-flex will-change-transform transformHere transition-transform duration-300 pr-40"
                        style={{
                            transform: `translateX(${translateXVal}px) translateZ(0px)`,
                        }}
                        ref={contentRef} // Reference for the content
                    >
                        {Array.from({length: 13}).map((_, index) => (
                            <div
                                key={index}
                                className="w-max h-full flex items-center border rounded border-gray-300 px-4 cursor-pointer"
                                onClick={() =>
                                    console.log(`Clicked item ${index + 1}`)
                                }
                            >
                                <p>Nike air jordan {index + 1}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTopTag1;
