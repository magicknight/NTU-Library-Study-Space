module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'API',
      script    : 'dist-server/server.js',
      env: {
        NODE_ENV: 'production',
        PORT: 80
      }
    }

    // Second application
    // {
    //   name      : "WEB",
    //   script    : "web.js"
    // }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production : {
      user : 'node',
      host : '140.112.113.10',
      ref  : 'origin/master',
      repo : 'git@github.com:LucienLee/NTU-Library-Study-Space.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js --env production'
    }
  }
}
