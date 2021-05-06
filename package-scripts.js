module.exports = {
  scripts: {
    present: {
      react: 'nps "start mdx/react.mdx"',
      ea: 'nps "start mdx/ea.mdx"',
      reactwebgl: 'nps "start mdx/reactWebGL.mdx"',
      timetravel: 'nps "start mdx/git-based-time-travel.mdx"'
    },
    start: 'mdx-deck',
    build: 'mdx-deck build',
    help: 'mdx-deck'
  }
}
