#!/bin/bash

rails db:create
rails db:migrate
rails db:seed

yarn install
bundle install
yarn build
RAILS_ENV=production bundle exec rails assets:precompile
RAILS_ENV=production bundle exec rails s