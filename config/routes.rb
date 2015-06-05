Rails.application.routes.draw do

  get 'users/new'

  devise_for :users
  root "application#index"

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :conferences
    end
  end
end
