Rails.application.routes.draw do
  get 'pages/home'

  mount Upmin::Engine => '/admin'
  root to: 'pages#home'
  devise_for :users
  resources :users
end
