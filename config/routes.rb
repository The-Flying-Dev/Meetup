Rails.application.routes.draw do  

  namespace :api do
    namespace :v1 do
      get 'meetups/index'
      post 'meetups/create'
      get '/show/:id', to: 'meetups#show'
      delete '/destroy/:id', to: 'meetups#destroy'
    end
  end
  root 'pages#index'
  get '/*path' => 'pages#index'
  
end
