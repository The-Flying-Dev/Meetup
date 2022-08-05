require "test_helper"

class Api::V1::MeetupsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_meetups_index_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_meetups_create_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_meetups_show_url
    assert_response :success
  end

  test "should get destroy" do
    get api_v1_meetups_destroy_url
    assert_response :success
  end
end
