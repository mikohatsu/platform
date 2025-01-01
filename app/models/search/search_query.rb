module Search
  class SearchQuery < ApplicationRecord
    # 검증
    validates :query, presence: true
    
    # 스코프
    scope :recent, -> { order(created_at: :desc) }
    scope :popular, -> { group(:query).order('count_id DESC') }
    
    # 콜백
    before_save :normalize_query
    
    private
    
    def normalize_query
      self.query = query.strip.downcase
    end
  end 
end