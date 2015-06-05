class AddAdminIdToConference < ActiveRecord::Migration
  def change
    add_column :conferences, :AdminId, :string
  end
end
