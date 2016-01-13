Package.describe({
    summary: "HighCharts funnel charts for Meteor",
    version: "0.4.0",
    git: "https://github.com/MaazAli/highcharts-funnel",
    name: "maazalik:highcharts-funnel"
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.0.3.2');
    api.use('jquery');
    api.use('templating');

    // basic highcharts
    api.use('maazalik:highcharts@0.4.0');
    api.imply('maazalik:highcharts@0.4.0');
    // funnel
    api.addFiles([
      'lib/highcharts-funnel.js',
    ], 'client');
});
