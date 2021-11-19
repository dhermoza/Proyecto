class AddAddressToGarden < ActiveRecord::Migration[6.1]
  def change
    add_column :gardens, :address, :string
  end
end
