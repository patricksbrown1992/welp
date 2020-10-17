class AddFirstNameAndLastNameToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, "First Name", :string, null: false
    add_column :users, "Last Name", :string, null: false
  end
end
