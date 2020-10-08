Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  resources :occurrences
  resources :symptoms
  resources :users, only: :create
  get '/symptoms/:symptom_id/occurrences/:id', to 'occurrences#add_symptom_to_occurrence'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
