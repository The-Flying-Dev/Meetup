Rails.application.routes.draw do  

  devise_for :users
  namespace :api do
    namespace :v1 do
      resources :meetups, except: [:new, :edit]
    end
  end

  root 'pages#index'
  
  get '/*path' => 'pages#index'
  
end
