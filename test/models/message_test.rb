require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  test "broadcasts message after creation" do
    message = Message.create!(body: "Hello, world!")
    assert_broadcasted_to("MessageChannel", { id: message.id, body: "Hello, world!" })
  end
end