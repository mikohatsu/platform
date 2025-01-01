module Search
  class SearchUsecase < BaseUsecase
    def initialize(query)
      @query = query
      @repository = SearchRepository.new
      @service = SearchService.new(query)
    end

    def call
      # 검색 기록 저장
      # @repository.create(query: @query)
      # 실제 검색 수행
      # @service.execute
      [:ok, {query: @query}]
    end
  end
end