Router.route('/', function () {
  this.render('home');
  SEO.set({ title: 'Home -' + Meteor.App.NAME });
});

Router.route('/home', function () {
  this.render('home');
  SEO.set({ title: 'Home -' + Meteor.App.NAME });
});

Router.route('/students-detail', function () {
  this.render('students-detail');
});

Router.route('/student-panel', function () {
  this.render('student-panel');
});

Router.route('/bills-audit', function () {
  this.render('bills-audit');
});

Router.route('/class-schedule', function () {
  this.render('class-schedule');
});

Router.route('/services', function () {
  this.render('services');
});

Router.route('/settings', function () {
  this.render('settings');
});



