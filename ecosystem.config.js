module.exports = {
  apps: [
    {
      name: 'movies-auto-deploy',
      script: 'app.js',
    },
  ],

  deploy: {
    production: {
      user: 'sasha0908',
      host: '51.250.22.46',
      ref: 'origin/level-1',
      repo: 'git@github.com:TheLastRogue001/movies-explorer-api.git',
      path: '/home/sasha0908/auto-deploy',
      'pre-deploy-local':
        'scp .env sasha0908@51.250.22.46:/home/sasha0908/auto-deploy/current',
      'post-deploy':
        'pwd && cd backend && npm i && pm2 startOrRestart ecosystem.config.js --env production',
    },
  },
};
