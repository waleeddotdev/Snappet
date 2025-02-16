const TemplateName = ({
    templateName, setTemplateName,
}) => {
    return (
        <div
        >
            <p className="font-semibold text-xs opacity-50">TEMPLATE NAME</p>
            <div className="w-full pt-[5px] grid-cols-2 gap-[5px]">
                <input autoFocus value={templateName} onChange={(e) => setTemplateName(e.target.value)} className="bg-card py-2 border-card border rounded-btn h-10 px-4 w-full" placeholder="Name" type="text" />
            </div>
        </div>
    );
};

export default TemplateName