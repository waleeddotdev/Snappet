const { Editor } = require("@monaco-editor/react")

const CodeEditor = ({ langauge, theme, fontSize, lineHeight }) => {

    const welcomeText = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠠
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠶⡣⠑⠁
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢤⣮⠙⠓⠈⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⢊⡵⠋⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⢴⡯⠚⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠛⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀   Welcome to Snappet
⠀⢀⣤⣶⣿⣿⣷⣦⡀⠀⠀⠀⢀⣠⡾⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣰⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⢶⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀   Made with 💗 by Waleed Nasir
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⢀⠔⢔⠊⡠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢻⣿⣿⣿⣿⣿⡟⠉⢙⢟⢵⢿⠗⢨⠀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀     Follow me on
⠀⠙⣿⠛⠙⢏⣑⠖⡱⣮⠄⠁⢀⡾⢀⡇⢰⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠘⠓⠒⢉⡵⣊⡴⣃⣠⠄⠉⣠⠞⢡⡟⢠⠀⠀⠀⠀⠀⠀   Instagram: @waleeddotdev
⠀⢀⠖⢠⢔⣡⠞⠋⠀⠐⠶⡖⣀⡀⠘⠩⠴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠃⢺⡿⠋⠁⠀⠀⠀⠀⠀⠈⠁⠴⢄⠐⠧⣠⣞⡻⠀⠀⠀⠀    Linkedin: @waleeddotdev
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡾⠟⠈⣿⡿⠃⠺⠷⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⠏⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⣄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣠⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢷⣄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠐⢿⡋⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠿⣛⡃⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣩⣥⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣯⠆⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⢻⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡟⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⡇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⠀⣤⢲⣦⣤⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⡶⡶⣰⠤⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠛⠉⠁⠁⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠉⠒⠁⠁⠀⠀⠀
`

    return (
        <Editor
            defaultLanguage={langauge || 'javascript'}
            defaultValue={welcomeText}
            language={langauge}
            height={"100%"}
            width={"100%"}
            theme={theme}
            options={{
                minimap: {
                    enabled: false,
                },
                lineHeight: lineHeight,
                fontSize: fontSize,
                fontFamily: "'Courier New', Courier, monospace",
                fontWeight: "bold",
                folding: true,
                codeLens: true,
                wordWrap: "on",
                lineNumbers: "off",
                cursorStyle: "line",
                cursorBlinking: "blink",
                selectOnLineNumbers: false,
                snippetSuggestions: "none",
                automaticLayout: true,
                scrollBeyondLastLine: false,
                renderWhitespace: "none",
                renderControlCharacters: true,
                scrollbar: {
                    useShadows: false,
                    verticalScrollbarSize: 0,
                    horizontalScrollbarSize: 0,
                },
                guides: {
                    highlightActiveBracketPair: false,
                    highlightActiveIndentation: false,
                    indentation: false,
                },
                padding: {
                    bottom: 10,
                    top: 10,
                },
                lineDecorationsWidth: "0px",
                suggestOnTriggerCharacters: false, // Disable suggestions when typing
                quickSuggestions: false, // Disable quick suggestions
                parameterHints: { enabled: false },
                renderLineHighlight: "none", // Disable line highlight
                renderLineHighlightOnlyWhenFocus: false, // Ensure no highlight even on focus
                selectionHighlight: false, // Disable selection highlight
                occurrencesHighlight: "off", // Disable outline for occurrences
                renderWhitespace: "none",
                scrollBeyondLastLine: false,
                renderControlCharacters: false,
            }}
        />
    )
}

export default CodeEditor