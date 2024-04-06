module.exports = {
    apps: [
      {
        name: 'Aktiv',
        port: '3000',
        exec_mode: 'cluster',
        script: './.output/server/index.mjs'
      }
    ]
  }