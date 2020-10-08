class Occurrence < ApplicationRecord
  #belongs_to :symptom
  belongs_to :user
  has_and_belongs_to_many :symptoms
end
