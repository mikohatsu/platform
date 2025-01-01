module Usecases
  class BaseUsecase
    def self.call(*args)
      new(*args).call
    end
  end
end 