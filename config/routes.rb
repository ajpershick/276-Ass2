Rails.application.routes.draw do
  resources :enrolls
  resources :courses
  resources :students
  get '/grades', to: 'application#hello'
  #root 'application#hello'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
