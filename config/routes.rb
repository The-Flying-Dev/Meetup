Rails.application.routes.draw do  

  
  namespace :api do
    namespace :v1 do
      resources :meetups, except: [:new, :update, :edit]
    end
  end

  root 'pages#index'
  
  get '/*path' => 'pages#index'
  
end
