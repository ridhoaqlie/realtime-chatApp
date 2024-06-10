ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'
require 'capybara/rails'

# Add additional requires for Action Cable and other dependencies as needed
require 'action_cable/test_helper'

# Run tests in parallel with parallel_tests gem
# require 'parallel_tests'

# Load support files
Dir[Rails.root.join('test', 'upport', '**', '*.rb')].each { |f| require f }

# Configure Capybara
Capybara.default_max_wait_time = 10

# Configure Action Cable
ActionCable::Connection.configure do |config|
  config.url = 'ws://localhost:3000/cable'
end

# Run tests in transactional mode
class ActiveSupport::TestCase
  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  # Add more setup and teardown methods as needed
end