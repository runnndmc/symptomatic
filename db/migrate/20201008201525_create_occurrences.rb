class CreateOccurrences < ActiveRecord::Migration[6.0]
  def change
    create_table :occurrences do |t|
      t.time :occurrence_time
      t.string :time
      t.time :duration
      t.string :length_lasted
      t.references :symptom, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
