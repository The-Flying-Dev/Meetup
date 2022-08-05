class Meetup < ApplicationRecord

  #validations
  validates :title, length: { minimum: 4 }, presence: true
  validates :address,  length: { minimum: 15 }, presence: true
  validates :description,  length: { minimum: 10 }, presence: true

end
