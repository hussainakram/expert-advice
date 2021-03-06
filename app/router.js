import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("login");
  this.route("signup");
  this.route("dashboard", { path: "" }, function() {});
  this.route('questions', function() {
    this.route('new');
  });
  this.route('question', { path: 'questions/:id' });
  this.route('create', { path: 'questions/new' });
  this.route('edit', { path: 'questions/:id/edit' });
});

export default Router;
