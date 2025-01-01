module SjExcel
  module Search
    class SearchesController < ApplicationController
      def index
        # 검색 로직 구현
        query = params[:q]
        # 예시 응답
        render json: { 
          results: [],
          query: query
        }
      end
    end
  end
end 