class Plant < ApplicationRecord
  belongs_to :garden
  validates :name, presence: true
  validates :description, presence: true
end
