module Search
  class SearchRepository < BaseRepository
    def initialize
      super(SearchTerm)  # Search 모델을 사용
    end

    def search(query)
      # 검색 관련 데이터베이스 쿼리를 여기에 구현
      @model_class.where("term LIKE :term", term: "%#{query}%")
    end

    def recent_searches(limit = 10)
      # 최근 검색어 조회
      @model_class.order(created_at: :desc).limit(limit)
    end

    def popular_searches(limit = 10)
      # 인기 검색어 조회
      @model_class.group(:term).order('count_id DESC').count(:id).first(limit)
    end
  end 
end