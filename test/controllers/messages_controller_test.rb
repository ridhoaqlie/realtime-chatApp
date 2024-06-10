require 'test_helper'

class MessagesControllerTest < ActionDispatch::IntegrationTest
  test "GET /messages" do
    get messages_url
    assert_response :success
    assert_equal Message.all.to_json, response.body
  end

  test "POST /messages" do
    post messages_url, params: { message: { body: "Hello, world!" } }
    assert_response :created
    assert_equal Message.last.body, "Hello, world!"
  end

  test "PATCH /messages/:id" do
    message = Message.create!(body: "Initial message")
    patch message_url(message), params: { message: { body: "Updated message" } }
    assert_response :ok
    assert_equal Message.find(message.id).body, "Updated message"
  end

  test "DELETE /messages/:id" do
    message = Message.create!(body: "Message to delete")
    delete message_url(message)
    assert_response :no_content
    assert_nil Message.find_by(id: message.id)
  end

  test "DELETE /messages" do
    Message.create!(body: "Message 1")
    Message.create!(body: "Message 2")
    delete messages_url
    assert_response :no_content
    assert_empty Message.all
  end
end