class CreateMeetups < ActiveRecord::Migration[6.1]
  def change
    create_table :meetups do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.text :address, null: false
      t.string :image, default: 'https://www.qantas.com/content/dam/qantas/destinations/hawaii/kualoa-oahu-hawaii.jpg'

      t.timestamps
    end
  end
end
