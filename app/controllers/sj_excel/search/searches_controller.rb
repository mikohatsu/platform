module SjExcel
  module Search
    class SearchesController < ApplicationController
      protect_from_forgery with: :null_session  # API 요청을 위해 CSRF 체크 비활성화
      
      def index
        query = params[:q]
        status, data = Usecases::Search::SearchUsecase.call(query)
        
        render json: {
          status: status == :ok ? 'success' : 'error',
          data: data
        }, status: status
      end
    end
  end
end 