const Style = () => {
    return (
        <div className="space-y-1">
            <p className="font-semibold text-xs opacity-50">STYLE</p>
            <div className="grid grid-cols-3 grid-rows-3 gap-[8px]">
                <StyleItem />
                <StyleItem />
                <StyleItem />
                <StyleItem />
                <StyleItem />
                <StyleItem />
                <StyleItem />
                <StyleItem />
                <StyleItem />
            </div>
        </div>
    );
};

export default Style;

const StyleItem = () => {
    return (
        <div className="w-full cursor-pointer space-y-1 h-full">
            <img
                className="rounded-btn"
                src="https://shots.so/mockups/Screenshot/styles/default.png"
            />
            <p className="text-center text-xs">Default</p>
        </div>
    );
};
