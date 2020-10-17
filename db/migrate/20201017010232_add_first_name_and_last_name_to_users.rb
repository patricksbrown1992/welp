class AddFirstNameAndLastNameToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :firstName, :string, null: false
    add_column :users, :lastName, :string, null: false
  end
end
