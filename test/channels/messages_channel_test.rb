require 'test_helper'

class MessageChannelTest < ActionCable::Channel::TestCase
  test "receives message" do
    message = Message.create!(body: "Hello, world!")
    subscribe_to_channel
    assert_received_message({ id: message.id, body: "Hello, world!" })
  end
end