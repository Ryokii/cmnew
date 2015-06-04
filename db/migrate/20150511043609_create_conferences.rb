class CreateConferences < ActiveRecord::Migration
  def change
    create_table :conferences do |t|
      t.string :name, null: false
      t.string :organizer, null: false
      t.string :email, null: false
      t.string :phone, null: false
      t.string :location, null: false
      t.string :description, null:false

      t.timestamps null: false
    end
  end



end
