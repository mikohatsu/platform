module Excel
  module Search
    class SearchesController < ApplicationController
      def index
        query = params[:q]
        status, data = ::Search::SearchUsecase.call(query)
        
        render json: {
          data: data
        }, status: status
      end
    end
  end
end 