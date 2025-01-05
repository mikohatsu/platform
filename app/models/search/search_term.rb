module Search
  class SearchTerm < ApplicationRecord
    # 검증
    validates :term, presence: true
    
    # 스코프
    scope :recent, -> { order(created_at: :desc) }
    scope :popular, -> { group(:term).order('count_id DESC') }
    
    # 콜백
    before_save :normalize_term
    
    private
    
    def normalize_term
      self.term = term.strip.downcase
    end
  end 
end