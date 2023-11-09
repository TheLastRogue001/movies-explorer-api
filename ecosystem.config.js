module.exports = {
  apps: [
    {
      name: 'mesto-auto-deploy',
      script: 'app.js',
    },
  ],

  deploy: {
    production: {
      user: 'sasha0908',
      host: '51.250.24.218',
      ref: 'origin/main',
      repo: 'git@github.com:TheLastRogue001/react-mesto-api-full-gha.git',
      path: '/home/sasha0908/auto-deploy',
      'pre-deploy-local':
        'scp .env sasha0908@51.250.24.218:/home/sasha0908/auto-deploy/current/backend',
      'post-deploy':
        'pwd && cd backend && npm i && pm2 startOrRestart ecosystem.config.js --env production',
    },
  },
};
