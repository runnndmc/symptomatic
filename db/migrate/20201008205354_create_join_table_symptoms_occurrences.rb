class CreateJoinTableSymptomsOccurrences < ActiveRecord::Migration[6.0]
  def change
    create_join_table :symptoms, :occurrences do |t|
      # t.index [:symptom_id, :occurrence_id]
      # t.index [:occurrence_id, :symptom_id]
    end
  end
end
