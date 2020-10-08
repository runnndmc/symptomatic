class CreateSymptoms < ActiveRecord::Migration[6.0]
  def change
    create_table :symptoms do |t|
      t.string :symptom
      t.text :description
      t.integer :pain_level
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
