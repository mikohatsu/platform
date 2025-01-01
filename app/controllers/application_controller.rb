class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  # API 요청에 대해 CSRF 토큰 확인을 건너뜁니다
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern
  protect_from_forgery with: :exception
  protect_from_forgery with: :null_session
  
  before_action :set_json_format, if: :json_request?
  
  private
  
  def json_request?
    request.format.json? || request.headers['Accept']&.include?('application/json')
  end
  
  def set_json_format
    request.format = :json
  end
end
