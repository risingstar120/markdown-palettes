import MarkdownIt from 'markdown-it'

export function MarkdownParser (code, parsers) {
    let converter = MarkdownIt()
    parsers.forEach(parser => {
        converter = converter.use(parser)
    })
    return converter.render(code)
}
