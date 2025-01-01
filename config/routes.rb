Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  # Defines the root path route ("/")
  # root "posts#index"
  Rails.application.routes.draw do
    root 'application#index'
  end

  # API 엔드포인트
  namespace :sj_excel do
    namespace :v1 do
      resources :searches, only: [:index] # 검색 API
      # 다른 API 엔드포인트들...
    end
  end

  # Vue 라우터를 위한 catch-all 라우트
  root 'platform#index'
  get '/*path', to: 'platform#index'
end
